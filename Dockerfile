from node:latest

workdir .
copy . . 
cmd ["node","main.js"]