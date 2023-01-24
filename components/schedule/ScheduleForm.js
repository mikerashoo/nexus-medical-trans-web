import { useState } from "react";
import AddressInformationForm from "./AddressInformationForm";
import AppointmentInformationForm from "./AppointmentForm";
import PersonalInformationForm from "./PersonalInformationForm";
import * as emailjs from 'emailjs-com'
import ErrorBox from "./ErrorBox";
import ScheduleSubmittedMessage from "./ScheduleSubmbittedMessage";
import { EMAILJS_SECRETS } from "../email-js-secrets";



const inputClasses = "w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary";

export default function ScheduleForm  ()  {

    const [screenIndex, setScreenIndex] = useState(1);
    const [personalInformation, setPersonalInformation] = useState(null);
    const [addressInformation, setAddressInformation] = useState(null);
    const [appointmentInformation, setAppointmentInformation] = useState(null);
    const [showErrorDialog, setShowErrorDialog] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const nextScreen = () => {
        let nextIndex = screenIndex + 1;
        setScreenIndex(nextIndex);
    }
    const prevScreen = () => {
        let prevIndex = screenIndex - 1;
        setScreenIndex(prevIndex);
    }

    const onPersonalInformationSubmit = (info) => { 
        setPersonalInformation(info);
        nextScreen();
    }
    const onAddressInformationSubmit = (info) => {
        setAddressInformation(info);
        nextScreen();
    }

    const onAppointmentInformationSubmit = (info) => { 
        setIsSaving(true);
        const templateParams = {
            replyTo: personalInformation.email,
            ...personalInformation, ...addressInformation, ...info
          }
 
        console.log(templateParams);
          emailjs.send(
           EMAILJS_SECRETS.serviceId,
           EMAILJS_SECRETS.templeId,
            templateParams,
            EMAILJS_SECRETS.publicKey
          )
            .then((result) => {
        setIsSaving(false);

                nextScreen()
            }, (error) => {
        setIsSaving(false);

                setShowErrorDialog(true);

            });
      
    }

     
    return ( 
        
            <div className="bg-white py-10 rounded-lg lg:rounded-l-none px-10 ">
        
                    <ErrorBox show={showErrorDialog} onErrorDialogCancel={() => setShowErrorDialog(false)}/>
                    <div className={screenIndex != 1 ? 'hidden' : ''} >
                        <PersonalInformationForm onSubmit={onPersonalInformationSubmit} /> 
                    </div>
                    <div className={screenIndex != 2 ? 'hidden' : ''} >
                        <AddressInformationForm onSubmit={onAddressInformationSubmit} onPrevClick={prevScreen}/>
                    </div>
                    <div className={screenIndex != 3 ? 'hidden' : ''} >
                        <AppointmentInformationForm isSaving={isSaving} onSubmit={onAppointmentInformationSubmit} onPrevClick={prevScreen}/>
                    </div> 
                    
                    <div className={screenIndex != 4 ? 'hidden' : ''} >
                        <ScheduleSubmittedMessage />
                    </div>
               
            </div>
         
        )
    }