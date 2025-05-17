// User type selection
function showRegistration(text) {
  document.getElementById("right-panel").classList.add("hidden");
  document.getElementById("note").classList.remove("hidden");
  document.getElementById("registration-heading").textContent = text;
}

// change name sa H1 tag sa note page
document.getElementById("beneficiary-btn").onclick = function () {
  showRegistration("Beneficiary Registration");
};
document.getElementById("rhu-btn").onclick = function () {
  showRegistration("RHU Registration");
};
document.getElementById("private-btn").onclick = function () {
  showRegistration("Private/Partner Registration");
};

// i dont accept butotn
document.getElementById("i-dont-accept-btn").onclick = function () {
  document.getElementById("right-panel").classList.remove("hidden");
  document.getElementById("note").classList.add("hidden");
  document.getElementById("registration-heading").textContent = "";
};

// scrolldown reset
function showFillUpForm() {
  const form = document.getElementById('fill_up_form');
  form.scrollTop = 0; // Scroll to top
}

 // I Accept Button - open sa fill up form
document.getElementById("i-accept-btn").onclick = function () {

  document.getElementById("note").classList.add("hidden");
  document.getElementById("fill_up_form").classList.remove("hidden");

  const heading = document.getElementById("registration-heading").textContent;

  if (heading === "Beneficiary Registration") {
    showFillUpForm();
    document.getElementById("beneficiary_fields").classList.remove("hidden");
    document.getElementById("rhu_fields").classList.add("hidden");
    document.getElementById("private_fields").classList.add("hidden");
    document.getElementById("fill_up_form_heading").textContent = "Beneficiary Registration";
    document.getElementById("details_title").textContent = "Personal Details";
    document.getElementById("privacy_heading").textContent = "Consent and Privacy";
    
  }else if (heading === "RHU Registration") {
    showFillUpForm();
    document.getElementById("beneficiary_fields").classList.add("hidden");
    document.getElementById("rhu_fields").classList.remove("hidden");
    document.getElementById("private_fields").classList.add("hidden");
    document.getElementById("fill_up_form_heading").textContent = "RHU registration";
    document.getElementById("details_title").textContent = "Details";
    document.getElementById("privacy_heading").textContent = "Consent and Privacy";
  }else if (heading === "Private/Partner Registration") {
    showFillUpForm();
    document.getElementById("beneficiary_fields").classList.add("hidden");
    document.getElementById("rhu_fields").classList.add("hidden");
    document.getElementById("private_fields").classList.remove("hidden");
    document.getElementById("fill_up_form_heading").textContent = "Private/Partner registration";
    document.getElementById("details_title").textContent = "Details";
    document.getElementById("privacy_heading").textContent = "Data Privacy Notice";
  }

  
};

// back buutton sa fill up form page
document.getElementById("back-btn").onclick = function () {
  document.getElementById("fill_up_form").classList.add("hidden");
  document.getElementById("note").classList.remove("hidden");
};




