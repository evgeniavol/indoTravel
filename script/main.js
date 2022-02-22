import {countdownTimer} from './modules/timer.js';
import './modules/accordion.js'
import './modules/burgerMenu.js'
import './modules/fly.js'
import { formControl } from './modules/formControl.js';
import { renderOptions } from './modules/createOptions.js';
import { loadDb } from './modules/fetch.js';

countdownTimer();
loadDb(renderOptions);
loadDb(formControl)