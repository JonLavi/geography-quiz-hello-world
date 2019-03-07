# Hello World - A geography quiz game

Hello World is a web-based quiz game that presents geography questions, designed to help people learn the capitals of the world. It was created as part of CodeClan project week by the group "Hello World" of cohort E27.

To play the game online, visit: https://hello-world-quiz.herokuapp.com
Please note that in this version, there is sometimes a bug with the async nature of the API requests in JavaScript. If the game does not display a question, simply try and refresh the page to solve this.

![adsfasdfasdf](https://user-images.githubusercontent.com/44193148/53963541-6eac8800-40e5-11e9-8351-3f7880297906.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

All dependencies can be installed and set up using npm for node.js. This project uses webpack, express, and mongodb.

### Installing

To install the dependencies on your machine, from the root folder of the project run:
```
npm install
```

Prepare the local mongoDB database:
```
mongo < server/db/seeds.js
```

### Running the game
Run webpack to dynamically produce the bundle.js file:
```
npm run build
```

In a second terminal session, run the express webserver:
```
npm run server:dev
```

To play the game, point your webbrowser towards:
```
https://localhost:3000
```

## Built With

* [WebGL Globe](https://github.com/dataarts/webgl-globe)
* [MongoDB](https://www.mongodb.com)
* [REST countries API](https://restcountries.eu)
* [Express](https://expressjs.com)

## Authors

* **Katharina Simon** - [katharina01099](https://github.com/katharina01099/)
* **Jonathan Lavi** - [JonLavi](https://github.com/JonLavi)
* **Raul Cubiano** - [RickS80](https://github.com/RickS80)
* **Rick Symington** - [rauliathos](https://github.com/rauliathos)

See also the list of [contributors](https://github.com/JonLavi/geography-quiz-hello-world) who participated in this project.

## Acknowledgments

* Our instructors at CodeClan for guidance and advice
