// <!-- Initialize Swiper -->

const hamburger = document.getElementById("ham-burger");
const navlist = document.getElementById("nav-list");

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("navlist-active");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Theme and Mode Management System
class ThemeManager {
  constructor() {
    // Separate storage for theme color and mode
    this.currentTheme = localStorage.getItem("portfolio-theme") || "default";
    this.currentMode = localStorage.getItem("portfolio-mode") || "light";

    // Get DOM elements
    this.themeToggle = document.getElementById("theme-toggle");
    this.themeDropdown = document.getElementById("theme-dropdown");
    this.themeOptions = document.querySelectorAll(".theme-option");
    this.modeToggle = document.getElementById("mode-toggle");
    this.modeIcon = document.getElementById("mode-icon");

    this.init();
  }

  init() {
    // Apply saved theme and mode on load
    this.applyTheme(this.currentTheme);
    this.applyMode(this.currentMode);
    this.updateActiveThemeOption();
    this.updateModeIcon();

    // Theme selection event listeners
    this.themeToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleThemeDropdown();
    });

    // Mode toggle event listener
    this.modeToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleMode();
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!this.themeToggle.contains(e.target)) {
        this.closeThemeDropdown();
      }
    });

    // Theme option click handlers
    this.themeOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        const selectedTheme = option.dataset.theme;
        this.switchTheme(selectedTheme);
        this.closeThemeDropdown();
      });
    });

    // Keyboard navigation
    this.themeToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.toggleThemeDropdown();
      }
    });

    this.modeToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.toggleMode();
      }
    });
  }

  // Theme dropdown methods
  toggleThemeDropdown() {
    this.themeToggle.classList.toggle("active");
  }

  closeThemeDropdown() {
    this.themeToggle.classList.remove("active");
  }

  // Theme switching (colors only)
  switchTheme(theme) {
    if (theme === this.currentTheme) return;

    // Add transition for smooth theme change
    document.body.style.transition = "all 0.3s ease-in-out";

    this.currentTheme = theme;
    this.applyTheme(theme);
    this.updateActiveThemeOption();
    localStorage.setItem("portfolio-theme", theme);

    // Remove transition after animation completes
    setTimeout(() => {
      document.body.style.transition = "";
    }, 300);

    // Fire custom event for theme change
    document.dispatchEvent(
      new CustomEvent("themeChanged", {
        detail: { theme: theme, mode: this.currentMode },
      })
    );
  }

  // Mode switching (light/dark only)
  toggleMode() {
    const newMode = this.currentMode === "light" ? "dark" : "light";

    // Add transition for smooth mode change
    document.body.style.transition = "all 0.3s ease-in-out";

    this.currentMode = newMode;
    this.applyMode(newMode);
    this.updateModeIcon();
    localStorage.setItem("portfolio-mode", newMode);

    // Remove transition after animation completes
    setTimeout(() => {
      document.body.style.transition = "";
    }, 300);

    // Fire custom event for mode change
    document.dispatchEvent(
      new CustomEvent("modeChanged", {
        detail: { theme: this.currentTheme, mode: newMode },
      })
    );
  }

  // Apply theme (colors only)
  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    this.updateMetaThemeColor(theme);
  }

  // Apply mode (light/dark backgrounds and text)
  applyMode(mode) {
    document.documentElement.setAttribute("data-mode", mode);
    this.modeToggle.classList.toggle("dark-mode", mode === "dark");
  }

  updateMetaThemeColor(theme) {
    const themeColors = {
      default: "#ff4967",
      blue: "#007bff",
      green: "#28a745",
      purple: "#6f42c1",
    };

    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.content = themeColors[theme];
  }

  updateActiveThemeOption() {
    this.themeOptions.forEach((option) => {
      option.classList.remove("active");
      if (option.dataset.theme === this.currentTheme) {
        option.classList.add("active");
      }
    });
  }

  updateModeIcon() {
    if (this.currentMode === "dark") {
      this.modeIcon.className = "fa-solid fa-moon";
      this.modeToggle.title = "Switch to Light Mode";
    } else {
      this.modeIcon.className = "fa-solid fa-sun";
      this.modeToggle.title = "Switch to Dark Mode";
    }
  }

  // Public methods
  getCurrentTheme() {
    return this.currentTheme;
  }

  getCurrentMode() {
    return this.currentMode;
  }

  // Cycle through theme colors only
  cycleTheme() {
    const themes = ["default", "blue", "green", "purple"];
    const currentIndex = themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    this.switchTheme(themes[nextIndex]);
  }

  // Set specific theme and mode combination
  setThemeAndMode(theme, mode) {
    this.switchTheme(theme);
    if (mode !== this.currentMode) {
      this.toggleMode();
    }
  }
}

// Initialize theme manager when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.themeManager = new ThemeManager();

  // Optional: Add keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // Ctrl + T for theme cycling
    if (e.ctrlKey && e.key === "t") {
      e.preventDefault();
      window.themeManager.cycleTheme();
    }
    // Ctrl + D for mode toggle
    if (e.ctrlKey && e.key === "d") {
      e.preventDefault();
      window.themeManager.toggleMode();
    }
  });

  // Optional: Listen for changes
  document.addEventListener("themeChanged", (e) => {
    console.log(`Theme changed to: ${e.detail.theme} (${e.detail.mode} mode)`);
  });

  document.addEventListener("modeChanged", (e) => {
    console.log(`Mode changed to: ${e.detail.mode} (${e.detail.theme} theme)`);
  });
});
