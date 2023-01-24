const PrevButton = ({ type = 'button', className, ...props }) => (
    <button
        type={type}
        className={`${className} text-green-600
        rounded
        border border-primary 
        text-base font-medium
        md:text-lg 
        border-green-600
        py-2
        transition
        hover:bg-opacity-90`}
        {...props}
    />
)

export default PrevButton;
