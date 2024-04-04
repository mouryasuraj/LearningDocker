/*

1. Every container have their own OS, tools


// Deamon
1. Deamon is responsible to create images, to pull images
2. docker build -t test-image . 
    -t --> tags a name of an image
    . --> represent the path
3. ps command stands for 'process status'
4. docker run -it ubuntu --> First, it will check that "ubuntu" image is present or not. If it's not then it will install ubuntu and when it's already there then it will open the terminal of ubuntu in the cli.
                          --> -it flag : it stands for interactive means stay on the container.  
5. hub.docker.com --> It is a website where docker pull the images which is requested. (Here our containers stored publicly so anyone can use it)
6. Images is like operating system and container is a machine
7. We can have different container on a single image
8. docker container ls --> It will show all the running containers
9. docker container ls -a --> It will show all the container including which is not running
10. docker start container_name  --> It will start the container
11. docker stop container_name  --> It will stop the container
12. docker images or docker image ls --> It will show all the created images

// Port Mapping
1. If we want to run the containerized application in our local machine then we have to expose the port number
2. example: docker run -it -p 3000:3000 container_name
3. We can also pass environment variables
    example:
        docker run -it -p 1025:1025 -e key=value -e key=value container_name


// Process to containerized the application
1. Create a file named as 'Dockerfile'
2. In this file we write configuration that how to create an image of a particular application
3. First we have to choose base image in this file like for our compoter base image is OS(Operating System) which is windows, macOs, linux etc.
example:
    # choose an images
    FROM ubuntu

    # Install nodejs
    RUN apt-get update
    RUN apt-get install -y curl
    RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
    RUN apt-get upgrade -y
    RUN apt-get install -y nodejs

    # Copy code to image
    COPY package.json package.json
    COPY package-lock.json package-lock.json
    COPY index.js index.js

    # run command to install node_modules directory
    RUN npm install


    # Run the Image
    ENTRYPOINT [ "node", "index.js" ]


//Caching the layers
1. Docker is caching the layers so that when we have to rebuild the docker file , if there is noting changed in the code then it will not rebuild the Dockerfile it will give the data from cached. 
Note: Order is important in the Dockerfile


//Docker Compose
1. Using Docker compose we can create, destroy and setup multiple containers
2. We can perform this like
    example:
        1. docker compose up -d
        1. docker compose down


*/

console.log('Docker file');