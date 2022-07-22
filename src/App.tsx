import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navigation } from './routes/Navigation';

function App() {
  return (
    <div className="App bg-darkBg1 max-w-screen-xl m-auto">
      <Provider store={store}>
        <Navigation/>
      </Provider>
    </div>
  );
}

export default App;
