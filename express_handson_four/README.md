Instructions:
Requirements
To begin, generate a new project using the express/handlebar generator.
Call this app express-handson-four.
Don't forget to run npm install
Install and run Nodemon
Install and require sqlite3
Add the chinook.db database into your project. Be sure to change the name of the file to have the extension .sqlite instead of .db.
A fresh copy of this database can be found here
Add the location of the database in your routes/index.js file.
Create a route of /albums to list out all album names in the database onto the page.
You will need a SQL query for this
For this, create a new view named albums.hbs
Create another route of /albums/:id that will list out the cooresponding album and artistId associated with that album onto the page.
For this, create a new view named specificAlbum.hbs
