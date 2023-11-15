function hienBorder(element) {
    // Loại bỏ border ở các thẻ khác (nếu có)
    var elements = document.getElementsByTagName('a');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('selected');
    }

    // Thêm border vào thẻ được nhấn
    element.classList.add('selected');
}

function hienBorder(element) {
    // Loại bỏ border ở các thẻ khác (nếu có)
    var elements = document.getElementsByTagName('a');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('selected');
    }

    // Thêm border vào thẻ được nhấn
    element.classList.add('selected');
}