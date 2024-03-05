FROM eclipse-temurin:21-jdk-alpine
VOLUME /tmp
COPY run.sh .
COPY target/*.jar app.jar
ENTRYPOINT [ "./run.sh" ]
#ENTRYPOINT ["java","-jar","/app.jar"]