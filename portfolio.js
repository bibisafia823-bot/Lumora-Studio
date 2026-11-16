// Portfolio category filter
var chips = document.querySelectorAll('.chip');
var photos = document.querySelectorAll('.g-item');

chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
        chips.forEach(function (item) {
            item.classList.remove('active');
        });
        chip.classList.add('active');

        var filter = chip.dataset.filter;
        photos.forEach(function (photo) {
            photo.hidden = filter !== 'all' && photo.dataset.cat !== filter;
        });
    });
});
