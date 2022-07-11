import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/chapters";

export function getCourseChapters(courseId) {
	return fetch(baseUrl + `?courseId=${courseId}`)
		.then(handleResponse)
		.catch(handleError);
}

export function saveCourseChapter(chapter) {
	return fetch(baseUrl + (chapter.id || ""), {
		method: chapter.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
		headers: { "content-type": "application/json" },
		body: JSON.stringify(chapter),
	})
		.then(handleResponse)
		.catch(handleError);
}

export function deleteCourseChapter(courseId) {
	return fetch(baseUrl + courseId, { method: "DELETE" })
		.then(handleResponse)
		.catch(handleError);
}