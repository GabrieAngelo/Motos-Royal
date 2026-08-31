const card = document.querySelectorAll(".card");

card.forEach(function(card) {

    const text = card.querySelector(".card_name")
    const texto = card.querySelector("h2")

    card.addEventListener("mouseenter", function() {
        card.classList.add("borda1");
        text.classList.add("vermelho");
        texto.classList.add("preto")
    });

    card.addEventListener("mouseleave", function() {
        card.classList.remove("borda1");
        text.classList.remove("vermelho");
        texto.classList.remove("preto")
    });

});