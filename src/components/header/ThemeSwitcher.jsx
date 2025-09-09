import React from "react";

const ACCENTS = [
	{ name: "Blue", value: "#3b82f6", weak: "#eff6ff" },
	{ name: "Purple", value: "#8b5cf6", weak: "#f5f3ff" },
	{ name: "Teal", value: "#14b8a6", weak: "#f0fdfa" },
	{ name: "Rose", value: "#f43f5e", weak: "#fff1f2" },
];

function ThemeSwitcher() {
	const setAccent = (accent) => {
		document.documentElement.style.setProperty("--color-accent", accent.value);
		document.documentElement.style.setProperty("--color-accent-weak", accent.weak);
	};

	return (
		<div className="flex items-center gap-1 ml-2">
			{ACCENTS.map((a) => (
				<button
					key={a.name}
					title={a.name}
					aria-label={`Switch to ${a.name} accent`}
					className="w-5 h-5 rounded-full border"
					style={{ backgroundColor: a.value, borderColor: "var(--color-border)" }}
					onClick={() => setAccent(a)}
				/>
			))}
		</div>
	);
}

export default ThemeSwitcher;
