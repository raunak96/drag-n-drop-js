# Make Drop n Drop Module in Vanilla JS (similar to cards Jira Dashboard)

- The HTML elements we want to drag and drop have `draggable` attribute set to true. We can also change cursor type to `move` for better aesthetics.
- For elements which are draggable, we have two events: `dragstart` and `dragend` where we can set different properties when dragging starts and ends respectively.
- For `container/element` over which we want to drag and drop, we have event called `dragover` which triggers when some element is being dragged over it.
  - During this event, we determine the nearest draggable element below current mouse position in the container and insert the currently dragged element before it.