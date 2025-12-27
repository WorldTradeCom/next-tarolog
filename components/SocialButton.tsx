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
			rel="noopener noreferrer"
			className={`flex items-center justify-center gap-2 px-6 py-3 rounded-md ${TextColor} text-lg font-medium transition-transform duration-300 hover:scale-105 active:brightness-75 min-w-50`}
			style={{ backgroundColor: color }}
		>
			<Image src={ImageLink} alt={label} width={24} height={24} />
			{label}
		</a>
	);
}