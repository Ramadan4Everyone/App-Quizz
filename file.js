                // display all questions
document.getElementsByClassName('container')[0].style.display = "block";
                // display container one after the other
function next(id) {
    document.getElementsByClassName('container')[id-1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "block"; 
}
                // display name after registering
function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
    var inputVall = document.getElementById("yourInput").value;
      alert  ("Well done:" + " " + inputVal + " " + inputVall);
  }
                // sum each result and display
function result(){
    var score = 0;
    if(document.getElementById('correct1'). checked) {
        score++;
    }
    if(document.getElementById('correct2'). checked) {
        score++;
    }
    if(document.getElementById('correct3'). checked) {
        score++; 
    }
    if(document.getElementById('correct4'). checked) {
        score++; 
    }
    if(document.getElementById('correct5'). checked) {
        score++; 
    }
    if(document.getElementById('correct6'). checked) {
        score++; 
    }
    if(document.getElementById('correct7'). checked) {
        score++; 
    }
    if(document.getElementById('correct8'). checked) {
        score++; 
    }
    if(document.getElementById('correct9'). checked) {
        score++; 
    }
    if(document.getElementById('correct10'). checked) {
        score++; 
    }
    if(document.getElementById('correct11'). checked) {
        score++; 
    }
    if(document.getElementById('correct12'). checked) {
        score++; 
    }
    if(document.getElementById('correct13'). checked) {
        score++; 
    }
    if(document.getElementById('correct14'). checked) {
        score++; 
    }
    if(document.getElementById('correct15'). checked) {
        score++; 
    }
    if(document.getElementById('correct16'). checked) {
        score++; 
    }
    if(document.getElementById('correct17'). checked) {
        score++; 
    }
    if(document.getElementById('correct18'). checked) {
        score++; 
    }
    if(document.getElementById('correct19'). checked) {
        score++; 
    }
    if(document.getElementById('correct20'). checked) {
        score++; 
    }
    if(document.getElementById('correct21'). checked) {
        score++; 
    }
    if(document.getElementById('correct22'). checked) {
        score++; 
    }
    if(document.getElementById('correct23'). checked) {
        score++; 
    }
    if(document.getElementById('correct24'). checked) {
        score++; 
    }
    if(document.getElementById('correct25'). checked) {
        score++; 
    }
    if(document.getElementById('correct26'). checked) {
        score++; 
    }
    if(document.getElementById('correct27'). checked) {
        score++; 
    }
    if(document.getElementById('correct28'). checked) {
        score++; 
    }
    if(document.getElementById('correct29'). checked) {
        score++; 
    }
          alert  (" You score: " + ' ' + score);
}
