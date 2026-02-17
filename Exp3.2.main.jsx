import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LibraryManagement from './LibraryManagement.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LibraryManagement />
  </StrictMode>,
)
