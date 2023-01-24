const ScheduleSubmittedMessage = () => {
    return <div className="flex flex-col items-center justify-center w-full py-20">
                <div className="text-green-600 text-center">
                    <svg className="w-20 sm:w-20 h-20 sm:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h1 className="font-extrabold text-4xl text-green-600">Thank You!</h1>
                <p className="mt-4 text-lg font-bold"> Your information has been saved successfully. </p>
                <p className="text-lg font-bold"> We will contact you back soon.</p>
            </div>
}

export default ScheduleSubmittedMessage;