import ServiceCard from "./ServiceCard";
const MedicalAppointementImg = '/imgs/medical appointements.jpg'
const PhysicalTherapyAppointementImg = '/imgs/physical-therapy.jpg'
const DialysisAppointementImg = '/imgs/dialysis.jpg'
const VisionAppointementImg = '/imgs/vision.jpg'
const DentalAppointementImg = '/imgs/dental.jpg'
const MentalAppointementImg = '/imgs/mental.jpg'
const services = [
    { title: 'Medical Appointments',
    description: 'Organizing transit to and from your appointments can be difficult. Let us take care of it!',
    imgSrc : MedicalAppointementImg
}, 
{ title: 'Physical Therapy Appointments',
    description: 'If you have additional needs just let us know. We can accommodate a wide variety of requests.',
    imgSrc : PhysicalTherapyAppointementImg
},
{ title: 'Dialysis Appointments',
    description: 'We will bring you to your dialysis appointment, and provide a comfortable ride back home. ',
    imgSrc : DialysisAppointementImg
},  
{ title: 'Vision Appointments',
    description: 'No matter what type appointment you need a ride to, we’ve got your back!',
    imgSrc : VisionAppointementImg
}, 
{ title: 'Dental Appointments',
    description: 'No matter what type appointment you need a ride to, we’ve got your back!',
    imgSrc : DentalAppointementImg
},
{ title: 'Mental Health Service Appointments',
    description: 'Our prompt and courteous staff will make sure you reach your appointments in on time.',
    imgSrc : MentalAppointementImg
},
];

const ServiceSection = () => {
    return (  
        <section id="services" className="pt-2 lg:pt-[60px] pb-12 lg:pb-[60px] bg-slate-50">
          
           <div className="flex flex-wrap">
         <div className="w-full">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
               <span className="font-semibold text-lg text-primary mb-2 block">
               Our Services
               </span>
               <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                  What We Offer
               </h2>
               <p className="text-base text-body-color">
               Our non-emergency medical transportation services offer the perfect solution for individuals with mobility issues and patients who require constant medical assistance.
               </p>
            </div>
         </div>
      </div>
              <div className="flex flex-wrap">
            {
                services.map(service => <ServiceCard key={service.title} service={service} />)
            }
                
              </div> 
        </section> 
    )
}

export default ServiceSection;