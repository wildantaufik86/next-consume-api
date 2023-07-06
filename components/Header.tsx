import React, { FC } from "react"

interface TitleProps {
  title: string,
}

const Header: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
   );
}

export default Header;
