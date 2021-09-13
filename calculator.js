const express =  require("express");
const app  = express();
app.use(express.urlencoded({extended:true}));  // or app.use(express.urlencoded({extended:true})); default is True. 
/* urlencoded is used when we pass values from html forms to server. Using urlencoder we can get to form data. */

// We have to send entire file index.html to calculator.js, When the browser tries to access home page or home route i.e '/'.
// To know the location of filepath we use __dirname, this will give us file path no matter where your file is hosted.


app.get("/",function(request,response){
    // response.send("Hello World Calculator.");
    response.sendFile(__dirname + "/index.html");
//    console.log("This FilePath is from __dirname :- "+__dirname);// checking whether __dirname is giving filePath or Not
});

/* We have to install body-Parser package to pass information using Post Request.*/

app.post("/",function(request,response){
    console.log(request.body); // this is the parsed (resolved or Interpreted) version of http request.
    var first_element = Number(request.body.Number1);
    var second_element = Number(request.body.Number2);
    var result_addition = first_element + second_element;

    response.send("The resultant Addition of the Calculation is :- "+result_addition);

});



app.listen(8080,function(){
    console.log("Server has started on Port 3000.");
}); 

// HTTP Return Codes meaning :- 
// 100 :- Hold On ("Processing").
// 200 :- Here you Go ("Success").
// 300 :- Go Away ("Redirection").
// 400 :- You screwed up ("Client Errors").
// 500 :- I screwed Up ("Server Errors").


// get :- client wants data.
// post :- client gives the data to server.
// put :- we update data.
// delete :- deletes.



