const submitButton = document.getElementById("submitButton");
const firstName = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    firstName.value === "" ||
    lastname.value === "" ||
    email.value === "" ||
    phone.value === "" ||
    password.value === ""
  ) {
    console.log(`Please Enter Value`);
  } else {
    const userData = {
      firstName: firstName.value,
      lastname: lastname.value,
      email: email.value,
      phone: phone.value,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    document.querySelector(".success-container").style.display = "block";
    document.querySelector(".container").style.display = "none";
    document.querySelector(
      ".success-card p"
    ).innerText = `Welcome Mr. ${lastname.value}!`;
  }
});

document.querySelector(".continue-btn").addEventListener("click", () => {
  location.reload();
  console.log(`Reload Successfully!`);
});
