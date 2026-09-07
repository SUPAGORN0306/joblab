import { useParams, Link } from "react-router-dom";
import { getJobById } from "./jobsData";
import "../JobDetail.css";

function JobDetail() {
  const { id } = useParams();
  const job = getJobById(id);

  if (!job) {
    return (
      <div className="job-detail-container">
        <Link to="/home" className="back-link">
          <span className="back-arrow">‹</span> Back to search
        </Link>
        <p className="job-not-found">ไม่พบตำแหน่งงานนี้</p>
      </div>
    );
  }

  return (
    <div className="job-detail-container">
      <Link to="/home" className="back-link">
        <span className="back-arrow">‹</span> Back to search
      </Link>

      <div className="job-detail-grid">
        {/* ฝั่งซ้าย: เนื้อหาหลักของงาน */}
        <div className="job-main-card">
          <div className="job-main-top">
            <div className="job-title-row">
              <div className={`job-logo ${job.logoClass}`}>{job.logoLetter}</div>
            </div>
            <button className="apply-btn">Apply now</button>
          </div>

          <h1 className="job-title">{job.title}</h1>
          <p className="job-meta">
            {job.company} · {job.location} · {job.workMode}
          </p>

          <div className="job-tags">
            <span>{job.type}</span>
            <span>{job.level}</span>
            <span>{job.workMode.split("/")[0]}</span>
            <span>{job.salary}</span>
          </div>

          <section className="job-section">
            <h3>About the role</h3>
            <p>{job.aboutRole}</p>
          </section>

          <section className="job-section">
            <h3>What you'll do</h3>
            <ul>
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="job-section">
            <h3>What we're looking for</h3>
            <ul>
              {job.requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* ฝั่งขวา: สรุปคะแนนความเหมาะสม + ข้อมูลเร็ว */}
        <div className="job-sidebar">
          <div className="job-side-card">
            <h4>Match breakdown</h4>
            {job.matchBreakdown.map((item) => (
              <div className="match-row" key={item.label}>
                <div className="match-row-header">
                  <span>{item.label}</span>
                  <span>{item.percent}%</span>
                </div>
                <div className="match-bar-track">
                  <div
                    className="match-bar-fill"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="job-side-card">
            <h4>Quick facts</h4>
            <div className="quick-fact-row">
              <span className="quick-fact-label">Posted</span>
              <span className="quick-fact-value">{job.postedAgo}</span>
            </div>
            <div className="quick-fact-row">
              <span className="quick-fact-label">Applicants</span>
              <span className="quick-fact-value">{job.applicants.replace(" applicants", "")}</span>
            </div>
            <div className="quick-fact-row">
              <span className="quick-fact-label">Team size</span>
              <span className="quick-fact-value">{job.teamSize}</span>
            </div>
            <div className="quick-fact-row">
              <span className="quick-fact-label">Visa sponsorship</span>
              <span className="quick-fact-value">{job.visaSponsorship}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;