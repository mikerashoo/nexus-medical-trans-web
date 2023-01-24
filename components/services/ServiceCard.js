import Image from "next/image";

const ServiceCard = (props) => {

    const {service} = props;
    return (
        <div className="w-full md:w-1/2 xl:w-1/3 px-8">
                    <div className="bg-white rounded-lg overflow-hidden mb-10">
                       <img src={service.imgSrc} 
                       className="w-full"
                       alt={service.title + ' image'}/>
                       <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                          <h3>
                             <p
                                className="
                                font-semibold
                                text-dark text-xl
                                sm:text-[22px]
                                md:text-xl
                                lg:text-[22px]
                                xl:text-xl
                                2xl:text-[22px]
                                mb-4
                                block
                                hover:text-primary
                                "
                                >
                             {service.title}
                             </p>
                          </h3>
                          <p className="text-base text-body-color leading-relaxed mb-7">
                             {service.description}
                          </p>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href={"/schedule"}
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Book Now
                  </a>
                </div>
                       </div>
                    </div>
                 </div>
    )
}

export default ServiceCard;