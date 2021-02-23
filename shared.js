const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; //This is actually overwrite the complete class list
        modal.classList.add('open');
        backdrop.style.display = 'none';
        setTimeout(function () {
            backdrop.classList.add('open');
        }, 10)
    })
}

closeModal = () => {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.style.display = 'block';
    setTimeout(function () {
        backdrop.classList.remove('open');
    }, 10)
}

backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open')
    closeModal();
})

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}


toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function () {
        backdrop.classList.add('open');
    }, 10)
})
