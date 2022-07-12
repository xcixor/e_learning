import React from "react";
import CourseSummary from "../CourseSummary";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../../tools/mockData";

const course = courses[0];
const author = authors[0];

it("renders", () => {
	const tree = renderer.create(
		<CourseSummary course={course} author={author} />
	);
	expect(tree).toMatchSnapshot();
});
