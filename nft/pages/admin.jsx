import adminStyle from '../styles/admin.module.css';
import {  useState,useEffect } from "react";
import * as yup from "yup";
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import db from 'diskdb';
import { Query } from "mingo"


function Admin({result}){
    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);
    const [button4, setButton4] = useState(false);
    const [button5, setButton5] = useState(false);
    const [button6, setButton6] = useState(false);
    const [button7, setButton7] = useState(false);
    const [button8, setButton8] = useState(false);

    const UserSchema = yup.object().shape({
        Username: yup.string().required().required('Username is required'),
      });

      const { register:register, handleSubmit:handleSubmit, formState: { errors }, reset:reset } = useForm({
        resolver: yupResolver(UserSchema),
      });

      const onSubmitHandler = (data) => {
        axios({
            method: 'post',
            url: `./api/signup`,
            data: data,
          })
        .then(function (response) {
            console.log("data sent");
            console.log(data)
          }); 
      };  

      //Searching function
      const [loading, setLoading] = useState(false);
      const [txt, setTxt] = useState();
      const [foundData, setFoundData] = useState();
      const readdata = () => {
        let criteria = { name: txt };
        let query = new Query (criteria);
       // filter collection with find()
        let cursor = query.find(result);
        const found = cursor.all()
        console.log(found) 
        setLoading(true)
        if (!found.length){
          alert('user not found')
        }else{
          setFoundData(found)
        }
    }

    return(
        <div>
            <div className={adminStyle.container}>
                <div className={adminStyle.section1}>
                    <button onClick={() => setButton1(!button1)} style={{color:button1 ? 'yellow' : 'white'}}>button1</button><br />
                    <button onClick={() => setButton2(!button2)} style={{color:button2 ? 'yellow' : 'white'}}>button2</button><br />
                    <button onClick={() => setButton3(!button3)} style={{color:button3 ? 'yellow' : 'white'}}>button3</button><br />
                    <button onClick={() => setButton4(!button4)} style={{color:button4 ? 'yellow' : 'white'}}>button4</button><br />
                    <button onClick={() => setButton5(!button5)} style={{color:button5 ? 'yellow' : 'white'}}>button5</button><br />
                    <button onClick={() => setButton6(!button6)} style={{color:button6 ? 'yellow' : 'white'}}>button6</button><br />
                    <button onClick={() => setButton7(!button7)} style={{color:button7 ? 'yellow' : 'white'}}>button7</button><br />
                    <button onClick={() => setButton8(!button8)} style={{color:button8 ? 'yellow' : 'white'}}>button8</button><br />
                </div>
                <div className={adminStyle.section2}>
                {button1 && <div onClick={() => setButton1(!button1)} onClick={(e) => e.stopPropagation()} className={adminStyle.page}><form key={1} onSubmit={handleSubmit(onSubmitHandler)} style={{marginTop:"3rem"}}><input type="text" placeholder="..." {...register("Username")}/><button>submit</button></form><p>{errors.Username?.message}</p></div>}
                {button2 && <div onClick={() => setButton1(!button1)} onClick={(e) => e.stopPropagation()} className={adminStyle.page}><input type="text" onChange={e => setTxt(e.target.value)} style={{backgroundColor:'grey'}} placeholder='...'/><br /><button onClick={readdata}>get</button><br/>{loading && <>{foundData[0].name}</>}</div>}
                {button3 && <div onClick={() => setButton1(!button1)} onClick={(e) => e.stopPropagation()} className={adminStyle.page}>{result.map(e=> <div key={e._id}>{e.name} <br /> {e._id}<hr /></div>)}</div>}
                {button4 && <div onClick={() => setButton1(!button1)} onClick={(e) => e.stopPropagation()} className={adminStyle.page}>page 4</div>}
                {button5 && <div onClick={() => setButton1(!button1)} onClick={(e) => e.stopPropagation()} className={adminStyle.page}>page 5</div>}
                {button6 && <div onClick={() => setButton1(!button1)} onClick={(e) => e.stopPropagation()} className={adminStyle.page}>page 6</div>}
                {button7 && <div onClick={() => setButton1(!button1)} onClick={(e) => e.stopPropagation()} className={adminStyle.page}>page 7</div>}
                {button8 && <div onClick={() => setButton1(!button1)} onClick={(e) => e.stopPropagation()} className={adminStyle.page}>page 8</div>}
                </div>
            </div>
        </div>
    )
}
export default Admin;

export async function getServerSideProps(context) {
  db.connect('./public/DB', ['articles']);
  const myres = await db.articles.find({})
  let result = []
  for await (let User of myres) {
    result.push(User);

  }
  console.log(result)
  return {
    props: {result}, 
  }
}