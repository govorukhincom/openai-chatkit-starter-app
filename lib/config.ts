import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "Що придумаємо сьогодні?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: "#FF6602",
      level: 1,
    },
  },
  radius: "round",
  density: "spacious",
  typography: {
    baseSize: 18,
  },
});
