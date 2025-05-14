const btn = document.querySelector('.btnNext');
const jokeElement = document.getElementById('joke') as HTMLParagraphElement;


interface ApiTypes {
  url: string;
  header: Record<string, string>;
}

export const jokeApi: ApiTypes = {
  url: 'https://icanhazdadjoke.com/',
  header: {Accept: 'application/json'},
};

btn?.addEventListener('click', () => {
  getJoke()
});

async function getJoke(): Promise<void> {
  try {
    const response = await fetch(jokeApi.url, {
      headers: jokeApi.header
    });
    const data = await response.json();
    console.log("Joke received:", data.joke);

    if (!jokeElement) {
      throw new Error('The element with id "joke" wasn\'t found');
    }
    jokeElement.textContent = data.joke;
    
  } catch (error) {
    console.error('Error getting the joke:', error);
    jokeElement.textContent = 'Error loading the joke';
  }
}

getJoke();

