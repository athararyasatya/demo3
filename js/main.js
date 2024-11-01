document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".heroo-right .animationimg");
    let currentImageIndex = 0;

    // Tampilkan hanya gambar pertama pada awal
    images.forEach((img, index) => {
      img.classList.toggle("active", index === 0);
    });

    // Fungsi untuk mengubah gambar dengan animasi
    function changeImage() {
      // Hilangkan kelas aktif dari gambar saat ini
      images[currentImageIndex].classList.remove("active");
      
      // Pindah ke gambar berikutnya
      currentImageIndex = (currentImageIndex + 1) % images.length;
      
      // Tambahkan kelas aktif pada gambar berikutnya
      images[currentImageIndex].classList.add("active");
    }

    // Ubah gambar setiap 3 detik
    setInterval(changeImage, 3000);
  });


// Pengkondisian icon panah 
document.addEventListener("DOMContentLoaded", function() {
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    const dots = document.querySelectorAll(".dot");
    const cards = document.querySelectorAll(".card-wrapper");
    let currentGroup = 0;

    function updateCarousel() {
        // Hide all cards
        cards.forEach(card => card.style.display = "none");
        
        // Show current group of cards (3 per group)
        for (let i = currentGroup * 3; i < (currentGroup + 1) * 3; i++) {
            if (cards[i]) cards[i].style.display = "block";
        }

        // Update dots
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentGroup].classList.add("active");

        // Handle arrow visibility
        prevBtn.style.display = currentGroup === 0 ? "none" : "inline";
        nextBtn.style.display = currentGroup === Math.floor(cards.length / 3) - 1 ? "none" : "inline";
    }

    nextBtn.addEventListener("click", function() {
        if (currentGroup < Math.floor(cards.length / 3)) {
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

    // Dots click event
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            currentGroup = index;
            updateCarousel();
        });
    });

    // Initialize carousel
    updateCarousel();
});
// Buat pengkondisian tanda panah

// window.addEventListener('scroll', function () {
//     const aboutSection = document.querySelector('.about-section');
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > 100) {
//       aboutSection.classList.add('scrolled');
//     } else {
//       aboutSection.classList.remove('scrolled');
//     }
//   });
const navbarToggler = document.querySelector(".navbar-toggler");
const arrowIcon = document.getElementById("arrowIcon");
const navbarCollapse = document.getElementById("navbarNav");
const copyrightText = document.querySelector(".copyright-text");

navbarToggler.addEventListener("click", function() {
    if (navbarCollapse.classList.contains("show")) {
        arrowIcon.classList.add("hidden");
    } else {
        arrowIcon.classList.remove("d-none");
        setTimeout(() => {
            arrowIcon.classList.remove("hidden");
            copyrightText.classList.remove("d-none"); // Tampilkan teks copyright
        }, 10);
    }
});

arrowIcon.addEventListener("click", function() {
    navbarCollapse.classList.add("slide-out");
    arrowIcon.classList.add("hidden");

    setTimeout(function() {
        navbarCollapse.classList.remove("show");
        navbarCollapse.classList.remove("slide-out");
        arrowIcon.classList.add("d-none");
        copyrightText.classList.add("d-none"); // Sembunyikan teks sepenuhnya setelah transisi
    }, 300);
});

document.addEventListener("click", function(event) {
    if (navbarCollapse.classList.contains("show") &&
        !navbarCollapse.contains(event.target) &&
        !navbarToggler.contains(event.target)) {

        navbarCollapse.classList.add("slide-out");
        arrowIcon.classList.add("hidden");

        setTimeout(function() {
            navbarCollapse.classList.remove("show");
            navbarCollapse.classList.remove("slide-out");
            arrowIcon.classList.add("d-none");
            copyrightText.classList.add("d-none"); // Sembunyikan teks sepenuhnya setelah transisi
        }, 300); 
    }
});
