// IMG Reveal Scroll
document.addEventListener("scroll", function () {
    const pratos = document.querySelectorAll(".prato");
    const windowHeight = window.innerHeight;
    
    pratos.forEach(prato => {
        const img = prato.querySelector("img");
        const rect = img.getBoundingClientRect();
        
        if (rect.top > windowHeight / 4 && rect.bottom < windowHeight * 3.7 / 4.6) {
            prato.classList.add("visible");
        } else {
            prato.classList.remove("visible");
        }
    });
});