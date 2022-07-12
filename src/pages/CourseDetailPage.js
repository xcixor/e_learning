import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CourseSummary from "../components/courses/CourseSummary";
import { loadCourses } from "../redux/actions/courseActions";
import { loadAuthors } from "../redux/actions/authorActions";
import Spinner from "../components/common/Spinner";

export function CourseDetailPage({
	author,
	courses,
	authors,
	loadAuthors,
	loadCourses,
	...props
}){
	const [course, setCourse] = useState({ ...props.course });
	useEffect(() => {
		if (courses.length === 0) {
			loadCourses().catch((error) => {
				alert("Loading courses failed" + error);
			});
		} else {
			setCourse({ ...props.course });
		}

		if (authors.length === 0) {
			loadAuthors().catch((error) => {
				alert("Loading authors failed" + error);
			});
		}
	}, [props.course]);
	return authors.length === 0 || courses.length === 0 ? (
		<Spinner />
	) : (
		<div>
			<CourseSummary course={course} author={author} />
		</div>
	);
};

export function getCourseBySlug(courses, slug) {
	return courses.find((course) => course.slug === slug) || null;
}

export function getCourseAuthor(authors, authorId) {
	return authors.find((author) => author.id === authorId) || null;
}

CourseDetailPage.propTypes = {
	course: PropTypes.object,
	author: PropTypes.object,
	authors: PropTypes.array.isRequired,
	courses: PropTypes.array.isRequired,
	loadCourses: PropTypes.func.isRequired,
	loadAuthors: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
	const slug = ownProps.match.params.slug;
	const course =
		slug && state.courses.length > 0
			? getCourseBySlug(state.courses, slug)
			: null;
	const author = course
		? getCourseAuthor(state.authors, course.authorId)
		: null;
	return {
		author,
		course,
		courses: state.courses,
		authors: state.authors,
	};
}

const mapDispatchToProps = {
	loadCourses,
	loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailPage);
