
import React from "react";
import { hot } from "react-hot-loader/root";
import classes from "./App.module.pcss";
import Header from "./components/Header/Header";
import Block from "./components/Block/Block";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
      "--paddingSide": "15px",
	    "--paddingTop": "22px",
      "--paddingSideSmall": "8px",
      "--paddingTopSmall": "11px"}};
  }


  onClickHandler(e) {
    const style = {
      "--paddingSide": "15px",
	    "--paddingTop": "22px",
      "--paddingSideSmall": "8px",
      "--paddingTopSmall": "11px"};

    (this.state.style === null) ? this.setState({style }) : this.setState({style: null });

  }


  render() {
    return (
      <div className={classes.App} style={this.state.style}>

        <Header />
        <div className={classes.content}>
          <Block size="is__banner"/>
          <div className={classes.blockWrapper}>
            <Block size="is__square"/>
            <Block size="is__square"/>
          </div>
          <Block size="is__fullscreen"/>
          <div className={classes.blockWrapper}>
            <Block size="is__high"/>
            <Block size="is__high"/>
          </div>
          <Block size="is__fullscreen"/>
        </div>
        <div>
          <button
            onClick={(e) =>this.onClickHandler(e)}
            style={{position: 'fixed', top: '10px', right: '10px'}}>Переключить отступы</button>
        </div>
      </div>

    );
  }
}

export default hot(App);
