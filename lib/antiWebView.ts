// Assisted by Microsoft Copilot.

export function isWebView(): boolean {
	if (typeof window === "undefined") return false;

	const ua = navigator.userAgent.toLowerCase();

	return (
		ua.includes("android") ||
		ua.includes("mobile safari")
	);
}