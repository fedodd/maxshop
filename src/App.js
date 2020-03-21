
import React from "react";
import { hot } from "react-hot-loader/root";
import classes from "./App.module.pcss";
import Header from "./components/Header/Header"

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className={classes.App}>
        <Header />
      </div>
    );
  }
}

export default hot(App);
