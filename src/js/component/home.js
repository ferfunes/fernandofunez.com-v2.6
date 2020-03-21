import React from "react";
import { MainPage } from "../component/mainPage.js";
import { Portfolio } from "../component/portfolio.js";
import { Skills } from "../component/skills.js";
import { Dj } from "../component/dj.js";
import { Contact } from "../component/contact.js";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Home = () => {
	return (
		<div className="container-fluid p-0 m-0">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route path="/Portfolio" component={Portfolio} />
					<Route path="/Skills" component={Skills} />
					<Route path="/Dj" component={Dj} />
					<Route path="/Contact" component={Contact} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};
