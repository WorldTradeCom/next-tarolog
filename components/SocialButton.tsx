import Image from "next/image";

export type ButtonType = "telegram" | "whatsapp" | "max";

interface SocialButtonProps {
	type: ButtonType;
	color: string;
	config: Record<ButtonType, { link: string; label: string }>;
}

export default function SocialButton({ type, color, config }: SocialButtonProps) {
	const { link, label } = config[type];
	// Теперь используем оптимизированный формат webp
	const ImageLink = `/icons/${type}.webp`;

	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center justify-between gap-4 px-6 py-4 rounded-xl min-w-[280px] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:brightness-90 shadow-md"
			style={{ backgroundColor: color }}
		>
			<span className="text-2xl font-medium tracking-wide">{label}</span>
			<div className="flex items-center justify-center bg-white/20 p-2 rounded-lg">
				<Image
					src={ImageLink}
					alt={label}
					width={32}
					height={32}
					className="object-contain"
				/>
			</div>
		</a>
	);
}
