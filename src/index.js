import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import '../lib/swiper.scss'
import './css/index.scss'
// import { add } from './math.js'

// add(66)
/*初始化*/
renderWithHotReload(Router);

/*热更新*/
if (module.hot) {
    module.hot.accept("./router/index.js", () => {
        const Router = require("./router/index.js").default;
        renderWithHotReload(Router);
    });
}
function renderWithHotReload(Router) {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </AppContainer>,
        document.getElementById("app")
    );
}
