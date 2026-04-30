import SocialButton, { ButtonType } from "@/components/SocialButton";
import Image from "next/image";

interface VisitCardProps {
	config: Record<ButtonType, { link: string; label: string }>;
	label: string;
}

export default function VisitCard({config, label}: VisitCardProps) {
	return (
		<main className="backgorud_gradient min-h-screen w-full overflow-x-hidden">
			<div className="relative w-full">
				<header className="relative w-full h-[20vh] md:h-[25vh]">
					<Image
						src="/images/header_background.webp"
						alt="Background"
						fill
						className="z-0 object-cover"
						priority
					/>
				</header>
				
				<div className="flex flex-col items-center px-4 -mt-20 sm:-mt-32 relative z-10">
					{/* Аватарка */}
					<div className="relative mb-4">
						<Image
							src="/images/avatar.webp"
							alt="Avatar"
							width={300}
							height={300}
							className="w-44 h-44 sm:w-72 sm:h-72 rounded-full border-4 border-white/10 shadow-2xl"
						/>
					</div>

					{/* Заголовки */}
					<div className="text-center text-white mb-6">
						<h1 className="text-[2.9rem] leading-none mb-2 font-medium">Галина</h1>
						<h2 className="text-3xl font-light opacity-90">
							Провидица <span className="text-2xl mx-1">|</span> Таролог
						</h2>
						<p className="text-xl mt-8 opacity-80 uppercase tracking-widest">Пишите мне:</p>
					</div>
					
					{/* Кнопки — теперь строго в колонку */}
					<div className="flex flex-col gap-4 w-full max-w-[320px]">
						<SocialButton type="max" color="#9A6EC3" config={config} />
						<SocialButton type="telegram" color="#0088cc" config={config} />
						<SocialButton type="whatsapp" color="#25d366" config={config} />
					</div>

					{/* Разделитель */}
					<div className="mt-8 w-full max-w-lg flex justify-center">
						<Image
							src="/images/star_line.webp"
							alt="Star Line"
							width={1432}
							height={82}
							className="w-full h-auto opacity-70"
						/>
					</div>

					{/* Нижняя плашка */}
					<div className="mt-6 mb-12 text-center">
						<p className="text-lg md:text-xl text-white/80 max-w-sm px-4 italic leading-relaxed">
							{label}
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
