const API_URL = 'http://158.160.172.44:5000/api'
const options = {
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
}

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

export async function getHomeworksJsonAsync(groups=null, index=null, types=null, isChecked=null) {
  try {
    let response, status;
    if (!groups) groups = ['ФТ-201', 'ФТ-202', 'ФТ-203', 'ФТ-204'];
    if (!types) types = ['DZ', 'Grob'];
    else
    {
      let newTypes = [];
      for (let index = 0; index < types.length; index++) {
        const element = types[index];
        if (element === 'ДЗ') newTypes.push('DZ');
        else newTypes.push('Grob');
      }
      types = newTypes;
    }
    if (!status) status = ['Checked', 'Sended'];
    else
    {
      if (isChecked) status = ['Checked'];
      else status = ['Sended'];
    }
    if (Number.isInteger(index))
      response = await fetch(`${API_URL}/Homeworks?` + new URLSearchParams({
              Groups: groups,
              HomeworkIndexes: indexes,
              typeHomeworks: types,
              statusHomeworks: status
            }), options);
    else response = await fetch(`${API_URL}/Homeworks?` + new URLSearchParams({
              Groups: groups,
              typeHomeworks: types,
              statusHomeworks: status
            }), options);

      if (response.ok) {
          return response.json();
      }
      throw new Error(`Bad response status: ${response.status}`)
  } catch (error) {
      console.log(error);
  }
}

async function putHomeworkJsonAsync(homework) {
  await fetch(`${API_URL}/Homeworks/${homework.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(homework)
  });
}

async function postHomeworkJsonAsync(homework) {
    await fetch(`${API_URL}/Homeworks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(homework)
      });
}

async function postAttendanceJsonAsync(studentId, ids) {
  await fetch(`${API_URL}/Attendances/${studentId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(ids)
  });
}

export async function postAttendancesJsonAsync(studentsIds) {
  await fetch(`${API_URL}/Attendances`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(studentsIds)
  });
}

export async function postScoresJsonAsync(students) {
    for (let index = 0; index < students.length; index++) {
      const student = students[index];
      await fetch(`${API_URL}/Scores/${student.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(student.score)
      });
    }
}

async function getStudentJsonAsync(id) {
  try {
    const response = await fetch(`${API_URL}/Students/${id}`);
    if (response.ok) {
        return response.json();
    }
    throw new Error(`Bad response status: ${response.status}`)
} catch (error) {
    console.log(error);
}
}

async function postStudentJsonAsync(student) {

}

async function getTableJsonAsync(left, right) {
  try {
    const response = await fetch(`${API_URL}/Table?` + new URLSearchParams({
      leftDate: left,
      rightDate: right,
    }))
    if (response.ok) {
        return response.json();
    }
    throw new Error(`Bad response status: ${response.status}`)
} catch (error) {
    console.log(error);
}
}

async function postOneAttendanceJsonAsync(attendance) {
    await fetch(`${API_URL}/Attendances`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(attendance)
      });
}


