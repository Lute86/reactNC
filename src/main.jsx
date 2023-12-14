// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store'
import { AppProvider } from './Context/context.jsx';
import { TutorialProvider } from './Context/tutorialContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppProvider >
      <TutorialProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TutorialProvider>
    </AppProvider>
  </Provider>
)
