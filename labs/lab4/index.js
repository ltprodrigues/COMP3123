/**
 * Purpose: 
 * -  Serve multiple paths from an expressive serve using routes
 * - Sever a static html file
 *  - Extrat GET params (compare with GET query)
 */


const express = require("express")
const app = express()

const SERVER_PORT = process.env.PORT || 3000


// ------------------- Set up the middleware for express ------------------------
//Serve static files
//The url of the webpage can be accessed through localhost:300/static
app.use("/static", express.static("public"))

//Server JSON
app.use(express.json())

//Read URL params or queries
//extended: true property in JSON object passed as arg to urlenconded
//let us use qs library
app.use(express.urlencoded({ extended: true}))



//-------------------------------------------------------------------------------

app.get("/", (request, response) => {
    response.send("<h1>Welcome to the root of the server - using GET method<h1/>")
})

app.get("/hello", (request, response) => {
    response.status(200).send("<h1>Welcome to the /hello path on the server</h1>")
})

app.get("/college", (request, response) => {
    const college = {
        name: "George Brown Polytechnic",
        location: "Toronto",
        established: 1967
    }

    response.json(college)
})

app.get("/students", (request, response) => {

    //validate that the GET url is correct
    if(!request.query.name ||  !request.query.age){
        return response.status(400).json({
            error: "Missing query parameters"
        })
    }
    console.log(request.query)

    const name = request.query.name
    const age = request.query.age

    response.json({
        student_name: name,
        student_age: age
    })

})

app.get("/students/:name/:age", (request, response) => {
    console.log(request.params)

    if (!request.params.name || !request.params.age) {
        return response.status(400).json({error: "You must pass in name and age"})
    }

    const name = request.params.name
    const age = request.params.age
    
    response.json({
        student_name: name,
        student_age: age
    })
})

app.post("/students", (request, response) => {
    const student = request.body
    console.log(student)

    const {name, age} = student //Destructing

    if(!student.name || !student.age){
        return response.status(400).json({error: "Missing either name or age in body"})
    }

    response.json({
        student_name: name,
        student_age: age
    })
})

app.listen(SERVER_PORT, () => {
    console.log("Sever is running on http://localhost:" + SERVER_PORT)
})