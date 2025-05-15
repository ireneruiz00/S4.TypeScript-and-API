import { showJoke, showError } from "./dom.js";

interface ApiTypes {
  url: string;
  header: Record<string, string>;
}

export interface Report {
  joke: string;
  score: number;
  date: string;
}

export const joke: ApiTypes = {
  url: 'https://icanhazdadjoke.com/',
  header: { Accept: 'application/json' },
};

export let currentJoke: string

export async function getJoke(): Promise<void> {
  try {
    const response = await fetch(joke.url, {
      headers: joke.header
    });
    const data = await response.json();
    console.log("Acudit rebut:", data.joke);

    currentJoke = data.joke;
    showJoke(currentJoke);

  } catch (error) {
    console.error('Error en obtenir acudit:', error);
    showError('Error en carregar l\'acudit');
  }
}