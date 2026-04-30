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
			style={{
				backgroundColor: color,
				minWidth: '280px',
				height: '54px', // Жесткая высота как в оригинале
				padding: '0 24px',
				borderRadius: '6px',
				display: 'flex',
				alignItems: 'center',
				textDecoration: 'none',
				transition: 'transform 0.3s ease'
			}}
			className="hover:scale-105 active:brightness-75"
		>
			<div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
				<span style={{ fontSize: '24px', color: 'white', fontFamily: 'sans-serif' }}>{label}</span>
				<img
					alt={label}
					src={ImageLink}
					style={{ width: '24px', height: '24px', objectFit: 'contain' }}
				/>
			</div>
		</a>
	); 
}
