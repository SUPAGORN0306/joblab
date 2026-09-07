import '../Favorite.css';
import '../RecommendedCard.css';
import { useFavorites } from '../context/FavoritesContext.jsx';
import { getMatchBadgeClass } from '../utils/matchBadge.js';

export default function Favorite() {
  // ดึงรายการ favorite จาก context กลาง (ชุดเดียวกับที่กดหัวใจไว้จากหน้า Home)
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className='status-container'>
      <div className="recommend-list">

        <div className="recommend-list-header">
          <div>
            <h3>Your favorites</h3>
            <span style={{ fontSize: '0.9rem', color: '#8c9bae' }}>Sorted by most recently saved</span>
          </div>
          <span>{favorites.length} saved jobs</span>
        </div>

        {favorites.length === 0 ? (
          <p style={{ color: '#8c9bae' }}>No favorites yet — heart a job on the Home page to save it here.</p>
        ) : (
          <div className="Recommended-cards-grid">
            {favorites.map((job) => (
              <div className="Recommended-card" key={job.id}>

                <div className="Recommended-card-top">
                  <div className="Recommended-company-info">
                    <div className={`Recommended-logo ${job.logoClass}`}>{job.logoLetter}</div>
                    <div>
                      <h4>{job.title}</h4>
                      <span>{job.company}</span>
                    </div>
                  </div>
                  {/* อยู่ในหน้านี้แปลว่า favorite อยู่แล้วเสมอ กดซ้ำ = เอาออกจากรายการ */}
                  <span
                    className="Recommended-favorite-btn is-favorited"
                    onClick={() => toggleFavorite(job)}
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
                  <div className={`Recommended-match-badge ${getMatchBadgeClass(job.match)}`}>
                    {job.match}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}