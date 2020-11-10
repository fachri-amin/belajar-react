import logo from './logo.svg';
import './App.css';

function App() {

  const new_user = <strong>Fachri</strong>; // ini adalah contoh penggunaan jsx yang memungkinkan kita untuk menggunakan tag html dalam js

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hai {new_user}</p> {/* begini cara mengguanakan jsx yaitu dengan menggunakan kurung kurawal*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
