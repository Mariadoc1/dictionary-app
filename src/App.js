import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <h1>Dictionary</h1>
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
