import {postHomeworkJsonAsync} from './client.js';

document.querySelector('.send_button').addEventListener('click', SendToServer);

let base64String = '';

function uploadAndReturnPdfContent(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject('Выберите PDF файл для загрузки.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            const pdfContent = event.target.result.split(',')[1];
            resolve(pdfContent);
        };

        reader.readAsDataURL(file);
    });
}


function SendToServer() {
    let form = document.getElementById("sendingForm");

    let number = form.elements["Number"].value;
    let tomb = form.elements["Tomb"].checked;

    if (tomb) {
        tomb = "Grob";
    } else {
        tomb = "DZ";
    }

    let convertedDate = base64String;
    console.log(convertedDate);
    let comment = form.elements["Comment"].value;

    if (!comment) {
        comment = "";
    }

    let studentId = localStorage.getItem["userId"];

    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day = String(currentDate.getDate()).padStart(2, '0');
    let hours = String(currentDate.getHours()).padStart(2, '0');
    let minutes = String(currentDate.getMinutes()).padStart(2, '0');
    let seconds = String(currentDate.getSeconds()).padStart(2, '0');
    let milliseconds = String(currentDate.getMilliseconds()).padStart(3, '0');

    let formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;

    let file = form.elements["file"].files[0];
    uploadAndReturnPdfContent(file).then((pdfContent) => {
        let homework = {
            "id": "1",
            "complexity": tomb,
            "number": number,
            "send": formattedDate,
            "status": "Send",
            "studentId": studentId,
            "message": comment,
            "content": pdfContent,
            "points": 0,
            "lessonId": "" 
        }
    
        console.log(homework);

        postHomeworkJsonAsync(homework);
    });
}

document.getElementById("sendingForm").addEventListener('submit', function(event){
    event.preventDefault();
})

