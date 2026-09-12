import { API_BASE } from './utils/apiUrl';

// === Helper: ดึง user_id จาก localStorage ===
export const getCurrentUserId = () => {
  const id = localStorage.getItem('user_id');
  return id ? parseInt(id, 10) : 1;
};

export const getCurrentUserRole = () => {
  return localStorage.getItem('user_role') || 'candidate';
};

export const getCurrentUserName = () => {
  return localStorage.getItem('user_name') || '';
};

// ==================== PROFILE ====================

export const fetchFullProfile = async (userId) => {
  const uid = userId ?? getCurrentUserId();
  const res = await fetch(`${API_BASE}/profile/${uid}/full`);
  if (!res.ok) throw new Error('Failed to fetch profile');
  return res.json();
};

export const updateProfile = async (data, userId) => {
  const uid = userId ?? getCurrentUserId();
  const res = await fetch(`${API_BASE}/profile/${uid}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      profile_image: data.profile_image || undefined,
    }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to update profile');
  }
  return res.json();
};

// ==================== JOBS ====================

export const fetchJobs = async () => {
  const res = await fetch(`${API_BASE}/jobs`);
  if (!res.ok) throw new Error('Failed to fetch jobs');
  return res.json();
};

export const fetchJobDetail = async (jobId) => {
  const res = await fetch(`${API_BASE}/jobs/${jobId}`);
  if (!res.ok) throw new Error('Failed to fetch job');
  return res.json();
};

// ==================== APPLICATIONS ====================

export const submitApplication = async (data) => {
  const payload = { user_id: getCurrentUserId(), ...data };
  const res = await fetch(`${API_BASE}/applications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Failed to submit application');
  return json;
};

export const fetchUserApplications = async (userId) => {
  const uid = userId ?? getCurrentUserId();
  const res = await fetch(`${API_BASE}/applications/user/${uid}`);
  if (!res.ok) throw new Error('Failed to fetch applications');
  return res.json();
};

export const fetchApplicationDetail = async (applicationId) => {
  const res = await fetch(`${API_BASE}/applications/${applicationId}/detail`);
  if (!res.ok) throw new Error('Failed to fetch application detail');
  return res.json();
};

// ==================== AUTH ====================

export const register = async (data) => {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Register failed');
  return json;
};

export const login = async (data) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Login failed');
  return json;
};

// ==================== EMPLOYER ====================

export const fetchEmployerJobs = async (userId) => {
  const uid = userId ?? getCurrentUserId();
  const res = await fetch(`${API_BASE}/employer/jobs?user_id=${uid}`);
  if (!res.ok) throw new Error('Failed to fetch employer jobs');
  return res.json();
};

export const createEmployerJob = async (data) => {
  const payload = { user_id: getCurrentUserId(), ...data };
  const res = await fetch(`${API_BASE}/employer/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Failed to create job');
  return json;
};

// ==================== EMPLOYER: APPLICATIONS ====================

export const fetchJobApplications = async (jobId) => {
  const res = await fetch(`${API_BASE}/employer/jobs/${jobId}/applications`);
  if (!res.ok) throw new Error('Failed to fetch applications');
  return res.json();
};

export const fetchApplicationSnapshot = async (applicationId) => {
  const res = await fetch(`${API_BASE}/employer/applications/${applicationId}/detail`);
  if (!res.ok) throw new Error('Failed to fetch application detail');
  return res.json();
};

export const updateApplicationStatus = async (applicationId, newStatus) => {
  const res = await fetch(`${API_BASE}/employer/applications/${applicationId}/status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: newStatus }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Failed to update status');
  return json;
};

// ==================== SKILLS ====================

export const fetchSkills = async () => {
  const res = await fetch(`${API_BASE}/skills`);
  if (!res.ok) throw new Error('Failed to fetch skills');
  return res.json();
};

// ==================== MATCH SCORE ====================

export const fetchJobsWithMatch = async (userId) => {
  const uid = userId ?? getCurrentUserId();
  const res = await fetch(`${API_BASE}/jobs?user_id=${uid}`);
  if (!res.ok) throw new Error('Failed to fetch jobs');
  return res.json();
};

export const fetchJobDetailWithMatch = async (jobId, userId) => {
  const uid = userId ?? getCurrentUserId();
  const res = await fetch(`${API_BASE}/jobs/${jobId}?user_id=${uid}`);
  if (!res.ok) throw new Error('Failed to fetch job');
  return res.json();
};

export const fetchMatchScore = async (jobId, userId) => {
  const uid = userId ?? getCurrentUserId();
  const res = await fetch(`${API_BASE}/match-score/${jobId}?user_id=${uid}`);
  if (!res.ok) throw new Error('Failed to fetch match score');
  return res.json();
};