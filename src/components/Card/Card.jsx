import React, { Component } from 'react';
import cx from "classnames";
import styles from "./Card.module.scss";

export default class Card extends Component {
    render() {
        const { children } = this.props;
        const color = cx(styles.card, {
            [styles.discord]: this.props.discord,
            [styles.instagram]: this.props.instagram,
            [styles.behance]: this.props.behance,
            [styles.youtube]: this.props.youtube
        });
        return (
        <a href={this.props.link} rel="noreferrer noopener" target="_blank" className={color}>
            {children}
        </a>
        )
  }
}
