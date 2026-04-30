import SocialButton, { ButtonType } from "@/components/SocialButton";

interface VisitCardProps {
	config: Record<ButtonType, { link: string; label: string }>;
	label: string;
}

export default function VisitCard({config, label}: VisitCardProps) {
	return (
		<main className="backgorud_gradient" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
			<header>
				<img 
					alt="Background" 
					src="/images/header_background.webp"
					style={{ 
						position: 'absolute', 
						top: 0, 
						left: 0, 
						width: '100%', 
						height: '25%', 
						objectFit: 'cover', 
						zIndex: 0 
					}}
				/>
			</header>
			
			<div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', color: 'white' }}>
				
				<img 
					alt="Avatar" 
					src="/images/avatar.webp"
					style={{ width: '160px', height: '160px', borderRadius: '50%', marginBottom: '16px' }}
					className="sm:w-72 sm:h-72"
				/>

				<div style={{ marginBottom: '24px' }}>
					<h1 style={{ fontSize: '2.9rem', lineHeight: '1', margin: '0' }}>Галина</h1>
					<h2 style={{ fontSize: '30px', fontWeight: 'normal', margin: '8px 0' }}>
						Провидица <span style={{ fontSize: '24px', opacity: 0.8 }}>|</span> Таролог
					</h2>
					<p style={{ fontSize: '24px', marginTop: '30px', marginBottom: '16px' }}>Пишите мне:</p>
				</div>

				<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', maxWidth: '900px' }}>
					<SocialButton type="max" color="#9A6EC3" config={config} />
					<SocialButton type="telegram" color="#0088cc" config={config} />
					<SocialButton type="whatsapp" color="#25d366" config={config} />
				</div>

				<img 
					alt="Star Line" 
					src="/images/star_line.webp"
					style={{ width: '100%', maxWidth: '600px', margin: '20px 0' }}
				/>

				<p style={{ fontSize: '20px', padding: '0 20px', maxWidth: '500px' }}>
					{label}
				</p>
			</div>
		</main>
	);
}
