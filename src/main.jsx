import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import 'modern-normalize';

import App from './components/App/App.jsx';
import GlobalLoader from './components/GlobalLoader/GlobalLoader.jsx';

import { store } from './redux/store.js';

import { ModalProvider } from './context/ModalContext/ModalProvider.jsx';

import '../src/styles/styles.css';

Modal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  </StrictMode>
);
