const card = document.querySelectorAll(".card");

card.forEach(function(card) {

    const text = card.querySelector(".card_name")

    card.addEventListener("mouseenter", function() {
        card.classList.add("borda1");
        text.classList.add("vermelho");
    });

    card.addEventListener("mouseleave", function() {
        card.classList.remove("borda1");
        text.classList.remove("vermelho");
    });

});