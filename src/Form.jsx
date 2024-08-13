import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


const schema=yup.object().shape({

    name:yup.string().required('name is mandatory'),
    email:yup.string().email().required('email must not be empty'),
    phone:yup.number('phone number sholud be number').positive('phone no sholud not negative').required('phone number must not be empty'),
    age:yup.number().positive().min(18).max(28).required('age shold not be empty')
})

export default function Form(){
 
    const{register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)});

    console.log(errors);

    return (
    <>
    <h1>Form component</h1>
    <form onSubmit={handleSubmit((data)=>console.log(data))}>

        <input {...register('name')} type="text" placeholder="name"></input><br />
        <input {...register('email')} type="text" placeholder="email"></input><br />
        <input {...register('phone')}  type="text" placeholder="phonenumber"></input><br />
        <input {...register('age')} type="number" placeholder="age"></input><br />
        <input type="submit" ></input><br />
    </form>
    </>
    );
}