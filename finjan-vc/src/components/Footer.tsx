import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="border-t border-ink/10 bg-white/60 py-10">
			<div className="container-responsive">
				<div className="grid gap-6 md:grid-cols-3">
					<div>
						<p className="text-lg font-semibold text-deep-green">Finjan V.C.</p>
						<p className="text-sm text-ink/70">Investing in Qatar’s Future</p>
					</div>
					<div>
						<p className="text-sm text-ink/80">Contact</p>
						<p className="text-sm text-ink/70">info@finjan.vc · +974 0000 0000</p>
						<div className="mt-2 flex gap-3">
							<a href="#" aria-label="LinkedIn" className="text-deep-green/80 hover:text-deep-green">
								<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
									<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.7 4.7 6.2V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8V24h-4V8z" />
								</svg>
							</a>
							<a href="#" aria-label="Twitter" className="text-deep-green/80 hover:text-deep-green">
								<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
									<path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.35 8.53 8.53 0 01-2.7 1.03 4.26 4.26 0 00-7.25 3.88A12.1 12.1 0 013 4.79a4.25 4.25 0 001.32 5.68 4.24 4.24 0 01-1.93-.53v.05a4.27 4.27 0 003.42 4.18 4.3 4.3 0 01-1.92.07 4.27 4.27 0 003.98 2.96A8.54 8.54 0 012 20.41 12.07 12.07 0 008.29 22c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.35 8.35 0 0022.46 6z" />
								</svg>
							</a>
						</div>
					</div>
					<div className="text-xs text-ink/60">
						<p>Finjan V.C. is a QFC-registered entity. All investments carry risk.</p>
					</div>
				</div>
				<p className="mt-6 text-xs text-ink/50">© {new Date().getFullYear()} Finjan V.C. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;