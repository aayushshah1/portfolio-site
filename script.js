const languages = ['Hello', 'Namaste', 'Bonjour', 'Hola', 'Ciao', 'Konnichiwa'];

// Function to change language every 3 seconds
function changeLanguage() {
    const languageElement = document.getElementById('languageLink');
    let currentIndex = 0;

    setInterval(() => {
        languageElement.innerText = languages[currentIndex];
        currentIndex = (currentIndex + 1) % languages.length;
    }, 3000);
}

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".back-to-top").style.display = "block";
    } else {
        document.querySelector(".back-to-top").style.display = "none";
    }
};

// Scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Call the function when the page loads
window.onload = changeLanguage;

