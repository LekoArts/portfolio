import React from "react";
import styles from "./ContainerBig.module.scss";

export default class ContainerBig extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className={styles.containerBig}>
                {children}
            </div>
        );
    }
}