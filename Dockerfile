# Use the official nginx image to serve the build
FROM nginx:alpine

# Copy the production build to nginx's default html folder
COPY dist /usr/share/nginx/html

# Expose the default nginx port
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
