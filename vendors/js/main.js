window.addEventListener('scroll', (e) => {
    const navBar= document.querySelector('.menu__top');
    console.log(window.scrollY,window.innerHeight);
    navBar.classList.toggle('-sticky',window.scrollY >= window.innerHeight);
    
    const howTo = document.querySelector('.how-to');
    const bounding = howTo.getBoundingClientRect();
    if (bounding.top <= 100 && bounding.bottom >= 0) {
        const smartPhone = document.querySelector('.smartphone')
        smartPhone.classList.add('animate__fadeInUp')
    }
})
