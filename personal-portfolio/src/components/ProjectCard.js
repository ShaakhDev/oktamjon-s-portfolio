import { Col } from "react-bootstrap";
import github from "../assets/img/github.svg";
import demo from "../assets/img/demo.svg";

export const ProjectCard = ({
	title,
	text,
	image_url,
	demo_link,
	github_link,
}) => {
	return (
		<Col size={12} sm={6} md={4}>
			<div className="proj-imgbx">
				<img src={image_url} alt="project" />
				<div className="proj-txtx">
					<h4>{title}</h4>
					<span>{text.length > 70 ? `${text.slice(0, 70)}...` : text}</span>
					<br />
					{github_link && (
						<a
							title="go to the github repository"
							className="github-link"
							rel="noreferrer noopener"
							target="_blank"
							href={github_link}
						>
							<img src={github} alt="github" />
						</a>
					)}
					{demo_link && (
						<a
							title="go to the demo"
							target="_blank"
							rel="noreferrer noopener"
							className="demo-link"
							href={demo_link}
						>
							<img src={demo} alt="demo" />
						</a>
					)}
				</div>
			</div>
		</Col>
	);
};
