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
			className="flex gap-2 px-6 py-3 rounded-md min-w-[280px] text-white no-underline transition-transform duration-300 hover:scale-105 active:brightness-75"
			style={{ backgroundColor: color }}
		>
			<div className="w-full flex items-center justify-between">
				<span className="text-2xl text-white font-sans">{label}</span>
				<img
					alt={label}
					width={24}
					height={24}
					className="object-contain"
					src={ImageLink}
				/>
			</div>
		</a>
	);
}
