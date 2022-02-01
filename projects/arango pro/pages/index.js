import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import { useState } from 'react';

import * as yup from "yup";
import axios from "axios";
import { ChakraProvider, Input ,Button} from "@chakra-ui/react"

import homeStyle from '../styles/home.module.css';
import dynamic from 'next/dynamic';
import ScrollAnimation from 'react-animate-on-scroll';
import "./animate-min.css";
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


export default function Home({}){


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




const [so, setSo] = useState([])
const fetchMysocket = async () => {
  const response = await fetch('/api/socket/socket')
  const feed = await response.json()
  console.log(feed)
  setSo(feed)
}
     //{result.map(u=> <div key={u.u._id}>{u.u.Username} {u.u.Password} {u.u.Email} {u.u._key}</div>)}
    return(
          <div>
            <AnimatedCursor color='0, 255, 251'   outerAlpha={0.2}  innerSize={15} outerSize={15} innerScale={0.7} outerScale={3}/>
            <center>
              <div className={homeStyle.navbar}>
               {so.map(u=> <div key={u.u._id} className={homeStyle.txt}>welcome &nbsp; {u.u.Username}</div>)}
              </div>
            </center>   
              <div>
              {so.map(u=> <div key={u.u._id} className={homeStyle.txt}><p style={{padding:'1rem',color:'GrayText'}}>Email:&nbsp; {u.u.Email}</p><br /><p style={{padding:'1rem',color:'GrayText'}}>Password:&nbsp; {u.u.Password}</p><center><hr color='grey' width='95%'/></center></div>)}
              </div>
            <center>  
            <form key={1} onSubmit={handleSubmit(onSubmitHandler)} style={{marginTop:"3rem"}}>
              <ChakraProvider>
            <Input variant="flushed" placeholder="Flushed" className={homeStyle.input} {...register("Username")} placeholder="Username" /><p>{errors.Username?.message}</p><br />
            <Input variant="flushed" placeholder="Flushed" className={homeStyle.input}{...register("Email")} placeholder="Email" /><p>{errors.Email?.message}</p><br />
            <Input variant="flushed" placeholder="Flushed" className={homeStyle.input} type="password" {...register("Password")} placeholder="password" /><p>{errors.Password?.message}</p><br />
            <button className={homeStyle.button} variant="outline">submit</button>
            </ChakraProvider>
            </form>
            <button className={homeStyle.button} variant="outline" onClick={fetchMysocket}>socket</button>
            </center>
            <ScrollAnimation animateIn="animate__fadeIn" offset={0} duration={5}>
              <p>hi</p>
            </ScrollAnimation>
        </div>
    )
}





//const socket = io('/api/socket/socket');