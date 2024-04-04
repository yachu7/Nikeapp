const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullwidth,
}) => {
  const buttonStyle = `
    flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor} rounded-full`
        : "bg-coral-red rounded-full text-white border-coral-red ${fullwidth && 'w-full'} "
    }
  `;

  return (
    <button className={buttonStyle}>
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 w-5 h-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
