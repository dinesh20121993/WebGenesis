document.addEventListener("DOMContentLoaded", function (){
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks){
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        menuToggle.textContent = navLinks.classList.contains("active") ? "x" : "☰";
    });
    document.addEventListener("click", function(event){
        if(!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active");
            menuToggle.textContent= "☰";
        }
    });
}
    else {
        console.error("Error : Navbar elements not found")
    }
});

document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let isValid = true;

        // get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        // get error elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
        //clear old errors 
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        // Name Validation
        if (name === "") {
            nameError.textContent = "Name cannot be empty";
            nameError.style.display = "block";
            isValid = false;
        }

        //email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailPattern.test(email)) {
            emailError.textContent = "Enter a Valid Email";
            emailError.style.display = "block";
            isValid = false
        }

        //message validation
        if (message.length < 10) {
            messageError.textContent = "Message must be atleast 10 charecters long";
            messageError.style.display = "block";
            isValid = false
        }

        if (isValid){
            console.log("form submitted succesfully")
            alert("Form submitted!!")
            form.reset();
        }

    });
});