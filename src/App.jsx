import './App.scss';
import Cabecalho from './components/Cabecalho';
import Main from './components/Main';
import Rodape from './components/Rodape';
import StatusBar from './components/StatusBar';
import MensagemCarrinho from './components/MensagemCarrinho';

function App() {
  return (
    <div className='app'>
      <StatusBar />
      <Cabecalho />
      <Main />
      <Rodape />
      <MensagemCarrinho />
    </div> 
  );
}

export default App;
