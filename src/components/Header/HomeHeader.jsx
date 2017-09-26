import React from "react";
import Waves from "../Waves/Waves";
import styles from "./HomeHeader.module.scss";

export default class HomeHeader extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <h1 className={styles.heroText}>
                    Grafikdesigner & <br /> Front-End Entwickler
                </h1>
                <Waves bottom />
            </div>
        );
    }
}