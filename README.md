# Kimberly's Kollection Store

<p align="center">
 <img src="./client/src/images/KK_Logo.png" width="200">
 </p>

## Kollection Store - Overview
An application where consumers can purchase clothing items for school, they can sort products and see the history of past orders.  


### Techstack


<table align="center">
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168923681-ece848fc-5700-430b-957f-e8de784e9847.png" width="48" height="48" alt="html" />
      <br>html
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168924521-589f95da-069a-496a-bcc1-ee6dd132ff12.png" width="48" height="48" alt="CSS" />
      <br>CSS
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168977094-6a5073a2-2f48-4f5a-ae0e-ed1421a678c6.png" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168976819-15a1f4e0-29cf-4ac0-94a7-1f15eee374a1.png" width="48" height="48" alt="postgreSQL" />
      <br>postgreSQL
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168978951-5ac2af5e-c911-4e59-b493-683071cf1860.png" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    </tr>
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979311-4a486cad-32c8-46f4-a5da-912fdc51b2d6.png" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979848-733f7090-0f78-401a-9ceb-4267231abef7.png" width="48" height="48" alt="Node" />
      <br>Node
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168980647-1690f9de-bf0e-4318-93cb-1b2ba3701ded.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap
    </td>
    <td align="center" width="96">
        <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/j8z02ssteea4zj1k1nyz" width="48" height="48" alt="Render" />
      <br>Render
    </td>
  </tr>
</table>




### APIs
<table align="center">
  <tr>
    <td align="center" width="96">
      <img src="https://fakestoreapi.com/icons/logo.png" width="48" height="48" alt="nps-api" />
    </td>
    <td align="center" width="96">
       <img src="https://user-images.githubusercontent.com/74997368/168984679-a7fa607e-2a9a-46c8-91a6-9a9e77501dbd.png" width="48" height="48" alt="auth0" />
    </td>
  </tr>
  <tr>
    <td align="center" width="96">
      <br>Fake Store API
    </td>
    <td align="center" width="96" >
      <br>Auth0
    </td>
  </tr>
</table>



### Drawing Board

#### Style Guide
<br/>
<div align="center">
<img src="https://i.postimg.cc/W3Pn1Lq0/Style.png" width="300" height="auto" alt="auth0" />
</div>

#### Wireframe
<br/>
<div align="center">
<img src="https://i.postimg.cc/SQ5TF810/Wireframe.png" width="900" height="auto" alt="auth0" />
</div>

#### Data Model
<br/>
<div align="center">
<img src="https://i.postimg.cc/prvwDFw1/Data-Table.png" width="700" height="auto" alt="auth0" />
</div>

#### User Flow
<br/>
<div align="center">
<img src="https://i.postimg.cc/R0GZYvRF/UserFlow.png" width="500" height="auto" alt="auth0" />
</div>

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
2. Take out the owner's git:
    ```
    git init
    ```

3. Go to server folder 
    ```
    cd server
    ```

4. Install all NPM packages using this in the root directory:
    ```
    npm install
    ```
5. Database setup:
    - Inside your server folder, create an .env file with:
        ```
         touch .env
         ```
      
    - Inside your .env add:
        ```
         postgres://localhost:5432/clothingstore
         ```
    - Go Back to Terminal

    - Run the following to restore the DB dump file that the project already contain:
         ```
        psql -U postgres -f db.sql
         ```
6. Start the app by using in client and server folder:    
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


## Mock Users (CAN BE USED TO TEST SITE)


  <table align="center">
  <tr>
    <th>EMAIL</th>
    <th>PASSWORD</th>
  </tr>
  <tr>
    <td>test.kimberly9@gmail.com</td>
     <td>techtonica1</td>
  </tr>
</table>


## Future Development
- Allow users to add to cart without logging in until submitting cart
- Using a payment functionality
- Adding more clothing items