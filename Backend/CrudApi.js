const express = require('express')
const app = express()

let courses = [
    {
        title: "React js",
        id: 1
    },
    {
        title: "Node js",
        id: 2
    },
    {
        title: "Express js",
        id: 3
    },
    {
        title: " JavaScript",
        id: 4
    },
    {
        title: "Css",
        id: 5
    }, {
        title: "Html",
        id: 6
    }
]

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

// to get the data
app.get('/courses/:id', (req, res) => {
    // console.log(req.params.id);  // to fetch the route parameter
    let id = req.params.id
    const data = courses.find(x => x.id === parseInt(id))
    if (data) {
        res.send(data)
    } else {
        res.send("course not found")
    }
})

// to add the data
app.post('/courses', (req, res) => {
    const data = {
        title: req.body.title,
        id: courses.length + 1
    }
    courses.push(data)
    res.send(data)
})

// to update the data
app.put('/courses/:id', (req, res) => {
    let id = req.params.id
    const data = courses.find(x => x.id === parseInt(id))

    if (data) {
        data.title = req.body.title
        res.send(data)
    } else {
        res.send("courses not found")
    }
})

// todelete the data

app.delete('/courses/:id', (req, res) => {
    let id = req.params.id
    const data = courses.find(x => x.id === parseInt(id))
    if (data) {
        //   const course_index = courses.indexOf(data)
        //   courses.splice(course_index,1)
        //   res.send(data)
        courses = courses.filter(x => x.id !== parseInt(id))
        res.send(data)
    } else {
        res.send("not found")
    }

})


app.listen(1000, () => {
    console.log("server started");
})