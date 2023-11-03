// hamburger
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active')
        document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
            activeItem.classList.remove('active');
            activeItem.querySelector('.accordion-content').style.maxHeight = null;
        });
    } else {
        hamburger.classList.add('active')
    }
})

// accordion
let accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        let accordionItem = header.parentElement;
        let accordionContent = accordionItem.querySelector('.accordion-content');

        // Текущий активный элемент
        let currentActive = document.querySelector('.accordion-item.active');

        // Если активный элемент существует и не равен текущему элементу, удаляем класс 'active' и сбрасываем max-height
        if (currentActive && currentActive !== accordionItem) {
            currentActive.classList.remove('active');
            currentActive.querySelector('.accordion-content').style.maxHeight = null;
        }

        if (!accordionContent) return

        // Переключаем состояние текущего элемента
        accordionItem.classList.toggle('active');
        if (accordionItem.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});



