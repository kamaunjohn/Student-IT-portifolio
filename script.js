const themeToggle = document.getElementById("theme-toggle");

// Load the saved theme when the page opens
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Update the button text
function updateThemeButton() {
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
}

// Set the correct initial button text
updateThemeButton();

// Switch between dark mode and light mode
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    // Save the selected theme
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("portfolio-theme", "dark");
    } else {
        localStorage.setItem("portfolio-theme", "light");
    }

    // Update the button
    updateThemeButton();

});


// ===================================
// AUTOMATIC COPYRIGHT YEAR
// ===================================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// ===================================
// CONTACT FORM VALIDATION
// ===================================

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values entered by the user
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    // Check that all fields contain information
    if (!name || !email || !subject || !message) {

        formStatus.textContent = "Please fill in all the fields.";

        return;
    }

    // Check the email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formStatus.textContent = "Please enter a valid email address.";

        return;
    }

    // Display a demonstration confirmation
    formStatus.textContent =
        "Thank you, " + name +
        "! Your form has been validated successfully.";

    // Clear the form
    contactForm.reset();

});

const photoInput = document.getElementById("photoInput");
const profilePhoto = document.getElementById("profilePhoto");

photoInput.addEventListener("change", function () {
    const file = photoInput.files[0];

    if (file && file.type.startsWith("image/")) {
        const imageURL = URL.createObjectURL(file);
        profilePhoto.src = imageURL;
    }
});

// Get HTML elements
const profilephoto = document.getElementById("profilePhoto");
const photoinput = document.getElementById("photoInput");
const changePhotoBtn = document.getElementById("changePhotoBtn");

// Open the file selector when the button is clicked
changePhotoBtn.addEventListener("click", function () {
    photoInput.click();
});

// Display the selected photo
photoInput.addEventListener("change", function () {

    const file = photoInput.files[0];

    if (file) {

        // Check that the selected file is an image
        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image.");
            return;
        }

        // Check the image file size (maximum 5 MB)
        if (file.size > 5 * 1024 * 1024) {
            alert("Please select an image smaller than 5 MB.");
            return;
        }

        // Display the selected photo
        const reader = new FileReader();

        reader.onload = function (event) {
            profilePhoto.src = event.target.result;
        };

        reader.readAsDataURL(file);
    }
});



themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});



// Check if dark mode was previously enabled
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "Light Mode";
} else {
    themeBtn.textContent = "Dark Mode";
}


    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }


    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
