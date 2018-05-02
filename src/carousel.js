import Siema from 'siema';
import './siema.scss';

const mySiema = new Siema({
  selector: '.siema',
  duration: 3000,
  easing: 'ease-in-out',
  perPage: 1,
  startIndex: 0,
  draggable: false,
  multipleDrag: false,
  loop: true,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});

setInterval(() => mySiema.next(), 6000)
