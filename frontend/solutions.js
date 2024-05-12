let homeworks = [
    {
        name: 'Терещенко Семён',
        isChecked: true,
        type: 'Дорешка',
        group: 'ФТ-204',
        filePath: '../hws/HomeworkSemen.pdf',
        filename: 'HomeworkSemen.pdf',
        studentMessage: 'пУпуцпупупупуцфпуфпцппфцупупыфпвыщпораврдпваорпдлоа',
        number: 1,
        comment: 'ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы',
        points: 2,
        whoChecked: 'Петров Иван'
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
        points: 0,
        whoChecked: null
    }
]

let student = 'Терещенко Семён'

let filteredHomeworks = homeworks.slice(0);

let chooseNumber = document.getElementsByClassName('number')[0];

chooseNumber.oninput = onNumberChange;

let currentTypes = null;
let currentHomework = -1;
let currentNumber = '';

function onTypeChange(event) {
    if (currentTypes == null) currentTypes = [];
    if (event.target.checked) currentTypes.push(event.target.value);
    else currentTypes = currentTypes.filter((type) => type !== event.target.value);
    console.log(currentTypes)
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
        if (element.name != student) continue;
        if (currentNumber != '') {
            if (element.number != Number(currentNumber)) continue;
        }
        if (currentTypes != null) {
            if (!currentTypes.includes(element.type)) continue;
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

        let text = `${element.name} - ${element.number}`

        if (element.type == 'Дорешка') text += ' ↪'
  
        homework.innerText = text;

        homeworksEl.appendChild(homework);

        homework.addEventListener('click', () => {
            if (element.isChecked) {
                document.getElementsByClassName("checked_header")[0].innerText = 'Проверяющий - ' + element.whoChecked;
                document.getElementsByClassName("message")[0].innerText = element.comment;
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