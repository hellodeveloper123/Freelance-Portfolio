// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let space = document.querySelector('.space-image');
let aboutSci = document.querySelector('.about-sci');
// toggle mode
let toggleMode = document.querySelector('.toggle-mode');
let body = document.body;
let currMode = false; // Initially light mode

toggleMode.addEventListener("click", () => {
    currMode = !currMode; // Toggle current mode

    if (!currMode) {
        // Light mode
        toggleMode.innerHTML = "<i class='bx bxs-moon'></i>";
        toggleMode.style.color="white";
        body.style.backgroundColor = "#f0f0f0"; // Light background
        body.style.color = "black"; 
        
        space.style.borderTopColor = "#f0f0f0";
        space.style.borderBottomColor = "#f0f0f0";
        space.style.borderLeftColor = "#f0f0f0";
        space.style.borderRightColor = "#f0f0f0";

        aboutSci.classList.remove('dark-mode');

    } else {
        // Dark mode
        toggleMode.innerHTML = "<i class='bx bxs-sun'></i>";
        toggleMode.style.color="orange";
        body.style.backgroundColor = "black"; // Dark background
        body.style.color = "white"; // White font color

        space.style.borderTopColor = "black";
        space.style.borderBottomColor = "black";
        space.style.borderLeftColor = "black";
        space.style.borderRightColor = "black";

        aboutSci.classList.add('dark-mode');
    }
});

// JavaScript to change background color of input fields on click
let inputFields = document.querySelectorAll('.input-field input, .textarea-field textarea');
inputFields.forEach(function (inputField) {
    inputField.addEventListener('focus', function () {
        this.style.backgroundColor = '#ccc';
    });
    inputField.addEventListener('blur', function () {
        this.style.backgroundColor = ''; // Reset background color on blur
    });
});

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky headerr
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate');


}

