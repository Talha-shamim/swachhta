import User from '../model/user.js';

export const login = async (req,res) => {
    try{
        const users = await User.find({email : req.body.email})
        if(users.length == 0){
            console.log('login failed')
            res.status(401).json({message : 'login failed'})
        }
        else{
            if(users[0].password === req.body.password ){
                console.log('login successful')
                res.status(200).json({message : users[0].name , email : users[0].email})
            }
            else{
                console.log('login failed')
                res.status(401).json({message : 'login failed'})
            }
        }
    }
    catch(error){
        res.status(501).json({message : 'login failed'})
    }
}

export const signup = async (req,res) => {
    req.body.points = 0;
    try{
        const users = await User.find({email : req.body.email})
        if(users.length > 0 || req.body.name.length < 3 || req.body.password.length < 6){
            res.status(401).json({message : 'email already exist'})
        }
        else{
            const signedUpUser = await new User(req.body).save();
            res.status(200).json({message : 'signup succesfully'})
        }
    }
    catch(error){
        res.status(501).json({message : 'signup failed'})
    }
}

export const points = async (req,res) => {
    const id = req.params.id
    try{
        const users = await User.update({_id : id},{
            $set : {
                points : points+1,
            }
        })
        res.status(200).json({message : 'updated points'})
    }
    catch(error){
        res.status(400).json({message : 'updating points failed'})
    }
}