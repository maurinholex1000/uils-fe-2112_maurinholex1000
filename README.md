# uils-fe-2112_maurinholex1000
Desafio Uils

The Food Delivery App is created using React Native with support of few other popular third party libraries like React Navigation, Axios etc.

Dependencies
React Navigation
Stack Navigator
Bottom Tab Navigator
Axios
React Native Async Storage
Redux
React Redux
UI Design

Setup instructions
1. Clone Repository
# Clone the project
git clone https://github.com/maurinholex1000/uils-fe-2112_maurinholex1000.git

2. Install all dependencies and configure the Backend
# Navigate to app and api directory
  cd app

  npm install

  cd api

  npm install

# Put your IP and Port in the package.json of the app and api folder
# api>package.json
"projectConfig": {
    "mongoConnectionUrl": "mongodb+srv://maurinholex10:Zehrita8@uils.fmjwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    "serverIp": "Put your IP",
    "serverPort": "Put the Port"
  }
# app>package.json
"projectConfig": {
    "backendApiBaseUrl": "Put your IP" : "Put the Port"
  }
# Disable Firewall
