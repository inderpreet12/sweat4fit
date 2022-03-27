const { json } = require('body-parser');
const mongoose = require('mongoose');
const trainerModel = mongoose.model('trainerModel');

const trainerCreate = function(req,res)
{

  // converting string into an array. 
  var getskills = req.body.skills;
  var skills = getskills.split(",");
  
    trainerModel
        .create(
            {
                user_id:req.body.user_id,
                approve: req.body.approve,
                description:req.body.description,
                skills:skills,
                experience: req.body.experience,
                age:req.body.age,
                document_file:req.body.document_file

            },(err,trainercreated)=>{
                res
                    .status(200)
                    .json(trainerCreated);
            });
};



const trainersReadAll = function(req,res){

    trainerModel
        .find()
        .exec((err,allTrainers)=>{
            if(!allTrainers)
            {
                res
                    .status(500)
                    .json({"message":"No trainers found."});
                    return;
            }
            else
            {
                res
                .status(200)
                .json(allTrainers)
            }
           

        });

};
const trainersReadOne = function(req,res){

    if(req.params && req.params.trainerid)
    {
        trainerModel
        .findById(req.params.trainerid)
        //.select('decription skill')  if you want to show specific fields
        .exec((err,trainer)=>{     //trainer ---- The data which we are fetching from database. it is an object
            if(!trainer)
            {
                res
                    .status(404)
                    .json({"message":"trainer id is not found."});
                return;
            }
            else if(err)
            {
                res
                    .status(404)
                    .json(err)
                return;
            }
            else
            {
                res
                .status(200)
                .json(trainer) 
            }
          
        });
    }
    else
    {
        res
            .status(404)
            .json({
                "message":"No trainer id in request."
            })
    }

  
};




const trainersUpdateOne = function(req,res){


    if(req.params && req.params.trainerid)
    {
        trainerModel
        .findById(req.params.trainerid)
        .exec((err,trainer)=>{
            if(!trainer)
            {
                res
                    .status(404)
                    .json({"message":"id not found"});
                    return;
            }
            else if(err)
            {
                res
                    .status(404)
                    .json(err);
                    return;
            }

            else
            {
                trainer.experience=req.body.experience;
                trainer.skill=req.body.skill;
                trainer.description=req.body.description;
                trainer.age=req.body.age;
                trainer_document=req.body.document_file;

                trainer.save(function(err,trainer)
                {
                    res
                        .status(200)
                        .json(trainer);
                })

            }
           
        })

    }
  
};

// not sure if i need to keep this or not.

const trainersDeleteOne = function(req,res){
    if(req.params && req.params.trainerid)
    {
        trainerModel
        .findByIdAndRemove(req.params.trainerid)
        .exec((err,trainer)=>{
            if(!trainer)
            {
                res
                    .status(404)
                    .json({"message":"id is not present which you want to delete"});
            }
            else
            {
                res
                .status(200)
                .json({"message":"Record has been deleted"});
            }
            
        })
    }
    
};

// *******************************************************All Admin API controller methods *********************************


// this will get all the request which are not approve yet.
const checkPendingTrainers = function(req,res)
{

    trainerModel
    // it runs asynchronous. so after checking the approve status it will run this method.
        .find({approve:'No'})
        .exec((err,allTrainerWithNoStatus)=>{
            if(!allTrainerWithNoStatus)
            {
                res
                    .status(200)
                    .json({"message":"No pending requests to approve it."})
                    return;
            }
            else
            {
                res
                .status(200)
                .json(allTrainerWithNoStatus);
            }
           
        })
}

const approveTrainerProfile = function(req,res){

    if(req.params.trainerid)
    {
        trainerModel
            .findById(req.params.trainerid)
            .exec((err,trainer)=>{
                trainer.approve = req.body.approve;
            trainer.save(function(err,data){
                res
                    .status(200)
                    .json(data);
            })
            })


    }



};

module.exports=
{
    trainerCreate,
    trainersReadAll,
    trainersReadOne,
    trainersUpdateOne,
    trainersDeleteOne,
    checkPendingTrainers,
    approveTrainerProfile
}