import { useState } from "react";
import '../Home.css'; 

function Compare() {
  const comparedJobs = [
    {
      id: "A",
      title: "Web Designer",
      company: "Amazon",
      logoClass: "green-logo",
      salary: "$127k/yr",
      matchScore: "79%",
      employment: "Full time",
      level: "Senior",
      location: "Remote/Office",
      applicants: "60+ applicants"
    },
    {
      id: "B",
      title: "Web Designer",
      company: "BeReal",
      logoClass: "indigo-logo",
      salary: "$115k/yr",
      matchScore: "86%",
      employment: "Full time",
      level: "Middle",
      location: "Remote",
      applicants: "<40 applicants"
    }
  ];

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="/Logo_in_app.svg" alt="JobLab" />
        </div>

        <div className="top-page-1">
          <h2>Compare <span>Opportunities.</span><br />Choose your <span>path.</span></h2>
          <p>Side-by-side comparison to help you analyze salaries, requirements, and fit.</p>
        </div>

        <div className="search-filter-section" style={{ maxWidth: '100%', padding: '40px 30px' }}>
          <div className="compare-table-container">
            <div className="compare-header-row">
              <div className="compare-feature-col"></div>
              {comparedJobs.map((job) => (
                <div key={job.id} className="compare-job-header">
                  <div className={`Recommended-logo ${job.logoClass}`} style={{ margin: '0 auto 10px auto' }}>
                    {job.id}
                  </div>
                  <h4 style={{ color: '#ffffff', margin: '0 0 4px 0' }}>{job.title}</h4>
                  <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{job.company}</span>
                </div>
              ))}
            </div>

            <div className="compare-body">
              <div className="compare-row">
                <div className="compare-label">Salary</div>
                <div className="compare-value highlight-salary">{comparedJobs[0].salary}</div>
                <div className="compare-value highlight-salary">{comparedJobs[1].salary}</div>
              </div>

              <div className="compare-row">
                <div className="compare-label">Match score</div>
                <div className="compare-value">{comparedJobs[0].matchScore}</div>
                <div className="compare-value">{comparedJobs[1].matchScore}</div>
              </div>

              <div className="compare-row">
                <div className="compare-label">Employment</div>
                <div className="compare-value">{comparedJobs[0].employment}</div>
                <div className="compare-value">{comparedJobs[1].employment}</div>
              </div>

              <div className="compare-row">
                <div className="compare-label">Level</div>
                <div className="compare-value">{comparedJobs[0].level}</div>
                <div className="compare-value">{comparedJobs[1].level}</div>
              </div>

              <div className="compare-row">
                <div className="compare-label">Location</div>
                <div className="compare-value">{comparedJobs[0].location}</div>
                <div className="compare-value">{comparedJobs[1].location}</div>
              </div>

              <div className="compare-row">
                <div className="compare-label">Applicants</div>
                <div className="compare-value">{comparedJobs[0].applicants}</div>
                <div className="compare-value">{comparedJobs[1].applicants}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Compare;