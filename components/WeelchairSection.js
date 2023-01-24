import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import NexusLogo from "./NexusLogo";
import ScheduleNowButton from "./ScheduleNowButton";
const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }, 
  ]
  
const WheelChairSection = () => {
    return (
//     <div className="bg-white">
//         <div className="py-6">
//   <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
//         <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"}}></div>
//         {/* style="background-image:url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')" */}
//         <div className="w-full p-8 lg:w-1/2">
//             <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
//             <p className="text-xl text-gray-600 text-center">Welcome back!</p>
             
//         </div>
//     </div>
// </div>
//     </div>
    <div className="lg:flex overflow-hidden bg-white">        
        <div className="lg:inset-y-0 lg:w-1/3 h-100 lg:flex lg:flex-col">
            <img
                className="w-full object-cover h-100 lg:w-full"
                src="/imgs/wheelchair.jpg"
                alt=""
            />
        </div>
        <div className="lg:w-2/3 lg:flex lg:flex-col sm:text-center lg:text-left p-4"> 
                 
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"> 
                    <span className="block text-teal-600 xl:inline">Wheelchair Transportation</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                    If you use a wheelchair or other mobility assist device and need a handicap accessible vehicle, we’ve got you covered! Axel Medical Transportation can provide safe and comfortable rides to any client regardless of the level of disability. Contact us today to discuss how we can best meet your needs. Colorado Springs Medicaid Transportation.
                   </p>
                  
                   
        </div>

    </div>
    )
}


export default WheelChairSection;




