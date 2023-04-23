document
  .getElementById("recommendation")
  .addEventListener("click", function () {
    recommendRandomRestaurant();
  });

function recommendRandomRestaurant() {
  const restaurants = ["The Duck Inn", "Quack Shack", "Feathered Feast"];

  const randomIndex = Math.floor(Math.random() * restaurants.length);
  const randomRestaurant = restaurants[randomIndex];

  alert(`We recommend you try ${randomRestaurant}!`);
}

// adding an event listener for the Quack a Random Restaurant! button
