import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// providers
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import store from './features/store'
// Styles
import './shared/styles/main.scss'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
)
