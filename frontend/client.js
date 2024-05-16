const API_URL = 'http://158.160.172.44:80/api'
const options = {
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json;charset=utf-8'
    }
}

export async function getHomeworkJsonAsync(id) {
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

export async function  getHomeworksJsonAsync(groups=null, index, types=null, isChecked=null) {
  try {
    let status;
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

    const params = new URLSearchParams();
    for (const e of groups) {
        params.append('groups', e);
    }
    for (const e of types) {
          params.append('typeHomeworks', e);
    }
    for (const e of status) {
          params.append('statusHomeworks', e);
    }
    if (index !== -1) {
          params.append('homeworkIndexes', index);
    }

    const response = await fetch(`${API_URL}/Homeworks?` + params, options);

      if (response.ok) {
          return await response.json();
      }
      throw new Error(`Bad response status: ${response.status}`)
  } catch (error) {
      console.log(error);
  }
}

export async function putHomeworkJsonAsync(homework) {
  await fetch(`${API_URL}/Homeworks/${homework.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(homework)
  });
}

export async function postHomeworkJsonAsync(homework) {
    await fetch(`${API_URL}/Homeworks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(homework)
      });
}

export async function postAttendanceJsonAsync(studentId, ids) {
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

export async function getStudentJsonAsync(id) {
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

export async function postStudentJsonAsync(student) {

}

export async function getTableJsonAsync(relativeUrl) {

}

export async function postOneAttendanceJsonAsync(attendance) {
    await fetch(`${API_URL}/Attendances`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(attendance)
      });
}


