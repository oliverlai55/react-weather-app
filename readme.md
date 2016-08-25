# React Weather

## Contents
* [Project Overview](#project-overview)
    * [One-Page App](#one-page-app)
* [Installation](#installation)
* [Assets](#assets)
    * [Stylesheets](#stylesheets)
* [Vendor JavaScript](#vendor-javascript)
* [Task Runner](#task-runner)

## Project Overview
React Weather is an HTML5 web app that runs in React.js.  The app utilizes the OpenWeatherMap API to generate weather information for 5 pre-selected European cities.

### One-Page App
React Weather is a one-page app, meaning the browser only loads the index.html file directly. Other "views" are dynamically injected into the page via ajax and React components.

## Installation
1. Clone repo.
2. In terminal, navigate to the local project folder you just created.
3. Run `npm install`. This will install the project's dependencies and libraries.
4. After everything is installed, run `gulp` in terminal. Gulp will then run any default tasks and start up a local web server at http://localhost:8000.

## Assets (any specific info about assets like images, video, sound, documents)

### Stylesheets
* **Bootstrap**
http://v4-alpha.getbootstrap.com/

Bootstrap is a HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.  Bootstrap is used in this project for styling features.

## Vendor JavaScript (list of third party libraries and use)
React Weather also makes use of several third-party JavaScript plugins:

* **React**
https://facebook.github.io/react/index.html

React is a JavaScript library for creating user interfaces by Facebook and Instagram. React views are typically rendered using components that contain additional components specified as custom HTML tags.

React promises programmers a model in which subcomponents cannot directly affect enclosing components ("data flows down"); efficient updating of the HTML document when data changes; and a clean separation between components on a modern single-page application.

* **JSX**
https://facebook.github.io/react/docs/jsx-in-depth.html

JSX is a JavaScript syntax extension that looks similar to XML.

JSX is used to help make concise syntax for defining tree structures with attributes.

In this project, the user is able to locate the source code of the current static page inside the src/app.jsx directory.

* **React Router**
https://github.com/reactjs/react-router

React Router is a complete routing library for React.  This projects uses React Router for routing to home page.

* **Moment.js**
http://momentjs.com/

Moment.js is a third party library that parses, validates, manipulates, and displays dates in JavaScript.  This project uses moment.js to manipulate the display format of dates.

## Task Runner
React Weather uses [Gulp](http://gulpjs.com/) as its task runner.
