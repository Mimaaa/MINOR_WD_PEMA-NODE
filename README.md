# MovieYAY App

This application is made for the Web Development Minor: Performance Matters course.

## What does it do?
- NodeJS & Express for server-side rendering
- Handlebars to handle the templating
- Browserify to bundle the Javascript
- The Movie Database API to request movie info

You can search for a movie and the app gives you some extra information about the movie.

## How to install the project?
- Download/clone the repo and run the `npm install` command
- Run the `npm start` command to start the server
- Go to your [localhost](http://localhost:3000)
- Voila

## Other commands
- `npm run build` to build the bundle.js with Browserify
- `npm run watch` to watch the index.js so it automatically builds the bundle.js
- `npm run lint` to lint your code with XO
- `npm run expose` to create a public URL to a local webserver
- `npm run test` to build the bundle with Browserify and lint the code with XO

## Performance Increase

The Dev Tools tests were done with disabled cache and with a Regular 2G throttle.

### Before doing anything regarding Performance

![alt text](https://github.com/Mimaaa/MINOR_WD_PEMA-NODE/blob/master/readme_img/before1.png "Before Optimizing Dev Tools")

![alt text](https://github.com/Mimaaa/MINOR_WD_PEMA-NODE/blob/master/readme_img/before2.png "Before Optimizing Speed Insights")

### After Enabling Compression

![alt text](https://github.com/Mimaaa/MINOR_WD_PEMA-NODE/blob/master/readme_img/aftercompress1.png "After Enabling Compression Dev Tools")

![alt text](https://github.com/Mimaaa/MINOR_WD_PEMA-NODE/blob/master/readme_img/aftercompress2.png "After Enabling Compression Speed Insights")

### After Minifying CSS & Critical CSS

![alt text](https://github.com/Mimaaa/MINOR_WD_PEMA-NODE/blob/master/readme_img/aftercss1.png "After Minifying & Critical CSS Dev Tools")

![alt text](https://github.com/Mimaaa/MINOR_WD_PEMA-NODE/blob/master/readme_img/aftercss2.png "AAfter Minifying & Critical CSS Speed Insights")

## License

MIT
