/*

//Docker Networking
1. There are two modes of docker networking
    a. bridge(default driver) --> 
        1. "docker run -it --name container_name image_name"  --> In this command i haven't specify any networking mode. If you don't specify then it will take default driver which is bridge driver
        2. "docker network inspect bridge" --> this command show the details of container which is running and having bridge mode
        3. Bridge is used to connect container to our local machine network.
    b. host
        1. host is used to remove the connection between the isolated container and make the connection directly with host
        2. docker run -it --network=host image_name
    c. none
        1. When you assign --network=none then there is no network available for that container
        2. docker run -it --network=none image_name
    d. Custom Network:
        1. docker network create -d bridge my-network

//volume mounting
    1. When containers destroyed their memory also destroy, to prevent this, we use volume mounting which creates permanenet memory
    2. We can create any thing in our local machine and it will also create into our container and when we destroy the container, it will not deleted the files and directories
    3. docker run -it -v E:\Course\Docker\local:/home/abc ubuntu
//custom volume
    1. docker volume create my-vol
    2. use volume
*/