// Load blog dari JSON

<body onloaD="alert('HALOOOO')">
document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.getElementById("blog-container");
  
    fetch("blog.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((article) => {
            const articleEl = document.createElement("article");
            articleEl.className = "article-box"; //  class di sini
            articleEl.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.content}</p>
                <a href="${article.url}" target="_blank">Baca Selengkapnya...</a>
            `;
            blogContainer.appendChild(articleEl);
        });


      })
      .catch((error) => {
        console.error("Gagal memuat artikel:", error);
        blogContainer.innerHTML = "<p>Gagal memuat artikel.</p>";
      });
  });
  
    // Contact form
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
  
        document.getElementById('form-response').innerText =
          `Terima kasih, ${name}! Pesanmu sudah terkirim.`;
        form.reset();
      });
    }
  ;

  // Lightbox Functionality
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox.querySelector("img");
    const galleryItems = document.querySelectorAll(".gallery-item");
  
    galleryItems.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});
