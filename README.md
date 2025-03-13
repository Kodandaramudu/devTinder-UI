# devTinder

-TECH STACK => Vite, React JS, Tailwind CSS, DaisyUI

- created devTinder-UI project using vite
- installed Tailwind CSS and configured as well
- installed daisyUI which must be installed after node.js and  tailwind CSS.. Configuration is also done.
- got navbar from daisyUI and did some customization 
- Installed react-router-dom library for routing
- set up the BrowserRouter which takes basename as atr..>Routes>Route where we set up the nested routes and those routes will be render in Outlet
- got foter from daisyUI 

# Login Page
- Created login page
- Installed Axios library 
- Integrated Login API using Axios
- Axios takes one special attribute { withCredentials: true } which explicitly tells the browser to send and receive cookies or   authentication headers
- then Installed CORS(Cross - Origin - Resource - Sharing) middleware at backend
- CORS:- it is needed to allow web applications running in a browser request resources from a different origin(domain,protocol, or port)
- must pass two arguments inside corse();
- 1.origin:"http://localhost:5173/"=> whatever port we are running our UI, have to mention that...then it will allow that particular origin
  2.credentials: true => allow cookies
# Redux
- Installed @reduxjs/toolkit react-redux.
- Configured the store using @reduxjs/toolkit
- Created a userSlice of the store using createSlice() available from @reduxjs/toolkit
- slice takes three args ("name",initialState,reducers:{})
- in the above reducers are the reducer function which updates the state of the store.
- fixed bugs:-
- 1. everytime I'm refreshing my data is not coming up though it has been loggedIn.This is becz of redux state,So Whenever user loggedIn we set the body to be if not user then only update the redux state.
- 2. We have used Link which is available in react-router-dom for routing sucha as profile view and home
- Created feedSlice and reducer to store feed details
- Created User Card on the feed page 


