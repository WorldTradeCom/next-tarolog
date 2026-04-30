export type ButtonType = "telegram" | "whatsapp" | "max";

interface SocialButtonProps {
	type: ButtonType;
	color: string;
	config: Record<ButtonType, { link: string; label: string }>;
}

export default function SocialButton({ type, color, config }: SocialButtonProps) {
	const { link, label } = config[type];
	const ImageLink = `/icons/${type}.webp`;

	return (
		<a 
			href={link} 
			target="_blank" 
			rel="noopener noreferrer"
			className="px-6 py-3 rounded-md text-white transition-transform duration-300 hover:scale-105 active:brightness-75" 
			style={{ 
				backgroundColor: color, 
				minWidth: '280px', 
				display: 'flex', 
				textDecoration: 'none',
				marginBottom: '8px' 
			}}
		>
			<div className="w-full flex items-center justify-between" style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
				<span style={{ fontSize: '1.5rem', lineHeight: '2rem' }}>{label}</span>
				<img 
					alt={label} 
					width="24" 
					height="24" 
					className="object-contain" 
					src={ImageLink}
				/>
			</div>
		</a>
	);
}
