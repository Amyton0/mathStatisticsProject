let homeworks = [
    {
        name: 'Терещенко Семён',
        isChecked: false,
        isSecondTry: true,
        group: 'ФТ-204',
        file: 'hws/HomeworkSemen.pdf',
        number: 1
    }, 
    {
        name: 'Бабинцев Дмитрий',
        isChecked: true,
        isSecondTry: false,
        group: 'ФТ-204',
        file: 'hws/HomeworkDmitry.pdf',
        number: 2
    }
]

let filteredHomeworks = homeworks.slice(0);

let chooseNumber = document.getElementById('Number');
let chooseTry = document.getElementById('SecondTry');
let chooseGroup = document.getElementById('Group');

chooseNumber.oninput = onNumberChange;

let isSecondTry = null;
let currentGroup = 'Любая';
let currentNumber = '';

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
    
    let container = document.getElementById("tableContainer");

    container.removeChild(container.querySelector('table'))

    for (var i = 0; i < filteredHomeworks.length; i++) {
        const element = filteredHomeworks[i];
        let row = table.insertRow(-1);

        let cell1 = row.insertCell(0);
        cell1.innerHTML = element.name;

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = i;
        if (element.isChecked) checkbox.checked = true;

        checkbox.addEventListener('click', (event) => {
            filteredHomeworks[event.target.id].isChecked = !filteredHomeworks[event.target.id].isChecked;
        })
        
        let label = document.createElement("label");
        label.htmlFor = i;
        label.appendChild(document.createTextNode("Проверено"));

        var cell2 = row.insertCell(1);
        cell2.appendChild(checkbox);
        cell2.appendChild(label);
    }

    container.appendChild(table);

    console.log(filteredHomeworks)
}