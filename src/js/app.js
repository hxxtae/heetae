import { menuClick, menuIconClick, overlayClick } from './menuEvent.js';

menuClick();
menuIconClick();
overlayClick();

const name = "'Hxxtae'";
console.log(' %c /* Welcome to the %c%s%c website */ ', `
  color: #e7e7e7; 
  background-color: black;
  line-height: 44px`, `
  color: hotpink;
  background-color: black;
  line-height: 44px;
  font-weight: bold;
  font-size: 14px`,
  name,`
  color: #e7e7e7;
  background-color: black;
  line-height: 44px`);
