# Resulta challenge
## Coding challenge for Resulta Web Developer position

### Assignment details

* The application is developed in Angular 7 as the frontend framework, PHP to reroute the API (due to CORS issue) and Express and Node.js to deploy the application build on Heroku servers.
* The project code is put on separate github repositories because the github master branch for both projects is serving as a pipeline to deploy application on heroku servers. 
* The deployed application can be accessed at - https://acmesport.herokuapp.com/
* Angular is used as it provides 2 way binding (which has been implemented for sorting data), allows to access API services easily which can be used on multiple components (if required) and also for code maintainability.

### Issue faced:

The API (http://delivery.chalk247.com/team_list/NFL.JSON?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0) provided for the problem statement had CORS issues to access it from within the Angular app. I also tried sending an AJAX request to the API but faced the same issue. 

### The Solution:

Since the CORS headers have issue with client application requests, I thought of sending request from a server-side scripting language PHP. PHP was able to send the request and retrieve data from it and forward it as another API to the client side application with headers allowed for all. So basically PHP reroutes the provided API to the client side (Angular) application. This is done by another application hosted on Heroku and the API for it is - https://acme-sport-php.herokuapp.com/ and the repository link for the code is available at - https://github.com/shahaadesh5/ressulta-challenge-php

