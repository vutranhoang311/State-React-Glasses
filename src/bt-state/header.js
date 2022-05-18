import React, { Component } from "react";
import styles from "./header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>TRY GLASSES APP ONLINE</h1>
      </div>
    );
  }
}

export default Header;
