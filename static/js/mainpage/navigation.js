// function initDropdown() {
//   const dropdownButton = document.getElementById("dropdownButton");
//   const dropdownMenu = document.getElementById("dropdownMenu");
//   const dropdownArrow = document.getElementById("dropdownArrow");
//   const servicesIcon = document.getElementById("servicesIcon");
//   const servicesText = document.getElementById("servicesText");
//   const dropdownItems = document.querySelectorAll(".dropdown-item");

//   dropdownButton.addEventListener("click", function (e) {
//     e.stopPropagation();
//     const isOpen = !dropdownMenu.classList.contains("hidden");

//     if (!isOpen) {
//       dropdownMenu.classList.remove("hidden");
//       dropdownArrow.classList.add("rotate-180");
//     } else {
//       dropdownMenu.classList.add("hidden");
//       dropdownArrow.classList.remove("rotate-180");
//     }
//   });

//   dropdownItems.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       e.preventDefault();

      
      
//       // Reset all dropdown items
//       dropdownItems.forEach((el) => {
//         el.classList.remove("bg-white", "text-[#749AB6]", "font-bold");
//         el.classList.add("text-white");
//       });
      
//     });
//   });
// }

// // Close dropdown when clicking outside
// document.addEventListener('click', function(e) {
//   const dropdownMenu = document.getElementById("dropdownMenu");
//   const dropdownButton = document.getElementById("dropdownButton");
  
//   if (dropdownMenu && !dropdownMenu.contains(e.target)) {
//     if (dropdownButton && !dropdownButton.contains(e.target)) {
//       dropdownMenu.classList.add("hidden");
//       document.getElementById("dropdownArrow").classList.remove("rotate-180");
//     }
//   }
// });