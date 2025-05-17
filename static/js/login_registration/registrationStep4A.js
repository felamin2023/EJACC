// registration step 4
document.getElementById("requirement_page_continue_btn").onclick = function () {
  document.getElementById("requirements_page").classList.add("hidden");
  document.getElementById("question_page").classList.remove("hidden");
};

document.getElementById("question_page_back_btn").onclick = function () {
  document.getElementById("requirements_page").classList.remove("hidden");
  document.getElementById("question_page").classList.add("hidden");
};

document.getElementById("question_page_next_btn").onclick = function () {
  document.getElementById("question_page").classList.add("hidden");
  document.getElementById("documents_page").classList.remove("hidden");
}

document.getElementById("documents_page_back_btn").onclick = function () {  
  document.getElementById("question_page").classList.remove("hidden");
  document.getElementById("documents_page").classList.add("hidden");
}