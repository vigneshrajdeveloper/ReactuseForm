import { useForm } from 'react-hook-form';
import './App.css';



function App() {

  console.log("inside app fun")
  const { register,handleSubmit ,formState:{errors},watch } = useForm({

    defaultValues:{
      name:"kumar",
      number:12345
    }

  });
  const data=watch('number');
  console.log(errors);

  return (

    <div className="App">

      <form onSubmit={handleSubmit((e)=>{console.log(e)})}>

        <input  {...register('name',{required:'frst sh not empty'})} placeholder='name'></input>
        {errors.name && <p>{errors.name.message}</p>}
        <br></br>
        <input {...register('number',{required:'number shdnt empty',minLength:{value:5,message:"5 char needed min"}})}placeholder='number'></input>
        {errors.number && <p>{errors.number.message}</p>}
        <input type='submit'/>
      </form>
{data}
    </div>
  );
}

export default App;
