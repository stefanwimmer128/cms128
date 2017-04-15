import {
    createBrowserHistory,
} from "history";
import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import {
    Route,
    Router,
} from "react-router";

import Page from "./components/Page";

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Route component={Page} path="*" />
    </Router>,
    $("div#main")[0],
);
