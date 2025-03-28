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
- Edit profile was done
- done with API to get all the connections available for the user
- for that created connectionSlice to manage the connections state
- done with API ro review the requests whoever send to the user
- Created a requestSlice to manage all the requests 
- Created sendConnection API
- 



# Deployment
- Created AWS Console Account
- Launched new EC2 Instance
- Connected to AWS Instance using key pair(.pem file) in my cmd prompt
- key:--ssh -i "devHub-secret.pem" ubuntu@ec2-18-188-175-153.us-east-2.compute.amazonaws.com
- Installed Node in instance
- cloned the project using --git clone https://github.com/Kodandaramudu/devTinder-UI.git && https://github.com/Kodandaramudu/devTinder.git
- after that I did check using "ls" cmd whether they are cloned or not
- Frontend
  - did npm install
  - npm run build
  - sudo apt update - to update dependencies
  - sudo apt install nginx - to install nginx
  - sudo systemctl start nginx - to start nginx
  - sudo systemctl enable nginx - To enable Nginx to start automatically on boot
  - copy code from dist(build files) to var/www/html/ (ngnix https server) using below cmd
  - sudo scp -r dist/* /var/www/html/
  - enable port 80 of instance
- Backend
  - did npm install -- To Install dependecies
  - allowed EC2 instance on MongoDB server(Network Access)
  - installed PM2 using below cmd(which up and runs the server 24/7)
  - npm install pm2 -g --(which will install it globally).
  - pm2 start npm -- start
  - pm2 logs (to check logs when application having trouble to start)
  - pm2 list,pm2 flush <name>(),pm2 stop <name>, pm2 delete <name>
  - if we want to change the name we can use below cmd
  - pm2 start npm --name "custom-name" -- start
  - config nginx sudo nano /etc/nginx/sites-available/default/
  - after updated the ngnix config file restart ngnix with below cmd
  - sudo systemctl restart ngnix
  - change BSAE_URL to /api at frontend project

# Ngnix Server Config

  server_name 18.188.175.153;


        location /api/ {
               proxy_pass http://localhost:7777/;
               proxy_http_version 1.1;
               proxy_set_header Upgrade $http_upgrade;
               proxy_set_header Connection 'upgrade';
               proxy_set_header Host $host;
               proxy_cache_bypass $http_upgrade;
        }

# Domain Name Maping
- purchased domain name from godaddy(Domain Registrar)
- signUp on cloudfare to manage ur DNS & add a new domain name
- change the NameServers in goDaddy and point it to cloudfare
- wait for sometime till your nameServers updated
- after updated go to DNS records dlete one A record
- Edit the second A record pointing to your EC2 public IP address(18.188.175.153)
- Enable SSL for website 






