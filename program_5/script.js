const $ = id => document.getElementById(id);

$("regForm").onsubmit = e => {
  e.preventDefault();
  const ok = {
    nameError: /^[A-Za-z ]{3,50}$/.test($("name").value),
    emailError: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($("email").value),
    passError: $("password").value.length >= 6,
    genderError: !!document.querySelector('input[name="gender"]:checked'),
    countryError: $("country").value !== "",
    termsError: $("terms").checked
  };
  let valid = true;
  for (const id in ok) {
    $(id).style.display = ok[id] ? "none" : "block";
    valid = valid && ok[id];
  }
  $("successMsg").style.display = valid ? "block" : "none";
};
