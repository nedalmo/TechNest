import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import "./services/axios-global.js";
import "./i18n";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <AppRouter />
    </PersistGate>
  </Provider>,
);
