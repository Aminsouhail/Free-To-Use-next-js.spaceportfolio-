import React from "react";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<Props> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ${className}`}>
      {children}
    </button>
  );
};

export default Button;