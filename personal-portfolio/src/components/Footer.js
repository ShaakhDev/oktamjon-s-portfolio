import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import telegram from "../assets/img/telegram.svg";
import youtube from "../assets/img/youtube.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<MailchimpForm />
					<Col size={12} sm={6}>
						<img src={logo} alt="Logo" />
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
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
