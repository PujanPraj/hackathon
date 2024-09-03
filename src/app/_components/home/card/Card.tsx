import React from "react";

interface CardProps {
  icon: React.ReactElement; // The icon prop should be a React element
  para: string;
}

const Card: React.FC<CardProps> = ({ icon, para }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Render the icon passed as a prop */}
      <div className="h-10 w-10">{icon}</div>
      {/* Render the paragraph text passed as a prop */}
      <p className="text-center">{para}</p>
    </div>
  );
};

// Example usage of the Card component
export default Card;
