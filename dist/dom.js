export const btn = document.querySelector('.btnNext');
export const jokeElement = document.getElementById('joke');
export const scoreButtons = document.querySelectorAll('.score-btn');
export function showJoke(joke) {
    if (jokeElement) {
        jokeElement.textContent = joke;
    }
}
export function showError(message) {
    if (jokeElement) {
        jokeElement.textContent = message;
    }
}
