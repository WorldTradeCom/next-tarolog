import { ButtonType } from "@/components/SocialButton";

export const Main: Record<ButtonType, { link: string; label: string }> = {
  telegram: {
    link: "/go?to=tg_main",
    label: "Telegram",
  },
  whatsapp: {
    link: "/go?to=wa",
    label: "WhatsApp",
  },
  max: {
    link: "/go?to=max",
    label: "Max",
  },
};

export const Secondary: Record<ButtonType, { link: string; label: string }> = {
  telegram: {
    link: "/go?to=tg_sec",
    label: "Telegram",
  },
  whatsapp: {
    link: "/go?to=wa",
    label: "WhatsApp",
  },
  max: {
    link: "/go?to=max",
    label: "Max",
  },
};
