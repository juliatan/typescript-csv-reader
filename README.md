## How to set up

- Create a /src and /build folder
- Run `tsc --init` to generate a `tsconfig.json` file. The settings will be used to customise our Typescript compiler
. Set up the `outDir` and `rootDir` directory settings.
- To run the code, we'd normally run `node build/index.js`. This is annoying to have to do everytime, so let's set up
 auto compilation.
- Run `npm init -y` to setup `package.json`. Then `npm install nodemon concurrently` to install libraries that help
 autorun our code.
- Setup the scripts section in `package.json` so we can just run `npm start` and have the scripts auto compile and watch for changes.
- Remember to `git init` and `touch .gitignore` and add files to be ignored including node_modules and build
 directories.
- We're going to be using node's file system or `fs` library. To ensure it plays nicely with Typescript, we need to
 install the types for node's standard library by running `npm install @types/node`.

## Notes for myself

- If we don't set up a `tsconfig.json` file, to compile Typescript files in our terminal, run `tsc index.ts` which will compile the `index.ts` file into `index.js`.
- After setting up the config file, run `tsc -w` to continue watching new /src files and auto compile.
- If after setting all the auto scripts up, you try to run `npm start` and it errors, this is fine. Just restart and
 it should work (it's to do with nodemon trying to run the ts file the first time round before it's been built).

## What this is about

- The `football.csv` file contains a list of football matches for the English Premier League. The column with 'A' or 'H
' implies which team won - either the Home team or the Away team.
- The file can run an analysis on any team you input as a string, and tell you how many games it won.
- It allows different file types of data to be analysed (not just CSV), so long as it has the appropriate type
 `DataReader` to interface with the `MatchReader`.
- It also allows the output to take the form of a console log or HTML file.
- This is all set up in `index.ts`.