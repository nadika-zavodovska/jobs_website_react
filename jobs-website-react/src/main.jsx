import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// The modern way to create a React root in React 18 +, replaces the older ReactDOM.render() function.
createRoot(document.getElementById('root')).render(
  // A tool for highlighting potential problems in the app. Does not render anything visible, but runs extra checks during development (e.g., checking deprecated APIs).
  <StrictMode>
    <App />
  </StrictMode>
);
