const API_URL = 'http://158.160.172.44/api'

async function getHomeworkJsonAsync(id) {
    try {
        const response = await fetch(`${API_URL}/Homeworks/${id}`);
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Bad response status: ${response.status}`)
    } catch (error) {
        console.log(error);
    }
}

export async function postHomeworkJsonAsync(homework) {
    await fetch(`${API_URL}/Homeworks`, {
        method: 'POST',
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(homework)
      });
}

async function postScoreJsonAsync(score) {
    
}

async function getStudentJsonAsync(relativeUrl) {
    
}

async function postStudentJsonAsync(student) {
    
}

async function getTableJsonAsync(relativeUrl) {
    
}

async function postAttendanceJsonAsync(attendance) {
    await fetch(`${API_URL}/Attendances`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(attendance)
      });
}


