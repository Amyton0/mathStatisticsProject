import {getHomeworksJsonAsync, getStudentJsonAsync} from './client.js';

let chooseNumber = document.getElementsByClassName('number')[0];
let chooseGroup = document.getElementsByClassName('group')[0];
let chooseStatus = document.getElementsByClassName('status')[0];

//help me
let ft201Input = document.getElementById('FT-201');
let ft202Input = document.getElementById('FT-202');
let ft203Input = document.getElementById('FT-203');
let ft204Input = document.getElementById('FT-204');

ft201Input.onchange = onGroupChange;
ft202Input.onchange = onGroupChange;
ft203Input.onchange = onGroupChange;
ft204Input.onchange = onGroupChange;

let typeUsual = document.getElementById('usual');
//let typeExtra = document.getElementById('extra');
let typeCoffin = document.getElementById('coffin');

typeUsual.onchange = onTypeChange;
//typeExtra.onchange = onTypeChange;
typeCoffin.onchange = onTypeChange;

let send = document.getElementsByClassName('send')[0];

chooseNumber.oninput = onNumberChange;
chooseStatus.onchange = onStatusChange;

let currentTypes = null;
let currentGroups = null;
let currentNumber = '';
let currentHomework = -1;
let isChecked = null;

send.addEventListener('click', sendMessage)

async function onTypeChange(event) {
    if (currentTypes == null) currentTypes = [];
    if (event.target.checked) currentTypes.push(event.target.value);
    else currentTypes = currentTypes.filter((type) => type !== event.target.value);
    await filterHWs();
}

async function onGroupChange(event) {
    if (currentGroups == null) currentGroups = [];
    if (event.target.checked) currentGroups.push(event.target.value);
    else currentGroups = currentGroups.filter((group) => group !== event.target.value);
    await filterHWs();
}

async function onNumberChange(event) {
    currentNumber = event.target.value;
    await filterHWs();
}

async function onStatusChange(event) {
    const selectedValue = event.target.value;

    if (selectedValue === 'Проверено') isChecked = true;
    else if (selectedValue === 'Не проверено') isChecked = false;
    else isChecked = null;
    await filterHWs();
}

async function filterHWs() {
    const filteredHomeworks = await getHomeworksJsonAsync(currentGroups, currentNumber, currentTypes, isChecked);

    let homeworksEl = document.getElementsByClassName("homeworks")[0];

    while (homeworksEl.firstChild) {
        homeworksEl.removeChild(homeworksEl.firstChild);
    }

    for (var i = 0; i < filteredHomeworks.length; i++) {
        const element = filteredHomeworks[i];

        var homework = document.createElement('div');

        homework.classList.add('homework');

        let student = filteredHomeworks[i].student;//await getStudentJsonAsync(element.studentId);
        let name = [student.firstName, student.secondName, student.thirdName].join(' ');

        let text = `${name} - ${student.group}|ДЗ - ${element.number}`

        if (element.status === 'Checked') text += ' ☑';
        //if (element.type == 'Дорешка') text += ' ↪'

        homework.innerText = text;

        homeworksEl.appendChild(homework);

        homework.addEventListener('click', () => {
            document.getElementsByClassName("message")[0].innerText = element.message;
            currentHomework = filteredHomeworks.indexOf(element);

            let downloadButton = document.createElement('input');

            downloadButton.setAttribute('type', 'button');

            downloadButton.value = 'Скачать файл';

            downloadButton.addEventListener('click', () => {
                var link = document.createElement('a');

                link.setAttribute('href', element.content);
                link.setAttribute('download', element.content.split('/').at(-1));
                link.setAttribute('target', '_blank');
                link.style.display = 'none';

                document.body.appendChild(link);
                link.click();

                document.body.removeChild(link);
            });

            let buttonBlock = document.getElementsByClassName('button_block')[0]

            if (buttonBlock.firstChild) {
                buttonBlock.removeChild(buttonBlock.firstChild);
            }

            buttonBlock.appendChild(downloadButton);
        })
    }
}

function sendMessage() {
    let pointsEl = document.getElementsByClassName("points")[0];
    let messageEl = document.getElementsByClassName("comment")[0];

    if (pointsEl.value) {
        homework[currentHomework].message = messageEl.value;
        homeworks[currentHomework].points = Number(pointsEl.value);
        homeworks[currentHomework].status = 'Checked';
        putHomeworkJsonAsync(homeworks[currentHomework])
        pointsEl.value = null;
        messageEl.value = null;

        console.log(homeworks[currentHomework])
    }
}

const modal = document.getElementById('modal');

const close = document.getElementById('close');

close.addEventListener('click', () => {
  modal.style.display = 'none';
});
