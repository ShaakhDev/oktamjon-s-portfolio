import django from "../assets/img/django.svg";
import telegramBot from "../assets/img/telegram-bot.svg";
import fastapi from "../assets/img/fastapi 1.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
		
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Skills</h2>

							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
							>
								<div className="item">
									<img src={django} alt="skill item" />
									<h5>Django</h5>
								</div>
								<div className="item">
									<img src={fastapi} alt="skill item" />
									<h5>Fast API</h5>
								</div>
								<div className="item">
									<img src={telegramBot} alt="skill item" />
									<h5>Telegram Bot Development</h5>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp} alt="sharp" />
		</section>
	);
};
