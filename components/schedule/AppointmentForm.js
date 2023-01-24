import moment from "moment";
import ReactDatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import FormTitle from "./FormTitle";
const inputClasses = "w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary";

const AppointmentInformationForm = (props) => {
    const validation = Yup.object().shape({
        chooseCb: Yup.bool().oneOf([true], 'You must agree to terms'),
      })
      const optionsForm = { resolver: yupResolver(validation) }
    const { register, handleSubmit, control, formState: { errors } } = useForm(optionsForm);
    
    const onSubmit = (data) => { 
        const formattedAppointmentDate = moment(data.appointment_date).format('MMMM Do YYYY') 
        const formattedAppointmentTime = moment(data.appointment_time).format('LT') 
        props.onSubmit({...data, appointment_date: formattedAppointmentDate, appointment_time: formattedAppointmentTime});
        
        return false;
    }

    return <div>
          <FormTitle> Appointment Information </FormTitle>
            
            
            <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-4 grid md:grid-cols-2 md:gap-6">
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                Appointment Date
                                </label>
                            
                                <Controller
                                    control={control}
                                    name="appointment_date"
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <ReactDatePicker
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        className={inputClasses}
                                        required
                                        selected={value}
                                        minDate={new Date()}
                                        placeholderText={moment().format('dddd, MM Do YYYY')}

                                    />
                                    )}
                                />
                        </div>
    <div className="md:ml-2">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="pickUpZipCode">
        Appointment Time
        </label>
        <Controller
                                    control={control}
                                    name="appointment_time"
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <ReactDatePicker
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        className={inputClasses}
                                        required
                                        selected={value} 
                                        placeholderText={moment().format('h:mm')}
                                        showTimeSelect
                                        showTimeSelectOnly 
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
                                    )}
                                />
                            </div>
                        </div>   
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                        Notes/Comments
                            </label>
                            <textarea
                            className={inputClasses}
                            {...register("notes")}
                            id="notes"
                            type="text"
                            rows={3} 
                            placeholder="Enter your extra notes or comments here"
                            ></textarea>
                        </div>

                        <p className="font-extrabold">---------- Agreement and Signature ----------</p>
                                        <p>
                                        I certify that the information provided is accurate to the best of my knowledge. 
                                        If Axel Medical Transportation does not receive required documentation, if applicable, within one business day of the initial request date, the request will be denied. 
                                        <br/> 
                                        <b>
                                             DENIED REQUESTS CAN ALWAYS BE RESUBMITTED WITH THE REQUIRED DOCUMENTATION.
                                             </b>
                                            </p>

                                            <div className="form-check">
            <input
              type="checkbox"
              name="selectCheckbox"
              id="selectCheckbox"
              {...register('chooseCb')}
              className={`form-check-input ${
                errors.chooseCb ? 'is-invalid' : ''
              }`}
            />
            <label htmlFor="chooseCb" className="form-check-label text-green-600 pl-2">
             I agree to the terms and conditions as set out by the user agreement
            </label>
            <div className="invalid-feedback text-red-600">{errors.chooseCb?.message}</div>
          </div>


<div className="w-full flex gap-2 justify-end mt-4">
                             
                            <PrevButton className="w-1/3" 
                                onClick={props.onPrevClick}
                                >

                                    Prev
                            </PrevButton>
                            <NextButton className="lg:w-1/3 w-full" > 
                            { props.isSaving ? 
                                        <>
                                        <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                        </svg>
                                        Saving information ...
                                        </>
                                        :
                                    "Submit Information" }
                            </NextButton>
                        </div>
            </form>
       </div>
}

export default AppointmentInformationForm;