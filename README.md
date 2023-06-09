# WriteRight

![logo](src/icons/128.png)

WriteRight is a chrome extension that automatically sets the writing direction of input elements and allows the user to override it with keyboard shortcuts.

## Features

- Automatically detects the writing direction of the first word character in an input element and sets it to RTL or LTR accordingly.
- Allows the user to manually set the writing direction to RTL with the right control and right shift keys, or to LTR with the left control and left shift keys.
- Only changes the writing direction of editable input elements.
- Re-enables the auto-detection mode when the input element is cleared.

## Use Cases

WriteRight is especially useful for users who need to switch between different writing directions frequently. Some examples are:

- On Windows, users can change the writing direction to LTR or RTL using CTRL + LEFT or RIGHT SHIFT shortcuts. This feature is missing from Chrome on Linux, but WriteRight enables it.
- WriteRight also automatically sets the writing direction in webpages that align the text to a fixed side. For example, in Google's website, the search field is fixed to LTR, but WriteRight can change it to RTL if needed.

## Installation

You can install WriteRight from the [Chrome webstore](https://chrome.google.com/webstore/detail/writeright/gleiglfcmildnecmodgoeijleblhobjk) or from [Github](https://github.com/arikw/write-right-extension).

## Usage

After installing WriteRight, you can use it on any webpage that has input elements. Just start typing and the extension will automatically set the writing direction for you. If you want to override the writing direction, you can use the keyboard shortcuts: left control and left shift for LTR, or right control and right shift for RTL.

## Development

WriteRight was generated using Bing's GPT, a powerful natural language processing model that can create various types of content. [Learn more about the development process here.](https://github.com/arikw/write-right-extension/blob/master/docs/development.md)

## License

WriteRight is licensed under the MIT license. See [LICENSE](https://github.com/arikw/write-right-extension/blob/master/LICENSE) for more details.