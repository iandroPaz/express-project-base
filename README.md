# express-project-base

Simple api-rest express.js with TypeScript to get information in another API and save/consult on database

# how to start project

Node Version: 18.7.0

To run this project on your computer is necessary:
Instance of postgres with this informations,
{
user: 'postgres',
password: 'mysecretpassword',
database: 'postgres',
host: 'localhost',
}

I made my instance with docker, after install postgres following steps in docker hub.

Command to start postgres container: 'sudo docker run --network=host -e POSTGRES_PASSWORD=mysecretpassword -d postgres'

------VSCODE------

After start postgres container, in project root run the command:

'npm install', to install all packeges of projects

'npm run build' to compile TS files in JS files

After all, just run 'npm run start-server'

This´s enough to run the project, the code gonna create a Movie tables on DB and calls API to get Movies to save on DB
With DB populated, you can have fun!
