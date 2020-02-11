# 2.4.1 - JS Events

---

## Situation

Open the door, when someone is there.

<img src='./assets/door.gif' />

---

## Event-driven Programming

<img src='./assets/fig1_event.png' />

---

### Event Types

<img src='./assets/event_types.jpg' />

[Source](https://data-flair.training/blogs/javascript-event-types/)

---

#### User Interface Events

- `load`
- `unload`
- `error`
- `resize`
- `scroll`

---

#### Focus and Blur Events

These events fire when the HTML elements you can interact with gain/ lose focus.

- `focus` // when element is selected
- `blur` // when unselected (user clicked away)
- `focusin` (_new; not supported by Firefox_)
- `focusout` (_new; same as blur; not supported by Firefox_)

---

##### Mouse Events

- `click` //when user clicks
- `dblclick` // double click
- `mousedown`
- `mouseup`
- `mouseover`
- `mouseout`
- `mousemove`

---

##### Keyboard Events

- `input`
- `keydown`
- `keypress`
- `keyup`

---

### Form Events

- `submit` 
- `change` 
- `input`

---

### HTML5 Events

- `DOMContentLoaded`  // when element is loaded
- `hashchange`  // when navigating to a specific section of a page (using ID)
- `beforeunload`  // to use when user is exiting without saving or in a transaction

---

### CSS Events

- `transitionend` // at end of a transition 
- `animationstart` // at the start of an animation
- `animationend`  // at the end of an animation

---

### Events and DOM Nodes

All DOM nodes have methods we can use to _notify_ us of an event.

- [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

```js
// Example

const button = document.getElementById('btn');

//define function
function handleOuch = function(){
    console.log('ouch!');
};
//add event
button.addEventListener('click', handleOuch);

//revove event
button.removeEventListener('click', handleOuch);


```

---

### [Event Object](https://www.w3schools.com/jsref/obj_event.asp)

Event handler functions are passed an argument, when events are triggered.

This object includes lots of stuff.

- `preventDefault()`
- `target`
- `stopPropagation()`

---
    
### Default Actions

Some events have _default_ actions associated to them.

- click a link //sends to a url
- press down arrow // scrolls down
- click `submit` in a Form //

In most cases handlers are called _before_ the default action takes place.

You can prevent the _default_ action from happening by calling `event.preventDefault();` in the eventListener function.

---
    
### target

- The  `target` property refers to the node where they originated. (example)
- With an `input`, use `event.target.value` to read what was entered into an `input`.

---

### Propagation

Handlers registered on nodes with children will also receive events that happen in the children.

```html
<div>
    <ul>
        <li><a href="#"><img scr="..."></a></li>
        ...
    </ul>
</div>
```

---

### 3 Phases of Event Propagation

- The Event Capture Phase
- The Event Target Phase
- The Event Bubbling Phase

**most** events bubble

---

<img src='./assets/propagation_bubbling.png' />

[Source](https://www.sitepoint.com/event-bubbling-javascript/)

---

`<p>A paragraph with a <button id="the-btn">button</button>.</p>`

```js
    
let para = document.querySelector("p");
let button = document.querySelector("button");

para.addEventListener("mousedown", () => {
    console.log("Handler for paragraph.");
});
//a click on a button would trigger button event first and then the paragraph event
button.addEventListener("mousedown", event => {
    console.log("Handler for button.");
    // 2 is for a right click
    // a right click would prevent the event bubbling on the paragragh
    if (event.button == 2) event.stopPropagation();
});


```
---

## Events and the Event Loop

Events can only be processed when _nothing_ else is running.

This means that other page processes will be delayed until there is time to process it.

This can occur if you have long-running event handlers, or _lots_ of short-running ones.

---

[Read a little more deeply...](https://eloquentjavascript.net/15_event.html)

---
