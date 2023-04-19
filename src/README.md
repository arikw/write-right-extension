# WriteRight

WriteRight is a chrome extension that automatically sets the writing direction of input elements and allows the user to override it with keyboard shortcuts.

## Features

- Automatically detects the writing direction of the first word character in an input element and sets it to RTL or LTR accordingly.
- Allows the user to manually set the writing direction to RTL with the right control and right shift keys, or to LTR with the left control and left shift keys.
- Aligns the text alignment to "start" when the writing direction is set by the extension.
- Logs to the console whenever a direction switch occurs.
- Only changes the writing direction of editable input elements.
- Re-enables the auto-detection mode when the input element is cleared.
- Supports about:srcdoc pages.

## Installation

You can install WriteRight from the [Chrome webstore](https://chrome.google.com/webstore/category/extensions) or from [Github](https://github.com/WriteRight/WriteRight).

## Usage

After installing WriteRight, you can use it on any webpage that has input elements. Just start typing and the extension will automatically set the writing direction for you. You can also use the keyboard shortcuts to override the writing direction if you want. You can see the console messages for debugging purposes.

## License

WriteRight is licensed under the MIT license. See [LICENSE](https://github.com/WriteRight/WriteRight/blob/main/LICENSE) for more details.