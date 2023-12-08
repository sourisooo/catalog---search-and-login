
let members = [];



const indexcontroller ={



    rendersearch(req,res,next){



        const {searchText} = req.query;


        res.render('index', {searchText,members})



    },


    login(req,res,next){


        console.log(req.body);
      
      
        const {email, password} = req.body;
        members.push(email);

        const message = "Vous avez été connecté avec succès!";


        res.render('index', {email,members,message})


    }



 };

 module.exports = indexcontroller;