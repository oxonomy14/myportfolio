import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-container', {
  duration: 400,
  toggle: 'click',
  easing: 'ease-in-out',
  scrollTo: true,
  showMultiple: true,
  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});
