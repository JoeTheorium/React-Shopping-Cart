import App from './App'

import ReactDOM from 'react-dom/client'

import { FiltersProvider } from './context/filters.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);