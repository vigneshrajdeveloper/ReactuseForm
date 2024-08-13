import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'



const name='^[a-zA-Z]+$'
const phone ='^[0-9]{10}$'

const schema=yup.object().shape({

        name:yup.string().required('name is compulsory').matches(name,'enter valid name'),
        email:yup.string().email("Please enter a valid email!").required('email is compulsory'),
        phone:yup.string().required('phone is compulsory').matches(phone,'enter valid phone number'),
        age:yup.number().required('age is compulsory').typeError('Age sht be number').integer('decimal not allowed')
        .positive('-ve shnt not come').min(18,'age is short').max(28,'age is long')

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