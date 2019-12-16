import {Request, Response} from 'express'
import {users,User} from './users'
import {apiConfig} from './api-config'
import * as jwt from 'jsonwebtoken'

export const handleAutentication = (req: Request,res: Response)=>{

    const user: User = req.body
if (isValid(user)){
const dbUser= users[user.email]

const token = jwt.sign({sub:dbUser.email, iss:'meat-api'}, apiConfig.secret)

res.json({name: dbUser.name, email: dbUser.email, accesToken: token})
}
else{
    res.status(403).json({message: 'Dados invalidos'})
}
}
function isValid(user: User): Boolean{
    if(!user){return false}
    const dbUser = users[user.email]
    return dbUser !== undefined && dbUser.matches(user)
}