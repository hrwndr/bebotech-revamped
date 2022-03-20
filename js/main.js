const backHomeBtn = document.querySelector('.backhome')
const gallery = document.querySelector('.gallery')
const lbOut = document.querySelector('.lifeatbebo-pill-output')
const navItems = document.querySelectorAll('nav ul li')
const moreMenu = document.querySelector('.dropdown-content')
const moreBtn = document.querySelector('.more')

const removeActivePill = elClass => {
    document.querySelectorAll(`.${elClass}`).forEach(el => el.classList.remove('pill-active'))
}

const addActivePill = elClass => document.querySelector(`.${elClass}`).classList.add('pill-active')

const changePillValue = (section, value) => {
    if (section == "values") {
        removeActivePill('valuesMenu li')
        addActivePill(value)
        gallery.innerHTML = 'Loading..'
        switch (value) {
            case 'csr':
                gallery.innerHTML = `
                <img src="img/csr-1.png" alt="CSR">
                <img src="img/csr-2.png" alt="CSR">
                <img src="img/csr-3.png" alt="CSR">
                <img src="img/csr-4.png" alt="CSR">`
                break
            case 'awards':
                gallery.innerHTML = `
                <img src="img/award-2020.jpg" alt="AWARD">
                <img src="img/award-2019.jpg" alt="AWARD">
                <img src="img/award-2018.jpg" alt="AWARD">
                <img src="img/award-2016.jpg" alt="AWARD">`
                break
            case 'events':
                gallery.innerHTML = `
                <img src="img/events-1.png" alt="event">
                <img src="img/events-2.png" alt="event">
                <img src="img/events-3.png" alt="event">
                <img src="img/events-4.png" alt="event">`
                break
            case 'worklifebalance':
                gallery.innerHTML = `
                <img src="img/work-life-balance-1.png" alt="Work Life Balance">
                <img src="img/work-life-balance-2.png" alt="Work Life Balance">
                <img src="img/work-life-balance-3.png" alt="Work Life Balance">
                <img src="img/work-life-balance-4.png" alt="Work Life Balance">`
                break
            case 'recognition':
                gallery.innerHTML = `
                <img src="img/registration-certificate.png" alt="RECOGNITION">
                <img src="img/certificate-of-registration.png" alt="RECOGNITION">`
                break
            default:
                break
        }
    } else if (section == "lifeatbebo") {
        removeActivePill('lifeatbeboMenu li')
        addActivePill(value)
        switch (value) {
            case 'whybebo':
                lbOut.innerText = "We believe our team is our greatest asset. From top to bottom, our staff's professionalism, innovation, capabilities, teamwork and dedication to excellence have been essential to our past achievements and are vital to our future success. We offer our team members the most exciting and challenging projects across a diverse range of industries and platforms."
                break
            case 'workculture':
                lbOut.innerText = "Our work culture defines us and is an asset which we are extremely proud of. It is our collective belief and behavior that always motivates and encourages us to move one step ahead. Many elements of our work culture are unique to us and strongly hold us together as a team. It keeps us nurtured, engaged and ensure each person’s contributions are valued."
                break
            default:
                break
        }
    }
}



const NavbarResizing = () => {
    let len = navItems.length - 1

    if (window.innerWidth > 900) {
        let removedIndexes = []

        if (navItems.length > 5) {
            navItems.forEach((el, i) => {
                let link = el.innerHTML
                console.log(link)
                if (i != len) {
                    if (i > 3) {
                        moreMenu.innerHTML += link
                        removedIndexes.push(i)
                    }
                }
            })

            removedIndexes.forEach(el => navItems[el].remove())
        } else {
            moreBtn.style.display = 'none'
        }
    }

    if (window.innerWidth < 900 && window.innerWidth > 750) {
        moreMenu.innerHTML = ''
        let removedIndexes = []

        if (navItems.length > 4) {
            moreBtn.style.display = 'block'
            navItems.forEach((el, i) => {
                let link = el.innerHTML
                if (i != len) {
                    if (i > 2) {
                        moreMenu.innerHTML += link
                        removedIndexes.push(i)
                    }
                }
            })

            removedIndexes.forEach(el => navItems[el].remove())
        } else {
            moreBtn.style.display = 'none'
        }
    }

    if (window.innerWidth < 750 && window.innerWidth > 650) {
        let removedIndexes = []

        if (navItems.length > 3) {
            moreBtn.style.display = 'block'
            navItems.forEach((el, i) => {
                let link = el.innerHTML
                if (i != len) {
                    if (i > 1) {
                        moreMenu.innerHTML += link
                        removedIndexes.push(i)
                    }
                }
            })

            removedIndexes.forEach(el => navItems[el].remove())
        } else {
            moreBtn.style.display = 'none'
        }
    }

    if (window.innerWidth < 650 && window.innerWidth > 450) {
        moreMenu.innerHTML = ''
        let removedIndexes = []

        if (navItems.length > 2) {
            moreBtn.style.display = 'block'
            navItems.forEach((el, i) => {
                let link = el.innerHTML
                if (i != len) {
                    if (i > 0) {
                        moreMenu.innerHTML += link
                        removedIndexes.push(i)
                    }
                }
            })

            removedIndexes.forEach(el => navItems[el].remove())
        } else {
            moreBtn.style.display = 'none'
        }
    }

    if (window.innerWidth < 450) {
        moreMenu.innerHTML = ''
        let removedIndexes = []

        if (navItems.length > 0) {
            moreBtn.style.display = 'block'
            navItems.forEach((el, i) => {
                let link = el.innerHTML
                if (i != len) {
                    moreMenu.innerHTML += link
                    removedIndexes.push(i)
                }
            })

            removedIndexes.forEach(el => navItems[el].remove())
        } else {
            moreBtn.style.display = 'none'
        }
    }
}

NavbarResizing()

window.onresize = () => {
    NavbarResizing()
}




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