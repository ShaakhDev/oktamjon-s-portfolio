import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo1.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import telegram from "../assets/img/telegram.svg";
import youtube from "../assets/img/youtube.svg";

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center pt-5">
					<Col size={12} sm={6} className="footer-logo">
						<img src={logo} alt="Logo" />
					</Col>
					<Col size={12} sm={6} className="text-center  text-sm-end">
						<div className="social-icon">
							<a href="https://linkedin.com/in/uktamjon-dilbarov-183806221">
								<img src={navIcon1} alt="linkedin icon" />
							</a>
							<a href="https://t.me/proger03">
								<img src={telegram} alt="telegram icon" />
							</a>
							<a href="https://youtube.com/c/YOUNGPROGERS">
								<img src={youtube} alt="you tube icon" />
							</a>
						</div>
						<p>
							Copyright {new Date(Date.now()).getFullYear()}. All Rights
							Reserved
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
