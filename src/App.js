import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <h1 className="header">
            <span className="bookLeft">📖</span>Dictionary
            <span className="bookRight">📖</span>
          </h1>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/Mariadoc1"
              target="_blank"
              rel="noreferrer"
            >
              Maria Docherty
            </a>
            . Open-sourced on{" "}
            <a
              href="https://github.com/Mariadoc1/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://monumental-macaron-bb4492.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
