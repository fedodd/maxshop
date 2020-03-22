
import React from "react";
import { hot } from "react-hot-loader/root";
import classes from "./App.module.pcss";
import Header from "./components/Header/Header";
import Block from "./components/Block/Block";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
					styleOn: true,
					style: {
						"--paddingSide": "2%",
						"--paddingTop": "2%",
						"--paddingSideSmall": "0",
						"--paddingTopSmall": "15px"
					}
				};
  }

  render() {
    const style = this.state.styleOn ? this.state.style : null;
    return (
					<div className={classes.App} style={style}>
						<Header />
						<div className={classes.content}>
							<Block size="is__banner" />
							<div className={classes.blockWrapper}>
								<Block size="is__square" />
								<Block size="is__square" />
							</div>
							<Block size="is__fullscreen" />
							<div className={classes.blockWrapper}>
								<Block size="is__high" />
								<Block size="is__high" />
							</div>
							<Block size="is__fullscreen" />
						</div>
						<div>
							<button
								onClick={(e) => this.setState({ styleOn: !this.state.styleOn })}
								style={{ position: "fixed", top: "10px", right: "10px" }}
							>
								Переключить отступы
							</button>
						</div>
					</div>
				);
  }
}

export default hot(App);
