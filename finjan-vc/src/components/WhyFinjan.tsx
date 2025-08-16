import type { FC } from 'react';

const points = [
	'Trust & transparency',
	'QFC-registered SPV structure',
	'Data-driven investment thesis',
	'Invitation-only angel investor community',
];

const WhyFinjan: FC = () => {
	return (
		<section id="why" className="py-16 md:py-24 bg-white/60 scroll-mt-24">
			<div className="container-responsive">
				<h2 className="text-2xl md:text-3xl font-bold text-deep-green">Why Finjan</h2>
				<ul className="mt-6 grid gap-3 sm:grid-cols-2">
					{points.map((p) => (
						<li key={p} className="flex items-start gap-3 rounded-lg border border-ink/10 bg-cream p-4">
							<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-deep-green">
								<svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden>
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
							</span>
							<span className="text-ink/85">{p}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default WhyFinjan;