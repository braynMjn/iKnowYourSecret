function getData() {
  //getting inputs
  var months = document.getElementById("month").value;
  var dates= document.getElementById("date").value;
  var colors = document.getElementById("color").value;

  //information arrays
  var subjects = ["You ate","You kissed","You tickled","You licked","You wrestled",
  "you beat","You made out with","You tripped over","You got naked with","You wanted","You shot","You cuddled"];
  
  var objects = [" your lover"," a hotdog"," a toothbrush"," Dhamala"," a glass of vodka"," Sajin Maharjan",
  " frog"," a guitar"," some mayonnaise"," Punya Gautam"," Prachanda"," a scarecrow"," Cookie Monster",
  " an easter egg"," a candied yam"," a stripper"," a policeman"," a volleyball"," Rajesh Dai"," a mental patient",
  " your best friend", "a bowl of oats"," a golfball"," a bowl of french fries"," Binod Chaudhary"," a map"," your professor",
  " the toilet"," a landmine"," Emma Watson"," Anmol KC"];

  var verbs = [" because a clown stole your taco."," because you're sexy."," because you're awesome in bed"," because your boobs are amazing.",
  " because Rabi Lamichhane told you to do so."," because you have high self-esteem"," because you needed to pee."," because you love bacon.",
  " because your cat ran away."," because you licked a toad."," because you're a total pimp."," because the voices in your head said so.",
  " because you have sexy abs."," because you had too many drinks."," because you're classy.","because you've not slept in days."];

  //decrement by 1 to use the data from information array
  months--;dates--;colors--;
  document.getElementById("result").innerHTML = subjects[months]+objects[dates]+verbs[colors];
}

