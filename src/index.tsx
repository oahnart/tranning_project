// import Loading from "containers/Loading";
import i18next from "i18next";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { Provider as StoreProvider } from "react-redux";
import initStore from "store";
import App from "./App";
import common_kr from "./locales/kr/index.json";
import common_en from "./locales/en/index.json";
import * as serviceWorker from "./serviceWorker";
import { getLocalStorage } from "utils/localStorage";
import { LANG } from "utils/localStorage/type";
const store = initStore();

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: getLocalStorage(LANG, 0) ? getLocalStorage(LANG, 0) : "kr", // language to use
  resources: {
    kr: {
      common: common_kr,
    },
    en: {
      common: common_en, // 'common' is our custom namespace
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Suspense fallback={false}>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </Suspense>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
