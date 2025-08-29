import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecommendationProvider } from './context/RecommendationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecommendationProvider>
      <App />
    </RecommendationProvider>
  </React.StrictMode>
);

reportWebVitals();
