# Bing Conversation

**Human:**

 I have written a content script called "direction-switcher.js" for a chrome extension that automatically determine and set the writing direction of the focused input element.
In addition, the user will be able to override the writing direction, meaning to set it to rtl if the right control and the right shift keys are pressed, and to ltr if the left control and left shift keys are pressed. When a writing direction is set by the extension, it should should also align the text alignment to "start". It should log to the console whenever a direction switch occurs. It should change the writing direction only if the focused element is editable. The automatic direction ability will work as follows: while the user is typing inside a focused input field, check what is the first word character (ignore non-word characters) and if it's a word character of an RTL language, set the text direction accordingly, or set it to LTR otherwise. If the user had set the text direction explicitly using the shortcut, stop using the auto-direction ability. If the user cleared the input field, re-enable the auto detection mode. Use the input field itself to store the writing direction state, because a webpage can contain multiple input fields. In general, avoid writing repetitive duplicated code as much as possible. In general, avoid loops whenever possible. In general, use /\p{L}/u unicode regular expressions, to match word characters.

Write a manifest.json file.
Manifest v3 should be used.
The extension should be called "WriteRight" and a description property should be added to the manifest.
The extension does not use a background script.
Use as little permissions as possible and respect the user privacy.
It should use content script to inject to all of the frames the direction switching code, after they finish loading.
It should support about:srcdoc
Don't generate images
Don't add host_permissions property and keep the permission property empty

***

**Assistant:**

Here is a possible manifest.json file that meets your requirements:

```
{
  "manifest_version": 3,
  "name": "WriteRight",
  "version": "1.0",
  "description": "A chrome extension that automatically sets the writing direction of input elements and allows the user to override it with keyboard shortcuts.",
  "permissions": [],
  "content_scripts": [
    {
      "matches": ["&lt;all_urls&gt;"],
      "all_frames": true,
      "run_at": "document_end",
      "js": ["direction-switcher.js"]
    }
  ]
}
```



***

**Human:**

 add an icons property to the manifest for the following PNG files located in "icons/" folder: 16, 32, 48, 128

***

**Assistant:**

Sure, here is the updated manifest.json file with the icons property:

```
{
  "manifest_version": 3,
  "name": "WriteRight",
  "version": "1.0",
  "description": "A chrome extension that automatically sets the writing direction of input elements and allows the user to override it with keyboard shortcuts.",
  "permissions": [],
  "content_scripts": [
    {
      "matches": ["&lt;all_urls&gt;"],
      "all_frames": true,
      "run_at": "document_end",
      "js": ["direction-switcher.js"]
    }
  ],
  "icons": {
    "16": "icons/16.png",
    "32": "icons/32.png",
    "48": "icons/48.png",
    "128": "icons/128.png"
  }
}
```



***

**Human:**

 The extension's code will be uploaded to Github and the extension will be published on Chrome webstore.
Generate a README.md file

***

**Assistant:**

Here is a possible README.md file that describes your extension:

```
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
```



***

**Human:**

 Remove bullets 3, 4, 7 from the "Features" section.
Remove any mention of console messages and debugging.
In the "Usage" section, the explaination about keyboard shortcuts should mention that they are left control and shift for LTR, and right control and shift for RTL

***

**Assistant:**

Okay, here is the revised README.md file with the changes you requested:

```
# WriteRight

WriteRight is a chrome extension that automatically sets the writing direction of input elements and allows the user to override it with keyboard shortcuts.

## Features

- Automatically detects the writing direction of the first word character in an input element and sets it to RTL or LTR accordingly.
- Allows the user to manually set the writing direction to RTL with the right control and right shift keys, or to LTR with the left control and left shift keys.
- Only changes the writing direction of editable input elements.
- Re-enables the auto-detection mode when the input element is cleared.

## Installation

You can install WriteRight from the [Chrome webstore](https://chrome.google.com/webstore/category/extensions) or from [Github](https://github.com/WriteRight/WriteRight).

## Usage

After installing WriteRight, you can use it on any webpage that has input elements. Just start typing and the extension will automatically set the writing direction for you. If you want to override the writing direction, you can use the keyboard shortcuts: left control and left shift for LTR, or right control and right shift for RTL.

## License

WriteRight is licensed under the MIT license. See [LICENSE](https://github.com/WriteRight/WriteRight/blob/main/LICENSE) for more details.
```



***

**Human:**

 Add a "Development" section before the "License" section, explaining that the extension was generated using Bing's GPT and that the extension's source files are available on Github

