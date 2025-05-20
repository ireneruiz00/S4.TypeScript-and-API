import { btn, scoreButtons } from './dom.js';
import { getJoke, currentJoke, Report } from './apis.js';

const reportJokes: Report[] = [];

export function setupEvents(): void {
  btn?.addEventListener('click', () => {
    getJoke();
  });

  scoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log('S’ha fet clic al botó de puntuació');
      const score = Number((button as HTMLButtonElement).dataset.score);
      if (!currentJoke) return;

      const existing = reportJokes.find(entry => entry.joke === currentJoke);

      if (existing) {
        existing.score = score;
        existing.date = new Date().toISOString();
      } else {
        reportJokes.push({
          joke: currentJoke,
          score,
          date: new Date().toISOString()
        });
      }

      console.log(reportJokes);
    });
  });
}