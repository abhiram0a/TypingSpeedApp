# Use an official Nginx image
FROM nginx:latest

# Copy the HTML, CSS, and JS files to the default Nginx directory
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js

# Expose port 80 to the host
EXPOSE 80
