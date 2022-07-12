import React from "react";
import PropTypes from "prop-types";

const CourseSummary = ({ course, author }) => {
	return (
		<div className="jumbotron">
			<h2 className="display-6">{course.title}</h2>
			<h3 className="display-7">{author.name}</h3>
			<p className="lead">
				Course information.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Start Course
				</a>
			</p>
		</div>
	);
};

CourseSummary.propTypes = {
	course: PropTypes.object.isRequired,
	author: PropTypes.object.isRequired,
};

export default CourseSummary;
