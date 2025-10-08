
// Top Slider
const slides = document.getElementById('top-slides');
const total = slides.children.length;
let index = 0;

document.getElementById('top-next').onclick = () => {
    index = (index + 1) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
};

document.getElementById('top-prev').onclick = () => {
    index = (index - 1 + total) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
};

setInterval(() => document.getElementById('top-next').click(), 3000);


// Best Seller Slider
const bestsellerSlides = document.getElementById('bestseller-slides');
const totalBestsellerSlides = bestsellerSlides.children.length;
let indexBestseller = 0;

document.getElementById('bestseller-next').onclick = () => {
    indexBestseller = (indexBestseller + 1) % totalBestsellerSlides;
    bestsellerSlides.style.transform = `translateX(-${(indexBestseller - 2) * 33.33}%)`;
};

setInterval(() => document.getElementById('bestseller-next').click(), 1000);