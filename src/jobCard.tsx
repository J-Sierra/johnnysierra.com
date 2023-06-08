import React, { ReactNode } from "react";
import "./jobCard.css";

interface JobCardProps {
  children: ReactNode;
  companyName: string;
  dates: string;
  jobTitle: string;
}

const JobCard: React.FC<JobCardProps> = ({
  children,
  companyName,
  dates,
  jobTitle,
}) => {
  return (
    <div
      className={`work-experience-block `}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "-35px",
        }}
      >
        <h1>{companyName}</h1>
        <p>{dates}</p>
      </div>
      <h4 style={{ color: "#D3D3D382" }}>{jobTitle}</h4>
      <div>{children}</div>
    </div>
  );
};

export default JobCard;
