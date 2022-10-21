import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Componentes
import App from './App'

// Styles
import './styles/index.css'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <App />
  </StrictMode>
)
