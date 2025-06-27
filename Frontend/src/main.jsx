import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import { StateProvider } from './components/common/StateProvider';
import {CloseProvider} from './components/common/CloseProvider.jsx';
import { LoginProvider } from './components/common/LoginProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StateProvider>
    <CloseProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </CloseProvider>
  </StateProvider>
);
