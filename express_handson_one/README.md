Requirements
To begin, generate a new project using the express/handlebar generator.
Don't forget to run npm install
Install and run Nodemon
Within your res.render() method's object, you should have two fields: title and cities. 
The field title should have the value of "Amazing US Cities". The field cities will be an array of objects, shown below. 
Be sure to add the below array into the res.render() method:
[
      {
        name: 'San Fransisco',
        state: 'CA',
        population: 864816
      },
      {
        name: 'Denver',
        state: 'CO',
        population: 682545
      },
      {
        name: 'Seattle',
        state: 'WA',
        population: 704352
      },
      {
        name: 'Portland',
        state: 'OR',
        population: 639863
      },
      {
        name: 'New York City',
        state: 'NY',
        population: 8.538
      },
      {
        name: 'Charlotte',
        state: 'NC',
        population: 842051
      },
      {
        name: 'Pittsburgh',
        state: 'PA',
        population: 303625
      }
]
Given the above array of objects, write the needed code within the index.hbs file to create a table that lists out each of these objects and thier key/value pairs. 
Also be sure to use the title key/value pair within your index.hbs to title your page. 
