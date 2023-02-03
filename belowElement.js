/**
 * @desc Given the current Position(y) return closest element below it in given container
 * @param {Element} container - the HTML element inside which we find closest Below Element
 * @param {number} y - the y position of relative to which we find the closest element
 * @return {Element} closest element below the Element in container whose coordinate was y.
 */

export const getBelowElement = (container, y) => {
	// Get all draggable cards except card being currently dragged
	const draggableElements = [
		...container.querySelectorAll(".draggable:not(.dragging)"),
	];
	const belowElement = draggableElements.reduce(
		(belowElement, element) => {
			const elementPos = element.getBoundingClientRect();
			const dis = (elementPos.bottom + elementPos.top) / 2 - y;
			if (dis >= 0 && dis < belowElement.min_distance)
				return { min_distance: dis, afterElement: element };
			return belowElement;
		},
		{ min_distance: Number.POSITIVE_INFINITY }
	);
	return belowElement.afterElement;
};
