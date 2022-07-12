import React from "react";
import { render } from "@testing-library/react";
import CourseSummary from "../CourseSummary";
import { courses, authors } from "../../../../tools/mockData";

const course = courses[0];
const author = authors[0];

function renderCourseForm(args) {
	let defaultProps = {
		author,
		course,
	};

	const props = { ...defaultProps, ...args };
	return render(<CourseSummary {...props} />);
}

it("should render Course Title", () => {
	const { getByText } = renderCourseForm();
	getByText("Securing React Apps with Auth0");
});

it('should render course author', () => {
	const { getByText } = renderCourseForm();
	getByText("Cory House");
});

