import "./CustomButton.scss";
type CustomButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className = "",
}) => {
  return <button className={`custom-button ${className}`}>{children}</button>;
};

export default CustomButton;
