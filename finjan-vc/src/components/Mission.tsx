import type { FC } from 'react';

const Mission: FC = () => {
	return (
		<section id="mission" className="py-16 md:py-24 scroll-mt-24">
			<div className="container-responsive">
				<div className="grid gap-10 md:grid-cols-3">
					<div className="md:col-span-2">
						<h2 className="text-2xl md:text-3xl font-bold text-deep-green">Mission & Alignment</h2>
						<p className="mt-4 text-lg text-ink/80">
							We’re raising the bar with educational investment in the angel space, starting in Qatar, moving through the GCC, and reaching across MENA. This isn’t just growth—it’s groundwork for a smarter, diversified economy.
						</p>
					</div>
					<div className="rounded-xl border border-ink/10 bg-white/70 p-6 shadow-sm backdrop-blur">
						<h3 className="text-xl font-semibold text-deep-green">Aligned with Qatar National Vision 2030</h3>
						<ul className="mt-4 list-disc space-y-2 pl-5 text-ink/80">
							<li>Economic diversification through innovation and SME growth</li>
							<li>Human development via knowledge-sharing and investor education</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Mission;