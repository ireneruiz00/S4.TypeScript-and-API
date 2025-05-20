import { getJoke, getWeather } from './apis.js';
import { setupEvents } from './events.js';
document.addEventListener('DOMContentLoaded', () => {
    setupEvents();
    getJoke();
    getWeather();
});
