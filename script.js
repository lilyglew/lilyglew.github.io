/* .js files add interaction to your website */

//Creates an array of different facts about period poverty
var factList = [
  "Only 12% of women in India have access to sanitary products.",
  "Worldwide, around 526 million women do not have access to a toilet.",
  "Food stamps do not provide menstrual products to women in poverty.",
  "Around 1 in 5 American girls have either skipped school or left early because they do not have menstrual products.",
  "2 out of 3 girls avoid school because they have not been educated about their periods."
];

//Explains the facts in the previous array. Explanations are displayed out of order in code but will appear in order on actual website (I have no clue why this is)
var factExplain = [
  "A lot of schools in different countries around the world do not provide a good curriculum that teaches girls about the menstrual cycle and what they should do. This results in girls feeling underprepared and overwhelmed, and can later develop into an insecurity if they are never taught.",
  "Because of India's larger population, the country faces an increased number of people living in poverty, which also includes women and people who menstruate.", 
  "This statistic does not include the individuals who do not have access to a safe and private toilet (1.25 billion).",
  "Food stamps generally provide only healthy consumables that pertain to a healthy diet, and education on food prep/nutrition to families who are low-income.",
  "This not only attributes to social factors (primarily bullying, shame, embarrassment), but can also be the fault of the school for not providing menstrual products for students to use.",
];

//Setting variables for the fact, explanations, button, and count
var fact = document.getElementById("fact");
var explain = document.getElementById("explain");
var myButton = document.getElementById("myButton");
var count = 0;

//Adding event listeners for when the button is clicked
myButton.addEventListener("click", displayFact);
myButton.addEventListener("click", displayExplain);

//Function for displaying the FACT
function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

//Function for displaying the EXPLANATION
function displayExplain() {
  explain.innerHTML = factExplain[count];  
  count++;
  if (count == factExplain.length) {
    count = 0;
  }
}
