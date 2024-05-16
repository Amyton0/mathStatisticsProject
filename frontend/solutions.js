import {getHomeworksJsonAsync, getStudentJsonAsync} from './client.js';

const studentId = localStorage.getItem("userId");
//const student = await getStudentJsonAsync(studentId);

let filteredHomeworks = [];

let chooseNumber = document.getElementsByClassName('number')[0];

chooseNumber.oninput = onNumberChange;
let typeUsual = document.getElementById('usual');
//let typeExtra = document.getElementById('extra');
let typeCoffin = document.getElementById('coffin');

typeUsual.onchange = onTypeChange;
//typeExtra.onchange = onTypeChange;
typeCoffin.onchange = onTypeChange;

let currentTypes = null;
let currentHomework = -1;
let currentNumber = '';

async function onTypeChange(event) {
    if (currentTypes == null) currentTypes = [];
    if (event.target.checked) currentTypes.push(event.target.value);
    else currentTypes = currentTypes.filter((type) => type !== event.target.value);
    await filterHWs();
}

async function onNumberChange(event) {
    currentNumber = event.target.value;
    await filterHWs();
}

async function filterHWs() {
    console.log(studentId);
    filteredHomeworks = (await getHomeworksJsonAsync(null, currentNumber, currentTypes, null))
        .filter((hw) => hw.studentId === studentId);

    let homeworksEl = document.getElementsByClassName("homeworks")[0];

    while (homeworksEl.firstChild) {
        homeworksEl.removeChild(homeworksEl.firstChild);

    }

    for (var i = 0; i < filteredHomeworks.length; i++) {
        const element = filteredHomeworks[i];
        var homework = document.createElement('div');

        homework.classList.add('homework');

        let student = element.student;
        let name = [student.firstName, student.secondName, student.thirdName].join(' ');

        let text = `${name} - ${element.number}`

        //if (element.status == 'Doreshka') text += ' ↪'

        homework.innerText = text;

        homeworksEl.appendChild(homework);

        homework.addEventListener('click', () => {
            if (element.isChecked) {
                document.getElementsByClassName("checked_header")[0].innerText = 'Проверяющий - ' + 'vasa';
                document.getElementsByClassName("message")[0].innerText = element.message;
                document.getElementsByClassName("solution_points_block")[0].innerText = 'Сумма баллов = ' + element.points;
                currentHomework = filteredHomeworks.indexOf(element);
            }
        })
    }
}

const modal = document.getElementById('modal');

const close = document.getElementById('close');

close.addEventListener('click', () => {
  modal.style.display = 'none';
});
