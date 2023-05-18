# Visual Studio Code Rounded UI

> **CAUTION:** This is by no means a finished "product." The instructions are quite hacky and may remain so until I create a proper extension (given the project recieves enough attention). An unfortunate side-effect of this is having to re-enable the script _every time you update VSCode_. Fortunately, it is very easy to re-enable the script, once you've already setup the files.

## Instructions
1. Install the extension: [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css).
2. Edit the User Settings JSON file (<kbd>F1</kbd> &rarr; "user settings json"). Add the following rule:
	
	**Windows**
	
		"vscode_custom_css.imports": [
			"file:///C:/Users/[username]/AppData/Roaming/Code/custom.css",
			"file:///C:/Users/[username]/AppData/Roaming/Code/custom.js"
		],
		
	**MacOS**
	
		"vscode_custom_css.imports": [
			"file:///Users/[username]/.vscode/custom.css",
			"file:///Users/[username]/.vscode/custom.js",
		],

	**Linux**

		"vscode_custom_css.imports": [
			"file:///home/[username]/.vscode/custom.css",
			"file:///home/[username]/.vscode/custom.js",
		],

3. Create `custom.css` and `custom.js` in the locations you defined in the settings.
4. Copy the code from the files in this repository into their respective files.
5. Go back into VSCode, enable the Custom CSS and JS Loader extension: <kbd>F1</kbd> &rarr; "enable custom css and js"
6. Press the button Restart Visual Studio Code in the popup.
7. If VSCode complains about "Your Code installation appears to be corrupt. Please reinstall," you can safely ignore this message. Click the gear in the popup and press "Don't Show Again" to prevent it from showing again (at least until you update VSCode).
8. If you do update VSCode, simply repeat steps (5, 6, 7).
