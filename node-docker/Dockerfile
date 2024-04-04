# # choose an images
# FROM ubuntu

# # Install nodejs
# RUN apt-get update
# RUN apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
# RUN apt-get upgrade -y
# RUN apt-get install -y nodejs

# # Copy code to image
# COPY package.json package.json
# COPY package-lock.json package-lock.json

# # run command to install node_modules directory
# RUN npm install
# COPY . .



# # Run the Image
# ENTRYPOINT [ "node", "index.js" ]


# choose an images
FROM node:latest

WORKDIR /app

# Copy code to image
COPY package.json package.json
COPY package-lock.json package-lock.json
# run command to install node_modules directory
RUN npm install
COPY . .



# Run the Image
ENTRYPOINT [ "node", "index.js" ]

