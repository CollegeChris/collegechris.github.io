// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

let weight = "300 pounds";
let temperature = "94 Fahrenheit";

let name = "Bob";

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const events = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and slithered away"];

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  if (customName.value !== "") {
    name = customName.value;
  }
  // Make sure name changes back to Bob if blanked afterwards
  else
  {
	name = "Bob";
  }

  if (document.getElementById("uk").checked) {
    weight = Math.round(convertToStones(300)) + " stone";
    temperature = Math.round(convertToCelsius(94)) + " Celsius";
  }
  else
  {
    weight = "300 pounds";
    temperature = "94 Fahrenheit";
  }

  // TODO: replace "" with the correct expression
  story.textContent = "";
  story.style.visibility = "visible";
  
  // Return Random Story
  story.textContent = returnRandomStoryString();
}

// Return Random Story String
function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);
  
  let storyText = `It was ${temperature} outside, so ${randomCharacter} went for a walk.
  When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}.
  ${name} saw the whole thing, but was not surprised — ${randomCharacter} weighs ${weight}, and it was a hot day.`;
  
  return storyText;
}

// Convert Pounds to Stones
function convertToStones(pounds)
{
  return pounds / 14;
}

// Convert Fahrenheit to Celsius
function convertToCelsius(fahrenheit)
{
  return (fahrenheit - 32) / 1.8;
}