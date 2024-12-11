# CN5006 University Project, 2024

## Table of contents

- [Backend Insallation Guide](#backend-installation-guide)
- [Frontend Installation Guide](#frontend-installation-guide)
- [Running the project](#running-the-project)
- [Members](#members)

## Running the project

#### Clone the repo

```
git clone https://github.com/shreejalmaharjan-27/football-task.git
```

```
cd football-task
```

### Backend Installation Guide

```
cd frontend
npm install
```

### Change the mongodb server URI details in the `config/developement.json` file.

Example

```
{
    "PORT": 3000,
    "MONGO_URI": "mongodb://user:password@host:port/database"
}
```

### Start the backend server

```
npm run dev
```

**Note: The backend server will run on port 3000**

_Changing the port number will require you to change the backend server URL in the frontend. (`frontend/plugins/Axios.js`)_

### Importing CSV Data to database

The data is automatically imported on startup. If the database is empty.

### Frontend Installation Guide

```
cd frontend
```

```
npm install
```

### Start the frontend server

```
npm start
```

## Members (A-Z)

- [Christam Gopali](https://github.com/Chrisostam)
- [Kalawati Aryal](https://github.com/KalawatiAryal)
- [Komronbek Olimov](https://github.com/komronbeko)
- Manish Dahal
- [Shreejal Maharjan](https://github.com/shreejalmaharjan-27/)
- [Tenzing Sherpa](https://github.com/sherpaten)
