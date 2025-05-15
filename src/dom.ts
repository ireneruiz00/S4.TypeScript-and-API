export const btn = document.querySelector('.btnNext');
export const jokeElement = document.getElementById('joke') as HTMLParagraphElement;
export const scoreButtons = document.querySelectorAll('.score-btn');

export function showJoke(joke: string): void {
  if (jokeElement) {
    jokeElement.textContent = joke;
  }
}

export function showError(message: string): void {
  if (jokeElement) {
    jokeElement.textContent = message;
  }
}