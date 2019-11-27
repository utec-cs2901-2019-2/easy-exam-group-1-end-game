#!/bin/bash

cd java-app/easy-exam/
gradle build 

java -jar build/libs/easy-exam-0.0.1-SNAPSHOT.jar &

cd ../../web-app/my-app/
npm install
npm start &

