import React from "react";
import "./jobCard.css";

interface JobCardTitleProps {
  CompanyName: string;
  JobDates: string;
  onClick: () => void;
  active: boolean;
}

const JobCardTitle: React.FC<JobCardTitleProps> = ({
  CompanyName,
  JobDates,
  onClick,
  active,
}) => {
  console.log(active);
  return (
    <div onClick={onClick} className={`jobCardTitle ${active ? "active" : ""}`}>
      <h1 style={{ marginBottom: "-5px" }}>{CompanyName}</h1>
      <p style={{ fontSize: "10px", color: "#D3D3D382" }}>{JobDates}</p>
    </div>
  );
};

export default JobCardTitle;
