# Project Title : User Feedback System

1.Description :The User Feedback System is a full-stack web application that allows users to submit feedback via a form, which is then stored in a database. The admin can view, filter, and sort the feedback using an easy-to-use dashboard. The application aims to collect feedback from users, store it securely, and provide a simple interface for managing and viewing feedback.
2.Features
i.User Feedback Form**: Users can submit feedback with name, email, and feedback text, along with an optional category (e.g., suggestion, bug, feature request).
ii.Admin Dashboard**: Admins can view all submitted feedback, filter by category, and sort by name or date.
iii.Responsive Design**: The app is designed to be responsive, working seamlessly on both mobile and desktop.

3.Technologies Used
- Backend:
- 1Node.js: JavaScript runtime for the backend.
- 2.Express.js.: Web framework for building the backend API.
- Frontend:
- 1.React.js**: JavaScript library for building the user interface.
- 2.Tailwind CSS**: Utility-first CSS framework for styling the app.
- Database:
- MongoDB: To store the feedback submissions securely.

4.Installation Instructions
#Inside client :
npm install axios react-router-dom
npm run dev
#For Tailwind CSS :
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
#Install Packages In Backend (server):
npm install express mongoose cors dotenv
npm install nodemon --save-dev
"scripts": {
  "start": "nodemon server.js"
}
cd client
npm install axios
npm install cors
-Now for Run application 
-backend
cd server
npm install -g nodemon
npm install
npm run dev
-frontend
cd client
npm install
npm run dev

npm run dev for server

