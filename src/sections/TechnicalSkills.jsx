import React from "react";
import "../styles/tech-skills.scss";
import skills from "../data/skills.json";

export default function TechnicalSkills() {
	return (
		<section className="Tech-Skills" id="skills">
			<h3>🛠️ Technical Skills</h3>
			<p>
				I'm a full-stack developer focused on the MERN stack. I can learn any
				other technologies. I'm always open to communications and new
				opportunities.
			</p>

			{skills.map(({ category, technologies }, key) => (
				<React.Fragment key={key}>
					<h4>{category}</h4>

					<ul className="columns-2">
						{technologies.map((tech, key) => (
							<li key={key}>
								<img
									src={`https://img.shields.io/badge/${tech}-informational?style=flat&logo=${tech
										.split("-")[1]
										.toLocaleLowerCase()}&logoColor=pink&color=2bbc8a`}
									alt={tech}
								/>
							</li>
						))}
					</ul>
				</React.Fragment>
			))}
		</section>
	);
}

// ![](https://img.shields.io/badge/Tools-Mongo-informational?style=flat&logo=mongodb&logoColor=pink&color=2bbc8a)