***

**Assistant:**

Sure, here is the updated README.md file with the new section:

```
# WriteRight

WriteRight is a chrome extension that automatically sets the writing direction of input elements and allows the user to override it with keyboard shortcuts.

## Features

- Automatically detects the writing direction of the first word character in an input element and sets it to RTL or LTR accordingly.
- Allows the user to manually set the writing direction to RTL with the right control and right shift keys, or to LTR with the left control and left shift keys.
- Only changes the writing direction of editable input elements.
- Re-enables the auto-detection mode when the input element is cleared.

## Installation

You can install WriteRight from the [Chrome webstore](https://chrome.google.com/webstore/category/extensions) or from [Github](https://github.com/WriteRight/WriteRight).

## Usage

After installing WriteRight, you can use it on any webpage that has input elements. Just start typing and the extension will automatically set the writing direction for you. If you want to override the writing direction, you can use the keyboard shortcuts: left control and left shift for LTR, or right control and right shift for RTL.

## Development

WriteRight was generated using Bing's GPT, a powerful natural language processing model that can create various types of content. The extension's source files are available on [Github](https://github.com/WriteRight/WriteRight), where you can also report issues or suggest improvements.

## License

WriteRight is licensed under the MIT license. See [LICENSE](https://github.com/WriteRight/WriteRight/blob/main/LICENSE) for more details.
```



***

**Human:**

 reduce the description field in manifest.json to be maximum 132 characters long

***

**Assistant:**

Okay, here is a possible shorter description for the manifest.json file:

```
"description": "Automatically sets and overrides the writing direction of input elements."
```



***

**Human:**

 Suggest another description. Describe that the extension automatically detects the written language and sets the writing direction to RTL\LTR accordingly. Use maximum 132 characters.

***

**Assistant:**

Here is another possible description for the manifest.json file:

```
"description": "Detects the written language and sets the writing direction to RTL/LTR. Allows overrides."
```



***

**Human:**

 Remove the second sentence and don't use full stops

***

**Assistant:**

Okay, here is the final description for the manifest.json file:

```
"description": "Detects the written language and sets the writing direction to RTL/LTR"
```



***

**Human:**

 Add a "Use Cases" section and describe that on Windows, users are able to change the writing direction to LTR\RTL using CTRL + LEFT\RIGHT SHIFT shortcuts. This is something that is missing from Chrome on Linux and that this extension enables it.
Also, this extension automatically sets the writing direction in webpages that align the text to a fixed side - for example, In Google's website, the search field is fixed

***

**Assistant:**

Sure, here is the updated README.md file with the new section:

```
# WriteRight

WriteRight is a chrome extension that automatically sets the writing direction of input elements and allows the user to override it with keyboard shortcuts.

## Features

- Automatically detects the writing direction of the first word character in an input element and sets it to RTL or LTR accordingly.
- Allows the user to manually set the writing direction to RTL with the right control and right shift keys, or to LTR with the left control and left shift keys.
- Only changes the writing direction of editable input elements.
- Re-enables the auto-detection mode when the input element is cleared.

## Installation

You can install WriteRight from the [Chrome webstore](https://chrome.google.com/webstore/category/extensions) or from [Github](https://github.com/WriteRight/WriteRight).

## Usage

After installing WriteRight, you can use it on any webpage that has input elements. Just start typing and the extension will automatically set the writing direction for you. If you want to override the writing direction, you can use the keyboard shortcuts: left control and left shift for LTR, or right control and right shift for RTL.

## Use Cases

WriteRight is especially useful for users who need to switch between different writing directions frequently. For example, on Windows, users can change the writing direction to LTR or RTL using CTRL + LEFT or RIGHT SHIFT shortcuts. This feature is missing from Chrome on Linux, but WriteRight enables it. WriteRight also automatically sets the writing direction in webpages that align the text to a fixed side. For example, in Google's website, the search field is fixed to LTR, but WriteRight can change it to RTL if needed.

## Development

WriteRight was generated using Bing's GPT, a powerful natural language processing model that can create various types of content. The extension's source files are available on [Github](https://github.com/WriteRight/WriteRight), where you can also report issues or suggest improvements.

## License

WriteRight is licensed under the MIT license. See [LICENSE](https://github.com/WriteRight/WriteRight/blob/main/LICENSE) for more details.
```



***

**Human:**

 move the "Use Cases" section after the "Features" section

***

**Assistant:**

Okay, here is the revised README.md file with the section moved:

