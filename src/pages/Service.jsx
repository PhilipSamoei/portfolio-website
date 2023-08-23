import React from 'react'

function Service() {
  return (
    <div>
      <h1>Services</h1>
      <div className='grid gap-4 grid-cols-3 '>
        <div className='w-96 border border-solid  rounded-lg mt-11 p-7 pr-11 hover:bg-slate-300  hover:cursor-pointer  '>
            <h1 className='text-5xl '>Web Developement</h1>
            <img src="https://cdn-icons-png.flaticon.com/128/1005/1005141.png"
             alt="web development icon " 
             srcset="https://icon-library.com/images/web-development-icon/web-development-icon-11.jpg" />
             <p>I create user-centric websites using React and its libraries. I focus on component-based 
                development, responsive design, accessibility, and engaging microinteractions to deliver a seamless user experience.</p>
        </div>

        <div className='w-96 border border-solid  rounded-lg mt-11 p-7 pr-11 hover:bg-slate-300  hover:cursor-pointer  '>
            <h1 className='text-5xl '>Backend Development</h1>
            <img  src="https://icones.pro/wp-content/uploads/2021/05/icone-base-donnees-verte.png"
             alt="web development icon " 
             srcset="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVm3xS9oM9Z-sU7-nhfDBmzGywZ3xg8YeCRup_l0rf76Ih03jdOdwoA6HkZ_hPOMWeoFM&usqp=CAU" />
             <p>I am a skilled Full Stack Developer specializing in SQL, PostgreSQL, Ruby, and Ruby on Rails. I excel in designing and implementing efficient
                 relational databases, enabling seamless CRUD (Create, Read, Update, Delete) operations for optimal application performance.</p>
        </div>
        </div>

    </div>
  )
}

export default Service