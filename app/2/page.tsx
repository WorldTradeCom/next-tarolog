import VisitCard from "@/components/VisitCard";
import { Secondary } from "@/data/social_inks";

export const metadata = {
	title: "Галина Таро Мастер",
	description: "Помогу тебе в любом вопросе!"
};

export default function SecondaryMain() {
	return (
		<VisitCard
			config={Secondary}
			label="Важно! Добавляйте меня сразу в контакты, чтобы я смогла вам ответить."
		/>
	);
}