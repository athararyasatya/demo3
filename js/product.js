document.addEventListener("DOMContentLoaded", function() {
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    const dots = document.querySelectorAll(".dot");
    const cards = document.querySelectorAll(".card-wrapper");
    let currentGroup = 0;
    const cardsPerGroup = 9;

    function updateCarousel() {
        // Hanya tampilkan kartu yang sesuai dengan group aktif
        cards.forEach((card, index) => {
            if (index >= currentGroup * cardsPerGroup && index < (currentGroup + 1) * cardsPerGroup) {
                card.style.display = "block"; // Tampilkan kartu dalam group aktif
            } else {
                card.style.display = "none";  // Sembunyikan kartu lainnya
            }
        });

        // Update dots untuk menunjukkan group aktif
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentGroup].classList.add("active");

        // Atur visibilitas tombol panah
        prevBtn.style.display = currentGroup === 0 ? "none" : "inline";
        nextBtn.style.display = currentGroup === Math.ceil(cards.length / cardsPerGroup) - 1 ? "none" : "inline";
    }

    nextBtn.addEventListener("click", function() {
        if (currentGroup < Math.ceil(cards.length / cardsPerGroup) - 1) {
            currentGroup++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", function() {
        if (currentGroup > 0) {
            currentGroup--;
            updateCarousel();
        }
    });

    // Event listener untuk dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            currentGroup = index;
            updateCarousel();
        });
    });

    // Inisialisasi carousel pertama kali
    updateCarousel();
});
