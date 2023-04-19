// A function that checks if a character is an RTL character
function isRTL(char) {
  // The range of unicode code points for RTL scripts
  const rtlRange = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return rtlRange.test(char);
}

// A function that sets the writing direction and text alignment of an element
function setDirection(element, dir) {
  element.style.direction = dir; // Set the direction attribute
  element.style.textAlign = "start"; // Set the text alignment to start
  console.log(`Direction switched to ${dir}`); // Log to the console
}

// A function that handles the keydown event on an element
function handleKeydown(event) {
  // Get the element that triggered the event
  let element = event.target;
  // Check if the element is editable
  if (element.isContentEditable || element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
    // Check if the user pressed the right control and right shift keys
    if (event.ctrlKey && event.shiftKey && event.location === 2) {
      // Set the direction to rtl and disable auto detection
      setDirection(element, "rtl");
      element.dataset.auto = "false";
    }
    // Check if the user pressed the left control and left shift keys
    if (event.ctrlKey && event.shiftKey && event.location === 1) {
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
  // Check if the element is editable and has auto detection enabled
  if ((element.isContentEditable || element.tagName === "INPUT" || element.tagName === "TEXTAREA") && element.dataset.auto !== "false") {
    // Get the value of the element
    let value = element.value || element.textContent;
    // Check if the value is empty
    if (value === "") {
      // Re-enable auto detection
      element.dataset.auto = "true";
    } else {
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

// Add event listeners for keydown and input events on the document
document.addEventListener("keydown", handleKeydown);
document.addEventListener("input", handleInput);