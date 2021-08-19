var header = document.querySelectorAll('.accordion-header');

header.forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.toggle("is-open");
    })
})