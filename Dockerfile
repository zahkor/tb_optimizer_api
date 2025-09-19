# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Command to run your app
CMD ["node", "index.js"]
