import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/courses/";

export function getCourseChapters(courseId) {
	return fetch(baseUrl + `${courseId}/chapters/`)
		.then(handleResponse)
		.catch(handleError);
}
