import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

import '$/bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// TODO Error boundary
