import React, { ReactNode, useEffect, useRef } from "react";
import "./jobCard.css";

interface JobCardProps {
  children: ReactNode;
  companyName: string;
  dates: string;
  jobTitle: string;
  className?: string;
}

const JobCard: React.FC<JobCardProps> = ({
  children,
  companyName,
  dates,
  jobTitle,
}) => {
  const jobCardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // When the component mounts, add the "fade-in" class to the JobCard
    if (jobCardRef.current) {
      jobCardRef.current.classList.add("fade-in");
    }
  }, []);

  return (
    <div className="work-experience-block" ref={jobCardRef}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "-35px",
        }}
      >
        <h1>{companyName}</h1>
        <p style={{ color: "#ffd500" }}>{dates}</p>
      </div>
      <h4 style={{ color: "#D3D3D382" }}>{jobTitle}</h4>
      <div>{children}</div>
    </div>
  );
};

export default JobCard;
