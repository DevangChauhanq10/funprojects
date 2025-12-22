//example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    //console.log(paragraph);
    console.log(paragraph.textContent); //gives the text only
    paragraph.textContent = "I'm Changing the paragraph rn ";
    console.log(paragraph.textContent); //shows  I'm Changing the paragraph rn
  });

//example 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let listofcities = document.getElementById("citiesList"); //as of now we holdall city list but we only want first city only
    //console.log(listofcities.firstElementChild); //now i got access to first element ie NYC!!!

    console.log(listofcities.firstElementChild.classList.add("highlight")); //now we also added css highlight to it for color
  });

//example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeetype = document.getElementById("coffeeType");
  coffeetype.textContent = "Espresso";
  coffeetype.style.backgroundColor = "Blue";
  coffeetype.style.padding = "5px";
});

//example4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li"); //created a new list or bullet point for item to be added
  newItem.textContent = "Kinderjoy"; //addded item to list
  document.getElementById("shoppingList").appendChild(newItem);
});

//example5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let c = document.getElementById("taskList");
    c.lastElementChild.remove();
  });

//example6
document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("Rukja bhai");
});

//example7
document.getElementById("teaList").addEventListener("click", function (event) {
  //console.log(event.target);
  //use . for class and # for id
  if (event.target && event.target.matches(".teaItem")) {
    //If something was clicked AND the thing clicked is a .teaItem, then run the code.”
    alert("rukja bhai u selected " + event.target.textContent);
  }
});

//example8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //step 1 in these form base cases in js or react. Prevent default
    let feedback = document.getElementById("feedbackInput");
    //.value gives me the exact text as i submit in feedbackform else
    //else I will be getting inputtype, id etc etc descriptions
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is ${feedback}`;
  });

//example9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM FULLY LOADED ATP";
});

//example10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let colorchange = document.getElementById("descriptionText");
    console.log(colorchange.classList.add("highlight"));
  });
