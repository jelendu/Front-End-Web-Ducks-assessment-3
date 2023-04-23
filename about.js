console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  console.log("form submit");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

document
  .querySelector("#contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
  });

document.querySelector("#image").addEventListener("mouseover", function () {
  alert("You look great today!");
});

// creating the alert for event listeners
