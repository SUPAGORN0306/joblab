// คำนวณสี badge ของ % match อัตโนมัติ
//   >= 80%  เขียว
//   >= 70%  ฟ้า
//   >= 60%  เหลือง
//   < 60%   แดง
export function getMatchBadgeClass(percent) {
  if (percent >= 80) return "green-badge";
  if (percent >= 70) return "blue-badge";
  if (percent >= 60) return "yellow-badge";
  return "red-badge";
}