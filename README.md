<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://engineering.musefind.com/build-your-first-progressive-web-app-with-react-8e1449c575cd">
    <img alt="VanillaJs" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="100" />
  </a>
</p>
<h1 align="center">
  Portfolio App PWA Support Documentation
</h1>
<h3> App can be accessed and installed from: https://engineering.musefind.com/build-your-first-progressive-web-app-with-react-8e1449c575cd
 </h3>
  <p> <b> ***NOTE: Make sure to check Offline in Developer Tools for it to work*** <b> <p>
    <img alt="Application" src="https://developers.google.com/web/tools/chrome-devtools/images/panels/application.png" width="1000" />


## 🚁 Guide

1.  **Tutorials/Resources Used**

    Follow these links to create your portfolio
    `https://www.youtube.com/watch?v=9AboneIxeM8&list=PL3KAvm6JMiowqFTXj3oPQkhP7aCgRHFTm`
    `https://appdividend.com/2018/03/14/how-to-build-progressive-web-application-using-react-js/`
    `https://medium.com/front-end-weekly/build-a-realtime-pwa-with-react-99e7b0fd3270`

2. **Create App**

In the project directory, you can run:

### `npm create react-app myportfoliosite`
then
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

3. **Create a service-worker.js file in public folder**
Enter the following contents:

`// Flag for enabling cache in production
      var doCache = false;
      var CACHE_NAME = 'myportfoliosite-cache';

      // Code to handle install prompt on desktop

      let deferredPrompt;
      const addBtn = document.querySelector('.add-button');
      addBtn.style.display = 'none';

      // Delete old caches
      self.addEventListener('activate', event => {
        const currentCachelist = [CACHE_NAME];
        event.waitUntil(
          caches.keys()
            .then(keyList =>
              Promise.all(keyList.map(key => {
                if (!currentCachelist.includes(key)) {
                  return caches.delete(key);
                }
              }))
            )
        );
      });
      // This triggers when user starts the app
      self.addEventListener('install', function(event) {
        if (doCache) {
          event.waitUntil(
            caches.open(CACHE_NAME)
              .then(function(cache) {
                fetch('asset-manifest.json')
                  .then(response => {
                    response.json();
                  })
                  .then(assets => {
                    // We will cache initial page and the main.js
                    // We could also cache assets like CSS and images
                    const urlsToCache = [
                      '/',
                      assets['main.js']
                    ];
                    cache.addAll(urlsToCache);
                  })
              })
          );
        }
      });
      // Here we intercept request and serve up the matching files
      self.addEventListener('fetch', function(event) {
        if (doCache) {
          event.respondWith(
            caches.match(event.request).then(function(response) {
              return response || fetch(event.request);
            })
          );
        }
      })
      `
     
3. **Install Http-server to run the pwa app**
## `npm install http-server -g`

## `http-server ./build -p 3000`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
