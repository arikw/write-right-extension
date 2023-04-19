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
function setDirection(element, dir) {
  element.style.direction = dir; // Set the direction attribute
  element.style.textAlign = "start"; // Set the text alignment to start
  console.log(`Direction switched to ${dir}`); // Log to the console
}

// A function that checks if an element is editable
function isEditable(element) {
  return element.isContentEditable || element.tagName === "INPUT" || element.tagName === "TEXTAREA";
}

// A function that gets the value of an element
function getValue(element) {
  return element.value || element.textContent;
}

// A function that handles the keydown event on an element
function handleKeydown(event) {
  // Get the element that triggered the event
  let element = event.target;
  // Check if the element is editable
  if (isEditable(element)) {
    // Check if the user pressed the right control and right shift keys
    if (event.ctrlKey && event.shiftKey && event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
      // Set the direction to rtl and disable auto detection
      setDirection(element, "rtl");
      element.dataset.auto = "false";
    }
    // Check if the user pressed the left control and left shift keys
    if (event.ctrlKey && event.shiftKey && event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
      // Set the direction to ltr and disable auto detection
      setDirection(element, "ltr");
      element.dataset.auto = "false";
    }
  }
}

// A function that handles the input event on an element
function handleInput(event) {
  // Get the element that triggered the event
  let element = event.target;
  // Check if the element is editable
  if (isEditable(element)) {
    // Get the value of the element
    let value = getValue(element);
    // Check if the value is empty
    if (value === "") {
      // Re-enable auto detection
      element.dataset.auto = "true";
    } else {
      // Check if auto detection is enabled
      if (element.dataset.auto !== "false") {
        // Find the first word character in the value
        let match = value.match(/\p{L}/u);
        // Check if there is a match
        if (match) {
          // Get the first word character
          let char = match[0];
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

// Add event listeners for keydown and input events on the document
document.addEventListener("keydown", handleKeydown);
document.addEventListener("input", handleInput);