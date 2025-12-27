import Image from "next/image";

export type ButtonType = "telegram" | "whatsapp" | "max";

interface SocialButtonProps {
	type: ButtonType;
	color: string;
	config: Record<ButtonType, { link: string; label: string }>;
}

export default function SocialButton({ type, color, config }: SocialButtonProps) {
	const { link, label } = config[type];
	const ImageLink = `/icons/${type}.png`;
	const TextColor = type === "max" ? "text-black" : "text-white";

	return (
		<a
			href={link}
			target="_blank"
			className={`gap-2 px-6 py-3 rounded-md min-w-70 ${TextColor} transition-transform duration-300 hover:scale-105 active:brightness-75`}
			style={{ backgroundColor: color }}
		>
			<div className="w-full flex items-center justify-between">
				<span className="text-2xl">{label}</span>
				<Image
					src={ImageLink}
					alt={label}
					width={24}
					height={24}
				/>
				</div>
		</a>
	);
}