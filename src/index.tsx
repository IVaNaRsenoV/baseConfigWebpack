import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@store/index";

import { App } from "./App";

import "@styles/index.scss";

const container = document.getElementById("root")!;
const render = createRoot(container);
render.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);
