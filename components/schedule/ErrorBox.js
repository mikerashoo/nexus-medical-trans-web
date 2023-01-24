import { useState } from "react";

const ErrorBox = (props) => {

     
    if(!props.show) {
        return <></>
    }
    return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Submit Failed!</strong>
    <span className="block sm:inline">Something went wrong please try again.</span>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    <button onClick={() => props.onErrorDialogCancel()} className="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
     </span>
  </div>
}

export default ErrorBox;