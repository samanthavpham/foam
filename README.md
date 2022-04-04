# Foam

## Getting Started

Hello World! (๑•́ ᵕ •̀๑)◞ This project is a foaming classification system for reactor runs.

### Built With

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![image](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![image](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)

### Setup Database

Run the following script to install and start mongodb:

```bash
brew install mongodb-community@5.0
brew services start mongodb-community
```

Run following script to start mongo in docker
and initalize it with data:

```bash
bash setup_mongo.sh
```

### Run Server

Build docker image:

```bash
docker build -t foam .
```

Run container with node server:

```bash
docker run --name foam --add-host host.docker.internal:host-gateway -p 3000:3000 foam
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Demonstration of Foaming Classification System Application

YAY! ✧(ﾉ ◕ ヮ ◕)ﾉ \*:・ﾟ

If everything went as expected, you should have the application running on your local machine as follows:

Classifying reactor runs as not foaming:
![screenshot](http://g.recordit.co/MPSTDnww1M.gif)
Classifying reactor runs as foaming:
![screenshot](http://g.recordit.co/ZXxN1xe5no.gif)
Browse reactor runs classified as not foaming:
![screenshot](http://g.recordit.co/0pY49D1Akt.gif)
Browse reactor runs classified as foaming:
![screenshot](http://g.recordit.co/pSkmwcxGDE.gif)
