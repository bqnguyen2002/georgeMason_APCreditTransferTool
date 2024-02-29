var user_classes = [];
var count = 0;
var option = 0;
var user_scores = [];


function select(object) {
    if(object.style.background==='green'){
        object.style.background = 'rgb(217,217,217)'
        user_classes.splice(user_classes.indexOf(object.textContent), 1);
        //console.log(user_classes)
    }else{
        object.style.background = 'green'
        user_classes.push(object.textContent)
        //console.log(user_classes)
        
    }
} 

function getScores() {
    //console.log(chart_data.credit_transfer[0])
    for (let i = 0; i < user_classes.length; i++) {
      option = 0;
      while (option == 0) {
      let person = prompt(
        "Please enter what score you received on " +
          user_classes[i] +
          " (3 - 5)"
      );
      if (
        person == parseInt("3") ||
        person == parseInt("4") ||
        person == parseInt("5")
      ) {
        user_scores.push(parseInt(person));
        //console.log(user_scores);
        option = 1;
      } else {
        alert("Invalid score! Please enter score 3 - 5");
      }
    }
  }
  calculateCredits();
  document.getElementById("demo").innerHTML =
  "You will receive " + count + " credits from GMU!";

}

function calculateCredits(){
    for (let i = 0; i < chart_data.credit_transfer.length; i++) {
        for(let j = 0; j < user_classes.length; j++){
            if((chart_data.credit_transfer[i].ap_exam == user_classes[j]) && (chart_data.credit_transfer[i].minimum_score == user_scores[j])){
                count += parseInt(chart_data.credit_transfer[i].credits);
            }
        }
    }
}