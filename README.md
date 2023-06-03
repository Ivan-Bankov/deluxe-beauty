# DELUXE (WIP)
## What it does:
DELUXE is a group project and a CRUD web application designed to resemble the website of a beauty salon. It offers a number services as well as user profiles.<br>
Currently the main functionality of the app is to create and delete user profiles, as well as read information from a database about said profiles. The finished project will have a functuionality for updating the user's username as well as a form for sending "emails" to another database.
## Technologies used:
React is used for the frontend along with SCSS instead of CSS and Node.js is used for the backend along with TypeScript instead of JavaScript. Cors and Axios are used to make the connection between the fronend and the backend. Express is used for running the backend. XAMPP and MySQL are used for the databases. Cookie-parser is used for the cookie. dotenv is used for the environment variables. Bcrypt is used for the password encryption. Sass and react-router-dom and JSONWebToken are also used.
## Why said technologies:
I decided to use React because it's the most used JavaScript framework and Node.js because it's based on JavaScript. I chose MySQL as my database managment system because it's easy to use and it fits the requirements of the project. SCSS and TypeScript are used because I wanted to expand my knowledge and learn how to work with them. Cors and Axios are the best choice in my opinion for making the conncetion between the fronend and backend as well as sending the needed information. Cookie-parser is used for the same reason MySQL is. React-router-dom is the best decision for the frontend routing considering the use of React.
## How to install it:
First you need to clone/download the project as usual. Then you need to open XAMPP and start Apache and MySQL. (If you have a problem or they need to be configured you need to do that.) After that you need to create a database and name a table **user_log_ins** with fields for **id**, **username**, and **password**. The ID should be auto incremented! Next you have to create a *.env* file in the *server* directory and add the following environment variables:<br>
<br>
ORIGIN=http://localhost: *the port your frontend runs on without the space*<br>
PORT=*the port your backend will be running on*<br>
<br>
HOST=*the host of your database*<br>
USER=*the user for your database*<br>
PASSWORD=*the password for the database*<br>
DATABASE=*the name of your database*<br>

JWT_SECRET_KEY=*your JWT scret key*<br>
<br>
**NOTE!** In the current version of the project you DON'T need the *.env* file. The file will be required for the finished project!<br>
<br>
When you're done with that you need to navigate to the *client* directory and run *npm i* in the terminal to install all of the dependancies for the frontend. After that you have to navigate to the *server* directory and do the same. To start the frontend you need to execute *npm run start* while in the *client* directory and to start the backend you need to execute the *npm run devStart* command in the terminal while in the *server* directory. After that React will open the app in your browser.
## How to use it:
TBA
## Credits:
**Fellow member Gabriela Hristova: https://github.com/gabriela-hrs**<br>
Dilyan Atanasov: https://github.com/dilyanatanasov<br>
Brian Design: https://youtu.be/I2UBjN5ER4s
Code with Yousaf: https://youtu.be/0i86B4mU-vw, https://youtu.be/18WAdYHILrY
