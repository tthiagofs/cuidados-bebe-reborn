
document.addEventListener("DOMContentLoaded", function () {
    // Interação para FAQ: expandir e recolher ao clicar
    const faqItems = document.querySelectorAll(".faq ul li");
    faqItems.forEach(item => {
        const originalText = item.textContent;
        const answer = "Essa é uma resposta genérica. Você pode personalizar cada resposta aqui.";
        let isOpen = false;

        item.style.cursor = "pointer";
        item.addEventListener("click", () => {
            if (!isOpen) {
                item.innerHTML += "<p style='margin-top: 10px; font-size: 0.95rem; color: #333;'>" + answer + "</p>";
                isOpen = true;
            } else {
                item.innerHTML = originalText;
                isOpen = false;
            }
        });
    });
});
