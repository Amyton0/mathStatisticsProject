let homeworks = [
    {
        name: 'Терещенко Семён',
        isChecked: false,
        isSecondTry: true,
        group: 'ФТ-204',
        file: 'hws/HomeworkSemen.pdf',
        number: 1,
        comment: null,
        points: 0
    }, 
    {
        name: 'Бабинцев Дмитрий',
        isChecked: true,
        isSecondTry: false,
        group: 'ФТ-204',
        file: 'hws/HomeworkDmitry.pdf',
        number: 2,
        comment: null,
        points: 0
    }
]

let filteredHomeworks = homeworks.slice(0);

let chooseNumber = document.getElementsByClassName('number')[0];
let chooseTry = document.getElementsByClassName('secondTry')[0];
let chooseGroup = document.getElementsByClassName('group')[0];

let send = document.getElementsByClassName('send')[0];

chooseNumber.oninput = onNumberChange;

let isSecondTry = null;
let currentGroup = 'Любая';
let currentNumber = '';
let currentHomework = -1;

send.addEventListener('click', sendMessage)

function onTryChange(event) {
    const selectedValue = event.target.value;
    if (selectedValue === 'Да') isSecondTry = true;
    else if (selectedValue === 'Нет') isSecondTry = false;
    else isSecondTry = null;
    filterHWs();
}

function onGroupChange(event) {
    currentGroup = event.target.value;
    filterHWs();
}

function onNumberChange(event) {
    currentNumber = event.target.value;
    filterHWs();
}

function filterHWs() {
    filteredHomeworks = [];
    for (let index = 0; index < homeworks.length; index++) {
        const element = homeworks[index];
        if (currentNumber != '') {
            if (element.number != Number(currentNumber)) continue;
        }
        if (currentGroup != 'Любая') {
            if (element.group != currentGroup) continue;
        }
        if (isSecondTry != null) {
            if (element.isSecondTry != isSecondTry) continue;
        }
        filteredHomeworks.push(element)
    }

    let table = document.createElement("table");
    
    let container = document.getElementsByClassName("tableContainer")[0];

    container.removeChild(container.querySelector('table'))

    for (var i = 0; i < filteredHomeworks.length; i++) {
        const element = filteredHomeworks[i];
        let row = table.insertRow(-1);

        let cell1 = row.insertCell(0);
        cell1.innerText = element.name;

        cell1.addEventListener('click', () => {
            document.getElementsByClassName("solution")[0].src = element.file;
            currentHomework = filteredHomeworks.indexOf(element);
        })

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = i;
        checkbox.disabled = true;
        if (element.isChecked) checkbox.checked = true;
        
        let label = document.createElement("label");
        label.htmlFor = i;
        label.appendChild(document.createTextNode("Проверено"));

        var cell2 = row.insertCell(1);
        
        cell2.appendChild(label);
        cell2.appendChild(checkbox);
    }

    container.appendChild(table);
}

function sendMessage() {
    let points = document.getElementsByClassName("points")[0].value;
    let message = document.getElementsByClassName("comment")[0].value;

    homeworks[currentHomework].comment = message;
    homeworks[currentHomework].points = Number(points);
    homeworks[currentHomework].isChecked = true;

    console.log(homeworks[currentHomework])
}