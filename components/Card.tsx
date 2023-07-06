import React, { FC } from "react";

interface CardProps {
  children: string
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="Card-Component">
      {children}
    </div>
   )
}

export default Card;
