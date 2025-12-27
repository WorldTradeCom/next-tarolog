import VisitCard from "@/components/VisitCard";
import { Main } from "@/data/social_inks";

export const metadata = {
	title: "Галина Таро Мастер",
	description: "Помогу тебе в любом вопросе!"
};

export default function Home() {
	return (
		<VisitCard
			config={Main}
			label="Важно! Добавляйте меня сразу в контакты, чтобы я смогла вам ответить."
		/>
	);
}