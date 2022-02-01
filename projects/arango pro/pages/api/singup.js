import handler from "../../apicomponent/handler";
import { arangoUsers, getuser } from "../../apicomponent/db"
//import {userValid} from "../../apicomponent/yup"        *validators*


export default handler.post( async (req, res) => {
   arangoUsers(req.body.data.Email, req.body.data.Password, req.body.data.Username)
    res.send("done")
})
