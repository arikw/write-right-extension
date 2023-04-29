const
  pressedKeys = [];

let
  isShortcutSequenceBroken = false;

// A function that checks if a character is an RTL character
function isRTL(char) {
  // The range of unicode code points for RTL scripts
  const rtlRange = new RegExp("[" +
    "\u0590-\u05FF" + // Hebrew
    "\u0600-\u06FF" + // Arabic
    "\u0700-\u074F" + // Syriac
    "\u0750-\u077F" + // Arabic Supplement
    "\u0780-\u07BF" + // Thaana
    "\u08A0-\u08FF" + // Arabic Extended-A
    "\uFB1D-\uFDFF" + // Hebrew Presentation Forms and Arabic Presentation Forms-A
    "\uFE70-\uFEFF" + // Arabic Presentation Forms-B
    "\u{10E60}-\u{10E7F}" + // Rumi Numeral Symbols
    "\u{1EE00}-\u{1EEFF}" + // Arabic Mathematical Alphabetic Symbols
  "]", "u");
  return rtlRange.test(char);
}

// A function that sets the writing direction and text alignment of an element
function setDirection(element, dir, isManual) {
  element.style.direction = dir; // Set the direction attribute
  const textAlign = window.getComputedStyle(element).textAlign;
  // Check if the current text alignment is right or left
  if (textAlign === "right" || textAlign === "left") {
    element.style.textAlign = "start"; // Set the text alignment to start
  }
  if (isManual) {
    element.dataset.auto = "false";
  }
}

// A function that checks if an element is editable
function isEditable(element) {
  return element.isContentEditable || element.tagName === "INPUT" || element.tagName === "TEXTAREA";
}

// A function that determines if an input field element's direction should be changed automatically
function shouldAutoChangeDirection(element) {
  // Get the auto attribute of the element
  const auto = element.dataset.auto;
  // Return true if auto is not false
  if (auto === "false") {
    return false;
  }
  // Get the direction of the html and body elements
  const htmlDir = document.documentElement.getAttribute("dir") || document.documentElement.style.direction;
  const bodyDir = document.body.getAttribute("dir") || document.body.style.direction;

  // Get the computed value of the text alignment and make sure that if it's "right",
  // then it wasn't inherited from the parent
  const parentEl = element.parentElement;
  const parentStyle = parentEl.getAttribute('style');
  parentEl.style.textAlign = 'start'; // parent is set to have a value other than "right" as text alignment
  const textAlign = window.getComputedStyle(element).textAlign;
  parentStyle ? parentEl.setAttribute('style', parentStyle) : parentEl.removeAttribute('style'); // restore parent style
  // Return true if the direction is not rtl or the text alignment is not right
  return (htmlDir !== "rtl" && bodyDir !== "rtl") || textAlign !== "right";
}

// A function that gets the value of an element
function getValue(element) {
  // check if the element is contenteditable
  if (element.contentEditable === "true") {
    return element.textContent;
  }
  
  return element.value;
}

// create a function that adds a key to the array when it is pressed
function handleKeydown(event) {

  if (pressedKeys.length === 0) {
    isShortcutSequenceBroken = false;
  }

  // get the key code of the pressed key
  let keyCode = event.keyCode;
  // check if the key is not alre
  if (!pressedKeys.find(ev => (ev.keyCode === keyCode))) {
    // add the key to the array
    pressedKeys.push(event);
  }
}

// A function that handles the keyup event on an element
function handleKeyup(event) {

  const currentPressedKeys = [...pressedKeys];

  // get the key code of the released key
  const keyCode = event.keyCode;
  // get the index of the key in the array
  const index = pressedKeys.findIndex(ev => (ev.keyCode === keyCode));
  // check if the key is in the array
  if (index > -1) {
    // remove the key from the array
    pressedKeys.splice(index, 1);
  }

  if ((currentPressedKeys.length !== 2) || ((event.key !== 'Control') && (event.key !== 'Shift'))) {
    isShortcutSequenceBroken = true;
  }

  if (isShortcutSequenceBroken) {
    return;
  }

  // Get the element that triggered the event
  const element = event.target;
  if (!isEditable(element)) {
    return;
  }

  const lastKeydownEvent = currentPressedKeys[1];

  // Check if the user pressed the right control and right shift keys
  if (lastKeydownEvent.ctrlKey && lastKeydownEvent.shiftKey && lastKeydownEvent.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
    // Set the direction to rtl and disable auto detection
    setDirection(element, "rtl", true);
  } else if (lastKeydownEvent.ctrlKey && lastKeydownEvent.shiftKey && lastKeydownEvent.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
    // Set the direction to ltr and disable auto detection
    setDirection(element, "ltr", true);
  }
}

// A function that handles the input event on an element
function handleInput(event) {
  // Get the element that triggered the event
  const element = event.target;
  // Check if the element is editable
  if (isEditable(element) && (element.type !== 'password')) {
    // Get the value of the element
    const value = getValue(element);
    // Check if the value is empty
    if (value === "") {
      // Re-enable auto detection
      element.dataset.auto = "true";
    } else {
      // Check if auto detection is enabled
      if (shouldAutoChangeDirection(element)) {
        // Find the first word character in the value
        const match = value.match(/\p{L}/u);
        // Check if there is a match
        if (match) {
          // Get the first word character
          const char = match[0];
          // Check if it is an RTL character
          if (isRTL(char)) {
            // Set the direction to rtl
            setDirection(element, "rtl");
          } else {
            // Set the direction to ltr
            setDirection(element, "ltr");
          }
        }
      }
    }
  }
}

function handleFocus(event) {
  pressedKeys.splice(0, pressedKeys.length);
}

// Add event listeners for keydown and input events on the document
document.addEventListener("keydown", handleKeydown);
document.addEventListener("keyup", handleKeyup);
document.addEventListener("input", handleInput);
window.addEventListener("focus", handleFocus);