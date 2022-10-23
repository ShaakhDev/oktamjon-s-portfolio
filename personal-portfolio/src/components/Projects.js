import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
	const [allCategories, setAllCategories] = useState([]);
	const [allProjects, setAllProjects] = useState([]);

	useEffect(() => {
		if (allCategories.length === 0) {
			const fetchCategories = async () => {
				const response = await fetch(
					"https://portfoilo03.herokuapp.com/category/all"
				);
				const categories = await response.json();
				setAllCategories(categories);
			};
			fetchCategories();
		}
	}, []);

	useEffect(() => {
		if (allProjects.length === 0) {
			const fetchProjects = async () => {
				const response = await fetch(
					"https://portfoilo03.herokuapp.com/project/all"
				);
				const projects = await response.json();
				setAllProjects(projects);
			};
			fetchProjects();
		}
	}, []);

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{() => (
								<div>
									<h2>Projects</h2>
									<p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled it to make a
										type specimen book.
									</p>
									<Tab.Container id="projects-tabs" defaultActiveKey="all">
										<Nav
											variant="pills"
											className="nav-pills mb-5 justify-content-center align-items-center"
											id="pills-tab"
										>
											<Nav.Item>
												<Nav.Link eventKey="all">All</Nav.Link>
											</Nav.Item>
											{allCategories.map(category => (
												<Nav.Item key={category.id}>
													<Nav.Link eventKey={category.id}>
														{category.title}
													</Nav.Link>
												</Nav.Item>
											))}
										</Nav>
										<Tab.Content id="slideInUp">
											<Tab.Pane eventKey="all">
												<Row>
													{allProjects?.map((project, index) => {
														return <ProjectCard key={index} {...project} />;
													})}
												</Row>
											</Tab.Pane>
											{allCategories.map(category => (
												<Tab.Pane key={category.title} eventKey={category.id}>
													{category?.projects.length === 0 && (
														<h3 className="text-center">No Projects yet</h3>
													)}
													<Row>
														{category?.projects.map(project => (
															<ProjectCard key={project.id} {...project} />
														))}
													</Row>
												</Tab.Pane>
											))}
											<Tab.Pane eventKey="third">
												<p>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Cumque quam, quod neque provident velit, rem
													explicabo excepturi id illo molestiae blanditiis,
													eligendi dicta officiis asperiores delectus quasi
													inventore debitis quo.
												</p>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img
				className="background-image-right"
				src={colorSharp2}
				alt="background"
			/>
		</section>
	);
};
