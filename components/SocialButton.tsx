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
			className="transition-transform duration-300 hover:scale-105 active:brightness-75"
			style={{ 
				backgroundColor: color, 
				minWidth: '280px', 
				padding: '12px 24px', 
				borderRadius: '6px', 
				textDecoration: 'none', 
				display: 'block',
				margin: '8px'
			}}
		>
			<div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
				<span style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 'normal' }}>{label}</span>
				<img
					alt={label}
					width={24}
					height={24}
					style={{ objectFit: 'contain' }}
					src={ImageLink}
				/>
			</div>
		</a>
	);
}
