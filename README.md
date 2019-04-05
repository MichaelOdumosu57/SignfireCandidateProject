# Signafire Candidate Assignment

## to setup

node version 10.15.3
npm version 6.9.1
nginx 1.14.3

clone or pull this repo 
pull this file from source

https://github.com/MichaelOdumosu57/UltraObject.js/blob/master/ultraObject.js

place in ./signafireBackend/middleware  renaming ultraObject.js from symlink to the contents in that actual file 

* its not modular but it was in development for a seperate project but if you look at its repo you will find its in developement but some of the modules are production-ready

## to set up nginx reverse proxy environment
server localhost

port 80

setup nginx to proxy pass http:localhost:4200 with your OS requied proxy_headers with location as /

setup nginx to proxy pass http:localhost:3000 with your OS required proxy_headers with location as  /backend

## to run
cd /signafireApp
bg ng serve &

cd ../signafireBackend
node template_app.js

The app should be running fine at that point


