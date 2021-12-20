import scrollSpy from 'simple-scrollspy';
import $ from "jquery";

window.onload = function () {
    scrollSpy('#main-menu', {
      sectionClass: '.scrollspy',
      menuActiveTarget: '.menu-item',
      offset: 100,
      scrollContainer: '.scroll-container',
      // smooth scroll
      smoothScroll: true,
      smoothScrollBehavior: function(element) {
        console.log('run "smoothScrollBehavior"...', element)
        element.scrollIntoView({ behavior: 'smooth' })
        calPosBorderCircle();
      }
   })
}

function calPosBorderCircle() {
    $('.menu-item').each(function (index,v) {
        let i = index + 1;
        let _rotateDefault = 0;
        const _rotatePlus = 25;
        console.log(v)
        if ($(v).hasClass('active')) {
            _rotateDefault += _rotatePlus * i;
            console.log(i, _rotateDefault);
            $('.navbar svg').css('transform', 'rotate('+_rotateDefault+'deg)');
        }
    });
}