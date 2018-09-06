Requirements
To begin, generate a new project (within the Express-Course directory on your desktop) using the express/handlebar generator.
Call this app express-handson-two.
Don't forget to run npm install
Install and run Nodemon
Create an array that is named flowers and includes the following elements:
Orchid
Iris
Hydrangea
Amaryllis
Dahlia
Daffodil
Bleeding Heart
In the get method, check to see and respond accordingly that if you have a certain flower, send back a message saying "Yes, we have [flower] in our garden" and if you don't, respond, "Nope, we do not have [flower] in our garden, but maybe we should plant it!"
Hint! Use .includes()

Create a post method that will add a flower that is not in the array into it and will respond, "We already have that flower, no need to add it" if it already exists in the array.
Use Postman to check and see that these are returning the correct messages based on the HTTP verb.
