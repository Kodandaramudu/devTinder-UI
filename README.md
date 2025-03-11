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

