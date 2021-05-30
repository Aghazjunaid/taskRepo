const express = require('express');
const axios = require('axios').default;

const PORT = process.env.PORT || 9000

const app = express();

//=============get all todos=========================================
app.get('/todos', async function getTodo(req,res){
    var return_response = { "status": null, "message": null, "data": null } 
    const URL = "https://jsonplaceholder.typicode.com/todos"
    try {
        const response = await axios.get(URL);
        return_response.status = 200;
        return_response.message = "Success";
        return_response.data = response.data;
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    res.json(return_response);
})

//=============get todos by number====================================
app.get('/getTodoByNumber/:id', async function getTodoByNumber(req,res){
    var return_response = { "status": null, "message": null, "data": null } 
    const URL = "https://jsonplaceholder.typicode.com/todos/"
    try {
        const response = await axios.get(`${URL}${req.params.id}`);
        return_response.status = 200;
        return_response.message = "Success";
        return_response.data = response.data;
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    res.json(return_response);
})

// {
//     "status": 200,
//     "message": "Success",
//     "data": {
//         "userId": 6,
//         "id": 101,
//         "title": "explicabo enim cumque porro aperiam occaecati minima",
//         "completed": false
//     }
// }



app.listen(PORT, () => {
  console.log(`app listening on port:${PORT}`)
})