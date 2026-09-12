import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEmployerJobs, createEmployerJob } from '../api';
import { useAuth } from '../context/AuthContext';
import '../EmployerDashboard.css';

// ============================================
// 8 Job Titles ที่อนุญาต
// ============================================
const JOB_TITLES = [
  'AI Product Manager',
  'AI Researcher',
  'Computer Vision Engineer',
  'Data Analyst',
  'Data Scientist',
  'ML Engineer',
  'NLP Engineer',
  'Quant Researcher',
];

export default function EmployerDashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPostForm, setShowPostForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form state
  const [form, setForm] = useState({
    job_title: '',
    company_name: user?.company || '',
    location: '',
    employment_type: 'Full-time',
    experience_level: 'Mid',
    salary_min: '',
    salary_max: '',
    skills_required: '',
    tools_preferred: '',
    industry: user?.industry || '',
    company_size: '',
    about_role: '',
    responsibilities: '',
    requirements: '',
  });

  // === โหลด jobs ===
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchEmployerJobs();
        setJobs(data.jobs || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // === Submit job ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const result = await createEmployerJob(form);
      alert(`✅ ${result.message}\nJob ID: ${result.job_id}`);

      // Reset form
      setForm({
        job_title: '',
        company_name: user?.company || '',
        location: '',
        employment_type: 'Full-time',
        experience_level: 'Mid',
        salary_min: '',
        salary_max: '',
        skills_required: '',
        tools_preferred: '',
        industry: user?.industry || '',
        company_size: '',
        about_role: '',
        responsibilities: '',
        requirements: '',
      });
      setShowPostForm(false);

      // โหลด jobs ใหม่
      const data = await fetchEmployerJobs();
      setJobs(data.jobs || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogout = () => {
    if (window.confirm('Logout?')) {
      logout();
      navigate('/');
    }
  };

  // === Loading ===
  if (loading) {
    return (
      <div className="employer-container">
        <p className="employer-loading">Loading dashboard...</p>
      </div>
    );
  }

  const totalApplicants = jobs.reduce(
    (sum, j) => sum + (j.applicant_count || 0),
    0
  );

  return (
    <div className="employer-container">
      {/* ============ HEADER ============ */}
      <div className="employer-header">
        <div>
          <h1>Employer Dashboard</h1>
          <p>
            Welcome back, <span>{user?.name || 'Recruiter'}</span>
            {user?.company && ` · ${user.company}`}
          </p>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Log out
        </button>
      </div>

      {/* ============ ERROR ============ */}
      {error && <div className="employer-error">❌ {error}</div>}

      {/* ============ STATS ============ */}
      <div className="employer-stats-grid">
        <div className="employer-stat-card">
          <h3>Active Postings</h3>
          <p>{jobs.length}</p>
        </div>
        <div className="employer-stat-card">
          <h3>Total Applicants</h3>
          <p>{totalApplicants}</p>
        </div>
      </div>

      {/* ============ SECTION: POST JOB ============ */}
      <div className="employer-section">
        <div className="section-header-row">
          <h2>{showPostForm ? 'Post a New Job' : 'Manage Your Jobs'}</h2>
          {!showPostForm && (
            <button
              className="post-job-btn"
              onClick={() => setShowPostForm(true)}
            >
              + Post a New Job
            </button>
          )}
        </div>

        {showPostForm && (
          <form onSubmit={handleSubmit} className="job-post-form">
            {/* Grid: Inputs */}
            <div className="job-form-grid">
              {/* Job Title — Dropdown (8 options) */}
              <select
                className="field-input"
                required
                value={form.job_title}
                onChange={(e) => handleChange('job_title', e.target.value)}
              >
                <option value="">-- เลือกตำแหน่ง --</option>
                {JOB_TITLES.map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Company Name *"
                required
                value={form.company_name}
                onChange={(e) => handleChange('company_name', e.target.value)}
                className="field-input"
              />

              <input
                type="text"
                placeholder="Location"
                value={form.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="field-input"
              />

              <select
                value={form.employment_type}
                onChange={(e) =>
                  handleChange('employment_type', e.target.value)
                }
                className="field-input"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>

              <select
                value={form.experience_level}
                onChange={(e) =>
                  handleChange('experience_level', e.target.value)
                }
                className="field-input"
              >
                <option value="Junior">Junior</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
                <option value="Lead">Lead</option>
              </select>

              <input
                type="number"
                placeholder="Salary Min (USD)"
                value={form.salary_min}
                onChange={(e) => handleChange('salary_min', e.target.value)}
                className="field-input"
              />

              <input
                type="number"
                placeholder="Salary Max (USD)"
                value={form.salary_max}
                onChange={(e) => handleChange('salary_max', e.target.value)}
                className="field-input"
              />

              <input
                type="text"
                placeholder="Industry"
                value={form.industry}
                onChange={(e) => handleChange('industry', e.target.value)}
                className="field-input"
              />

              <input
                type="text"
                placeholder="Skills Required (comma separated)"
                value={form.skills_required}
                onChange={(e) =>
                  handleChange('skills_required', e.target.value)
                }
                className="field-input field-full-width"
              />

              <input
                type="text"
                placeholder="Tools Preferred"
                value={form.tools_preferred}
                onChange={(e) =>
                  handleChange('tools_preferred', e.target.value)
                }
                className="field-input field-full-width"
              />

              <textarea
                placeholder="About the role"
                rows={3}
                value={form.about_role}
                onChange={(e) => handleChange('about_role', e.target.value)}
                className="field-input field-full-width"
              />

              <textarea
                placeholder="Responsibilities"
                rows={3}
                value={form.responsibilities}
                onChange={(e) =>
                  handleChange('responsibilities', e.target.value)
                }
                className="field-input field-full-width"
              />

              <textarea
                placeholder="Requirements"
                rows={3}
                value={form.requirements}
                onChange={(e) => handleChange('requirements', e.target.value)}
                className="field-input field-full-width"
              />
            </div>

            {/* Buttons */}
            <div className="job-form-actions">
              <button
                type="button"
                className="cancel-job-btn"
                onClick={() => setShowPostForm(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="publish-job-btn"
                disabled={submitting}
              >
                {submitting ? 'Publishing...' : 'Publish Job'}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* ============ SECTION: JOB LIST ============ */}
      <div className="employer-section">
        <h2>Your Job Postings ({jobs.length})</h2>

        {jobs.length === 0 ? (
          <div className="empty-jobs">
            <p className="empty-jobs-title">ยังไม่มีงานที่โพสต์</p>
            <p className="empty-jobs-sub">
              กดปุ่ม "Post a New Job" เพื่อเริ่มต้น
            </p>
          </div>
        ) : (
          <div className="job-list-grid">
            {jobs.map((job) => (
              <div className="job-post-card" key={job.id}>
                <div className="job-info">
                  <h3>{job.job_title}</h3>
                  <p>
                    {job.location || 'N/A'} · {job.employment_type} ·{' '}
                    <strong>{job.applicant_count}</strong> applicants
                  </p>
                  <p className="job-post-date">
                    Posted:{' '}
                    {job.posted_date
                      ? new Date(job.posted_date).toLocaleDateString()
                      : 'N/A'}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                  }}
                >
                  <button
                    className="view-applicants-btn"
                    onClick={() =>
                      navigate(`/employer/jobs/${job.id}/applicants`)
                    }
                    style={{
                      background: 'rgba(128, 255, 213, 0.15)',
                      border: '1px solid rgba(128, 255, 213, 0.4)',
                      color: '#80ffd5',
                      borderRadius: '10px',
                      padding: '8px 14px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    View Applicants ({job.applicant_count})
                  </button>
                  <span className="job-status-badge">{job.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}