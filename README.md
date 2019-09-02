# What's this project?

This is a simple Progressive Web Application to fetch breaking news from multiple newspaper.
It fetches the breaking news using API from [https://newsapi.org/](https://newsapi.org/) version 2.

# Development

This project included: redux, reactjs, redux-saga, react-router & material-ui.

cd to directory contains ```package.json``` and run commands below:
```
npm install
```

```
npm start
```

And then go to [http://localhost:3000/](http://localhost:3000/)

### Description

- `redux & redux-saga`: To handle data flow
- `react-router`: To handle routing
- `material-ui`: To handle UI
- `offline-js`: To detect when user is in offline mode to display snackbar & change color of UI to gray color.

## Learn more

 - [redux](https://github.com/reactjs/redux)
 - [redux-saga](https://github.com/redux-saga/redux-saga)
 - [react-router](https://github.com/ReactTraining/react-router)
 - [material-ui](http://www.material-ui.com/#/)
 - [offline-js](http://github.hubspot.com/offline/docs/welcome/)

# Production

cd to directory contains ```package.json``` and run commands below:
```
npm run build
```

```
pushstate-server build
```

And then go to [http://localhost:9000/](http://localhost:9000/)
