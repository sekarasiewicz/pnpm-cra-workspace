import logo from './logo.svg';
import './App.css';
import { SimpleCard } from "@awesomecards/ui";
import s from './App.module.scss';

function App() {
    console.log('styles 11', s)
  return (
    <div className="App">
      <SimpleCard url={''} title={'Tile'} text={'Text'}/>
        <div className={s.cos}><h1>Cosiek</h1></div>
        <div className={s.cos}><h1>Ktosiek SCSS</h1></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
