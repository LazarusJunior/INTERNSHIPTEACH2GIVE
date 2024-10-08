import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import path from "path";

dotenv.config();

// Inference
const app: Express = express();
const port = process.env.PORT || 3000; // Default to port 3000 if not specified


//midle wares
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// Get the current directory
const _dirname = path.resolve();

// Synchronously read the file
const eventData = readFileSync(
  path.join(_dirname, "src", "db", "eventsData.json"),
  "utf-8"
);

// Health check
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Handles data from event data
app.get("/api/events", (req: Request, res: Response) => {
  res.send(eventData);
});

// Faker database for demonstration
const userData = [
  { userID: 1, userName: "alamin", displayName: "alamin254" },
  { userID: 2, userName: "Emmanuel", displayName: "emm254" },
  { userID: 3, userName: "Kevin", displayName: "kev254" },
  { userID: 4, userName: "John", displayName: "john254" },
];

//routing params
//api/users/:id - http://localhost:3000/api/users/1
app.get("/api/v1/users", (req: Request, res: Response) => {
  res.send(userData);
});

// Routing parameters to get a particular user by id
app.get("/api/v1/users/:id", (req: Request, res: Response) => {
  //access the param name using re.params.id
  const userID: string = req.params?.id ?? "";
  //we need to parse the string to int
  const parseedID: number = parseInt(userID, 10);

  //we will use .find() - returns based on the argument passed
  //find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true
  const foundUser = userData.find((userObj) => userObj.userID === parseedID);
  if (!foundUser) {
    res.status(404).json({
      message: "Data not available",
    });
  } else {
    //return the data found
    res.status(201).json({
      message: "User Found",
      data: foundUser,
    });
  }
});


/**
 * {
    "message": "Successfull post",
    "payload": {
        "id": 5,
        "userName": "alamin",
        "displayName": "alamin254"
    }
}
 */


//POST Request
app.post("/api/v1/users", (req:Request, res:Response) => {

  //lets destrure the income body req
  //const body = req.body
  //const userName = req.body.userName
  const {body} = req
  //if the userData is empty, the id will be 1 else we will add 1  to ther length
  const newID = userData.length > 0 ? userData[userData.length - 1].userID + 1: 1

  //push the object data to userData
  const newData = {id: newID, ...body}
  userData.push(newData)

  res.status(201).json({
    message: "Successfull post",
    payload: newData
  })

})

// Start the server
app.listen(port, () => {
  console.log(
    `[server]: Server TypeScript is running at http://localhost:${port} 😂😂😂😂`
  );
});

/*
Error: Cannot set headers after they are sent to the client
    at ServerResponse.setHeader (node:_http_outgoing:659:11)
    at ServerResponse.header (C:\dev\QA-QE\4.Node\5.express\1.queryParams\node_modules\.pnpm\express@4.21.0\node_modules\express\lib\response.js:794:10)
    at ServerResponse.send (C:\dev\QA-QE\4.Node\5.express\1.queryParams\node_modules\.pnpm\express@4.21.0\node_modules\express\lib\response.js:174:12)
    at ServerResponse.json (C:\dev\QA-QE\4.Node\5.express\1.queryParams\node_modules\.pnpm\express@4.21.0\node_modules\express\lib\response.js:278:15)
    at ServerResponse.send (C:\dev\QA-QE\4.Node\5.express\1.queryParams\node_modules\.pnpm\express@4.21.0\node_modules\express\lib\response.js:162:21)
    at C:\dev\QA-QE\4.Node\5.express\1.queryParams\src\server.ts:55:7
    at Layer.handle [as handle_request] (C:\dev\QA-QE\4.Node\5.express\1.queryParams\node_modules\.pnpm\express@4.21.0\node_modules\express\lib\router\layer.js:95:5)       
    at next (C:\dev\QA-QE\4.Node\5.express\1.queryParams\node_modules\.pnpm\express@4.21.0\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\dev\QA-QE\4.Node\5.express\1.queryParams\node_modules\.pnpm\express@4.21.0\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\dev\QA-QE\4.Node\5.express\1.queryParams\node_modules\.pnpm\express@4.21.0\node_modules\express\lib\router\layer.js:95:5)  


     if (filter && value) {
    const filteredData = userData.filter((userObject) => {
      return (userObject[filter as keyof typeof userObject]?.toString() || "").toLowerCase().includes(value.toLowerCase())
    })
    res.send(filteredData)
  }

  res.send(userData);
    its saying I run two request endpoits at the same both the if statement and after if
    //we need to add an else 
    // try - catch 
    */
