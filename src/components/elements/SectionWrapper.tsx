import "./SectionWrapper.scss";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  style?: any;
  maxWidth?: string;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  style,
  maxWidth = "1300px",
}) => {
  return (
    <div
      className={`section-wrapper ${className}`}
      style={{ ...style, maxWidth: maxWidth }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
