import './App.css';
import FiltroChuvaNested from './components/FiltroChuva/FiltroChuvaNested';
import HeaderInfo from './components/HeaderInfo';

function App() {
  return (
    <div className="wrapper gremio">
      <HeaderInfo />
      <FiltroChuvaNested />
    </div>
  );
}

export default App;
