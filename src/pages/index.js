// Libs
import React, { Component } from "react";
import Main from '../components/main.js';
import { PureHeader as Header } from '../components/header.js';
import styles from "../components/main.module.css";
import {Helmet} from "react-helmet";

const data = {
	site: {
		siteMetadata: {
			title: "Dreidel Duel!",
			author: "Adam Bodie"
        },
    },
}

export default class Application extends Component {

  render() {
    return (
    <div>
		<Helmet>
			<meta charSet="utf-8" />
            <title>Dreidel Duel</title>
        </Helmet>
        <Header data={data}/>
        <div className={styles.scoreboard}>
			<Main />
		</div>
      </div>
    );
  }
}
