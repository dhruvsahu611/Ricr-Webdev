import jwt from 'jsonwebtoken'

export const genToken = async (user, res)=>{
    try {
        const payload = {
            id:user._id,
            role:user.role || 'admin',

        }
        const token = await jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:'1d'})    // 1h, 1m, '', 45

        console.log(token);
        
        res.cookie("parleG", token, {
            maxAge:1000*60*60*24,
            httpOnly:true,
            secure:false,
            sameSite:'lax',  //special mode of cookie using which we can work on thunderclient
        });


    } catch (error) {
        // throw new Error(error);
        throw error
    }
}