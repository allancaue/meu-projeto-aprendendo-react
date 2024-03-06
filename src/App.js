import './App.css';
import Relogio from './componemtes/Relogio'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Relogio timeZone = 'Europe/London' />
        <Relogio timeZone = 'America/Sao_Paulo' />
      </header>
    </div>
  );
}

export default App;
