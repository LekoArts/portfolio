import React from "react";
import cx from "classnames";
import styles from "./Waves.module.scss";

export default class Waves extends React.Component {
    render() {
        const orientation = cx(styles.waveWrapper, {
            [styles.bottom]: this.props.bottom,
            [styles.top]: !!this.props.top
        });
        return (
            <div className={orientation}>
                <div className={styles.position}>
                    <div className={styles.seperator}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920.5 100.97"><title>Seperator</title><g className={styles.seperatorForm} data-name="Seperator"><g id="Seperator_1" data-name="Seperator 1"><path d="M960,100C718.7,100,300,0,0,0V101H1920V0C1620,0,1201.3,100,960,100Z" /></g></g></svg>
                    </div>
                    <div className={styles.waves}>
                        <div className={styles.waveOne}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 131.26"><path className={styles.waveOneAnimate} d="M0,131.26c124.63-52.42,416-201.59,960.5-92,457.07,92,601.06-118,959.5,92Z" /></svg>
                        </div>
                        <div className={styles.waveTwo}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 88.23"><path className={styles.waveTwoAnimate} d="M0,57.31s235.47-44.64,525.11-56c281.77-11,421.39,51,669,66,238.05,14.42,355.48-39,493.48-51C1799.63,6.56,1920,79.81,1920,79.81v28.42H0Z" /></svg>
                        </div>
                        <div className={styles.waveThree}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 90.55"><path className={styles.waveThreeAnimate} d="M0,44.4s259.63,54,402.12,19.5,352.48-84,507-49.5,306,73.5,399,39S1419.07-9,1495.56,2.71,1755,93.9,1920,45.9V90.82H0Z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}