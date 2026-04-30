import SocialButton, { ButtonType } from "@/components/SocialButton";
import Image from "next/image";

interface VisitCardProps {
	config: Record<ButtonType, { link: string; label: string }>;
	label: string;
}

export default function VisitCard({config, label}: VisitCardProps) {
	return (
		<div className="relative min-h-screen bg-[#0f0f1b] overflow-hidden">
			{/* Шапка с фоном */}
			<header className="relative w-full h-[25vh] md:h-[30vh]">
				<Image
					src="/images/header_background.webp" 
					alt="Background"
					fill
					priority
					className="z-0 object-cover opacity-60"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f1b] z-1" />
			</header>

			<div className="relative flex flex-col items-center -mt-20 sm:-mt-32 px-4 pb-12">
				{/* Аватарка */}
				<div className="relative z-10 p-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full shadow-2xl">
					<Image
						src="/images/avatar.webp"
						alt="Галина Таро"
						width={300}
						height={300}
						className="rounded-full w-40 h-40 sm:w-64 sm:h-64 object-cover border-4 border-[#0f0f1b]"
					/>
				</div>

				{/* Текстовый блок */}
				<div className="text-center z-20 mt-6">
					<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-md">
						Галина
					</h1>
					<p className="text-2xl md:text-3xl text-purple-300 mt-2 font-light">
						Провидица <span className="text-white/30 px-2">|</span> Таролог
					</p>
					
					<div className="mt-8 mb-4">
						<span className="text-xl uppercase tracking-[0.3em] text-white/60">Пишите мне:</span>
					</div>
				</div>

				{/* Кнопки соцсетей */}
				<div className="flex flex-wrap justify-center gap-6 mt-2 w-full max-w-md">
					<SocialButton type="max" color="#9A6EC3" config={config} />
					<SocialButton type="telegram" color="#0088cc" config={config} />
					<SocialButton type="whatsapp" color="#25d366" config={config} />
				</div>

				{/* Разделитель (теперь тоже WebP) */}
				<div className="w-full max-w-lg mt-8 opacity-90">
					<Image
						src="/images/star_line.webp" 
						alt="Star Line"
						width={1432}
						height={82}
						className="w-full h-auto object-contain"
					/>
				</div>

				{/* Важная плашка */}
				<div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-sm text-center">
					<span className="text-lg md:text-xl text-white/90 leading-relaxed italic">
						{label}
					</span>
				</div>
			</div>
		</div>
	);
}
