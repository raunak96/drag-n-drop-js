import { getBelowElement } from "./belowElement.js";

// Get all container & draggable elements
const containers = document.querySelectorAll(".container");
const draggables = document.querySelectorAll(".draggable");

draggables.forEach(draggable => {
	draggable.addEventListener("dragstart", e => {
		draggable.classList.add("dragging");
	});

	draggable.addEventListener("dragend", () => {
		draggable.classList.remove("dragging");
	});
});

containers.forEach(container => {
	// This event called when something is being dragged over this element
	container.addEventListener("dragover", e => {
		e.preventDefault(); // this removes not-allowed cursor when dragging over this container
		// get element being currently dragged
		const draggable = document.querySelector(".dragging");
		const nextElement = getBelowElement(container, e.clientY);
		if (nextElement) container.insertBefore(draggable, nextElement);
		else container.appendChild(draggable);
	});
});
