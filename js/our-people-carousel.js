(function () {
  const slides = [
    '<div class="our-people__carousel-wrapper"><div class="our__people__carousel-picture"><img class="our__people__carousel-picture-img" src="media/our-people1.jpg" alt="user foto"><div class="our-people__carousel-picture-background"></div></div><div class="accordion-section"><div class="our-people__corousel-text-block accordion-header">Lorry, CEO<div class="plus"></div></div><div class="accordion-content"><p class="accordion-text">I joined the organization as part of the acquisition of Springleaf Financial in 2015. It has been both the most challenging and rewarding roles in my career. The IT organization is made up of some really smart, savvy people</p></div></div></div>',
    '<div class="our-people__carousel-wrapper"><div class="our__people__carousel-picture"><img class="our__people__carousel-picture-img" src="media/our-people2.jpg" alt="user foto"><div class="our-people__carousel-picture-background"></div></div><div class="accordion-section"><div class="our-people__corousel-text-block accordion-header">Lorry, CEO<div class="plus"></div></div><div class="accordion-content"><p class="accordion-text">I joined the organization as part of the acquisition of Springleaf Financial in 2015. It has been both the most challenging and rewarding roles in my career. The IT organization is made up of some really smart, savvy people</p></div></div></div>',
    '<div class="our-people__carousel-wrapper"><div class="our__people__carousel-picture"><img class="our__people__carousel-picture-img" src="media/our-people3.jpg" alt="user foto"><div class="our-people__carousel-picture-background"></div></div><div class="accordion-section"><div class="our-people__corousel-text-block accordion-header">Lorry, CEO<div class="plus"></div></div><div class="accordion-content"><p class="accordion-text">I joined the organization as part of the acquisition of Springleaf Financial in 2015. It has been both the most challenging and rewarding roles in my career. The IT organization is made up of some really smart, savvy people</p></div></div></div>',
    '<div class="our-people__carousel-wrapper"><div class="our__people__carousel-picture"><img class="our__people__carousel-picture-img" src="media/our-people4.jpg" alt="user foto"><div class="our-people__carousel-picture-background"></div></div><div class="accordion-section"><div class="our-people__corousel-text-block accordion-header">Lorry, CEO<div class="plus"></div></div><div class="accordion-content"><p class="accordion-text">I joined the organization as part of the acquisition of Springleaf Financial in 2015. It has been both the most challenging and rewarding roles in my career. The IT organization is made up of some really smart, savvy people</p></div></div></div>',
  ];

  let currentSlideIndx = 0;
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.style.display =
        content.style.display === "none" ? "block" : "none";
        // header.classList.toggle("active");
    });
  });
  
  function renderSlide() {
    const slideContainer = document.querySelector(
      ".our-people__carousel-container"
    );
    slideContainer.innerHTML = slides[currentSlideIndx];

    const accordionContents =
      slideContainer.querySelectorAll(".accordion-content");
    accordionContents.forEach((content) => {
      content.style.display = "none";
      {
        content.style.display = "block";
      }
    });

    if (window.innerWidth > 768) {
      const secondSlideInd =
        currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
      slideContainer.innerHTML += slides[secondSlideInd];
      if (window.innerWidth > 991) {
        const thirdSlideInd =
          secondSlideInd + 1 >= slides.length ? 0 : secondSlideInd + 1;
        slideContainer.innerHTML += slides[thirdSlideInd];
      }
    }

    const accordionHeaders = slideContainer.querySelectorAll(".accordion-header");
    console.log('accordionHeaders', accordionHeaders)

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const plusEl = header.querySelector('.plus');
        plusEl?.classList.toggle('active');
        const content = header.nextElementSibling;
        content.style.display =
          content.style.display === "none" ? "block" : "none";
      });
    });

    accordionHeaders.forEach((header) => {
      const content = header.nextElementSibling;
      content.style.display = "none";
    });
  }
  
  function nextSlide() {
    currentSlideIndx =
      currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
    renderSlide();
  }
  function prevSlide() {
    currentSlideIndx =
      currentSlideIndx - 1 < 0 ? slides.length - 1 : currentSlideIndx - 1;
    renderSlide();
  }
  // setInterval(nextSlide, 3000);
  renderSlide();
  const nextBtn = document.querySelector(".our-people__carousel-next");
  nextBtn.addEventListener("click", nextSlide);

  const prevBtn = document.querySelector(".our-people__carousel-prev");
  prevBtn.addEventListener("click", prevSlide);
  

  window.addEventListener("resize", renderSlide);

})();
