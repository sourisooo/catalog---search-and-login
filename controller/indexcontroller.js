
let members = [];
let loginstate = false;
let messages = [];



const indexcontroller ={



    rendersearch(req,res,next){



        const {searchText} = req.query;


        res.render('index', {searchText,members,loginstate,messages})



    },


    login(req,res,next){


        console.log(req.body.message,req.body.message != undefined);
        
        if (req.body.message != undefined){messages.push(req.body.message)}
      
        let {email, password} = req.body;
        if(email!=undefined){members.push(email)}else  if((members.length!=messages.length)&&(loginstate===true)) {members.push(members.slice(-1).toString())}

        else if((members.length!=messages.length)&&(loginstate===false)) {members.push("anonymous")};

        const message = "Vous avez été connecté avec succès!";

        if((loginstate==false)&&(req.body.message != undefined)) {res.render('index', {email,members,message,loginstate,messages})} else

        if(loginstate===false){loginstate=true} else if ((loginstate===true)&&(req.body.message != undefined)){res.render('index', {email,members,message,loginstate,messages})} else if(

            (loginstate===true)&&(req.body.message == undefined)) {loginstate=false};

        res.render('index', {email,members,message,loginstate,messages})

    }



 };

 module.exports = indexcontroller;
