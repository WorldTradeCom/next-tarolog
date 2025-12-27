import { Main } from "@/data/social_inks";
import SocialButton from "@/components/SocialButton";

import Image from "next/image";

export const metadata = {
	title: "Галина Таро Мастер"
};

export default function Home() {
	return (
		<div>
			<header>
				<Image
					src="/images/header_background.png"
					alt="Background"
					width={3456}
					height={753}
					className="h-1/4 md:h-1/4 absolute z-0 object-cover"
				/>
			</header>
			<div className="min-h-screen text-white">
				<div className="flex flex-col justify-center items-center h-screen text-center">
					<Image
						src="/images/avatar.png"
						alt="Avatar"
						width={300}
						height={300}
						className="z-10 w-40 h-40 sm:w-72 sm:h-72"
					/>
					<div className="text-center z-20">
						<h1 className="text-5xl mt-4">Галина</h1>
						<h2 className="text-3xl">Провидица | Таролог</h2>
						<br/>
						<span className="text-2xl">Пишите мне:</span>
					</div>
					<div className="flex flex-wrap justify-center gap-4 mt-6">
						<SocialButton type="telegram" color="#0088cc" config={Main} />
						<SocialButton type="whatsapp" color="#25d366"  config={Main} />
						<SocialButton type="max" color="#c9c9c9"  config={Main} />
					</div>
					<Image
						src="/images/star_line.png"
						alt="Star Line"
						width={1432}
						height={82}
						className="py-4"
					/>
					<span className="text-1xl md:text-2xl px-4">Важно! Добавляйте меня сразу в контакты, чтобы я смогла вам ответить.</span>
				</div>
			</div>
		</div>
	);
}
