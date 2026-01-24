export const UserUpdate=async (req, res, next)=>{
    try {
        //Logic Likho 

        const {fullName, email, mobileNumber} = req.body;
        const currentUser = req.user;

        if(!fullName || !email || !mobileNumber){
            const error = new Error("All Fields Required");
            error.statusCode = 400;
            return next(error);
        }

        currentUser.fullName = fullName;
        currentUser.email = email;
        currentUser.mobileNumber = mobileNumber;
        await currentUser.save();
        console.log(currentUser);
        

        console.log("Updateing the User");
        
    } catch (error) {
        next(error);
    }
}