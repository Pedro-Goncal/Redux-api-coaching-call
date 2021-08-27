# REDUX CLASS PAPA REACT COACHING CALL

## Creating a Login and Register Page - Redux async calls - Redux Thunk

In this call we go over how to implent Redux in your React application and how to implent Login and Register functionality and how to store the information in the Redux Store. We talk about the **thunk** Middleware that allows us to use async functionality and how to conditionaly render components based on data in the Redux Store. 

Key aspects: 
* createStore - used to initialise the store
* combineReducers - used to combine multiple reducers into the one reducer that the store recives, because the store objects can only be one object, we use the combine reducers so we can devide our code and then combine it into one. 
* thunk - a middleware pakage that allows us to have async functionality in our Redux Logic. 
* reducers - a fucntion that alows us to manipulate that piece of state, we use switch case to create diferent ways to manipulate our state.
* actions - pure javasript function that allows us to have some logic inside of them and then interect with our reducers.
* dispatch - a Redux function that is used to interact with our reducers. dispatch takes an object that will always have a ``type : "SOMETHING_TO_DO"`` that will match with one of our cases in our reducer. And optional a ``payload: data`` that is how we pass data to the reducer to be stored.
* useSelector - a hook provided by ``react-redux`` pakage that allows us to access our store in any component in our application.
* useDispatch - another hook provided by ``react-redux`` pakage that allows us to use ``dispatch`` inside of our functional components. 


## Install 

NOTE - Please jump the steps if you already have any of them installed

1.  [Install NVM](https://github.com/nvm-sh/nvm)
	- For windows -  
		-  **NVM comes with node installation, please proceed to step 2.**
	- For Linux - 
		> `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`
	- For iOS  - 
		> `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
	

2. [Install node]( https://nodejs.org/en/) (LTS recommended) 

		
3.  Clone Repo into your machine and change into the directory : 
	> `$ git clone https://github.com/Pedro-Goncal/passive-perception-client/tree/developmet.git`
	
	> `$ cd passive-peception-client`

4. Install the required node Modules
	> `$ npm install`
	

5. Start the development local server
	 > `$ npm start`

#### Pakages used
* ``redux``
* ``react-redux``
* ``redux-thunk``
* ``redux-devtools-extension``
* ``axios``
* ``react-router-dom``
* ``react-spinkit``

#### Resources

> [react-spinkit](https://www.npmjs.com/package/react-spinkit)
> [API](https://reqres.in/)


## Chalanges

> Make a todo list using redux (Please refere to my other coaching call)

> Add to this app - once you are login display a list of users or user by id (Please refere to https://reqres.in/ for the other api)


> If you have made the Amazone clone by SONNY that uses contexApi convert it to use redux insted having A userReducer, a cartReducer and a productReduce. 


> Surprise us project

### if you would like some more reference in a e-comerce project please refere to my proshop project [ProShop](https://github.com/Pedro-Goncal/proshop-eCommerce-MERN-client), there you can find an extensive example of redux!



### If you have a second I would really appricate a [follow](https://github.com/Pedro-Goncal) on my github and a Star on this project. 

#### For more info please visit my [LinkedIn](https://www.linkedin.com/in/pedro-goncalves88/)


#### This is part of the PAPA - React Zero to Hero [Course](https://www.papareact.com/) where I am a Success Coach and part of a great comunity where we all help each other in the crazy journey that is Becoming a Professional Developer. 

