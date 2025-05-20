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
export function showWeather(iconUrl, temperature) {
    const weatherElement = document.getElementById('weather');
    if (weatherElement) {
        const img = weatherElement.querySelector('img');
        const temp = weatherElement.querySelector('.temperature');
        if (img)
            img.src = iconUrl;
        if (temp)
            temp.textContent = `| ${temperature} °C`;
    }
}
