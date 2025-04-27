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
- 1.React.js: JavaScript library for building the user interface.
- 2.Tailwind CSS: Utility-first CSS framework for styling the app.
  <br>
- Database:
  <br>
- MongoDB: To store the feedback submissions securely.
<br>
4.Installation Instruction:
for client:

1. cd to folder :
bash
cd client

2. Install dependencies:
bash
npm install

3. Run the frontend:
bash
npm run dev


for backend :
1. cd to folder :
bash
cd server

2. install dependencies: 
bash
npm install

3. add .env at root of backend folder with these attributes :
bash
MONGO_URI=
PORT=5000

4. Run the backend :
bash
npm run dev



