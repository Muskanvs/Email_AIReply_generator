# Email AI Reply Generator

This is a full-stack project built using Spring Boot, React, and a Chrome Extension.  
The project generates AI-based email replies and works directly inside Gmail through a locally loaded extension.

The project contains three main parts:
1. Backend (Spring Boot)
2. Frontend (React)
3. Chrome Extension (Manual installation)

---------------------------------------------------------------------

## Project Structure

Email_AIReply_generator/
- backend/
- frontend/
- extension/
- Screenshots/

---------------------------------------------------------------------

## How to Run the Backend (Spring Boot)

1. Open a terminal and navigate to the backend folder:
```
cd backendfoldername
```

2. Build the project:
```
mvn clean install
```

3. Run the application:
```
mvn spring-boot:run
```

4. Backend will run on:
```
http://localhost:8080//sample
```

---------------------------------------------------------------------

## How to Run the Frontend (React)

1. Open a new terminal and navigate to the frontend folder:
```
cd frontendfoldername
```

2. Install node modules:
```
npm install
```

3. Start the frontend:
```
npm start
```

4. The React app will run on:
```
http://localhost:3000
```

### Frontend Screenshot
![Frontend UI](https://github.com/Muskanvs/Email_AIReply_generator/blob/main/Screenshots/frontend_AI_Reply%20_generator.png)

---------------------------------------------------------------------

## How to Load the Chrome Extension Manually

1. Open Google Chrome.
2. Go to:
```
chrome://extensions/
```
3. Turn on Developer Mode.
4. Click "Load unpacked".
5. Select the "extension" folder from this project.
enable the extension in chrome manually in your system by toggle on 
### Extension Enabled Screenshot
![Extension Enabled](https://github.com/Muskanvs/Email_AIReply_generator/blob/main/Screenshots/AI_Reply_generator_extension_enable.png)

---------------------------------------------------------------------

## How to Use the Extension in Gmail

1. Open Gmail.
2. Open any email or click Compose.
3. Use the extension button to generate an AI-based reply.
4. The email content is sent to the Spring Boot backend.
5. The backend generates a reply using an AI API.
6. The generated reply appears inside Gmail.

### AI Reply Generated in Gmail Screenshot
![AI Reply in Gmail](https://github.com/Muskanvs/Email_AIReply_generator/blob/main/Screenshots/AI_Reply_Generated_In_GMAIL.png)

---------------------------------------------------------------------

## Notes

- The extension works only when the backend server is running.
- You can change API URLs inside the extension if you deploy the backend.
- This project is meant for local testing and demonstration.

---------------------------------------------------------------------


