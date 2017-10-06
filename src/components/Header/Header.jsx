import React from "react";
import cx from "classnames";
import Wave from "../Wave/Waves";
import styles from "./Header.module.scss";

export default class Header extends React.Component {
    render() {
        const { children } = this.props;
        const classes = cx(styles.wrapper, { [styles.slim] : this.props.slim });
        return (
            <div className={classes}>
                <h1 className={styles.heroText}>
                    {children}
                </h1>
                <Wave bottom />
            </div>
        );
    }
}