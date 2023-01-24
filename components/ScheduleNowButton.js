const ScheduleNowButton = () => {
    return (
        <div className="rounded-md shadow">
        <a
          href={"/schedule"}
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
        >
         Book Now
        </a>
      </div>
    )
}

export default ScheduleNowButton;