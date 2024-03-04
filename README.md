# Reverse Proxy

clone this repository and go to its folder

```bash
git clone git@github.com:callebedrums/reverse-proxy.git
cd reverse-proxy
```

## /demo

The demo folder contains a small spring project that implements a "Hello World" rest service application.

Required:

- Java 21 (JAVA_PATH configured)
- Maven 3.5+ (Maven bin folder in PATH env var)

### Running demo project

to execute the project run

```bash
./mvnw spring-boot:run
```

It will start the spring application at port 8080. You can access _http://localhost:8080/greeting_ to test it out.
