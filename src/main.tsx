import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store.tsx'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faB, faPencilAlt, faTrashAlt, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import './index.css'

library.add(faB, faPencilAlt, faTrashAlt, faPlusCircle, faMinusCircle);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
