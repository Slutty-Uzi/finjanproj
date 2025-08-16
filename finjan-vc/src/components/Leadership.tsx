import type { FC } from 'react';

const leaders = [
	{
		name: 'Abdulla AlKhenji',
		role: 'General & Founding Partner',
		img: 'https://placehold.co/320x320?text=Abdulla+AlKhenji',
	},
	{
		name: 'Yousef AlBaker',
		role: 'General & Founding Partner',
		note: 'Also of AlBaker Law Firm',
		img: 'https://placehold.co/320x320?text=Yousef+AlBaker',
	},
];

const Leadership: FC = () => {
	return (
		<section id="leadership" className="py-16 md:py-24 scroll-mt-24">
			<div className="container-responsive">
				<h2 className="text-2xl md:text-3xl font-bold text-deep-green">Leadership</h2>
				<div className="mt-8 grid gap-8 sm:grid-cols-2">
					{leaders.map((p) => (
						<div key={p.name} className="rounded-xl border border-ink/10 bg-white/70 p-6 shadow-sm">
							<img src={p.img} alt={p.name} className="h-56 w-full rounded-lg object-cover" />
							<div className="mt-4">
								<p className="text-lg font-semibold text-deep-green">{p.name}</p>
								<p className="text-ink/70">{p.role}</p>
								{p.note && <p className="text-sm text-ink/60">{p.note}</p>}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Leadership;