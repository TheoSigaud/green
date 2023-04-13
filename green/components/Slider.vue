<template>
    <div>
        <div class="slideshow-container">

            <div class="mySlides">
                <div class="numbertext">1 / 5</div>
                <nuxt-img src="/1.webp" alt="car"/>
            </div>

            <div class="mySlides">
                <div class="numbertext">2 / 5</div>
                <nuxt-img loading="lazy" src="/2.webp" alt="car"/>
            </div>

            <div class="mySlides">
                <div class="numbertext">3 / 5</div>
                <nuxt-img loading="lazy" src="/3.webp" alt="car"/>
            </div>

            <div class="mySlides">
                <div class="numbertext">4 / 5</div>
                <nuxt-img loading="lazy" src="/4.webp" alt="car"/>
            </div>

            <div class="mySlides">
                <div class="numbertext">5 / 5</div>
                <nuxt-img loading="lazy" src="/5.webp" alt="car"/>
            </div>

            <span class="prev" @click="plusSlides(-1)">❮</span>
            <span class="next" @click="plusSlides(1)">❯</span>

        </div>
        <br>

        <div style="text-align:center">
            <span class="dot" @click="currentSlide(1)"></span>
            <span class="dot" @click="currentSlide(2)"></span>
            <span class="dot" @click="currentSlide(3)"></span>
            <span class="dot" @click="currentSlide(4)"></span>
            <span class="dot" @click="currentSlide(5)"></span>
        </div>
    </div>
</template>
<script setup>
let slideIndex = 1;

onMounted(() => {
    showSlides(slideIndex);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeSlide", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activeSlide";
}
</script>
