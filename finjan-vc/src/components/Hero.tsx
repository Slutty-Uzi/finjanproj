import type { FC } from 'react';

const Hero: FC = () => {
	return (
		<section id="home" className="relative overflow-hidden scroll-mt-24">
			<div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-cream/90"></div>
			<div className="container-responsive relative">
				<div className="py-24 md:py-32 lg:py-40">
					<p className="text-sm md:text-base tracking-wider uppercase text-muted">Finjan V.C.</p>
					<h1 className="mt-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold text-deep-green">
						Investing in Qatar’s Future
					</h1>
					<p className="mt-5 max-w-2xl text-lg md:text-xl text-ink/80">
						Building not just capital, but capability – from Qatar to MENA.
					</p>
					<div className="mt-8">
						<a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-ink shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60">
							<span>Join Our Investor Network</span>
						</a>
					</div>
				</div>
			</div>

			{/* Background geometric finjan motif */}
			<svg className="absolute -right-20 -top-20 h-[420px] w-[420px] text-gold/10" viewBox="0 0 200 200" fill="currentColor" aria-hidden>
				<path d="M164.7 70.6c-3.9-17.1-18.9-30.4-37-30.4H50c-4.4 0-8 3.6-8 8v51.8c0 23.7 19.2 42.9 42.9 42.9h34.2c28.8 0 51.9-23.1 51.9-51.9 0-6.8-.6-13.7-6.3-20.4zM42 48c0-4.4 3.6-8 8-8h77.7c10.5 0 19.7 6.9 22.8 16.9 3.1 10.1-1.1 20.8-10.4 26.3-1 .6-1.6 1.7-1.6 2.8v5.6c0 20.2-16.4 36.6-36.6 36.6H86.9C62.9 128.2 42 107.3 42 81.8V48z" />
			</svg>
		</section>
	);
};

export default Hero;