import React, { Component } from 'react';
import cx from "classnames";
import styles from "./Line.module.scss";

export default class Line extends Component {
    render() {
        const color = cx(styles.line, "line", {
            [styles.white]: this.props.white
        });
        return (
            <div className={color} />
        )
  }
}


