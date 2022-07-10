import { createStore } from "redux";
import rootReducer from "../reducers";
import initialState from "../reducers/initialState";
import * as courseActions from "../actions/courseActions";

//add test for the store after creating and updating a course

it("Should handle creating courses", function () {
	// arrange
	const store = createStore(rootReducer, initialState);
	const course = {
		title: "Clean Code",
	};

	// act
	const action = courseActions.createCourseSuccess(course);
	store.dispatch(action);

	// assert
	const createdCourse = store.getState().courses[0];
	expect(createdCourse).toEqual(course);
});
