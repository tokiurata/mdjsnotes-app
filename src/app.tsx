import { Provider } from 'react-redux';
import { store } from './state';

import CellList from './components/Cell-list/cell-list';

import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <main>
          <CellList />
        </main>
      </div>
    </Provider>
  );
};

export default App;
