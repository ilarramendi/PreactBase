# Base Project

This is a base project using React, Typescript, WebPack and PostCSS (similar to scss).  
Its dosnt use create-react-app. 
Main features are:
In line svg usage, css modules with customizable format (check ``/loaders`` folder), css nesting, automatic compression for production (bartoli and gzip), automatic formating with XO (npm run style), wouter (lightewight alternative to react router), jest, babel and separate webpack configurations.  

This is version 2.0, it will be updated as I find better settings!  
Basic configuration for VSCode is also included.

PD: XO can be configured to automaticaly lint code on save, but i dont have ths available since CodeServer (web version of VSCode) dosnt have the XO-lintex extension.

PD2: ``webpack-visualizer-plugin2`` is also included, but its disabled by default, to enable remove the comments from ``webpack.prod.js``
