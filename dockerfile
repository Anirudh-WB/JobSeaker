# Use the Node.js LTS image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Clone the GitHub repository
RUN git clone https://github.com/Anirudh-WB/JobSeaker.git /app

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
