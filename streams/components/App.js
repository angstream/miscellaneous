import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import QuoteCreate from "./quotes/QuoteCreate";
import QuoteList from "./quotes/QuoteList";
import QuoteEdit from "./quotes/QuoteEdit";
import TabList from "./tabs/TabList";
import TabCreate from "./tabs/TabCreate";
import QuestionCreate from "./questions/QuestionCreate";
import EditQuestions from "./questions/QuestionsList";
import Header from "./Header";
import history from "../history";
import MenuExample, { MyStackableMenu } from "./MenuExample";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <MenuExample />
        <MyStackableMenu />
        <Route path="/" exact component={StreamList} />

        <Route path="/quotes/new" exact component={QuoteCreate} />
        <Route path="/quotes/show" exact component={QuoteList} />
        <Route path="/quotes/edit/:id" exact component={QuoteEdit} />

        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />

        <Route path="/tabs/new" exact component={TabCreate} />
        <Route path="/questions/new" exact component={QuestionCreate} />
        <Route path="/questions/list" exact component={EditQuestions} />

        <Route path="/tabs/show" exact component={TabList} />
      </Router>
    </div>
  );
};
export default App;
