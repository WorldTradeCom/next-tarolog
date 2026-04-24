"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function RedirectContent() {
  const searchParams = useSearchParams();
  const target = searchParams.get("to");

  const links: Record<string, string> = {
    tg_main: "https://t.me/m/iSV7Zhx9YzZi",
    tg_sec: "https://t.me/m/betRcUgkYTNi",
    wa: "https://wa.me/380973705851?text=Здравствуйте, Галина! Я бы хотела заказать у вас расклад. Скажите, пожалуйста, что для этого нужно?",
    max: "https://max.ru/u/f9LHodD0cOIT7N6XceeCgmeeFplv9GtCguy7PA9WTikniGLgjz0BR-gD8Bo",
  };

  const finalLink = target && links[target] ? links[target] : "/";

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column",
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#111",
      color: "#fff"
    }}>
      <h2 style={{ marginBottom: "20px" }}>Переход в мессенджер</h2>
      <p style={{ marginBottom: "30px", opacity: 0.8 }}>
        Нажмите на кнопку ниже, чтобы связаться с экспертом
      </p>
      
      <a 
        href={finalLink}
        style={{
          display: "inline-block",
          padding: "16px 32px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "18px",
          boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)"
        }}
      >
        ОТКРЫТЬ ЧАТ
      </a>
      
      <a href="/" style={{ marginTop: "30px", color: "#aaa", fontSize: "14px" }}>
        Вернуться на сайт
      </a>
    </div>
  );
}

export default function RedirectPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <RedirectContent />
    </Suspense>
  );
}
