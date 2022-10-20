import { useState } from 'react';
import ReactDOM from 'react-dom/client';

import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import bundler from './bundler';

import 'bulmaswatch/superhero/bulmaswatch.min.css';

const App = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  const onClick = async () => {
    const output = await bundler(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor 
        initialValue='const num = 1;' 
        onChange={(value) => setInput(value)}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
