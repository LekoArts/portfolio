import React from "react";
import cx from "classnames";
import { Fade } from "react-reveal";
import Wave from "../Wave/Waves";
import styles from "./Header.module.scss";

export default class Header extends React.Component {
    render() {
        const { children } = this.props;
        const subTitle = this.props.subTitle;
        const classes = cx(styles.wrapper, { [styles.slim] : this.props.slim });
        return (
            <div className={classes}>
                <Fade down>
                <div className={styles.heroText}>
                    <h1>
                        {children}
                    </h1>
                    <p className={styles.subTitle}>{subTitle}</p>
                </div>
                </Fade>
                <Wave bottom />
            </div>
        );
    }
}