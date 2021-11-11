function setTimer()
{
    getTimeInput();

}

function getTimeInput() {
    let timeInput = document.querySelector('input').value;
    document.getElementById('countDown').innerHTML = TimeInput ;
    console.log(timeInput);
    setInterval(updateCurrCountDown,1000);
}

function updateCurrCountDown(timeInput){
    timeInput--;
}