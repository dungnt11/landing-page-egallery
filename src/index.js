import $ from 'jquery';
import scrollSpy from './libs/scrollspy';

const arrRotate = [0, 45, 80, 125];

window.onload = function () {
  scrollSpy('#main-menu', {
    sectionClass: '.scrollspy',
    menuActiveTarget: '.menu-item',
    offset: 500,
    scrollContainer: '.scroll-container',
    smoothScroll: true,
    smoothScrollBehavior: function(element) {
      element.scrollIntoView({ behavior: 'smooth' });
      const indScroll = $(element).index() - 2;
      $('.navbar svg').css('transform', `rotate(${arrRotate[indScroll]}deg)`);
    },
    onScrollChild: function(element) {
      const indScroll = $(element).index();
      $('.navbar svg').css('transform', `rotate(${arrRotate[indScroll]}deg)`);
    }
  });
}