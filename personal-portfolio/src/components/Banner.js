import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
	const [description, setDescription] = useState("");
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ["Web Developer", "API developer", "Telegram bot developer"];
	const period = 2000;

	useEffect(() => {
		if (description === "") {
			const fetchDescription = async () => {
				const response = await fetch("https://portfoilo03.herokuapp.com/about");
				const data = await response.json();
				setDescription(data?.text);
			};
			fetchDescription();
		}
	}, []);
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
			setIndex(prevIndex => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex(prevIndex => prevIndex + 1);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{() => (
								<div>
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
									<a
										className="text-decoration-none text-white "
										href="#connect"
									>
										Let’s Connect <ArrowRightCircle size={25} />
									</a>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div>
									<img src={headerImg} alt="Header Img" />
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