```
# WriteRight

WriteRight is a chrome extension that automatically sets the writing direction of input elements and allows the user to override it with keyboard shortcuts.

## Features

- Automatically detects the writing direction of the first word character in an input element and sets it to RTL or LTR accordingly.
- Allows the user to manually set the writing direction to RTL with the right control and right shift keys, or to LTR with the left control and left shift keys.
- Only changes the writing direction of editable input elements.
- Re-enables the auto-detection mode when the input element is cleared.

## Use Cases

WriteRight is especially useful for users who need to switch between different writing directions frequently. For example, on Windows, users can change the writing direction to LTR or RTL using CTRL + LEFT or RIGHT SHIFT shortcuts. This feature is missing from Chrome on Linux, but WriteRight enables it. WriteRight also automatically sets the writing direction in webpages that align the text to a fixed side. For example, in Google's website, the search field is fixed to LTR, but WriteRight can change it to RTL if needed.

## Installation

You can install WriteRight from the [Chrome webstore](https://chrome.google.com/webstore/category/extensions) or from [Github](https://github.com/WriteRight/WriteRight).

## Usage

After installing WriteRight, you can use it on any webpage that has input elements. Just start typing and the extension will automatically set the writing direction for you. If you want to override the writing direction, you can use the keyboard shortcuts: left control and left shift for LTR, or right control and right shift for RTL.

## Development

WriteRight was generated using Bing's GPT, a powerful natural language processing model that can create various types of content. The extension's source files are available on [Github](https://github.com/WriteRight/WriteRight), where you can also report issues or suggest improvements.

## License

WriteRight is licensed under the MIT license. See [LICENSE](https://github.com/WriteRight/WriteRight/blob/main/LICENSE) for more details.
```



***

**Human:**

 Use bullets in the "Use Cases" section

***

**Assistant:**

Sure, here is the updated README.md file with bullets in the “Use Cases” section:

```
# WriteRight

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

You can install WriteRight from the [Chrome webstore](https://chrome.google.com/webstore/category/extensions) or from [Github](https://github.com/WriteRight/WriteRight).

## Usage

After installing WriteRight, you can use it on any webpage that has input elements. Just start typing and the extension will automatically set the writing direction for you. If you want to override the writing direction, you can use the keyboard shortcuts: left control and left shift for LTR, or right control and right shift for RTL.

## Development

WriteRight was generated using Bing's GPT, a powerful natural language processing model that can create various types of content. The extension's source files are available on [Github](https://github.com/WriteRight/WriteRight), where you can also report issues or suggest improvements.

## License

WriteRight is licensed under the MIT license. See [LICENSE](https://github.com/WriteRight/WriteRight/blob/main/LICENSE) for more details.
```



***

**Human:**

 Use https://chrome.google.com/webstore/detail/writeright/gleiglfcmildnecmodgoeijleblhobjk as the URL of the extension in Chrome webstore, and https://github.com/arikw/write-right-extension as the extension's Github page

***

**Assistant:**

Okay, here is the final README.md file with the updated URLs:

```
# WriteRight

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

WriteRight was generated using Bing's GPT, a powerful natural language processing model that can create various types of content. The extension's source files are available on [Github](https://github.com/arikw/write-right-extension), where you can also report issues or suggest improvements.

## License

WriteRight is licensed under the MIT license. See [LICENSE](https://github.com/arikw/write-right-extension/blob/main/LICENSE) for more details.
```



***

**Human:**

 The license file will be in the "master" branch, not in the "main" branch. update accordingly

***

**Assistant:**

Okay, here is the updated README.md file with the correct branch name:

```
# WriteRight

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

WriteRight was generated using Bing's GPT, a powerful natural language processing model that can create various types of content. The extension's source files are available on [Github](https://github.com/arikw/write-right-extension), where you can also report issues or suggest improvements.

## License

WriteRight is licensed under the MIT license. See [LICENSE](https://github.com/arikw/write-right-extension/blob/master/LICENSE) for more details.
```



***

**Human:**

 create an MIT license and copyright it to Arik W (https://github.com/arikw)

***

**Assistant:**

Here is a possible LICENSE file that meets your requirements:

```
MIT License

Copyright (c) 2021 Arik W (https://github.com/arikw)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```



***

**Human:**

 Fix the year in the license to 2023

***

**Assistant:**

Okay, here is the updated LICENSE file with the correct year:

```
MIT License

Copyright (c) 2023 Arik W (https://github.com/arikw)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```



***
