const random_number = (min, max) => {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const number_to_string = {
    0: 'tolv',
    1: 'ett',
    2: 'to',
    3: 'tre',
    4: 'fire',
    5: 'fem',
    6: 'seks',
    7: 'sju',
    8: 'åtte',
    9: 'ni',
    10: 'ti',
    11: 'elleve',
    12: 'tolv',
    13: 'tretten',
    14: 'fjorten',
}
const generate_clock = (hour, minutes) => {
    const str_hour = hour < 10 ? "0" + hour : hour;
    const str_minutes = minutes < 10 ? "0" + minutes : minutes;
    const time = str_hour + ':' + str_minutes;
    let str = 'Klokka er ';
    hour = hour > 12 ? hour % 12 : hour;
    const next_hour = hour + 1 > 12 ? (hour + 1) % 12 : hour + 1;
    if(hour == 0 && minutes == 0) {
        str = 'Det er midnatt.';
    }
    else if(hour == 12 && minutes == 0) {
        str = 'Det er midt på dagen.';
    }
    else if(minutes == 0) {
        str += number_to_string[hour] + '.';
    }
    else if(minutes > 0 && minutes < 15) {
        str += number_to_string[minutes] + ' over ' + number_to_string[hour] + '.';
    }
    else if(minutes == 15) {
        str += 'kvart over ' + number_to_string[hour] + '.';
    }
    else if(minutes > 15 && minutes < 30 ) {
        str += number_to_string[30 - minutes] + ' på halv ' + number_to_string[next_hour] + '.';
    }
    else if(minutes == 30) {
        str += 'halv ' + number_to_string[next_hour] + '.';
    }
    else if(minutes > 30 && minutes < 45 ) {
        str += number_to_string[minutes - 30] + ' over halv ' + number_to_string[next_hour] + '.';
    }
    else if(minutes == 45) {
        str += 'kvart på ' + number_to_string[hour + 1] + '.';
    }
    else if(minutes > 45 && minutes < 60) {
        str += number_to_string[60 - minutes] + ' på ' + number_to_string[next_hour] + '.';
    }
    document.getElementById('clock').innerHTML = time;
    document.getElementById('answer').innerHTML = str;
}
const display_answer = (display = true) => {
    document.getElementById('show_answer').style.display = display ? "none" : "block";
    document.getElementById('answer').style.display = display ? "block" : "none";
    document.getElementById('new_clock').style.display = display ? "block" : "none";
}
document.getElementById('show_answer').addEventListener('click', display_answer);
const new_clock = () => {
    display_answer(false);
    generate_clock(random_number(0,23), random_number(0,59));
};
document.getElementById('new_clock').addEventListener('click', new_clock);
const keypress_event = (event) => {
    if(event.key === 's' || event.key === 'S') {
        display_answer();
    }
    else if(event.key === 'n' || event.key === 'N') {
        display_answer(false);
        generate_clock(random_number(0,23), random_number(0,59));
    }
};
document.addEventListener('keypress', keypress_event);
generate_clock(random_number(0,23), random_number(0,59));
