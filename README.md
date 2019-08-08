
# EmployeeCRUD

## Eclipse backend
This project was generated in Eclipse with Maven as the build automation tool for this Java8 project. I added SpringBoot, Java, JPA, JUnit, Web, MySQL and DevTools dependencies to a pom.xml file for the project to utilize. An application.properties file is created for the app, to get the details of the data source (the info from the DB) and hibernate properties. Next I went the MVC thought process of what files to be created next. Created the Employee file/model giving it fields, Getters and Setters. Then provided the annotations needed to support what I wanted for the DB. Next I made the Employee Repository interface which extends the JPARepository. Then I created the DAO (data access object), which is where mapping application calls are made as an abstract interface to the DB. After that the Controller class is created. The Controller accesses the DAO, it is where the REST apis are called. Next I made the Application class to run the project, annotating it with SpingBootApp and giving it a Bean for CORS mapping so that I can call on the method requests from Visual Studio Code where I write the Angular frontend. The Java app is ready to be ran the app runs on Tomcat8.5 and I test the api method requests with PostMan.

## DataBase
MySQL DB has a Company DB with a simple employee Table where the object is given an id that is set to INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name, designation, and expertise set to VARCHAR(255).

## Visual Studio Code frontend
Using Angular CLI I generated components of navigation, company, and employee. I generated a model class of employee. Downloaded bootstrap and jquery and placed them in the proper section of the angular.json file. In the api service file I set the api/connections and method requests needed to connect the front end with the backend. Then added the Javascript functions for those functions in the different component.ts files. From there I made the component.html files. I wanted to show that the user could click a tab to send them to another page so I used RouterModule method to do so. Also, I wanted the user to experience clicking on an object and be taken to another page so I added this effect by using the ngIf directive.

## Future Development
The server is currently on localhost:4200 but I am currently ramping back up on AWS so I can put this up publicly.
I also have plans to add more Java and Javascript code to do more fun things for the user like take a word and output the word in reverse for the user, compute the area of a shape, and build out the DB to connect tables like a department table to make it more of a company app.

