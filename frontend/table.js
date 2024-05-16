//import { postScoresJsonAsync } from './client.js';
import { postAttendancesJsonAsync } from './client.js';

let students = {
    headers: ['Был', 'Пара', 'ДЗ'],
    dates: ['22.02', '29.02', '07.03', '14.03', '21.03', '28.03', '04.04', '11.04', '18.04', '25.04', '02.05', '16.05', '23.05', '30.05'],
    'ФТ-201': {
        'Алехин Дмитрий': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Александров Никита': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Бикташева Алтынгуль': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Воронин Арсений': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Галкин Александр': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Джевелло Алексей': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Елкин Арсений': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Калинина Софья': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Копыркин Артем': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Куксовский Илья': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Куликов Артем': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Лапшин Евгений': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Лежнин Владимир': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Мавунгу Мавунгу Мак Брадзи': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Максимов Константин': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Орлов Никита': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Попов Владимир': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Романов Виталий': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Савенков Владислав': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Санатин Николай': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Смирнов Дмитрий': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Солин Максим (перепроходит)': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Сорокин Артем': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Сыч Эрнест': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Тихомиров Иван': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Холян Тимофей': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        }
    },
    'ФТ-202': {
        'Атучин Илья': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Афанасьев Павел': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Бойко Владимир': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Володько Екатерина': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Габов Антон': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Гнидец Леонид': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Городничая Анастасия': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Грехов Егор': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Заводчиков Алексей': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Иванов Станислав': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Исаков Степан': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Исса Антон Сабер Висса Гад': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Карпов Виталий': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Красиков Максим': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Крюков Михаил': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Куршев Алексей': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Лаптев Кирилл': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Мартынов Егор': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Москалев Глеб': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Моськов Алексей': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Турмухамбетов Амир': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Федоров Иван': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Хисамов Артур': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Хрусталев Дмитрий': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Шаров Александр': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Щеглеватов Артем': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Южанин Арсений': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            }
        },
        'Бызов Тимофей(перепроходит)': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        }
    },
    'ФТ-203': {
        'Букирев Владислав': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Ветохина Екатерина': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Воинов Андрей': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Глухов Семен': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Гуриков Максим': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Дмитриев Анатолий': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Дунин Даниил': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Ермаков Владислав': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Железняк Данил': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Касьянов Иван': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Климов Дмитрий': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Кучин Степан': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Лузгина Ксения': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Марочкин Кирилл': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Машкин Михаил (перепроходит)': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Молотков Тихон': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Николаев Евгений (перепроходит)': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Образцов Владимир': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Петров Дмитрий': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Плюснина Елена': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Попов Егор': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Ратушный Илья': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Рахимянов Тимур (перепроходит)': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Рыбин Илья': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Сенников Дмитрий (староста)': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Султанов Вячеслав': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Усов Егор (перепроходит)': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Халиков Идрис': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Хейфец Сергей': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Ховрычев Андрей': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        }
    },
    'ФТ-204': {
        'Ряков Алексей': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Бабинцев Дмитрий': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Батуев Никита': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Баязитов Евгений': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Бобрик Вячеслав': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Васильев Павел': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Виленский Тимофей': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Гогин Александр': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Евтушенко Дмитрий': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Иудинов Михаил': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Козлов Михаил': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Колесников Захар ': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Коновалова Дарья': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Кононов Михаил': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Кочева Ольга': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Курилин Дмитрий': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Лубова Софья': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Мамаев Георгий': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Плисковский Лавр': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Плотников Александр': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Плюснина Ксения': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Сапегин Александр': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Стахеев Константин': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Терещенко Семен': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Терзиогло Кирилл': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Хайрутдинов Роман': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Хлопина Софья': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Христолюбов Егор': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Цеханович Никита': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
        'Шеметов Павел': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            }
        },
        'Шумейко Алексей': {
            '22.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '29.02': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '07.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '14.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '21.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '28.03': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '04.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '11.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '18.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '25.04': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '02.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '16.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '23.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
            '30.05': {
                attendance: false,
                points: 0,
                homeworkPoints: 0
            },
        },
    }
}
document.querySelector('.group').addEventListener('change', onGroupChange);

