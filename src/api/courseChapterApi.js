import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/chapters";

export function getCourseChapters(courseId) {
	return fetch(baseUrl + `?courseId=${courseId}`)
		.then(handleResponse)
		.catch(handleError);
}
