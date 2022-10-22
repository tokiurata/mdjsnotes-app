import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';

// import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';

import 'bulmaswatch/superhero/bulmaswatch.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
        {/* <CodeCell /> */}
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
