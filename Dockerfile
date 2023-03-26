FROM openjdk:8u342-jdk

RUN apt update

RUN apt install -y maven curl wget unzip

RUN java -version

RUN mvn --version

# download gosu distribution

RUN wget -O gosu-dist.zip https://search.maven.org/remotecontent?filepath=org/gosu-lang/gosu/gosu/1.14.16/gosu-1.14.16-full.zip

RUN find / -name gosu-dist.zip

RUN mkdir /gosu

RUN ls -la /

RUN unzip /gosu-dist.zip

ENV PATH=$PATH:/gosu-1.14.16/bin

RUN gosuc -version

CMD /bin/bash