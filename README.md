# Rent'n'Roll

Application for a company that provides car rental services in Ukraine. 
The application consists of 3 pages:

- Home - a page with a general description of services provided by the company.
- Catalog - a page containing a catalog of cars of various configurations,
  which the user can filter by brand, price per hour of car rental and 
  the number of kilometers covered by the car during its operation (mileage).
  Clicking on Learn more button, a modal window opens with detailed information
  about the car and its rental conditions.
- Favorites - a page with ads that have been added to favorites by the user.

### The technology stack used in the project:

<code><img height="55" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" /></code>
<code><img height="55" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" /></code>
<code><img height="55" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" /></code>
<code><img height="55" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /></code>
<code><img height="55" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" title="Redux" /></code>
<code><img height="55" src="https://avatars.githubusercontent.com/u/32372333?s=48&v=4" alt="axios" title="axios" /></code>
<code><img height="55" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code" /></code>
<code><img height="55" src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" alt="Figma" title="Figma" /></code>
<code><img height="55" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git" /></code>
<code><img height="55" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub" /></code>

- React for dynamic user interfaces.
- Redux for state management.
- Axios for making HTTP requests.
- Emotion for styling of components.
- redux-persist for data persistence.
- reduxjs/toolkit for Redux setup.

## Deploy

The frontend part of the web-app is deployed on gh-pages.

```javascript
"https://ludmilka-k.github.io/rent-n-roll/";
```

## Backend

The backend for development is created using the UI service for data provision.

```javascript
"https://mockapi.io/";
```

## Technical task
1. According to the [layout](https://www.figma.com/file/hXVamMJrHavxHye9GPCVJP/Test-(Copy)?type=design&node-id=95-821&mode=design&t=nhpL3aRZC5Z50hKa-0), implement a car rental announcement card.
2. 12 ads should be rendered on the first page of the catalog, and the rest of them - after clicking on the Load more button.
3. If you click on the "heart" button on the ad card, it should be added to the list of favorites, and the color of the button should change.
4. When updating the page, the final result of the user's actions should be recorded. That is, if you add an ad to your favorites and refresh the page, the button still remains in the "favorite ad" state with the appropriate color.
5. If you click the heart button again, the ad should be removed from the list of favorites, and the color of the button should change to its original state.
6. If you click on the Learn more button, a modal window should open with detailed information about the car and its rental conditions.
7. The modal window should be closed by clicking on the button in the form of a "cross", by clicking on the backdrop or pressing the Esc key.
8. In the code, the mileage of the car must be written with one value (for example, 4500). In the UI - displayed with a comma (4,500).
9. The Rental car button should be implemented as a link that will allow the user to connect with the company by phone number +380730000000.
10. Add filtering. dropdown with car brands makes.json - show ads with cars of the corresponding brand.

### Create routing using React Router.
The application should have the following routes: "/" - home page with a general 
description of the services provided by the company "/catalog" - a page containing a catalog of cars of various 
configurations "/favorites" - a page with ads that have been added to favorites by the user If the user entered using 
a route that does not exist, he must be redirected to the home page.

### Create your own personal backend
To work with a list of ads, create your own personal backend for development using the UI service https://mockapi.io/.
Create an adverts resource. Use the resource constructor and describe the ad object as described below.
1. Create an advert in Mockapi with the following fields: id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage (see screenshot below). It is forbidden to add new fields! To fill the collection, you can take [adverts.json](https://drive.google.com/file/d/1sDtZQX4awbRiqa5mSagngqKBZeMMRUMO/view). If the data is missing or incomplete, please add it yourself.
2. You can choose the image of the car yourself.
3. The database should contain at least 32 ads with different meanings (at your discretion). Implemented pagination, where one pagination page should accommodate 12 ads. Pagination should be implemented on the Mockapi side

### Add filtering:
dropdown with car brands makes.json - show ads with cars of the corresponding brand

### Additional task
- dropdown with prices per hour of car rental (step 10$) - show ads with cars whose rental price belongs to the price range selected by the user
- a group of inputs to determine the mileage range within which the user will search for an ad

### Performance criteria
 * The layout is fixed in rh, semantic and valid.
 * Mandatory use of Redux.
 * The Axios library is used for queries
 * Pagination is implemented on the backend
 * There are no errors in the browser console.
 * Interactivity works according to the terms of reference.
 * The code is formatted and does not contain unused code * 
 * The repository should be described in README.md.
 * The project is deployed on github pages or netlify.com.
