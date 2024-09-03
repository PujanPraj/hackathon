import React from "react";

interface CardProps {
  icon: React.ReactElement; // The icon prop should be a React element
  para: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ icon, para, title }) => {
  return (
    <div className="relative flex flex-col items-center space-y-4 p-5 bg-white rounded-xl transition-shadow duration-500 hover:shadow-2xl">
      {/* Render the icon passed as a prop */}
      {icon && (
        <div className="h-16 w-16 text-orange-500">
          {/* Increase the height and width */}
          {React.cloneElement(icon, { className: "h-full w-full" })}
        </div>
      )}
      <h3 className="text-xl font-bold text-orange-500">{title}</h3>
      {/* Render the paragraph text passed as a prop */}
      <p className="text-center w-[90%]">{para}</p>
    </div>
  );
};

// Example usage of the Card component
export default Card;
