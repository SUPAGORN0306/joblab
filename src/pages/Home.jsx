import { useState } from "react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { jobs } from "./jobsData";
import { useFavorites } from "../context/FavoritesContext.jsx";
import { getMatchBadgeClass } from "../utils/matchBadge.js";
import '../Home.css';
import '../RecommendedCard.css';

function Home() {

  const { isFavorited, toggleFavorite } = useFavorites();

  const MAX_SALARY = 250000;

  const [salaryRange, setSalaryRange] = useState([0, MAX_SALARY]);

  const minVal = salaryRange[0];
  const maxVal = salaryRange[1];
  const minPercent = (minVal / MAX_SALARY) * 100;
  const maxPercent = (maxVal / MAX_SALARY) * 100;

  const TOTAL_JOBS_AVAILABLE = 2000;

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="/Logo_in_app.svg" alt="JobLab" />
        </div>

        <div className="top-page-1">
          <h2>Find your next <span>opportunity.</span><br />Build your <span>future.</span></h2>
          <p>Discover the right jobs and internships, compare salaries, and see the skills you need to succeed.</p>
        </div>

        <div className="search-filter-section">
          
          <div className="search-box">
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                className="search-input"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>

          <div className="filter-navbar">
            <div className="filter-item">
              <Select>
                <SelectTrigger className="bg-white border border-slate-200 rounded-3xl px-4 py-3 text-[#616d7d] [&>span]:text-[#616d7d] hover:bg-white/10 transition-all h-auto">
                  <SelectValue placeholder="Position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="AI Product Manager">AI Product Manager</SelectItem>
                  <SelectItem value="AI Researcher">AI Researcher</SelectItem>
                  <SelectItem value="Computer Vision Engineer">Computer Vision Engineer</SelectItem>
                  <SelectItem value="Data Analyst">Data Analyst</SelectItem>
                  <SelectItem value="Data Scientist">Data Scientist</SelectItem>
                  <SelectItem value="ML Engineer">ML Engineer</SelectItem>
                  <SelectItem value="NLP Engineer">NLP Engineer</SelectItem>
                  <SelectItem value="Quant Researcher">Quant Researcher</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="filter-item">
              <Select>
                <SelectTrigger className="bg-white border border-slate-200 rounded-3xl px-4 py-3 text-[#616d7d] [&>span]:text-[#616d7d] hover:bg-white/10 transition-all h-auto">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="entry">Entry Level</SelectItem>
                  <SelectItem value="mid">Mid Level</SelectItem>
                  <SelectItem value="senior">Senior Level</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="filter-item">
              <Select>
                <SelectTrigger className="custom-select-trigger bg-white border border-slate-200 rounded-3xl px-4 py-3 text-[#616d7d] hover:bg-white/10 transition-all h-auto">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="filter-item">
              <Select>
                 <SelectTrigger className="bg-white border border-slate-200 rounded-3xl px-4 py-3 text-[#616d7d] [&>span]:text-[#616d7d] hover:bg-white/10 transition-all h-auto">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="Automotive">Automotive</SelectItem>
                  <SelectItem value="E-commerce">E-commerce</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Retail">Retail</SelectItem>
                  <SelectItem value="Tech">Tech</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="salary-filter-container">
            <div className="salary-header">
              <span className="salary-title">Salary Range</span>
            </div>

            <div className="slider-wrapper">
    
              <div className="slider-tooltip" style={{ left: `${minPercent}%` }}>
                ${minVal.toLocaleString()}
              </div>
              
              <div className="slider-tooltip right-tooltip" style={{ left: `${maxPercent}%` }}>
                ${maxVal.toLocaleString()}
              </div>

              <Slider
                value={salaryRange}
                onValueChange={(val) => setSalaryRange(val)}
                max={MAX_SALARY}
                step={1000}
                className="salary-slider" 
              />
            </div>
          </div>

        </div>

        <div className="recommend-list">
          <div className="recommend-list-header">
            <h3>Recommended for you</h3>
            <span>Showing {jobs.length} of {TOTAL_JOBS_AVAILABLE}</span>
          </div>

          <div className="Recommended-cards-grid">
            {jobs.map((job) => (
              <Link
                to={`/job/${job.id}`}
                key={job.id}
                className="Recommended-card-link"
              >
                <div className="Recommended-card" key={job.id}>
                  <div className="Recommended-card-top">
                    <div className="Recommended-company-info">
                      <div className={`Recommended-logo ${job.logoClass}`}>{job.logoLetter}
                      </div>
                      <div>
                        <h4>{job.title}</h4>
                        <span>{job.company}</span>
                      </div>
                    </div>

                    <span
                      className={`Recommended-favorite-btn ${isFavorited(job.id) ? "is-favorited" : ""}`}
                        onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(job);
                      }}
                      // onClick={() => toggleFavorite(job)}
                    >
                      ♥
                    </span>
                  </div>
                  <div className="Recommended-tags">
                    {[job.type, job.level, job.workMode].map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="Recommended-card-bottom">
                    <div>
                      <div className="Recommended-salary">{job.salary}</div>
                      <div className="Recommended-applicants">{job.applicants}</div>
                    </div>
                    <div className={`Recommended-match-badge ${getMatchBadgeClass(job.match)}`}>{job.match}%</div>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>

      </div>
    </>
  );
}

export default Home;