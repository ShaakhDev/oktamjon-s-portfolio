import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
	const [allCategories, setAllCategories] = useState([]);
	const [allProjects, setAllProjects] = useState([]);

	useEffect(() => {
		if (allCategories.length === 0) {
			const fetchCategories = async () => {
				const response = await fetch(
					`${process.env.REACT_APP_API_URL}/category/all`
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
					`${process.env.REACT_APP_API_URL}/project/all`
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
						<h2>Projects</h2>

						<Tab.Container id="projects-tabs" defaultActiveKey="0">
							<Nav
								variant="pills"
								className="nav-pills mb-5 justify-content-center align-items-center"
								id="pills-tab"
							>
								<Nav.Item>
									<Nav.Link eventKey="0">All</Nav.Link>
								</Nav.Item>
								{allCategories.map(category => (
									<Nav.Item key={category.id}>
										<Nav.Link eventKey={category.id}>{category.title}</Nav.Link>
									</Nav.Item>
								))}
							</Nav>
							<Tab.Content id="slideInUp">
								<Tab.Pane eventKey="0">
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
							</Tab.Content>
						</Tab.Container>
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
