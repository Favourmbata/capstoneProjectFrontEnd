import React from "react";


const FilledButton = (props) => {
    return (
        <button className='bg-blue-500 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400
    duration-500 font-bold text-xl '>
            {props.children}
        </button>
    )
}

export default FilledButton