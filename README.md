# Trivia Expert

## Basic commands
| Command                | Description                                                                                                   |
|------------------------|---------------------------------------------------------------------------------------------------------------|
| `start`                | Runs the development environment<br/>(`start-webpack` + `watch-sass` + `watch-convert-assets`)                |
| `style-fix`            | Fixes all fixable javascript syntax errors<br/>(May show not auto-solvable errors that need to be fixed)      |
| `css-style-fix`        | Fixes all fixable css syntax errors<br/>(May show not auto-solvable errors that need to be fixed)             |
| `style-fix-backend`    | style-fix but for backend code                                                                                |
| `build`                | Generates the production build inside public with the necesary assets<br/>(`build-webpack` + `convert-assets` |
| `run-build`            | Builds and start a local server to see the build in http://localhost:8080                                     |
| `kill`                 | Kills any running node project                                                                                |

## Other commands
| Command                | Description                                                                                                   |
|------------------------|---------------------------------------------------------------------------------------------------------------|
| `start-webpack`        | Starts webpack development server                                                                             |
| `watch-scss`           | Watches for changes in scss files and generates *.d.scss                                                      |
| `build-webpack`        | Generates a production build inside public                                                                    |
| `convert-assets`       | Generates the corresponding webp files from /assets/images in public/images                                   |
| `watch-convert-assets` | Watches for changes in the images from /assets/images and generates the webp file in public/images            |
| `style-check`          | Shows all javascript syntax error without fixing them                                                         |
| `css-style-check`      | Shows all css syntax error without fixing them                                                                |
| `style-check-backend`  | style-check but for backend code                                                                              |
| `postinstall`          | Copies the precommit script into the git directory                                                            |

# GIT
Commits wont be valid if either `style-check` or `css-style-check` fail, to solve this work with `style-fix` and `css-style-fix` to
fix all syntax errors in the conde, these command automatically fix some errors and give you hints on how to fix the rest of the errors.
Some warnings (‼) can be ignored in the case of `style-check`

## Paths
### `/assets`
Store SVGs inside `/assets/icons`  
Store png and jpg inside `/assets/images`  
Images stored as jpg, jpeg or png are automatically transformed to webp.  
To reference an image from anywhere use the path `/images/imagename.webp`  **<-- Remember the webp extension**  
Example: `<img src="/images/test.webp"/>` or `background-image: url('/images/FONDO-1080.webp')`

### `/public`
Public files are stored here, these files will be accessible to anyone from the path `/`

### `/config`
Config files and custom scripts

### `/src/components`
Components code including typescript, css and type definitions  
To use new components please define them in /src/components/index.ts  
Component structure: 

#### Folder structure
> `/src/components`
> > componentName (camelCase)  
> > > ComponentName.tsx (PascalCase)  
> > > ComponentName.scss  
> > > ComponentName.types.ts - (Optional) Type definitions for the component

#### `/src/components/app`
This is the main component that is mounted to the site, this is rendered inside 
`/public/index.html` in the `body` tag.  
This is the components responsible for rendering all the pages, if you add a new
page you should import it here just like the rest.

### `/src/pages`
Same structure as components but for pages.

## TODO
- Image lazy loading and auto blurhash
