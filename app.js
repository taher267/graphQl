const express = require("express");
const app = express();
const basicResolvers = require("./basicGQL/basicResolvers");
const schema = require("./basicGQL/schema");
const { graphqlHTTP } = require("express-graphql");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: basicResolvers,
    graphiql: true,
  })
);

app.use(`/`, (req, res) => {
  res.send("Alhamdu lillah");
});
app.listen(2001, () => console.log(`Server is listening on port 2001`));

/*query{
     getCourse(id:"d73e7ffb-dd6f-4646-8e3c-c20352b99cd4"){
       teachingAssists {
         firstName
         lastName
         experience
       }
      
       courseName
       id
     }
   }
  
   mutation {
       createCourse(input: {courseName: "Corse 11", price: 2500, teachingAssists:[
       {
           firstName:"fisrt One"
           lastName:"last one"
           experience:2
     },
     {
           firstName:"fisrt two"
           lastName:"last two"
           experience:5
         }
     ]}) {
         id
         courseName
         teachingAssists {
           firstName
           lastName
           experience
         }
       }
     }
  */
