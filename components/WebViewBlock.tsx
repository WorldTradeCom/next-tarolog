// Assisted by Microsoft Copilot.

"use client";

import { useEffect, useState } from "react";
import { isWebView } from "@/lib/antiWebView";

export default function WebViewBlock({ children }: { children: React.ReactNode }) {
	const [blocked, setBlocked] = useState(false);

	useEffect(() => {
		if (isWebView()) setBlocked(true);
	}, []);

	if (blocked) {
		return (
			<div className="max-w-sm mx-auto mt-20 text-center px-6">
				<p className="text-base text-gray-600 mt-3">
					Похоже, вы открыли сайт во встроенном браузере приложения.
					Чтобы всё работало корректно, откройте его в обычном браузере.
				</p>
				<p className="text-xs text-gray-600 mt-3">
					Обычно это можно сделать, нажав символ в виде трёх точек в правом верхнем углу экрана и выбрав соответствующий пункт в выпадающем меню.
				</p>

				<button 
					onClick={() => (window.location.href = window.location.href)}
					className="mt-6 px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
				>Открыть</button>
			</div>
		);
	}

	return <>{children}</>;
}
