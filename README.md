# tb_optimizer_api

This is an swgoh api to help people optimize their TB

# How to use

## Docker

Updated images can be pulled and deployed directly from the registry.

`docker run --name tb_optimizer_api \
  --restart always \
  -p 8080:8080 \
  zahkor/tb_optimizer_api:latest`

If the port is already exposed you can expose the service on another one.
--restart always allows docker to restart the container if it craches.

## Node

Pull the repository
Install node
run the following commands at the root of the directory
`npm i
node index.js`
the tb_optimizer_api should starts and listen to port 8080.
To change the port, open the index.js and change it on this line :
`app.listen(8080, () => { 
`

# How to contribute
