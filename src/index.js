'use strict';

import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);
import "es6-promise";
import "formdata-polyfill";
import "fetch-polyfill";
import "whatwg-fetch";

import modalWindows from './modules/modalWindows';
import gallerySlider from './modules/gallerySlider';
import slider from './modules/slider';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import calculator from './modules/calculator';
import sliderCarousel from './modules/sliderCarusel';
import scroll from './modules/scroll';
import showMenu from './modules/showmenu';




// вызов модальных окон
modalWindows();

//вызов верхнего слайдера
slider();

//вызов главного слайдера
gallerySlider();

//маска телефона
maskPhone();

//формы
sendForm();

//калькулятор
 calculator();

//слайдер-карусель
sliderCarousel();

//скролл
scroll();

//показ меню
showMenu();





