import User from '../model/userSchema.js'
export const getUser=async(request,response)=>{
    //const user=request.body;
      //console.log(user);
        try{
            const existingUser=await User.find();
            if ( existingUser) {
                return response.status(200).json({ user:existingUser });
            } else {
                return response.status(401).json({message:"user doesn't exist"});
    
            }
        }catch(error){
            console.log("error while get request",error);
        }
}

export const addUser= async(request,response)=>{
    const user=request.body;
     
    try{
        const newUser=await User.findOne({email:user.email})
        if(newUser){
           return response.status(409).json({user:newUser});
        }
        const addUser = new User(user);
        await addUser.save();
        response.status(200).json({user:user})
    }catch(error){
        console.log("error while Post request",error)
    }
}