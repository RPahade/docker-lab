# Use a lightweight Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies (adjust if you use yarn)
RUN npm install

# Copy the entire project code
COPY . .

# Expose port 3000 (change if your app uses a different port)
EXPOSE 5173

# Run the development server (adjust command if different)
CMD [ "npm", "start" ]