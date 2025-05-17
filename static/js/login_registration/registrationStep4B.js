// registration step 4
document.getElementById("question_page_yes_btn").onclick = function () {
  document.getElementById("question_page").classList.add("hidden");
  document.getElementById("requirement_page").classList.remove("hidden");
};
document.getElementById("requirement_page_continue_btn").onclick = function () {
  document.getElementById("requirement_page").classList.add("hidden");
  document.getElementById("question2_page").classList.remove("hidden");
}
document.getElementById("requirement_page_cantcomply_btn").onclick = function () {
  document.getElementById("requirement_page").classList.add("hidden");
  document.getElementById("question_page").classList.remove("hidden");
}
document.getElementById("question2_back_btn").onclick = function () {
  document.getElementById("question2_page").classList.add("hidden");
  document.getElementById("requirement_page").classList.remove("hidden");
}