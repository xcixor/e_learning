import React from "react";
import { mount } from "enzyme";
import { authors, courses } from "../../../tools/mockData";
import { CourseDetailPage } from "../CourseDetailPage";

function render(args) {
	const defaultProps = {
		authors,
		courses,
		// Passed from React Router in real app, so just stubbing in for test.
		// Could also choose to use MemoryRouter as shown in Header.test.js,
		// or even wrap with React Router, depending on whether I
		// need to test React Router related behavior.
		history: {},
		saveCourse: jest.fn(),
		loadAuthors: jest.fn(),
		loadCourses: jest.fn(),
		match: {},
		author: authors[0],
		course: courses[0],
	};

	const props = { ...defaultProps, ...args };

	return mount(<CourseDetailPage {...props} />);
}

it("renders children", () => {
	const wrapper = render();
  expect(wrapper).toBeTruthy();
});
