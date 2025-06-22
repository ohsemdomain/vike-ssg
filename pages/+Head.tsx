// https://vike.dev/Head

import logoUrl from "../assets/logo.svg";

export default function HeadDefault() {
	const gaId = import.meta.env.PUBLIC_ENV__GOOGLE_ANALYTICS;
	const isValidGaId = gaId && gaId !== "G-XXXXXXXXXX" && !gaId.includes("undefined");

	return (
		<>
			<link rel="icon" href={logoUrl} />
			
			{/* Only load Google Analytics if valid ID is provided */}
			{isValidGaId && (
				<>
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
					/>
					<script
						async
						src={`/analytics.js?id=${gaId}`}
					/>
				</>
			)}
		</>
	);
}
