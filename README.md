# MyAuth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

in myAuth Library
1.npm install 
2.ng build
in application:
1.npm install "C:\Users\rojin\myAuth\dist\auth-lib"    
2.add module and services in appModue
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthLibModule, AuthService, httpService } from 'auth-lib';
  imports: [
    AuthLibModule
  ],
  providers: [
    JwtHelperService
   , httpService, AuthService
  ],
  
  3.in angular.json -> "build"->"options" add
                        "preserveSymlinks": true,

