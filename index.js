import express from 'express'
import bodyParser from 'body-parser';
import superagent from 'superagent';
import axios from 'axios';

const app=express();
app.use(express.json())
const PORT = 5000;
const users={
    "amar":{
       
        "catalog" : [ "shampoo", "soap", "conditioner" ]
    },
    "sahil":{
       
        "catalog" : [ "pins", "hairclip", "furniture" ]
    },
    "sid":{
       
        "catalog" : [ "books", "pens", "toys" ]
    }
}
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send('hello! assignment on on_search and search');
});


app.get('/search/:id',async function(req, res) {
    let query = req.params.id;
    console.log("vvvvvv",query);
    let url = "http://localhost:5000/on_search/"+query;
    // let url = "https://generator.swagger.io/api/gen/servers/nodejs-server";

    axios({
        url: url,
        method:'get',
    
    })
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
});





app.get('/on_search/:id',(req,res)=>{

    const user=req.params.id;
    console.log (users[user]);
    res.send(users[user].catalog);
})



app.listen(PORT,()=>console.log(`server running on port:http://localhost:${PORT}`));
//.......................................................................//

