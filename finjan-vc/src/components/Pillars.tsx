import type { FC } from 'react';

const pillars = [
	{
		title: 'Empowering Founders & Curating Opportunities',
		desc: 'We source, screen, and support founders with structured diligence and hands-on guidance.',
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
				<path d="M12 2a7 7 0 0 0-7 7v3a5 5 0 0 0 5 5v3h4v-3a5 5 0 0 0 5-5V9a7 7 0 0 0-7-7z" />
			</svg>
		),
	},
	{
		title: 'Building a Sophisticated Investor Community',
		desc: 'Education-first angel platform, curated deal flow, and transparent reporting.',
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
				<path d="M16 11V5l6 6h-6zM2 19h20v2H2v-2zm8-3h4v2h-4v-2zM2 3h12v2H2V3z" />
			</svg>
		),
	},
	{
		title: 'Inspiring the Future of Entrepreneurship',
		desc: 'Programs, workshops, and community events to nurture the next generation.',
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
				<path d="M12 2l4 8h8l-6 6 2 8-8-5-8 5 2-8L0 10h8l4-8z" />
			</svg>
		),
	},
];

const Pillars: FC = () => {
	return (
		<section id="pillars" className="py-16 md:py-24 bg-white/60 scroll-mt-24">
			<div className="container-responsive">
				<h2 className="text-2xl md:text-3xl font-bold text-deep-green">The Three Pillars</h2>
				<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{pillars.map((p) => (
						<div key={p.title} className="rounded-xl border border-ink/10 bg-cream p-6 shadow-sm">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-deep-green">
								{p.icon}
							</div>
							<h3 className="mt-4 text-lg font-semibold text-deep-green">{p.title}</h3>
							<p className="mt-2 text-ink/80">{p.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pillars;