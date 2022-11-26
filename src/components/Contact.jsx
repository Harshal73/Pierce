import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen
    bg-gradient-to-b from-gray-800 to-gray-500 p-4 text-white '>
        <div className='flex flex-col p-4 justify-center
            max-w-screen-lg mx-auto h-full   '>
         <div >
             <p className='text-4xl font-bold inline border-b-4 
             border-gray-500
              '>Contact to purchase</p>   
            <div className='mt-2 font-bold text-blue-600 hover:scale-105 duration-200 '> 
                <a href='https://t.me/Hershel73' >
                 Text us on Telegram
                 </a></div>
                 <div className='mt-2 font-bold text-blue-600 hover:scale-105 duration-200 '> 
                <a href='https://t.me/Kalus666' >
                Telegram 2
                 </a></div>
            
            <a href='mailto:harshal73gh@gmail.com'>pierceandpiercefunds@gmail.com</a>
             <p className='py-6'>Submit the form below to get in touch with me</p>
         </div>
         <div>
            <form action="https://getform.io/f/e6fe2b2e-55be-434e-8e1b-9a2e23d7ec0a "
            method='POST'
            className='flex flex-col w-full
            md:w-1/2'>
            <input 
            type="text"  
            name="name" 
            placeholder='Enter Your name' 
            className='my-4 p-2 bg-transparent border-2 rounded-md text-white
            focus:outline-none'
            />

            <input 
            type="text" 
            name="email" 
            placeholder='Enter Your email' 
            className='p-2 bg-transparent border-2 rounded-md text-white
            focus:outline-none'/>


            <textarea name="messege" 
             placeholder='Enter your messege'
             rows="5" 
             className='p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none'>
            </textarea>
              
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8
            mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
            Let's talk
            </button>
            </form>
         </div> 
       </div>
    </div>
  )
}

export default Contact