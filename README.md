# Joke Generator with Weather Info

## 📄 Description

This project is a fun web application that combines a live weather widget with a dynamic joke generator. It uses data fetched from external APIs to display current weather conditions and deliver random jokes with an interactive rating system. The exercise was aimed at practicing TypeScript, API consumption, and dynamic UI rendering with SCSS and Bootstrap.

## 💻 Technologies Used

- **HTML5**
- **SCSS** (compiled with VS Code plugin)
- **TypeScript**
- **JavaScript Modules**
- **Bootstrap 5**
- **WeatherAPI** (for real-time weather)
- **JokeAPI** (for random jokes)
- **Git & GitHub** (for version control)

## 📋 Requirements

To run this project locally, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher)
- **Live Server** or similar local dev server
- **VS Code** with SCSS compiler plugin (e.g. Live Sass Compiler)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/joke-weather-app.git
   cd joke-weather-app
Install dependencies:

``bash
    npm install

Compile SCSS to CSS (via VS Code plugin or CLI if configured).

Configure your API keys (e.g. WeatherAPI) in the appropriate .env or JS file if needed.

## ▶️ Execution
To run the app locally:

Open the project folder in VS Code.

Start the Live Server from index.html.

You will see the current weather in the top-left and a blob-shaped card with a joke and emoji-based rating.

## 🌐 Deployment
To deploy the project:

Ensure dist/ contains compiled JS and CSS.

Push your latest changes and follow the hosting provider’s deployment guide.

Example with GitHub Pages:

``bash
    npm run build
    git add dist
    git commit -m "Build for deploy"
    git subtree push --prefix dist origin gh-pages

## 🤝 Contributions
Contributions are welcome! Please follow these steps:

Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Commit your changes (git commit -am 'Add new feature')

Push to the branch (git push origin feature/your-feature)

Open a Pull Request

Please ensure your code follows the project's style guidelines and includes proper documentation.

Enjoy! 