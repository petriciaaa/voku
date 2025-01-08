# Use the official Node.js 18 image as a base
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies including devDependencies
RUN npm install

# Copy Prisma schema and generate Prisma Client
COPY prisma ./prisma
RUN npx prisma generate

# Copy the rest of the application source code
COPY . .

# Expose the application port (replace 3000 with your actual port if different)
EXPOSE 3000

# Start the application using nodemon for hot reloading
CMD ["npx", "nodemon", "--watch", "src", "--exec", "npm", "run", "start"]