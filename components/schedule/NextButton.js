const NextButton = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} bg-indigo-600
        rounded
        border border-primary 
        text-base font-medium
        md:text-lg
        text-white
        py-2
        transition
        hover:bg-opacity-90`}
        {...props}
    />
)

export default NextButton;
