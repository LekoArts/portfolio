import React from "react";
import cx from "classnames";
import styles from "./Wave.module.scss";

export default class Wave extends React.Component {
    render() {
        const orientation = cx(styles.waveWrapper, "wave", {
            [styles.bottom]: this.props.bottom,
            [styles.top]: !!this.props.top
        });
        return (
            <div className={orientation}>
                <div className={styles.wave}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 14" height="70" preserveAspectRatio="none"><path className={styles.waveAnimate} d="M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z" /></svg>
                </div>
            </div>
        );
    }
}