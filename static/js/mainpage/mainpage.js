document.addEventListener("DOMContentLoaded", function () {
  const navPanelPlaceholder = document.getElementById("nav-panel");
  const pageContentPlaceholder = document.getElementById("page-content");
  const footerPlaceholder = document.getElementById("footer");

  async function loadContent(url, element, callback) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const html = await response.text();
      element.innerHTML = html;
      if (callback) callback();
    } catch (error) {
      console.error("Could not load content:", error);
      element.innerHTML = `<p>Failed to load content: ${error.message}</p>`;
    }
  }

  // Function to initialize dropdown functionality
  function initDropdown() {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const dropdownArrow = document.getElementById("dropdownArrow");
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    if (dropdownButton) {
      dropdownButton.addEventListener("click", function (e) {
        e.stopPropagation();
        const isOpen = !dropdownMenu.classList.contains("hidden");

        if (!isOpen) {
          dropdownMenu.classList.remove("hidden");
          dropdownArrow.classList.add("rotate-180");
        } else {
          dropdownMenu.classList.add("hidden");
          dropdownArrow.classList.remove("rotate-180");
        }
      });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (dropdownMenu && !dropdownMenu.contains(e.target)) {
        if (dropdownButton && !dropdownButton.contains(e.target)) {
          dropdownMenu.classList.add("hidden");
          if (dropdownArrow) dropdownArrow.classList.remove("rotate-180");
        }
      }
    });
  }

  // Function to reset all active states
  function resetAllActiveStates() {
    // Reset main navigation items
    document.querySelectorAll('[data-page]').forEach(item => {
      item.classList.remove('bg-[#F0F2F5]');
      const icon = item.querySelector('img');
      const text = item.querySelector('p');
      if (icon) {
        icon.classList.add('brightness-0', 'invert');
        icon.classList.remove('invert-0', 'brightness-100');
      }
      if (text) {
        text.classList.remove('text-[#749AB6]', 'font-bold');
        text.classList.add('text-white');
      }
    });

    // Reset Services dropdown
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const dropdownArrow = document.getElementById("dropdownArrow");
    const servicesIcon = document.getElementById("servicesIcon");
    const servicesText = document.getElementById("servicesText");
    
    if (dropdownButton) dropdownButton.classList.remove('bg-[#F0F2F5]');
    if (dropdownMenu) dropdownMenu.classList.add('hidden');
    if (dropdownArrow) {
      dropdownArrow.classList.remove('rotate-180', 'invert-0', 'brightness-100');
      dropdownArrow.classList.add('brightness-0', 'invert');
    }
    if (servicesIcon) {
      servicesIcon.classList.remove('invert-0', 'brightness-100');
      servicesIcon.classList.add('brightness-0', 'invert');
    }
    if (servicesText) {
      servicesText.classList.remove('text-[#749AB6]', 'font-bold');
      servicesText.classList.add('text-white');
    }

    // Reset dropdown items
    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.classList.remove('bg-white', 'text-[#749AB6]', 'font-bold');
      item.classList.add('text-white');
    });
  }

  // Function to set active navigation item
  function setActiveNavItem(activeLink) {
    resetAllActiveStates();
    
    if (activeLink) {
      // For main navigation items
      if (activeLink.hasAttribute('data-page')) {
        activeLink.classList.add('text-[#749AB6]', 'font-bold','bg-[#F0F2F5]');
        activeLink.classList.remove('text-white');
        const icon = activeLink.querySelector('img');
        const text = activeLink.querySelector('p');
        if (icon) {
          icon.classList.remove('brightness-0', 'invert');
          icon.classList.add('invert-0', 'brightness-100');
        }
        if (text) {
          text.classList.add('text-[#749AB6]', 'font-bold');
          text.classList.remove('text-white');
        }
      }
      // For dropdown items
      else if (activeLink.classList.contains('dropdown-item')) {
        activeLink.classList.add('bg-white', 'text-[#749AB6]', 'font-bold');
        activeLink.classList.remove('text-white');
      }
    }
  }

  // Load nav HTML and initialize
  loadContent("components/nav-panel.html", navPanelPlaceholder, () => {
    initDropdown(); // Initialize dropdown functionality
    
    // Set home as active by default
    const homeLink = document.querySelector('[data-page="home"]');
    if (homeLink) {
      setActiveNavItem(homeLink);
      loadContent("pages/home.html", pageContentPlaceholder);
    }
  });

  loadContent("components/footer.html", footerPlaceholder);

  navPanelPlaceholder.addEventListener("click", function (event) {
    const link = event.target.closest('a');
    if (link) {
      event.preventDefault();
      
      // Handle main navigation items
      if (link.hasAttribute('data-page')) {
        const page = link.getAttribute('data-page');
        loadContent(`pages/${page}.html`, pageContentPlaceholder);
        setActiveNavItem(link);
      }
      // Handle dropdown items
      else if (link.classList.contains('dropdown-item')) {
        const page = link.getAttribute('data-page');
        if (page) {
          loadContent(`pages/${page}.html`, pageContentPlaceholder);
        }
        setActiveNavItem(link);
      }
    }
  });
});