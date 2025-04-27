 # Project Title : User Feedback System

1.Description :The User Feedback System is a full-stack web application that allows users to submit feedback via a form, which is then stored in a database. The admin can view, filter, and sort the feedback using an easy-to-use dashboard. The application aims to collect feedback from users, store it securely, and provide a simple interface for managing and viewing feedback.
<br>
2.Features
i.User Feedback Form**: Users can submit feedback with name, email, and feedback text, along with an optional category (e.g., suggestion, bug, feature request).
ii.Admin Dashboard**: Admins can view all submitted feedback, filter by category, and sort by name or date.
iii.Responsive Design**: The app is designed to be responsive, working seamlessly on both mobile and desktop.
<br>
3.Technologies Used
<br>
- Backend:
- 1Node.js: JavaScript runtime for the backend.
- 2.Express.js.: Web framework for building the backend API.
<br>
- Frontend:
- 1.React.js**: JavaScript library for building the user interface.
- 2.Tailwind CSS**: Utility-first CSS framework for styling the app.
  <br>
- Database:
  <br>
- MongoDB: To store the feedback submissions securely.
<br>
4.Installation Instructions
  <br>
#Inside client :
<br>
npm install axios react-router-dom
<br>
npm run dev
<br>
#For Tailwind CSS :
<br>
npm install -D tailwindcss postcss autoprefixer
<br>
npx tailwindcss init -p
<br>
#Install Packages In Backend (server):
<br>
npm install express mongoose cors dotenv
<br>
npm install nodemon --save-dev
<br>
"scripts": {
  "start": "nodemon server.js"

}<br>
cd client
<br>
npm install axios

<br>
npm install cors
<br>
-Now for Run application 
<br>
-backend
<br>
cd server
<br>
npm install -g nodemon
<br>
npm install
<br>
npm run dev
<br>
-frontend
<br>
cd client
<br>
npm install
<br>
npm run dev
<br>


