import { useRef, useState } from "react";
import * as emailjs from 'emailjs-com'
const templeId = "template_3l62jbm";
const serviceId = "service_5xs5sfu";
const publicKey = "4Tgdx4noV5hG8J_LW";

const RequestForm = () => {
    const [isSaving, setIsSaving] = useState(false);
    const [isFeedbackShown, setIsFeedbackShown] = useState(false);
    const [isSubmitFailed, setIsSubmitFailed] = useState(false);
    const form = useRef();
    const name = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const subject = useRef(null);
    const message = useRef(null);

     
    const sendEmail = (e) => {

        setIsSaving(true);
        e.preventDefault();
        const templateParams = {
            from_name: name.current.value,
            from_email: email.current.value,
            subject: subject.current.value,
            to_name: 'Nexus medical transport support team',
            message: message.current.value,
          }
          emailjs.send(
           serviceId,
           templeId,
            templateParams,
            publicKey
          )
            .then((result) => {
              console.log(result.text);
              name.current.value = null
              phone.current.value = null
              subject.current.value = null
              email.current.value = null
              message.current.value = null
              setIsSaving(false);
              setIsFeedbackShown(true);
            }, (error) => {
              setIsSaving(false);

            setIsSubmitFailed(true);
            });
      };
    return (
        <div>
        {isFeedbackShown &&  <div className="w-full text-white bg-emerald-500 mb-4 rounded">
    <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <div className="flex">
            <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z">
                </path>
            </svg>

            <p className="mx-3">Your message has been sent. Thank you!</p>
             
        </div>

        <button onClick={() => setIsFeedbackShown(false)} className="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    </div>
</div> }

{isSubmitFailed && <div className="w-full text-white bg-red-500 mb-4 rounded">
    <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <div className="flex">
            <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z">
                </path>
            </svg>

            <p className="mx-3">Something went wrong please try again!</p>
             
        </div>

        <button onClick={() => setIsSubmitFailed(false)} className="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    </div>
</div> }
        <form ref={form} onSubmit={sendEmail}>

        <div className="mb-6">
           <input
              type="text"
              placeholder="Your Name"
              ref={name}
              required
              className="
              w-full
              rounded
              py-2
              px-[14px]
              text-body-color text-base
              border border-[f0f0f0]
              outline-none
              focus-visible:shadow-none
              focus:border-primary
              "
              />
        </div>
        <div className="mb-6">
           <input
              type="email"
              placeholder="Your Email"
              ref={email}
              required
              className="
              w-full
              rounded
              py-2
              px-[14px]
              text-body-color text-base
              border border-[f0f0f0]
              outline-none
              focus-visible:shadow-none
              focus:border-primary
              "
              />
        </div>
        <div className="mb-6">
           <input
              type="text"
              placeholder="Your Phone"
              ref={phone}
              required
              className="
              w-full
              rounded
              py-2
              px-[14px]
              text-body-color text-base
              border border-[f0f0f0]
              outline-none
              focus-visible:shadow-none
              focus:border-primary
              "
              />
        </div>
        <div className="mb-6">

        <input
              type="text"
              placeholder="Subject"
              ref={subject}
              required
              className="
              w-full
              rounded
              py-2
              px-[14px]
              text-body-color text-base
              border border-[f0f0f0]
              outline-none
              focus-visible:shadow-none
              focus:border-primary
              "
              />
              </div>
        <div className="mb-6">
           <textarea
              rows="6"
              ref={message}
              required
              placeholder="Your Message"
              className="
              w-full
              rounded
              py-2
              px-[14px]
              text-body-color text-base
              border border-[f0f0f0]
              resize-none
              outline-none
              focus-visible:shadow-none
              focus:border-primary
              "
              ></textarea>
        </div>
        <div>
           <button
              type="submit"
              className="
              w-full
              text-white
              bg-indigo-600
              rounded
              border border-primary 
              text-base font-medium
              md:text-lg
              py-4
              transition
              hover:bg-opacity-90
              "
              >

               { isSaving ? 
               <>
               <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
               <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
               </svg>
               Sending ...
               </>
               :
           "Send Message" }
           </button>
        </div>
     </form> 
     </div> 
    )
}

export default RequestForm;