import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import global_es from 'translations/es/global.json';
import global_en from 'translations/en/global.json';
import 'styles/normalize.css';
import 'styles/_colors.scss';
import 'styles/font-family.scss';

i18next.use(LanguageDetector).init({
   interpolation: { escapeValue: false },
   detection: {
      order: ['navigator'],
      caches: ['cookie'],
   },
   fallbackLng: 'en',
   resources: {
      es: {
         global: global_es,
      },
      en: {
         global: global_en,
      },
   },
});

ReactDOM.render(
   <React.StrictMode>
      <I18nextProvider i18n={i18next}>
         <App />
      </I18nextProvider>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
