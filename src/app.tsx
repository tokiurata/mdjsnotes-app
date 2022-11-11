import { Provider } from 'react-redux';
import { store } from './state';

import CellList from './components/Cell-list/cell-list';
import Logo from './components/Logo/logo';

import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './app.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <main>
          <CellList />
        </main>
        <footer>
          <Logo />
        </footer>
      </div>
    </Provider>
  );
};

export default App;
