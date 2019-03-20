import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Rooms from "./Rooms";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Rooms} />
			<Route path="/rooms/:roomId" component={App} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
