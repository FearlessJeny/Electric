const galleryItem = document.getElementsByClassName("gallery__item");

const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa-solid", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa-solid", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;

//create function

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }

    let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}

for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function sliderImage(n) {
    showLightBox(index += n);
}

function prevImage() {
    sliderImage(-1);
}

function nextImage() {
    sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}

lightBoxContainer.addEventListener("click", closeLightBox);

let touchStartX = 0;
let touchEndX = 0;

lightBoxContainer.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
}, false);

lightBoxContainer.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
}, false);

function handleGesture() {
    let diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) { // порог свайпа в пикселях
        if (diff > 0) {
            // свайп влево → следующая картинка
            nextImage();
        } else {
            // свайп вправо → предыдущая картинка
            prevImage();
        }
    }
}