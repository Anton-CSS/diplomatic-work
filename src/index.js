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


// вызов модальных окон
modalWindows();

//вызов верхнего слайдера
slider();

//вызов главного слайдера
gallerySlider();





