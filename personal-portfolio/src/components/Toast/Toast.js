import React from "react";
import styles from "./Toast.module.css";
import { useTimeout } from "./useTimeout";

export const Toast = props => {
	useTimeout(props.close, 5000);
	return (
		<div className={[styles.toast, styles[`${props.result}`]].join(" ")}>
			<div className={styles.toast__text}>{props.children}</div>
			<div>
				<button onClick={props.close} className={styles.toast__closeBtn}>
					x
				</button>
			</div>
		</div>
	);
};
