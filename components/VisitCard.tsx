import SocialButton, { ButtonType } from "@/components/SocialButton";

interface VisitCardProps {
	config: Record<ButtonType, { link: string; label: string }>;
	label: string;
}

export default function VisitCard({config, label}: VisitCardProps) {
	return (
		<main className="backgorud_gradient" style={{ position: 'relative' }}>
			<div>
				<header>
					<img 
						alt="Background" 
						width="3456" 
						height="753" 
						className="h-2/12 md:h-1/4 absolute z-0 object-cover" 
						src="/images/header_background.webp"
						style={{ top: 0, left: 0, width: '100%', position: 'absolute' }}
					/>
				</header>
				<div className="min-h-screen text-white" style={{ position: 'relative', zIndex: 10 }}>
					<div className="flex flex-col justify-center items-center h-screen text-center">
						<img 
							alt="Avatar" 
							width="300" 
							height="300" 
							className="z-10 w-40 h-40 sm:w-72 sm:h-72" 
							src="/images/avatar.webp"
							style={{ borderRadius: '50%' }}
						/>
						<div className="text-center z-20">
							<h1 style={{ fontSize: '2.9rem', lineHeight: '1', marginTop: '1rem' }}>Галина</h1>
							<h2 className="text-3xl">Провидица <span className="text-2xl">|</span> Таролог</h2>
							<br/>
							<span className="text-2xl">Пишите мне:</span>
						</div>
						
						<div className="flex flex-wrap justify-center gap-4 mt-4" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
							<SocialButton type="max" color="#9A6EC3" config={config} />
							<SocialButton type="telegram" color="#0088cc" config={config} />
							<SocialButton type="whatsapp" color="#25d366" config={config} />
						</div>

						<img 
							alt="Star Line" 
							width="1432" 
							height="82" 
							className="py-4" 
							src="/images/star_line.webp"
							style={{ padding: '1rem 0' }}
						/>
						<span className="text-1xl md:text-2xl px-4">{label}</span>
					</div>
				</div>
			</div>
		</main>
	);
}
