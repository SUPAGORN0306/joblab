// ============================================
// SEARCH HELPERS — Copy จาก Home.jsx
// ============================================

const normalize = (str) =>
  (str || "").toLowerCase().replace(/[^a-z0-9]/g, "");

const tokenize = (str) =>
  (str || "")
    .toLowerCase()
    .split(/[\s\-_]+/)
    .filter(Boolean);

const matchesQuery = (text, query) => {
  if (!query) return true;
  if (!text) return false;

  const normText = normalize(text);
  const normQuery = normalize(query);

  if (normText.includes(normQuery)) return true;

  const tokens = tokenize(query);
  if (tokens.length > 1) {
    return tokens.every((token) => normText.includes(token));
  }

  return false;
};

// ============================================
// TEST CASES
// ============================================

console.log("🧪 Testing matchesQuery()\n");

const testCases = [
  // === ตัวพิมพ์เล็ก/ใหญ่ ===
  { text: "Data Analyst", query: "data analyst", expected: true, label: "lowercase" },
  { text: "Data Analyst", query: "DATA ANALYST", expected: true, label: "UPPERCASE" },
  { text: "Data Analyst", query: "DaTa AnAlYsT", expected: true, label: "mIxEd CaSe" },

  // === ไม่เว้นวรรค ===
  { text: "Data Analyst", query: "dataanalyst", expected: true, label: "no space" },
  { text: "Data Analyst", query: "DataAnalyst", expected: true, label: "no space + mixed case" },

  // === มี dash/underscore ===
  { text: "Data Analyst", query: "data-analyst", expected: true, label: "with dash" },
  { text: "Data Analyst", query: "data_analyst", expected: true, label: "with underscore" },
  { text: "Data Analyst", query: "data.analyst", expected: true, label: "with dot" },

  // === สลับคำ ===
  { text: "Data Analyst", query: "analyst data", expected: true, label: "swapped words" },
  { text: "Computer Vision Engineer", query: "engineer vision", expected: true, label: "swapped 2 words" },

  // === ค้นหาบางส่วน ===
  { text: "Data Analyst", query: "data", expected: true, label: "partial: data" },
  { text: "Data Analyst", query: "analyst", expected: true, label: "partial: analyst" },
  { text: "Data Analyst", query: "ata", expected: true, label: "partial: ata (middle)" },

  // === เว้นวรรคเยอะ ===
  { text: "Data Analyst", query: "data    analyst", expected: true, label: "extra spaces" },
  { text: "Data Analyst", query: "  data  ", expected: true, label: "spaces around" },

  // === ค้นหาจาก field อื่น ===
  { text: "Foster and Sons", query: "foster", expected: true, label: "company: foster" },
  { text: "Foster and Sons", query: "foster sons", expected: true, label: "company: foster sons" },
  { text: "Healthcare", query: "health", expected: true, label: "industry: health" },

  // === ❌ ไม่ควรเจอ ===
  { text: "Data Analyst", query: "engineer", expected: false, label: "not found: engineer" },
  { text: "Data Analyst", query: "data xxx", expected: false, label: "not found: data xxx" },
  { text: "Data Analyst", query: "", expected: true, label: "empty query = match all" },
  { text: null, query: "data", expected: false, label: "null text" },
];

let passed = 0;
let failed = 0;

testCases.forEach(({ text, query, expected, label }) => {
  const result = matchesQuery(text, query);
  const ok = result === expected;
  if (ok) passed++;
  else failed++;

  const icon = ok ? "✅" : "❌";
  console.log(
    `${icon} [${label}] "${query}" → "${text}" = ${result} ${ok ? "" : `(expected ${expected})`}`
  );
});

console.log(`\n📊 Results: ${passed} passed, ${failed} failed out of ${testCases.length}`);