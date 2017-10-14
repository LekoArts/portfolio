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
                <div className={styles.heroText}>
                    <Fade down>
                        <h1>
                            {children}
                        </h1>
                    </Fade>
                    <Fade down>
                        <p className={styles.subTitle}>{subTitle}</p>
                    </Fade>
                </div>
                <Wave bottom />
            </div>
        );
    }
}