import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
	const [description, setDescription] = useState("");
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const toRotate = [
		"Backend developer",
		"Python Developer",
		"Telegram bot developer",
	];
	const period = 2000;

	useEffect(() => {
		if (description === "") {
			const fetchDescription = async () => {
				const response = await fetch(`${process.env.REACT_APP_API_URL}/about`);
				const data = await response.json();
				setDescription(data?.text);
			};
			fetchDescription();
		}
	}, [description]);

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta(prevDelta => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<div className="banner-box">
							<span className="tagline">Welcome to my Portfolio</span>
							<h1>
								{`Hi! I'm O’ktamjon`}{" "}
								<span
									className="txt-rotate"
									data-rotate='[ "Web Developer", "API Developer", "Telegram bot Developer" ]'
								>
									<span className="wrap">{text}</span>
								</span>
							</h1>
							<p>{description}</p>
							<a className="text-decoration-none text-white " href="#connect">
								Let’s Connect <ArrowRightCircle size={25} />
							</a>
						</div>
					</Col>
					<Col xs={12} md={6} xl={5} className="banner-img">
						<div>
							<img src={headerImg} alt="Header Img" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
