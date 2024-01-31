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
            Coded by Maria Docherty. Open-sourced on Github and hosted on
            Netlify.
          </small>
        </footer>
      </div>
    </div>
  );
}

//Picture API Key: AAHw56hScoO1bbk8w3aPxMDGDjEJtJQwG9ZXpaw4ABkGArYItNR6O7qY
