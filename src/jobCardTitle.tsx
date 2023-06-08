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
  return (
    <div
      style={{
        maxWidth: "150px",
        padding: "5px",
        border: "2px solid #ffd500",
        borderRadius: "5px",
      }}
      onClick={onClick}
      className={active ? "active" : ""}
    >
      <h1 style={{ marginBottom: "-5px" }}>{CompanyName}</h1>
      <p style={{ fontSize: "10px", color: "#D3D3D382" }}>{JobDates}</p>
    </div>
  );
};

export default JobCardTitle;
