import SocialButton, { ButtonType } from "@/components/SocialButton";

interface VisitCardProps {
	config: Record<ButtonType, { link: string; label: string }>;
	label: string;
}

export default function VisitCard({config, label}: VisitCardProps) {
	return (
		<main className="backgorud_gradient relative">
			<div>
				<header>
					<img 
						alt="Background" 
						width={3456} 
						height={753} 
						className="h-2/12 md:h-1/4 absolute z-0 object-cover" 
						src="/images/header_background.webp"
					/>
				</header>
				<div className="min-h-screen text-white relative z-10">
					<div className="flex flex-col justify-center items-center h-screen text-center">
						<img 
							alt="Avatar" 
							width={300} 
							height={300} 
							className="z-10 w-40 h-40 sm:w-72 sm:h-72" 
							src="/images/avatar.webp"
						/>
						<div className="text-center z-20">
							<h1 className="text-[2.9rem] leading-none mt-4 text-white">Галина</h1>
							<h2 className="text-3xl text-white">Провидица <span className="text-2xl">|</span> Таролог</h2>
							<br/>
							<span className="text-2xl text-white">Пишите мне:</span>
						</div>
						
						<div className="flex flex-wrap justify-center gap-4 mt-4 w-full z-20">
							<SocialButton type="max" color="#9A6EC3" config={config} />
							<SocialButton type="telegram" color="#0088cc" config={config} />
							<SocialButton type="whatsapp" color="#25d366" config={config} />
						</div>

						<img 
							alt="Star Line" 
							width={1432} 
							height={82} 
							className="py-4 z-20" 
							src="/images/star_line.webp"
						/>
						<span className="text-1xl md:text-2xl px-4 z-20 text-white">{label}</span>
					</div>
				</div>
			</div>
		</main>
	);
}
