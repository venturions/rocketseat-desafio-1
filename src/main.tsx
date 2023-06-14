import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { SnackbarProvider } from 'notistack'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
)
