# Reverse Proxy

clone this repository and go to its folder

```bash
git clone git@github.com:callebedrums/reverse-proxy.git
cd reverse-proxy
```

## /api

The api folder contains a small spring project that implements a "Hello World" rest service application.

Required:

- Java 21 (JAVA_PATH configured)
- Maven 3.5+ (Maven bin folder in PATH env var)

### Running api project

to execute the project run

```bash
./mvnw spring-boot:run
```

It will start the spring application at port 8080. You can access _http://localhost:8080/greeting_ to test it out.

### Running api in a docker container

The Dockerfile is the recipe to build a docker container image with our api application in it.

To build the docker container image we need to build our project first.

```bash
./mvnw install # it will download dependencies and compile the project
```

With the project compiled, we can now build our docker image

```bash
docker build -t reverse-proxy-api . # it will build a docker image with tag name reverse-proxy-api. this is the image tag used to start the container
```

Once we have our image built, we can instanciate a container and execute it

```bash
docker run -p 8080:8080 reverse-proxy-api # this will create a docker container using the recent built image, and map the port 8080 from the host to the port 8080 from the container
```

You can access _http://localhost:8080/greeting_ to test it out.

if you want to change the port where the service is going to list, we can do that by using a parameter

```bash
docker run -p 9000:9000 myorg/myapp --server.port=9000
```

You can access _http://localhost:9000/greeting_ to test it out.