function onGroupChange(event) {
    let group = event.target.value;
    let block = document.getElementsByClassName('table_block')[0];

    while (block.firstChild) {
        block.removeChild(block.firstChild);
    }

    let table = document.createElement('table');

    let dates = table.insertRow();
    dates.insertCell();

    for (let i = 0; i < students.dates.length; i++) {
        let cell = dates.insertCell();
        cell.textContent = students.dates[i];
        cell.setAttribute('colspan', 3)
    }

    let headers = table.insertRow();
    headers.insertCell();

    for (let i = 0; i < students.dates.length; i++) {
        for (let j = 0; j < students.headers.length; j++) {
            let cell = headers.insertCell();
            cell.textContent = students.headers[j];
        }
    }

    for (let name in students[group]) {
        let row = table.insertRow();
        let cell = row.insertCell();
        cell.textContent = name;
        for (let date in students[group][name]) {
            let attendanceCell = row.insertCell();
            let isAttendance = document.createElement('input');
            isAttendance.type = 'checkbox';
            if (students[group][name][date].attendance) isAttendance.checked = true;
            isAttendance.setAttribute('onchange', `changeAttendance(this, '${name}', '${group}', ${date})`);
            isAttendance.classList.add(date);
            isAttendance.name = name;
            attendanceCell.classList.add('center_align');
            attendanceCell.appendChild(isAttendance);

            let pointsCell = row.insertCell();
            let inputPoints = document.createElement('input');
            inputPoints.type = 'number';
            inputPoints.placeholder = '';
            inputPoints.name = name;
            inputPoints.value = students[group][name][date].points;
            inputPoints.setAttribute('oninput', `changePoints(this, '${name}', '${group}', ${date})`);
            inputPoints.classList.add(date);
            inputPoints.removeAttribute('placeholder');
            pointsCell.classList.add('center_align');
            pointsCell.appendChild(inputPoints);

            let hwPointsCell = row.insertCell();
            hwPointsCell.textContent = students[group][name][date].homeworkPoints;
            hwPointsCell.classList.add('center_align');
        }
    }

    let saving = table.insertRow();
    saving.insertCell();

    for (let i = 0; i < students.dates.length; i++) {
        let cell = saving.insertCell();
        cell.classList.add('center_align');
        let date = students.dates[i];
        let savingButton = document.createElement('button');

        savingButton.innerText = 'Сохранить';

        savingButton.addEventListener('click', async () => {
            let attendances = [];
            let scores = [];

            let elements = document.getElementsByClassName(date);

            for (let j = 0; j < elements.length; j++) {
                if (elements[j].type === 'checkbox' && elements[j].checked) attendances.push(elements[j].name);
                if (elements[j].type === 'number' && !isNaN(elements[j].value)) scores.push({
                    name: elements[j].name,
                    score: Number(elements[j].value)
                });
            }

            console.log(attendances);

            console.log(scores);

            //saveAttendances(attendances);

            await postScoresJsonAsync(scores);
        });

        cell.appendChild(savingButton);
        cell.setAttribute('colspan', 3)
    }

    block.appendChild(table);
}

function saveAttendances(students) {
    postAttendancesJsonAsync(students)
}



function changeAttendance(element, name, group, date) {
    students[group][name][date].attendance = element.checked;
    console.log(students[group][name])
}

function changePoints(element, name, group, date) {
    students[group][name][date].points = Number(element.value);
    console.log(students[group][name])
}

function changeHWPoints(element, name, group, date) {
    students[group][name][date].homeworkPoints = Number(element.value);
    console.log(students[group][name])
}
