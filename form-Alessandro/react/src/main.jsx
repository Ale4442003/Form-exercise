import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider as ReduxProvider } from 'react-redux'
import {  BrowserRouter } from 'react-router-dom'
import store from './store/store.js'

import './index.css'

createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
)
