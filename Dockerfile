# Use an official Node.js runtime as the base image  
FROM node:19.5.0-alpine
  
# Set the working directory in the container  
WORKDIR /app  
   
COPY . .  

# RUN apt-get update && apt-get install -y ca-certificates  
# COPY ca-certificates.crt /etc/ssl/certs/ca-certificates.crt  
# RUN update-ca-certificates  
  
# Install project dependencies  
RUN npm install  
  
# Start the application  
CMD ["npm", "start"]  
