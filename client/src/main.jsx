import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { persistor, store } from './Store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
<Provider store={store}>
  <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
  <ToastContainer/>
  <App />

  </PersistGate>
   
    </Provider>
  </StrictMode>,
)
