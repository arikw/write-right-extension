# Bing Conversation

**Human:**

 write a js function that sets the writing direction of the focused element to rtl if the right control and the right shift are pressed, and to ltr if the left control and left shift is pressed. it should change the writing direction only if the focused element is an input field or a text field.

***

**Assistant:**

Here is a possible js function that does what you asked for:

```
function setWritingDirection(event) {
  // get the focused element
  let element = document.activeElement;
  // check if it is an input or a text field
  if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
    // check if the right control and right shift are pressed
    if (event.ctrlKey &amp;&amp; event.shiftKey &amp;&amp; event.code === "ShiftRight") {
      // set the writing direction to rtl
      element.style.direction = "rtl";
    }
    // check if the left control and left shift are pressed
    else if (event.ctrlKey &amp;&amp; event.shiftKey &amp;&amp; event.code === "ShiftLeft") {
      // set the writing direction to ltr
      element.style.direction = "ltr";
    }
  }
}

// add an event listener for keydown events
document.addEventListener("keydown", setWritingDirection);
```



***

**Human:**

 add console logs when the direction is changed and also change the text alignment of the element to "start"

***

**Assistant:**

Here is the modified js function that does what you asked for:

```
function setWritingDirection(event) {
  // get the focused element
  let element = document.activeElement;
  // check if it is an input or a text field
  if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
    // check if the right control and right shift are pressed
    if (event.ctrlKey &amp;&amp; event.shiftKey &amp;&amp; event.code === "ShiftRight") {
      // set the writing direction to rtl
      element.style.direction = "rtl";
      // set the text alignment to start
      element.style.textAlign = "start";
      // log the direction change
      console.log("Writing direction changed to rtl");
    }
    // check if the left control and left shift are pressed
    else if (event.ctrlKey &amp;&amp; event.shiftKey &amp;&amp; event.code === "ShiftLeft") {
      // set the writing direction to ltr
      element.style.direction = "ltr";
      // set the text alignment to start
      element.style.textAlign = "start";
      // log the direction change
      console.log("Writing direction changed to ltr");
    }
  }
}

// add an event listener for keydown events
document.addEventListener("keydown", setWritingDirection);
```



***

**Human:**

 I want to make this code as part of a browser extension. what would be a good name for the extension?

***

**Assistant:**
Here are some possible names for the extension:



- Direction Switcher: A simple and intuitive name that describes the main functionality of the extension.

- Ctrl+Shift+Dir: A name that uses the keyboard shortcuts as a mnemonic device to help users remember how to use the extension.

- BiDi Helper: A name that refers to the bidirectional text support that the extension provides for input and text fields.

- Write Right: A catchy and clever name that plays on the words “right” and “write”, and also implies that the extension helps users write in the right direction.

- Directional: A name that is short and simple, but also conveys the idea of changing the writing direction of elements.





***
