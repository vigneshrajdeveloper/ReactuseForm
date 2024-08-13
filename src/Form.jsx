import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'



const name='^[a-zA-Z]+$'
const phone ='\\A[0-9]{10}\\z'

const schema=yup.object().shape({

        name:yup.string().matches(name,'enter valid name').required('name is compulsory'),
        email:yup.string().email("Please enter a valid email!").required('email is compulsory'),
        phone:yup.string().matches(phone,'enter valid phone number').required('phone is compulsory'),
        age:yup.number().typeError('Age sht be number').integer('decimal not allowed')
        .positive('-ve shnt not come').min(18,'age is short').max(28,'age is long').required('age is compulsory')

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
        <input {...register('age')} type="text" placeholder="age"></input><br />
        <input type="submit" ></input><br />
    </form>
    </>
    );
}