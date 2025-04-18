WEB DEVELOPMENT EXAM PROJECT
===========================

A full-stack application with React frontend and Node.js/Express backend for user authentication and profile management.

PREREQUISITES
-------------
- Node.js (v16 or higher)
- npm (v8 or higher)
- Git (optional)

SETUP INSTRUCTIONS
------------------
1. Extract the project ZIP file to your preferred location

2. Open terminal/command prompt and navigate to project folder:
   cd path/to/project-folder

3. Install backend dependencies:
   cd backend
   npm install

4. Install frontend dependencies:
   cd ../frontend
   npm install

CONFIGURATION
-------------
1. Create a `.env` file in the backend folder with these contents:
   API_KEY=EXAM2024-KEY-5678
   PORT=5000

HOW TO RUN
----------
1. Start the backend server (in first terminal):
   cd backend
   npm start

2. Start the frontend (in second terminal):
   cd ../frontend
   npm start

3. The application will automatically open in your browser at:
   http://localhost:3000

APPLICATION FLOW
----------------
1. Sign Up page (/) - Create new account
2. Login page (/login) - Access existing account
3. Profile page (/profile) - View and edit user details

API ENDPOINTS
-------------
- POST /api/register - User registration
- POST /api/login - User authentication 
- GET /api/profile - Get user profile (requires API key)
- PATCH /api/profile - Update username (requires API key)

TROUBLESHOOTING
---------------
Common issues and solutions:

1. Port already in use:
   - Change backend port in backend/.env
   - Change frontend port in frontend/package.json

2. Dependency errors:
   - Delete node_modules and package-lock.json
   - Run npm install again

3. Blank page on startup:
   - Ensure both backend and frontend are running
   - Check browser console for errors

CONTACT SUPPORT
---------------
For any technical issues, please contact:
Chiunye Tapiwanashe. - chiunyet@africau.edu
+263785211893

Include the following in your email:
- Description of the problem
- Steps to reproduce
- Screenshots (if applicable)
- Error messages from console
