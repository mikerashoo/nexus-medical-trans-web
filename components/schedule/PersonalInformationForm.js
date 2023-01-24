import ReactDatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import NextButton from "./NextButton";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import FormTitle from "./FormTitle";

const inputClasses = "w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary";

const PersonalInformationForm = (props) => {
    const { register, handleSubmit, control, watch, formState: { errors }, setValue } = useForm();
    
    const onSubmit = (data) => {  
        const formatDate = moment(data.birth_date).format('MMMM Do YYYY') 
        props.onSubmit({...data, birth_date: formatDate});
    }
    return (
        <div className="w-full overflow-auto">
                        <FormTitle>Personal Information</FormTitle>
                        <form onSubmit={handleSubmit(onSubmit)}>
 
                            <div className="mb-4 grid md:grid-cols-2 md:gap-6">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                    First Name
                                    </label>
                                
                                    <input
                                    type="text"
                                    {...register("first_name")}

                                    placeholder="First Name" 
                                    required
                                    className={inputClasses}
                                    />
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                    className={inputClasses}
                                    {...register("last_name")}

                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div className="mb-4 grid md:grid-cols-2 md:gap-6">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                        Email
                                    </label>
                                
                                    <input
                                    type="email"
                                    {...register("email")}
                                    placeholder="Enter your email here" 
                                    required
                                    className={inputClasses}
                                    />
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                                        Phone Number
                                    </label>
                                    <input
                                    className={inputClasses}
                                    {...register("phone_number")}
                                    required
                                    id="phoneNumber"
                                    type="text"
                                    placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>



 
                        <div className="mb-4 grid md:grid-cols-2 md:gap-6">
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                Date of Birth
                                </label>
                                <Controller
                                    control={control}
                                    name="birth_date"
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <ReactDatePicker
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        className={inputClasses}
                                        required
                                        selected={value}
                                        maxDate={new Date()}
                                    />
                                    )}
                                />

                            </div>
                            <div className="md:ml-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                                Gender
                                </label>
                                <select 
                                id="gender" 
                                {...register("gender")}
                                required  
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                     
                                     <option disabled={true} value="">
                                        --Select gender--
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>  
                                </select>
                            </div>
                        </div>
                        <div className="w-full flex justify-between mt-4">
                            <div ></div>
                            <NextButton className="w-1/3" 
                                >

                                    Next
                            </NextButton>
                        </div>
                        </form>
                    </div>
    )
}

export default PersonalInformationForm;