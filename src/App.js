import logo from './logo.svg';
import './App.css';
import FetchApi from './components/FetchApi';
import AxiosApi from './components/AxiosApi';

function App() {
  return (
    <div className="App">
      <FetchApi />
      <AxiosApi />
    </div>
  );
}

export default App;
