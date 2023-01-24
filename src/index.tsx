import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client';
import config from 'ducks';
import App from 'App';

const store = config();

const root = document.getElementById('root') as HTMLElement;
const container = createRoot(root);

container.render(
  <Provider store={store}>
    <App />
  </Provider>
);
