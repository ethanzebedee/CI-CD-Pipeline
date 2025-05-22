# Use Node.js LTS as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]

