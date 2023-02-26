(function() {
    const slides = ['<div class="our-people__carousel-wrapper"><div class="our__people__carousel-picture"><img class="our__people__carousel-picture-img" src="media/our-people1.jpg" alt="user foto"/><div class="our-people__carousel-picture-background"></div></div><div class="our-people__corousel-text-block">Lorry, CEO</div></div>', '<div class="our-people__carousel-wrapper"><div class="our__people__carousel-picture"><img class="our__people__carousel-picture-img" src="media/our-people2.jpg" alt="user foto"/><div class="our-people__carousel-picture-background"></div></div><div class="our-people__corousel-text-block">Lorry, CEO</div></div>', '<div class="our-people__carousel-wrapper"><div class="our__people__carousel-picture"><img class="our__people__carousel-picture-img" src="media/our-people3.jpg" alt="user foto"/><div class="our-people__carousel-picture-background"></div></div><div class="our-people__corousel-text-block">Lorry, CEO</div></div>', '<div class="our-people__carousel-wrapper"><div class="our__people__carousel-picture"><img class="our__people__carousel-picture-img" src="media/our-people4.jpg" alt="user foto"/><div class="our-people__carousel-picture-background"></div></div><div class="our-people__corousel-text-block">Lorry, CEO</div></div>'];
    let currentSlideIndx = 0;
    function renderSlide() {
        const slideContainer = document.querySelector('.our-people__carousel-container');
        slideContainer.innerHTML = slides[currentSlideIndx];
        if (window.innerWidth > 768) {
            const secondSlideInd = currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
            slideContainer.innerHTML += slides[secondSlideInd];
            if (window.innerWidth > 991) {
                const thirdSlideInd = secondSlideInd + 1 >= slides.length ? 0 : secondSlideInd + 1;
                // const fourthSlideInd = thirdSlideInd + 1 >= slides.length ? 0 : thirdSlideInd + 1;currentSlideIndx + 1,,>= slides.length ? 0 : currentSlideIndx + 1;
                slideContainer.innerHTML += slides[thirdSlideInd];
            }
        }
    }
    function nextSlide() {
        currentSlideIndx = currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
        renderSlide();
    }
    function prevSlide() {
        currentSlideIndx = currentSlideIndx - 1 < 0 ? slides.length - 1 : currentSlideIndx - 1;
        renderSlide();
    }
    // setInterval(nextSlide, 3000);
    renderSlide();
    const nextBtn = document.querySelector('.our-people__carousel-next');
    nextBtn.addEventListener('click', nextSlide);

    const prevBtn = document.querySelector('.our-people__carousel-prev');
    prevBtn.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderSlide)
}
)();