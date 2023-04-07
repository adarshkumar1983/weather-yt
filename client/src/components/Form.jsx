import axios from 'axios'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Form = () => {
    const [zipcode, setZipCode] = useState('')
    const navigate = useNavigate();
    
    
       const handleSubmit = async(e) =>{
        e.preventDefault();
        setZipCode('')  
try {
  const weatherData = await axios.post('/', {zipcode})
  navigate('/weatherinfo', {state: {data: weatherData.data}});
} catch (error) {
  if(error){
    alert('Zipcode is incorrect!')
  }
}
     
        



        
       
      
       

  }


  return (
    <div className='w-full h-[100vh]'>
 <Link to = '/'><h1 className='text-center p-5 text-[8vmin] font-bold'>ENTER ZIPCODE</h1></Link>   

    <div className='w-full h-[55%] flex justify-center items-center'>

        <form onSubmit={handleSubmit}>
          
        <input className='border border-black rounded-md' value={zipcode} type = 'text' onChange = {e=>setZipCode(e.target.value)} placeholder={'Zipcode...'} required/>
        <button className='rounded-md bg-green-500'>Search</button>
   </form>
    </div>
    </div>
  )
}

export default Form


