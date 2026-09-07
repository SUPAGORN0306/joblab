import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext(null);

// ครอบ <App /> ไว้ที่ main.jsx เพื่อให้ทุกหน้า (Home, Favorite, ฯลฯ)
// อ่าน/แก้ไข รายการ favorite ชุดเดียวกันได้ผ่าน useFavorites()
export function FavoritesProvider({ children }) {
  // เก็บ "ข้อมูลงานเต็มทั้งใบ" ของที่ถูกกดหัวใจไว้ (ไม่ใช่แค่ id)
  // เพื่อให้หน้า Favorite เอาไปแสดงผลได้ทันที ไม่ต้องไปหาข้อมูลจากที่อื่นซ้ำ
  const [favorites, setFavorites] = useState([]);

  const isFavorited = (jobId) => favorites.some((job) => job.id === jobId);

  // ส่ง "ข้อมูลงานทั้งก้อน" เข้ามา (object เดียวกับที่อยู่ใน RECOMMENDED_JOBS)
  // ถ้ามีอยู่แล้ว -> เอาออก (unfavorite), ถ้ายังไม่มี -> เพิ่มเข้าไป (favorite)
  const toggleFavorite = (job) => {
    setFavorites((prev) => {
      const exists = prev.some((j) => j.id === job.id);
      if (exists) {
        return prev.filter((j) => j.id !== job.id);
      }
      return [...prev, job];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorited, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites() ต้องถูกเรียกใช้ภายใน <FavoritesProvider> เท่านั้น");
  }
  return context;
}