# Use an official Node.js runtime as the parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy the rest of the application code into the container, excluding files listed in .gitignore
COPY . /app

# Install dependencies
RUN npm install

# Set the JWT_SECRET environment variable
ENV JWT_SECRET "your_jwt_secret_here"

# Expose the port that the API will listen on
EXPOSE 3000

# Define the command to start the application
CMD [ "npm", "start" ]

