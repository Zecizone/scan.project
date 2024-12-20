import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './global.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
