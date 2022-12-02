import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import contactImg from "../assets/img/contact-img.svg";
import { useToast } from "./Toast";

export const Contact = () => {
	const formInitialDetails = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	};
	const toast = useToast();
	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState("Send");

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setButtonText("Sending...");

		emailjs
			.send(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_EMAIL_TEMPLATE_ID,
				{
					name: `${formDetails.firstName} ${formDetails.lastName}`,
					message: formDetails.message,
					phone: formDetails.phone,
					reply_to: formDetails.email,
				},
				process.env.REACT_APP_USER_ID
			)
			.then(() => {
				setButtonText("Send");
				toast.open("Message sent successfully", "success");
				setFormDetails(formInitialDetails);
			})
			.catch(() => {
				toast.open("Something went wrong! Please try again.", "error");
				setButtonText("Send");
			});
	};

	return (
		<section className="contact" id="connect">
			<Container>
				<Row className="align-items-center">
					<Col size={12} md={6} className="contact-bg">
						<img src={contactImg} alt="Contact Us" />
					</Col>
					<Col size={12} md={6}>
						<div>
							<h2>Get In Touch</h2>
							<form onSubmit={handleSubmit}>
								<Row>
									<Col size={12} sm={6} className="px-2">
										<input
											type="text"
											value={formDetails.firstName}
											placeholder="First Name"
											onChange={e => onFormUpdate("firstName", e.target.value)}
										/>
									</Col>
									<Col size={12} sm={6} className="px-2">
										<input
											type="text"
											value={formDetails.lasttName}
											placeholder="Last Name"
											onChange={e => onFormUpdate("lastName", e.target.value)}
										/>
									</Col>
									<Col size={12} sm={6} className="px-2">
										<input
											type="email"
											value={formDetails.email}
											placeholder="Email Address"
											onChange={e => onFormUpdate("email", e.target.value)}
										/>
									</Col>
									<Col size={12} sm={6} className="px-2">
										<input
											type="tel"
											value={formDetails.phone}
											placeholder="Phone No."
											onChange={e => onFormUpdate("phone", e.target.value)}
										/>
									</Col>
									<Col size={12} className="px-2">
										<textarea
											rows="6"
											value={formDetails.message}
											placeholder="Message"
											onChange={e => onFormUpdate("message", e.target.value)}
										></textarea>
										<button type="submit">
											<span>{buttonText}</span>
										</button>
									</Col>
								</Row>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
