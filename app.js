/********************************
 * QUESTION 1.
 *******************************/
function executeQ1() {
  // Answer goes here.
}

/********************************
 * QUESTION 2.
 *******************************/
const listItems = [
  "Settings",
  "Customer Support",
  "On Demand",
  "Search",
  "Widgets",
];

function executeQ2() {
  // Answer goes here.
}

/********************************
 * QUESTION 3.
 *******************************/
class Vehicle {
  constructor(make, model, modelType, modelSeries, engineCode) {
    this.make = make;
    this.model = model;
    this.modelType = modelType;
    this.modelSeries = modelSeries;
    this.engineCode = engineCode;
    this.color = null;
  }

  // Getter
  get vehicleName() {
    return this.concatName();
  }

  //Set color property
  set vehicleColor(color) {
    this.color = color;
  }

  // Method
  concatName() {
    return (
      this.make +
      " " +
      this.modelSeries +
      " — " +
      this.model +
      " — " +
      this.modelType
    );
  }
}

function executeQ3() {
  const vehicle = new Vehicle(
    "Honda",
    "2,0 Type-R",
    "FK2",
    "Civic 2012 - 2017",
    "K20C1"
  );

  // Answer goes here.
}

/********************************
 * QUESTION 4.
 *******************************/
function executeQ4() {
  const fileURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

  // Save the names of all the superheroes in the dataList array.
  const dataList = [];

  // Get the data in fileURL using AJAX, process the reponse and add it to the HTML.
}
