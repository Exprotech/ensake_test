# ensake_frontend_challenge

# Showdown Animation

This project showcases a Pixi.js animation for a Showdown scenario, including a video element for enhanced visual effects.

## Overview

The repository consists of the following components:

- **HTML File (`index.html`):** Defines the structure of the web page, includes Pixi.js, and references the JavaScript file.
  
- **JavaScript File (`showdown.js`):** Initializes the Pixi.js application, dynamically creates a video element, and manages video playback.
  
- **CSS File (`style.css`):** Placeholder for styling (modify or extend for additional styles).

- **Video File (`assets/showdown css.mov`):** Contains the video asset used in the animation.

## Usage

1. **Clone the Repository:**
   
   ```bash
   git clone https://github.com/ensake_frontend_challenge.git
   cd ensake_frontend_challenge


# Install Dependencies:

npm install
Open in Browser:

Open the index.html file in a web browser.

Potential Issues and Solutions
1. Video Autoplay Restriction
Some browsers have restrictions on autoplaying videos for a better user experience. The video playback is triggered in response to a user interaction event, such as clicking a button.

Error: Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.
Solution:
Ensure the "Play Video" button is visible on the page, and click it to start the video.

2. Cross-Origin Issue
If the video fails to load due to a cross-origin issue, it may be caused by the video file being hosted on a different domain without proper CORS headers.

Error:pixi.js:5862 Uncaught DOMException: Failed to execute 'texImage2D' on 'WebGL2RenderingContext': The video element contains cross-origin data, and may not be loaded.
Solution:

Host the video file on the same domain as your website.
Configure the server to include the proper CORS headers allowing your domain.
3. Video Playback Speed
If the video playback speed is too fast, adjust the playbackRate property in the JavaScript file.

Solution:

In showdown.js, find the line videoElement.playbackRate = 0.5; and adjust the value (e.g., 0.5 for half speed).
Additional Notes
Ensure your server environment is configured to serve video files.
Check the browser console for error messages for more insights into potential issues.
Contributions
Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

