import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';

import * as yup from "yup";
import axios from "axios";

import {Database,aql} from "arangojs"

export default function Home({result}){


    const UserSchema = yup.object().shape({
        Username: yup.string().required().required('Username is required'),
        Email: yup.string().email().required('Email is required'),
        Password: yup.string().required('Password is required'),
      });

      const { register:register, handleSubmit:handleSubmit, formState: { errors }, reset:reset } = useForm({
        resolver: yupResolver(UserSchema),
      });

      const onSubmitHandler = (data) => {

        axios.post("/api/singup",{data}).then(function (response) {
          console.log(response);
          console.log(data)
        }) 
      };





       
    return(
          <div>
            {result.map(u=> <div key={u.u._id}>{u.u.Username} {u.u.Password} {u.u.Email} {u.u._key}</div>)}

            <form key={1} onSubmit={handleSubmit(onSubmitHandler)}>
            <input type="text" {...register("Username")} placeholder="Username" /><p>{errors.Username?.message}</p><br />
            <input type="email" {...register("Email")} placeholder="Email" /><p>{errors.Email?.message}</p><br />
            <input type="password" {...register("Password")} placeholder="password" /><p>{errors.Password?.message}</p><br />
            <button>submit</button>
            </form>
        </div>
    )
}


export async function getServerSideProps(context) {

  const db = new Database({
    url: "http://localhost:8529/",
    databaseName: "arango",
    auth: {
      username: "root",
      password: ""
    },
  })

  const myres = await db.query(aql `FOR u in Users SORT u._key DESC LIMIT 1  RETURN { u }`);
  let result = [];


  for await (let User of myres) {
    result.push(User);

  }
console.log(result)
  return {
    props: {result}, 
  }
}