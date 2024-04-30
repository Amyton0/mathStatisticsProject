let homeworks = [
    {
        name: 'Терещенко Семён',
        isChecked: false,
        type: 'Дорешка',
        group: 'ФТ-204',
        filePath: '../hws/HomeworkSemen.pdf',
        filename: 'HomeworkSemen.pdf',
        studentMessage: 'пУпуцпупупупуцфпуфпцппфцупупыфпвыщпораврдпваорпдлоа',
        number: 1,
        comment: null,
        points: 0
    }, 
    {
        name: 'Бабинцев Дмитрий',
        isChecked: true,
        type: 'Обычное',
        group: 'ФТ-204',
        filePath: '../hws/HomeworkDmitry.pdf',
        filename: 'HomeworkDmitry.pdf',
        studentMessage: 'аааа ыыыыы аалдповдлавдлмвдламтавдлмтвадмдавмтавтмамлавтмвдамтадвмвадлмвамтавдмтавдлмтамтвлмтыдлваоылаоылоаылаоылваолстывлыдвстылдтслывслвдысьдысждфваовдофдыаовлдаовдаджвосждвфсджвджьдвсдвяжлмалтсатмлажвмтлаоымтваовмтаыовмтажымаоытможмтяпбочптмопвбтобвииииилвтжядвдлптивтдипвлитяваалдповдлавдлмвдламтавдлмтвадмдавмтавтмамлавтмвдамтадвмвадлмвамтавдмтавдлмтамтвлмтыдлваоылаоылоаылаоылваолстывлыдвстылдтслывслвдысьдысждфваовдофдыаовлдаовдаджвосждвфсджвджьдвсдвяжлмалтсатмлажвмтлаоымтваовмтаыовмтажымаоытможмтяпбочптмопвбтобвииииилвтжядвдлптивтдипвлитяваалдповдлавдлмвдламтавдлмтвадмдавмтавтмамлавтмвдамтадвмвадлмвамтавдмтавдлмтамтвлмтыдлваоылаоылоаылаоылваолстывлыдвстылдтслывслвдысьдысждфваовдофдыаовлдаовдаджвосждвфсджвджьдвсдвяжлмалтсатмлажвмтлаоымтваовмтаыовмтажымаоытможмтяпбочптмопвбтобвииииилвтжядвдлптивтдипвлитяваалдповдлавдлмвдламтавдлмтвадмдавмтавтмамлавтмвдамтадвмвадлмвамтавдмтавдлмтамтвлмтыдлваоылаоылоаылаоылваолстывлыдвстылдтслывслвдысьдысждфваовдофдыаовлдаовдаджвосждвфсджвджьдвсдвяжлмалтсатмлажвмтлаоымтваовмтаыовмтажымаоытможмтяпбочптмопвбтобвииииилвтжядвдлптивтдипвлитяваалдповдлавдлмвдламтавдлмтвадмдавмтавтмамлавтмвдамтадвмвадлмвамтавдмтавдлмтамтвлмтыдлваоылаоылоаылаоылваолстывлыдвстылдтслывслвдысьдысждфваовдофдыаовлдаовдаджвосждвфсджвджьдвсдвяжлмалтсатмлажвмтлаоымтваовмтаыовмтажымаоытможмтяпбочптмопвбтобвииииилвтжядвдлптивтдипвлитяваалдповдлавдлмвдламтавдлмтвадмдавмтавтмамлавтмвдамтадвмвадлмвамтавдмтавдлмтамтвлмтыдлваоылаоылоаылаоылваолстывлыдвстылдтслывслвдысьдысждфваовдофдыаовлдаовдаджвосждвфсджвджьдвсдвяжлмалтсатмлажвмтлаоымтваовмтаыовмтажымаоытможмтяпбочптмопвбтобвииииилвтжядвдлптивтдипвлитяв',
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

let currentTypes = null;
let currentGroups = null;
let currentNumber = null;
let currentHomework = -1;
let isChecked = null;

send.addEventListener('click', sendMessage)

function onTypeChange(event) {
    if (currentTypes == null) currentTypes = [];
    if (event.target.checked) currentTypes.push(event.target.value);
    else currentTypes = currentTypes.filter((type) => type !== event.target.value);
    console.log(currentTypes)
    filterHWs();
}

function onGroupChange(event) {
    if (currentGroups == null) currentGroups = [];
    if (event.target.checked) currentGroups.push(event.target.value);
    else currentGroups = currentGroups.filter((group) => group !== event.target.value);
    filterHWs();
}

function onNumberChange(event) {
    currentNumber = event.target.value;
    filterHWs();
}

function onStatusChange(event) {
    const selectedValue = event.target.value;
    if (selectedValue === 'Проверено') isChecked = true;
    else if (selectedValue === 'Не проверено') isChecked = false;
    else isChecked = null;
    filterHWs();
}

function filterHWs() {
    filteredHomeworks = [];
    for (let index = 0; index < homeworks.length; index++) {
        const element = homeworks[index];
        if (currentNumber != null) {
            if (element.number != Number(currentNumber)) continue;
        }
        if (currentGroups != null) {
            if (!currentGroups.includes(element.group)) continue;
        }
        if (currentTypes != null) {
            if (!currentTypes.includes(element.type)) continue;
        }
        if (isChecked != null) {
            if (element.isChecked != isChecked) continue;
        }
        filteredHomeworks.push(element)
    }
    
    let homeworksEl = document.getElementsByClassName("homeworks")[0];

    while (homeworksEl.firstChild) {
        homeworksEl.removeChild(homeworksEl.firstChild);
    }

    for (var i = 0; i < filteredHomeworks.length; i++) {
        const element = filteredHomeworks[i];

        var homework = document.createElement('div');
  
        homework.classList.add('homework');

        let text = `${element.name} - ${element.group}|ДЗ - ${element.number}`

        if (element.isChecked) text += ' ☑';
        if (element.type == 'Дорешка') text += ' ↪'
  
        homework.innerText = text;

        homeworksEl.appendChild(homework);

        homework.addEventListener('click', () => {
            document.getElementsByClassName("message")[0].innerText = element.studentMessage;
            currentHomework = filteredHomeworks.indexOf(element);

            let downloadButton = document.createElement('input');

            downloadButton.setAttribute('type', 'button');

            downloadButton.value = 'Скачать файл';

            downloadButton.addEventListener('click', () => {
                var link = document.createElement('a');
                
                link.setAttribute('href', element.filePath); 
                link.setAttribute('download', element.filename); 
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
        homeworks[currentHomework].comment = messageEl.value;
        homeworks[currentHomework].points = Number(pointsEl.value);
        homeworks[currentHomework].isChecked = true;

        pointsEl.value = null;
        messageEl.value = null;

        console.log(homeworks[currentHomework])
    }
}

const modal = document.getElementById('modal');

modal.addEventListener('mousedown', startDrag);
const close = document.getElementById('close');

let offsetX;
let offsetY;
let isDragging = false;

close.addEventListener('click', () => {
  modal.style.display = 'none';
});

function startDrag(e) {
    const rect = modal.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}
  
function drag(e) {
    modal.style.left = e.clientX - offsetX + 'px';
    modal.style.top = e.clientY - offsetY + 'px';
}
  
function stopDrag() {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}