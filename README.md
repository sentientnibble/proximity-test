This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `Third party libraries`

**Going forward, I will try to justify all the third party library choices that I made**

- (Date-fns)
  It contains the time duration to word function and allows for code splitting and has a smaller code footprint, I find it really useful and have used this 2-3 times before for similar requirements.
- (Lodash uniqueby and round)
  Similar reasons. The uniqueby function's source code is really cleverly written and simplifies the logic of merging old socket data with new data and maintains readability, if we had to roll our own, we would probably write it similarly
- (React-flip-toolkit)
  This was just for fun as the data was shuffling and it was a really good good opportunity to use that. I have checked some of their source code. They are consistent with their use of requestAnimationFrame, so it's really performant atleast for the scope of our items
- (React-super-responsive-table)
  This is a slick library that manages resizing your tables without writing any spaghetti code. We still have the control of the css if we need it, worked out really well for our usecase and is pretty meagre in size after gzipping.
