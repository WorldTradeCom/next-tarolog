"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function RedirectPage() {
  const searchParams = useSearchParams();
  const target = searchParams.get("to");

  const links: Record<string, string> = {
    tg_main: "https://t.me/m/iSV7Zhx9YzZi",
    tg_sec: "https://t.me/m/betRcUgkYTNi",
    wa: "https://wa.me/380973705851?text=Здравствуйте, Галина! Я бы хотела заказать у вас расклад. Скажите, пожалуйста, что для этого нужно?",
    max: "https://max.ru/u/f9LHodD0cOIT7N6XceeCgmeeFplv9GtCguy7PA9WTikniGLgjz0BR-gD8Bo",
  };

  useEffect(() => {
    if (target && links[target]) {
      // Мгновенный переход
      window.location.href = links[target];
    } else {
      // Если что-то пошло не так, возвращаем на главную
      window.location.href = "/";
    }
  }, [target]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontFamily: "sans-serif" }}>
      <p>Загрузка мессенджера...</p>
    </div>
  );
}
