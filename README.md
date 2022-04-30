Node.JS REST API with Authentication built with Node.js, Express, MongoDB and JSON Web token.
About this Project
This project is a CRUD REST API that allows users to create, read, update and delete resources from an application. This API can be connected to a front end framework such as react, angular or vue to build a full stack project that has CRUD functionality.
Why I built this project
I decided to build a complete backend application to demonstrate my ability to work on server side projects. My previous projects have been more client-side and I wanted to stretch my technical skills by working on a server side project. This project was a great opportunity to see Javascript in action on the server side and understand how REST APIs can be secured properly and easily. The original intention of the project was to build a full stack application but I decided to leave it as a REST API so other developers, who might need an authenticated REST API for their project, can use this repository.
Who can use this project?
This project can be used in full stack projects/applications with CRUD (Create, Read, Update and Delete) functionalities. As most of the heavy lifting is done, you only need to focus on working on the front end part of your application, thus cutting down on development time. Depending on your project needs, you may need to make some adjustments in some parts of the codebase. For example, changing the name of the routes, controllers and schemas to match your project.
How to use this project
To use this project, you will need to have the latest version of Node.js installed on your machine.  You will also need to have Postman installed on your machine to test your APIs and make sure it is working properly before connecting to the frontend. Finally, set up a MongoDB account and create a project.
To begin with this project, clone this repository by running the following command in your terminal git clone <url>
Next run the following command npm i mongoose express cors colors dotenv nodemon jsonwebtoken bcryptjs. These are the dependencies that are needed to run this applicaton on the server side.
Once the dependcies are installed, create .env and .gitignore files. Your .gitignore file should have the following lines of code and .env should have the following lines of code.
Connect your application to your mongoDB database 
