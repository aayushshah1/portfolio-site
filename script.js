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

// Call the function when the page loads
window.onload = changeLanguage;