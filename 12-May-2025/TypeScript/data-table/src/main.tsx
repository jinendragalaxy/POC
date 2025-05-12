import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Add from './Add.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Add />
  </StrictMode>,
)
