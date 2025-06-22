// https://vike.dev/Head

import logoUrl from "../assets/logo.svg";

export default function HeadDefault() {
	const gaId = import.meta.env.PUBLIC_ENV__GOOGLE_ANALYTICS;
	const isProduction = import.meta.env.PROD;
	const isValidGaId = gaId && gaId !== "G-XXXXXXXXXX" && !gaId.includes("undefined");

	return (
		<>
			<link rel="icon" href={logoUrl} />
			
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
