//on document ready//
$(document).ready(function (){

//variables//
var wins=0;
var losses=0;
var yourScore;
var targetScore;
var jewel = [];

//variable for number of jewels on screen//
var numberJewels = $(".jewel").length;

//function for Next Round//
function nextRound(){
//variable for Target Score//
targetScore= Math.floor(Math.random()*101)+19;
$(".target-score").html(targetScore)

//variable for Your Score//
yourScore = 0;
$(".your-score").html(yourScore)

//create empty array & enter key/value pairs for each jewel on screen//

for (var i=0; i<numberJewels; i++) {
    jewel[i] = {
        name: "jewel" + (i + 1),
        value: Math.floor(Math.random() * 12) + 1,
    };
}

}

function reset(){
    wins=0;
    losses=0;
    nextRound();
    $(".score-message").html("Continue collecting crystals until Your Score matches the Target Score.")
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
}

reset();

//on jewel click//
$(".jewel").click(function () {
//get points for selected jewel//
for (var i=0; i<numberJewels; i++){
    if (jewel[i].name===$(this).attr("id")){
        var jewelValue = jewel[i].value;
    }
}
    yourScore= yourScore + jewelValue;
    $(".your-score").html(yourScore);
    
    if(yourScore===targetScore){
        wins++;
        $("#wins").html("Wins: " + wins);
        $(".score-message").html("Congratulations! You've won this round. Keep going!");
        nextRound();
    }
    else if (yourScore>targetScore){
        losses++;
        $("#losses").html("Losses: " + losses);
        $(".score-message").html("Sorry! You've lost this round. Try again!");
        nextRound();
    }
});

$(".btn").click(reset);

//check work//
console.log("Your score variable: " + yourScore);
console.log("Target score variable: " + targetScore);
console.log(jewel);

});
