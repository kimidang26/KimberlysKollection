# Kimberly's Kollection Store

<p align="center">
 <img src="./client/src/images/KK_Logo.png" width="200">
 </p>

## Kollection Store - Overview
An application where consumers can purchase clothing items for school, they can sort products and see the history of past orders.  


### Techstack
* HTML
* CSS	
* JavaScript	
* postgreSQL	
* Express
* React	
* Node	
* Bootstrap	




### APIs
* Auth0
* Free Store API


### Drawing Board

#### Style Guide

#### Wireframe

#### Data Model

#### User Flow


<br/>

## Installation
<br/>

### Prereq:


1. Node: You'll need to install Node v14 or above. nvm is highly recommended.

<br/>

### Installation

1. Clone the repo: 
```
git clone https://github.com/kimidang26/StoreProject_FinalProject.git
```

2. Install all NPM packages using this in the root directory:
    ```
    npm install
    ```
3. Database setup:
    - Copy the root example environment file
        ```
         cp .env.example .env
         ```
      
    - You can choose to edit .env or just use as-is.
    - Run the following to setup the database with the seed file:
         ```
        npm run db:init
         ```
4. Start the app and view it at http://localhost:4000 by using:    
    ```
    npm start
    ```


### Set Up React client for auth0
If you want to try it with Auth0, the frontend needs to be setup with the following:

1. Copy the app's example environment file
    ```
    cp app/.env.example app/.env
    ```
    - The .env file allows the React app to use Auth0, and requires an Auth0 domain + client-id.

2. The .env file allows the React app to use Auth0, and requires an Auth0 domain + client-id.
    - These can be obtained by signing up for an Auth0 account and Registering a Single-Page Web Application in order to get these values
    - This graphic from Auth0's guide may be helpful to locating them

## Testing

To run tests on the terminal:
* On client side run the following command:
    ```
    npm test
    ```

## Future Development
- Allow users to add to cart without logging in until submitting cart
- Using a payment functionality
- Adding more clothing items