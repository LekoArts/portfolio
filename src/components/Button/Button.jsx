import React, { Component } from 'react';
import cx from "classnames";
import styles from "./Button.module.scss";

export default class Button extends Component {
    render() {
        const color = cx(styles.button, {
            [styles.small]: this.props.small,
            [styles.blue]: this.props.blue,
            [styles.orange]: this.props.orange
        });
        return (
        <button className={color}>
            {this.props.text}
        </button>
        )
  }
}
