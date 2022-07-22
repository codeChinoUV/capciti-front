import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navigation } from './routes/Navigation';

function App() {
  return (
    <div className="App h-screen">
      <Provider store={store}>
        <Navigation/>
      </Provider>
    </div>
  );
}

export default App;
