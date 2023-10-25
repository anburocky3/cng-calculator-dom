const tripDistanceEl = document.getElementById("trip-distance");
const fuelEffEl = document.querySelector("#fuel-efficiency");
const fuelCostEl = document.querySelector("#fuel-cost");
const calculateBtnEl = document.querySelector("#calculateBtn");

calculateBtnEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (tripDistanceEl.value === "") {
    alert("Enter Trip Distance value");
  } else {
    const distanceKM = tripDistanceEl.value;
    const fuelEfficiency = fuelEffEl.value;
    const fuelCost = fuelCostEl.value;

    const result = (distanceKM / fuelEfficiency) * fuelCost;

    const finalMsg = "Your fuel cost will be around: ₹" + result;
    alert(finalMsg);
    console.log(finalMsg);
  }
});
