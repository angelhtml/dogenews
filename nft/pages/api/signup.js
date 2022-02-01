import handler from "../../apicomponent/handler";
import db from 'diskdb';



export default handler.post( (req, res) => {
try{
    db.connect('./public/DB', ['articles']);
    const article = {
        name : req.body.Username,
    }
    
    db.articles.save(article);
    res.send('jj')    
}
    
  catch (error) {
    console.log(error)
  }
})

