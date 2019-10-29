function myFunction() {
    document.getElementById('id01').style.display = 'block';
    document.getElementById('id01').style.animation = "animatezoom 0.5s";
    document.getElementById('logocent').style.gridColumnGap = '425px';
    document.getElementById('logocent').style.animation = "move 0.5s";
}

function myFunction1() {
    document.getElementById('id01').style.display = 'none';
    document.getElementById('id01').style.animation = "animatezoomback 0.5s";
    document.getElementById('logocent').style.gridColumnGap = '0px';
    document.getElementById('logocent').style.animation = "back 0.5s";
}
