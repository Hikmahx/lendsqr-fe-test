import React from "react";
type Props = {
  icon: JSX.Element;
  header: string;
  number: string;
};
const Card = ({ icon, header, number }: Props) => {
  return (
    <div className="card">
      <i className="">{icon}</i>
      <h2 className="">{header}</h2>
      <p className="">{number}</p>
    </div>
  );
};

export default Card;
