var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { showJoke, showError, showWeather } from "./dom.js";
const WEATHER_API_KEY = '2beaf4e1b7064d41a3484535251905';
export const joke = {
    url: 'https://icanhazdadjoke.com/',
    header: { Accept: 'application/json' },
};
export let currentJoke;
export function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(joke.url, {
                headers: joke.header
            });
            const data = yield response.json();
            console.log("Acudit rebut:", data.joke);
            currentJoke = data.joke;
            showJoke(currentJoke);
        }
        catch (error) {
            console.error('Error en obtenir acudit:', error);
            showError('Error en carregar l\'acudit');
        }
    });
}
export function getWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=Barcelona&aqi=no`);
        const data = yield response.json();
        const icon = 'https:' + data.current.condition.icon;
        const temperature = data.current.temp_c;
        console.log("Temps rebut:", data.current);
        showWeather(icon, temperature.toString());
    });
}
