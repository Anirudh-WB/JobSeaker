# Use the Node.js LTS image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Clone the GitHub repository
RUN git clone https://github.com/Anirudh-WB/JobSeaker.git /app

# Install dependencies
RUN npm install

# Command to start the application
CMD ["npm", "start"]
