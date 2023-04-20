# Developing a Chrome Extension with Bing Chat AI

In this post, I will share my experience of developing a Chrome extension that automatically determines and sets the writing direction of the focused input element using Bing Chat AI. Bing Chat AI is a chat mode of Microsoft Bing search that can generate content such as code, essays, songs, etc.

## Background

I have prior knowledge of developing extensions for browsers, so I was curious to see if Bing Chat AI could help me with this task. I wanted to create an extension that would allow me to write in both left-to-right (LTR) and right-to-left (RTL) languages without having to manually switch the writing direction every time. In addition, I wanted to have the option to override the writing direction using keyboard shortcuts.

## The Process

At first, I've requested the bot to generate a JavaScript function that flips the writing direction of the current input element. To my surprise, the code worked!

I then requested to create a Chrome extension that does the same, but the generated code had unnecessary parts like a background script and permissions that were unneeded.

Each time I've requested a change to remove or change some parts of the output, I saw that I will hit the chat depth limitation of 20 prompts very soon, before I'll have a chance to continue develop the main logic.

I decided to concentrate on the content script file and to request its generation by using a single large prompt.

After the creation of the content script file, I tweaked my original prompt, wiped the conversation and regenerated the file again.

I iterated like that for a few times, until I thought the generated code was a solid basis to continue from there.

I've copied the output to a folder on my PC and loaded the extension to Chrome. I tested it on various websites and input fields and it worked as expected. I was able to write in both LTR and RTL languages and switch the writing direction using the keyboard shortcuts. The extension also aligned the text alignment to "start" and logged to the console whenever a direction switch occurred. It also detected the first word character of the input and set the writing direction accordingly, unless I had set it explicitly using the shortcut. If I cleared the input field, it re-enabled the auto detection mode.

## Pain Points

The process was not without challenges. I faced some pain points along the way, such as:

- I lost the chat a few times (closed the tab, forbidden word, chat limits, etc.) and it was like starting a conversation with another person that never saw the current code.
- I could paste a piece of code and request to change it, but I was limited to 2000 characters.
- Sometimes, the bot would decide that I've requested something forbidden and would stop the conversation. I had to try to pin down what word caused it and retry.
- Trying to tell the bot that there’s something specific about the style that needs to be fixed in a generated function sometimes led to non-working code. For example, I’ve requested to add comments, and it produced non-working code due to line breaks where not allowed.

## Tips

To overcome these pain points, I learned some tips that might be useful for anyone who wants to use Bing Chat AI for developing software:

- Save and update crucial prompts and keep them updated, so you'll be able to "load" the context to new chat conversations.
- If the chat response was interrupted due to a response length limitation, you can request the bot to continue from where it stopped.
- Avoid using words that might trigger the bot’s safety mechanism, even if they are not harmful in your context. For example, I found out that the word “developer” in the context of generating the “Pain Points” section ended the conversation. Try to use synonyms or rephrase your prompt if that happens.
- The same prompt might result in different code each time I regenerated the file. Sometimes the code was better, sometimes it was worse. I had to compare and choose the best version manually.

## Conclusion

In conclusion, I think Bing Chat AI is a powerful tool that can help developers with generating code and content for various purposes. It is not perfect, but it is impressive and fun to use. It can save time and effort, as well as inspire new ideas and solutions. I recommend giving it a try and see what you can create with it.

