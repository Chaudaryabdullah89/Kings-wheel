import React from 'react'

const Button = ({value}) => {
  return (
    <div>
        <button data-aos="zoom-in" style={{fontFamily: 'Karla'}} className='bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 font-bold w-fit text-white text-sm px-5 py-5 rounded-md flex items-center gap-0 hover:shadow-lg hover:-translate-y-1'>{value}<i class="fas fa-chevron-right animated-arrow ml-2"></i></button>   
    </div>
    
  )
}

    export default Button
