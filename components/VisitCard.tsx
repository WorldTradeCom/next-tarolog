import SocialButton, { ButtonType } from "@/components/SocialButton";

interface VisitCardProps {
	config: Record<ButtonType, { link: string; label: string }>;
	label: string;
}

export default function VisitCard({config, label}: VisitCardProps) {
	return (
		<main className="backgorud_gradient relative overflow-hidden">
			<div>
				<header>
					<img 
						alt="Background" 
						width={3456} 
						height={753} 
						className="absolute top-0 left-0 w-full z-0 object-cover" 
						style={{ height: '25vh' }}
						src="/images/header_background.webp"
					/>
				</header>
				<div className="min-h-screen relative z-10" style={{ color: '#ffffff' }}>
					<div className="flex flex-col justify-center items-center h-screen text-center">
						<img 
							alt="Avatar" 
							width={300} 
							height={300} 
							className="z-10 w-40 h-40 sm:w-72 sm:h-72" 
							src="/images/avatar.webp"
						/>
						<div className="text-center z-20">
							<h1 className="text-[2.9rem] leading-none mt-4" style={{ color: '#ffffff' }}>Галина</h1>
							<h2 className="text-3xl" style={{ color: '#ffffff' }}>Провидица <span className="text-2xl">|</span> Таролог</h2>
							<br/>
							<span className="text-2xl" style={{ color: '#ffffff' }}>Пишите мне:</span>
						</div>
						
						<div className="flex flex-wrap justify-center items-center w-full max-w-4xl px-4 z-20 mt-4">
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
						<span className="text-1xl md:text-2xl px-4 z-20" style={{ color: '#ffffff' }}>{label}</span>
					</div>
				</div>
			</div>
		</main>
	);
}
