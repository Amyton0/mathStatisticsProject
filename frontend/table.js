import {postScoresJsonAsync, postAttendancesJsonAsync, getStudentJsonAsync, getTableJsonAsync} from './client.js';


let lessons = getTableJsonAsync();
let students = {
    'ФТ-201': {},
    'ФТ-202': {},
    'ФТ-203': {},
    'ФТ-204': {}
};

for (let i = 0; i < lessons.length; i++) {
    const element = lessons[i];

    let date = Date.parse(element.lesson.date);
    let strDate = date.getDate() + '.' + date.getMonth();

    let attendances = element.attendances;
    for (let j = 0; j < attendances.length; j++) {
        const attendance = attendances[j];
        let student = getStudentJsonAsync(attendance.studentId);
        let name = [student.firstName, student.secondName, student.thirdName].join(' ');
        if (name in students[student.group]) {
            if (strDate in students[student.group][name]) students[student.group][name][strDate].attendance = true;
            else students[student.group][name][strDate] = {
                attendance: true,
                points: 0,
                homeworkPoints: 0,
                studentObj: student
            }
        } 
        else students[student.group][name][strDate] = {
            attendance: true,
            points: 0,
            homeworkPoints: 0,
            studentObj: student
        }
    }

    let homeworks = element.homeworks;
    for (let j = 0; j < homeworks.length; j++) {
        const hw = homeworks[j];
        let student = getStudentJsonAsync(hw.studentId);
        let name = [student.firstName, student.secondName, student.thirdName].join(' ');
        
        if (name in students[student.group]) {
            if (strDate in students[student.group][name]) students[student.group][name][strDate].homeworkPoints = hw.points;
            else students[student.group][name][strDate] = {
                attendance: false,
                points: 0,
                homeworkPoints: hw.points,
                studentObj: student
            } 
        } 
        else {
            students[student.group][name][strDate] = {
            attendance: false,
            points: 0,
            homeworkPoints: hw.points,
            studentObj: student
        } 
        }
    }
    let scores = element.scores;
    for (let j = 0; j < scores.length; j++) {
        const score = scores[j];
        let student = getStudentJsonAsync(score.studentId);
        let name = [student.firstName, student.secondName, student.thirdName].join(' ');
        if (name in students[student.group]) {
            if (strDate in students[student.group][name]) students[student.group][name][strDate].points = score.value;
            else students[student.group][name][strDate] = {
                attendance: false,
                points: score.value,
                homeworkPoints: 0,
                studentObj: student
            }
        } 
        else students[student.group][name][strDate] = {
            attendance: false,
            points: score.value,
            homeworkPoints: 0,
            studentObj: student
        }
    }
}

document.querySelector('.group').addEventListener('change', onGroupChange);

function onGroupChange(event) {
    let group = event.target.value;
    let block = document.getElementsByClassName('table_block')[0];

    while (block.firstChild) {
        block.removeChild(block.firstChild);
    }

    let table = document.createElement('table');

    let dates = table.insertRow();
    dates.insertCell();

    for (let i = 0; i < students.dates.length; i++) {
        let cell = dates.insertCell();
        cell.textContent = students.dates[i];
        cell.setAttribute('colspan', 3)
    }

    let headers = table.insertRow();
    headers.insertCell();

    for (let i = 0; i < students.dates.length; i++) {
        for (let j = 0; j < students.headers.length; j++) {
            let cell = headers.insertCell();
            cell.textContent = students.headers[j];
        }
    }

    for (let name in students[group]) {
        let row = table.insertRow();
        let cell = row.insertCell();
        cell.textContent = name;
        for (let date in students[group][name]) {
            let attendanceCell = row.insertCell();
            let isAttendance = document.createElement('input');
            isAttendance.type = 'checkbox';
            if (students[group][name][date].attendance) isAttendance.checked = true;
            isAttendance.setAttribute('onchange', `changeAttendance(this, '${name}', '${group}', ${date})`);
            isAttendance.classList.add(date);
            isAttendance.dataset.student = JSON.stringify(students[group][name][date].studentObj);
            attendanceCell.classList.add('center_align');
            attendanceCell.appendChild(isAttendance);

            let pointsCell = row.insertCell();
            let inputPoints = document.createElement('input');
            inputPoints.type = 'number';
            inputPoints.placeholder = '';
            inputPoints.dataset.student = JSON.stringify(students[group][name][date].studentObj);
            inputPoints.value = students[group][name][date].points;
            inputPoints.setAttribute('oninput', `changePoints(this, '${name}', '${group}', ${date})`);
            inputPoints.classList.add(date);
            inputPoints.removeAttribute('placeholder');
            pointsCell.classList.add('center_align');
            pointsCell.appendChild(inputPoints);

            let hwPointsCell = row.insertCell();
            hwPointsCell.textContent = students[group][name][date].homeworkPoints;
            hwPointsCell.classList.add('center_align');
        }
    }

    let saving = table.insertRow();
    saving.insertCell();

    for (let i = 0; i < students.dates.length; i++) {
        let cell = saving.insertCell();
        cell.classList.add('center_align');
        let date = students.dates[i];
        let savingButton = document.createElement('button');

        savingButton.innerText = 'Сохранить';

        savingButton.addEventListener('click', async () => {
            let attendances = [];
            let scores = [];

            let elements = document.getElementsByClassName(date);

            for (let j = 0; j < elements.length; j++) {
                if (elements[j].type === 'checkbox' && elements[j].checked) attendances.push(JSON.parse(elements[j].dataset.student).id);
                if (elements[j].type === 'number' && !isNaN(elements[j].value)) scores.push({
                    id: JSON.parse(elements[j].dataset.student).id,
                    score: Number(elements[j].value)
                })
            }

            console.log(attendances);

            console.log(scores);

            await postAttendancesJsonAsync(attendances)

            await postScoresJsonAsync(scores);
        });

        cell.appendChild(savingButton);
        cell.setAttribute('colspan', 3)
    }

    block.appendChild(table);
}
