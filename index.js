var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const btn = document.querySelector('.btnNext');
const jokeElement = document.getElementById('joke');
export const jokeApi = {
    url: 'https://icanhazdadjoke.com/',
    header: { Accept: 'application/json' },
};
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    getJoke();
});
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(jokeApi.url, {
                headers: jokeApi.header
            });
            const data = yield response.json();
            console.log("Acudit rebut:", data.joke);
            if (!jokeElement) {
                throw new Error('No s’ha trobat l’element amb id "joke"');
            }
            jokeElement.textContent = data.joke;
        }
        catch (error) {
            console.error('Error en obtenir acudit:', error);
            jokeElement.textContent = 'Error en carregar l\'acudit';
        }
    });
}
getJoke();
