# Solving CORS Issues with Local Development
# Issue Overview:
When attempting to fetch a local file (file:///C:/Users/PC/Desktop/ensake/ensake_frontend_challenge/Wheel/endpoint.json) directly from an HTML file, CORS (Cross-Origin Resource Sharing) restrictions come into play. Browsers enforce CORS to prevent potentially malicious cross-origin requests. When making requests from a local file using the file:/// protocol, the origin is considered 'null,' and this triggers CORS errors.

Solution:
To overcome CORS issues during local development, I used a local server to serve my HTML file and assets. Here's a step-by-step breakdown:

Install http-server:

I installed the http-server package globally using the npm package manager. This package provides a simple, zero-configuration command-line HTTP server.


npm install -g http-server

Navigate to Project Directory:

In the terminal, I navigated to the directory where the HTML file (wheel.html) and assets are located.

cd C:\Users\PC\Desktop\ensake\ensake_frontend_challenge\Wheel
Start Local Server:

i started the local server using the following command:

http-server
This command initiated a local server, and it provided us with a local address (e.g., http://127.0.0.1:8080).

Access HTML through Local Server:

Instead of opening the HTML file directly with the file:/// protocol, I accessed it through the local server using the provided address:
arduino
Copy code
http://127.0.0.1:8080/wheel.html
Explanation:
By serving my HTML file through a local server, I changed the protocol from file:/// to http://, eliminating the 'null' origin issue. This allowed the browser to treat the local server as a proper origin, resolving the CORS-related errors.

In summary, using a local server during development helps simulate a more realistic web environment and circumvents CORS restrictions when working with local files.