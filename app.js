/********************************
 * QUESTION 1.
 *******************************/
function executeQ1() {
  const name = document.getElementById("my-name");
  name.innerHTML = "Mikkel Nothlev Elvers";
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
  const list = document.getElementById("q2-list");
  listItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    list.appendChild(li);
  });
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

  vehicle.vehicleColor = "BlueViolet";
  
  const vehicle2 = new Vehicle(
    vehicle.make,
    vehicle.model,
    vehicle.modelType,
    vehicle.modelSeries,
    vehicle.engineCode
  );
  vehicle2.vehicleColor = "Red";
  
  const vehicle3 = new Vehicle(
    vehicle.make,
    vehicle.model,
    vehicle.modelType,
    vehicle.modelSeries,
    vehicle.engineCode
  );
  vehicle3.vehicleColor = "Orange";
  
  const list = document.getElementById("q3-list");
  
  const vehicles = [vehicle, vehicle2, vehicle3];
  vehicles.forEach((v) => {
    const li = document.createElement("li");
    li.innerHTML = v.vehicleName;
    li.style.color = v.color;
    list.appendChild(li);
  });
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
  fetch(fileURL)
    .then((response) => response.json())
    .then((data) => {
      const names = data.members.map((member) => member.name);
      const answer = document.getElementById("q4-answer");
      answer.innerHTML = JSON.stringify(names);
    });
}

// Execute all functions when DOM is loaded
executeQ1();
executeQ2();
executeQ3();
executeQ4();
