// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=1) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


// When hover a card extand the card and snap the title to the left
const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.classList.add('cardHover')
        // Gray out the other cards
        cards.forEach((otherCards) => {
            if(otherCards !== card) {
                otherCards.classList.add('cardGray')
            }
        })
    })
    card.addEventListener('mouseout', () => {
        card.classList.remove('cardHover')
        // Remove gray out from the other cards
        cards.forEach((otherCards) => {
            if(otherCards !== card) {
                otherCards.classList.remove('cardGray')
            }
        })
    })
})