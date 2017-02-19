var slideIndex = 1;
carousel();
show(slideIndex);

function calculate(arg) {
    show(slideIndex += arg);
}

function show(n) {
    var element = document.querySelectorAll('.slider-container ul li');
    if (n < 1) {
        slideIndex = element.length;
    }
    if (n > element.length) {
        slideIndex = 1;
    }
    for (var i = 0; i < element.length; i++) {
        element[i].style.display = 'none';
    }
    element[slideIndex - 1].style.display = 'block';
}

function carousel() {
    var element = document.querySelectorAll('.slider-container ul li');
    for (var i = 0; i < element.length; i++) {
        element[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex>element.length) {
      slideIndex = 1;
    }
    element[slideIndex - 1].style.display = 'block';
    setTimeout(carousel,2000);
}
