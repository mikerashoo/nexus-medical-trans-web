import moment from "moment";
import { useForm } from "react-hook-form";
import FormTitle from "./FormTitle";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
const inputClasses = "w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary";

const AddressInformationForm = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {   
        props.onSubmit(data);
    }

    return <div>
            <FormTitle>
                Address Information
            </FormTitle>
            
            
            <form onSubmit={handleSubmit(onSubmit)}>

           
<div className="mb-4">
    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
    Pickup Street Address
    </label>
    <input
    className={inputClasses}
    {...register("pick_up_street")}
    id="pick_up_street"
    type="text"
    required
    placeholder="Enter your pickup street"
    />
</div>
<div className="mb-4 grid md:grid-cols-2 md:gap-6">
    <div className="mb-4 md:mr-2 md:mb-0">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
        Pickup City
        </label>
    
        <input
        type="text"
        placeholder="Enter pickup city" 
        required
    {...register("pick_up_city")}

        className={inputClasses}
        />
    </div>
    <div className="md:ml-2">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="pickUpZipCode">
        Pickup Zip code
        </label>
        <input
        className={inputClasses}
        id="pickUpZipCode"
        type="text"
        required
    {...register("pick_up_zip_code")}

        placeholder="Zip Code"
        />
    </div>
</div>
<div className="mb-4">
    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
    Desctination Street
    </label>
    <input
    className={inputClasses}
    id="destination_street_address"
    type="text"
    {...register("destination_street")}
required
    placeholder="Enter your destination street here"
    />
</div>
<div className="mb-4 grid md:grid-cols-2 md:gap-6">
    <div className="mb-4 md:mr-2 md:mb-0">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
        Destination City
        </label>
        <input
        className={inputClasses}
        id="destination_city"
        type="text"
        required
        {...register("destination_city")} 
        placeholder="Destination city"
        />
    </div>
    <div className="md:ml-2">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
        Destination Zip Code
        </label>
        <input
        className={inputClasses}
        id="destination_zip_code"
        required 
        {...register("destination_zip_code")}

        type="text"
        placeholder="Destination zip code"
        />
    </div>
</div>
                        <div className="w-full flex gap-2 justify-end mt-4">
                             
                            <PrevButton className="w-1/3" 
                                onClick={props.onPrevClick}
                                >

                                    Previous
                            </PrevButton>
                            <NextButton className="w-1/3" 
                                >

                                    Next
                            </NextButton>
                        </div>
            </form>
       </div>
}

export default AddressInformationForm;