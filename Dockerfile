# Use an official Node.js runtime as the base image  
FROM node:14  
  
# Set the working directory in the container  
WORKDIR /app  
   
COPY . .  

# RUN apt-get update && apt-get install -y ca-certificates  
# COPY ca-certificates.crt /etc/ssl/certs/ca-certificates.crt  
# RUN update-ca-certificates  
  
# Install project dependencies  
RUN npm install  
  
# Expose the port your application listens on  
EXPOSE 3000  
  
# Start the application  
CMD ["npm", "start"]  
