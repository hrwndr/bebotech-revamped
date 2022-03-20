const backHomeBtn = document.querySelector('.backhome')


let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0";
        backHomeBtn.style.display = 'none'
    } else {
        document.querySelector("nav").style.top = "-100px";
        backHomeBtn.style.display = 'block'
    }
    prevScrollpos = currentScrollPos;
}

const splide = new Splide('.splide', {
    autoplay: true,
    type: 'loop',
    width: '90vw'
})
splide.mount()