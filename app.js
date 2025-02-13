console.log("hello");

const email = document.getElementById("form-email");
const card = document.getElementById("form-card");
const submitForm = document.getElementById("input-form");

const formName = document.getElementById("form-name");
const formEmail = document.getElementById("form-email");
const formCard = document.getElementById("form-card");

function validateEmail(event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email address");
  } else {
    email.setCustomValidity("");
  }
}

email.addEventListener("input", validateEmail);

// Luhn algorithm
function validateCard2() {
  const num = card.value;

  const arr = (num + "")
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  const lastDigit = arr.shift();
  let sum = arr.reduce(
    (acc, val, i) =>
      i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
    0
  );
  sum += lastDigit;
  return sum % 10 === 0;
}

card.addEventListener("input", () => {
  if (validateCard2()) {
    card.setCustomValidity("");
  } else {
    console.log(card.value);
    card.setCustomValidity("Invalid credit card number");
  }
});

// ************************************************************

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = `mailto:test@dn-uk.com?subject=test&body=This%20is%20a%20test%20email%20for
  %0AName%3A%20${formName.value}
  %0AEmail%3A%20${formEmail.value}
  %0ACard%3A%20${formCard.value}`;
});
