const API_URL = 'http://localhost:5105/api'

async function getHomeworkJsonAsync(relativeUrl) {
    try {
        const response = await fetch(`${API_URL}${relativeUrl}`);
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Bad response status: ${response.status}`)
    } catch (error) {
        console.log(error);
    }
}

async function postHomeworkJsonAsync(homework) {
    var data = new FormData();
    data.append( "json", JSON.stringify( homework ) );
    
    fetch("/echo/json/",
    {
        method: "POST",
        body: data
    })
    .then(function(res){ return res.json(); })
    .then(function(data){ alert( JSON.stringify( data ) ) })
}

async function postScoreJsonAsync(score) {
    
}

async function getStudentJsonAsync(relativeUrl) {
    
}

async function postStudentJsonAsync(student) {
    
}

async function getTableJsonAsync(relativeUrl) {
    
}


