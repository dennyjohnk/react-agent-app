import React from "react";
import Home from "./components/Home/Home";
import { About } from "./components/About/About";
import { TopicList } from "./Views/TopicList/TopicList";
import { TopicDetail } from "./components/TopicDetail/TopicDetail";
import { Navbar } from "./components/Navbar/Navbar";
//import { NoMatch } from "./Views/NoMatch/NoMatch";
import { MakeRouteWithSubRoutes } from "./makeRouteWithSubRoutes";
import { Login } from "./Views/Login/Login";
import { SecretRoute } from "./Auth/Authorization";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TicketDetail from "./Views/TicketDetail/TicketDetail";

const routes = [
  {
    path: "/Home",
    component: Home,
    leftbar: () => <div>Home</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/About",
    component: About,
    main: () => <h2>About</h2>
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/Topics",
    component: TopicList,
    routes: [
      {
        path: "/Topic/:topicId",
        component: TopicDetail
      }
    ]
  }
];

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/home/:id" exact component={TicketDetail} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={TopicList} />
      </Switch>

      {/*
      {routes.map((route, index) => (
        <MakeRouteWithSubRoutes key={index} {...route} />
      ))}
      <SecretRoute path="/About" component={About} />
      */}
    </div>
  );
};
