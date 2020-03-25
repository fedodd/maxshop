
import React from "react";
import { hot } from "react-hot-loader/root";
import classes from "./App.module.pcss";
import Header from "./components/Header/Header";
import Block from "./components/Block/Block";

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
	// 				styleOn: true,
	// 				style: {
	// 					"--paddingSide": "2%",
	// 					"--paddingTop": "2%",
	// 					"--paddingSideSmall": "0",
	// 					"--paddingTopSmall": "15px"
	// 				}
	// 			};
  // }

  render() {

    return (
					<div className={classes.App}>
						{/* <Header /> */}
						<div className={classes.content}>
							<Block size="is__banner" />
							<div className={classes.blockWrapper}>
								<Block />
								<Block />
							</div>
							<Block size="is__fullscreen" />
							<div className={classes.blockWrapper}>
								<Block />
								<Block />
							</div>
							<Block size="is__fullscreen" />
							<div className={classes.is__ResponseHeight}>
								<div className={classes.is__ResponseHeight__top}>
									<div className={classes.blockWrapper}>
										<Block size="is__difSize" />
										<Block size="is__difSize" />
									</div>
								</div>
							</div>
							<div className={classes.is__ResponseHeight}>
								<div className={classes.is__ResponseHeight__top}>
									<div className={classes.blockWrapper}>
										<Block size="is__difSize__reverse" />
										<Block size="is__difSize__reverse" />
									</div>
								</div>
							</div>
						</div>
						<footer className={classes.footer}>
						</footer>
					</div>
				);
  }
}

export default hot(App);
