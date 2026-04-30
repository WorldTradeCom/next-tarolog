import SocialButton, { ButtonType } from "@/components/SocialButton";
import Image from "next/image";

interface VisitCardProps {
	config: Record<ButtonType, { link: string; label: string }>;
	label: string;
}

export default function VisitCard({config, label}: VisitCardProps) {
	return (
		<div className="relative min-h-screen bg-[#1a2639] overflow-hidden flex flex-col">
			{/* Шапка с астрологическим фоном */}
			<header className="relative w-full h-[22vh] md:h-[25vh]">
				<Image
					src="/images/header_background.webp" 
					alt="Background"
					fill
					priority
					className="z-0 object-cover opacity-50"
				/>
				{/* Мягкий градиент для перехода в основной цвет */}
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a2639] z-1" />
			</header>

			<div className="relative flex flex-col items-center -mt-16 sm:-mt-24 px-4 flex-grow">
				{/* Аватарка с белой рамкой как на оригинале */}
				<div className="relative z-10 rounded-full border-[3px] border-white/80 shadow-lg overflow-hidden w-36 h-36 sm:w-56 sm:h-56">
					<Image
						src="/images/avatar.webp"
						alt="Галина"
						fill
						className="object-cover"
					/>
				</div>

				{/* Текстовый блок */}
				<div className="text-center z-20 mt-4">
					<h1 className="text-4xl md:text-5xl font-medium text-white mb-1">
						Галина
					</h1>
					<p className="text-xl md:text-2xl text-white/70">
						Провидица <span className="text-white/30 px-1">|</span> Таролог
					</p>
					
					<div className="mt-6 mb-4">
						<span className="text-sm md:text-base uppercase tracking-[0.2em] text-white/50">Пишите мне:</span>
					</div>
				</div>

				{/* Кнопки (сделал их чуть компактнее) */}
				<div className="flex flex-col items-center gap-3 mt-2 w-full max-w-[320px]">
					<SocialButton type="max" color="#9b6fb9" config={config} />
					<SocialButton type="telegram" color="#248bc7" config={config} />
					<SocialButton type="whatsapp" color="#43b54d" config={config} />
				</div>

				{/* Разделитель */}
				<div className="w-full max-w-md mt-6 opacity-60">
					<Image
						src="/images/star_line.webp" 
						alt="Star Line"
						width={1432}
						height={82}
						className="w-full h-auto"
					/>
				</div>

				{/* Текст внизу */}
				<div className="mt-auto pb-8 pt-4 text-center max-w-lg">
					<p className="text-sm md:text-base text-white/80 font-light px-6">
						{label}
					</p>
				</div>
			</div>
		</div>
	);
}
