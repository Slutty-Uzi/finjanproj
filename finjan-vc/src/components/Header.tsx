import type { FC } from 'react';

const Header: FC = () => {
	return (
		<header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/80 backdrop-blur">
			<div className="container-responsive">
				<div className="flex items-center justify-between py-4">
					<a href="#home" className="flex items-center gap-2 font-semibold text-deep-green">
						<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold/20 text-deep-green">
							<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
								<path d="M20 8c0-2.21-1.79-4-4-4H6C3.79 4 2 5.79 2 8v5a7 7 0 007 7h2a7 7 0 007-7V8zM6 6h10a2 2 0 012 2v1l-2 2H6L4 9V8a2 2 0 012-2z" />
							</svg>
						</span>
						<span>Finjan V.C.</span>
					</a>
					<nav aria-label="Primary" className="hidden gap-6 text-sm font-medium text-ink/80 md:flex">
						<a href="#mission" className="hover:text-deep-green">Mission</a>
						<a href="#pillars" className="hover:text-deep-green">Pillars</a>
						<a href="#leadership" className="hover:text-deep-green">Leadership</a>
						<a href="#why" className="hover:text-deep-green">Why Finjan</a>
						<a href="#contact" className="hover:text-deep-green">Contact</a>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;