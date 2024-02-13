const express = require('express')
const App =express()
App.listen(3000,()=>{

    console.log("Server is runing at 3000 port");

})


//***********************Routes*******************

App.get("/",(rep,res) => 
        {
         res.send("hello Server")
        }
    )
