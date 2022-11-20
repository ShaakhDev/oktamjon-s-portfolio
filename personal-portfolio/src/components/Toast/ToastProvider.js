import { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { ToastContext } from "./ToastContext";
import { Toast } from "./Toast";
import styles from "./Toast.module.css";

function generateId() {
	let first = (Math.random() * 46656) | 0;
	let second = (Math.random() * 46656) | 0;
	first = ("000" + first.toString(36)).slice(-3);
	second = ("000" + second.toString(36)).slice(-3);
	return first + second;
}

export const ToastProvider = props => {
	const [toasts, setToasts] = useState([]);
	const open = (content, result) => {
		setToasts(current => [...current, { id: generateId(), content, result }]);
	};

	const close = id => {
		setToasts(current => current.filter(toast => toast.id !== id));
	};

	const contextValue = useMemo(() => ({ open }), []);

	return (
		<ToastContext.Provider value={contextValue}>
			{props.children}
			{createPortal(
				<div className={styles.toasts__wrapper}>
					{toasts.map(toast => (
						<Toast
							key={toast.id}
							result={toast.result}
							close={() => close(toast.id)}
						>
							{toast.result === "success" ? <>&#x2714;</> : <>&#10008;</>}
							&nbsp; &nbsp;
							{toast.content}
						</Toast>
					))}
				</div>,
				document.body
			)}
		</ToastContext.Provider>
	);
};
