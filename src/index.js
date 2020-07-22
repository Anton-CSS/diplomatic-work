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
import maskPhone from './modules/maskPhone';
import submitForm from './modules/submitForm';


// вызов модальных окон
modalWindows();

// маска на телефон
maskPhone();

// отправка форм
submitForm();
