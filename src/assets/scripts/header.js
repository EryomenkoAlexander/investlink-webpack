const hamburger = document.querySelector('.hamburger')

// hamburger trigger
hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active')
    } else {
        hamburger.classList.add('active')
    }
})

// accordion
const accordionItems = document.querySelectorAll('.accordion-item')

accordionItems.forEach((accordionItem) => {
    accordionItem.addEventListener('click', () => {
        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active')
        } else {
            accordionItem.classList.add('active')
        }
    })
})
