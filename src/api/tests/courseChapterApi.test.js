import { chapters } from "../../../tools/mockData";
import * as courseChapterApi from "../courseChapterApi";
import fetchMock from "fetch-mock";

describe("courseChapterApi calls", () => {
	afterEach(() => {
		fetchMock.restore();
	});

	describe("It should load a course chapters", () => {
		const courseId = 1;
		const courseChapters = chapters.filter((x) => x.courseId === courseId);
		it("#getCourseChapters() returns an array of chapters", () => {
			fetchMock.mock("*", {
				body: courseChapters,
				headers: { "content-type": "application/json" },
			});
			return courseChapterApi.getCourseChapters(courseId).then((data) => {
				console.log(data);
				expect(data).toBeDefined();
				expect(data.length).toBeGreaterThan(1);
				expect(data[0].title).toEqual("Course Overview");
			});
		});
	});
});
