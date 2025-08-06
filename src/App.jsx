import './App.scss';
import Cabecalho from './components/Cabecalho';
import Main from './components/Main';
import Rodape from './components/Rodape';
import StatusBar from './components/StatusBar';

function App() {
  return (
    <div className='app'>
      <StatusBar />
      <Cabecalho />
      <Main />
      <Rodape />
    </div> 
  );
}

export default App;
