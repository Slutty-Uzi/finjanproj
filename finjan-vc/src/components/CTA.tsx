import { useState } from 'react';
import type { ChangeEvent, FormEvent, FC } from 'react';

const CTA: FC = () => {
	const [formState, setFormState] = useState({ name: '', email: '', message: '' });
	const [submitted, setSubmitted] = useState(false);

	function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { name, value } = event.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSubmitted(true);
		// Placeholder: integrate API later
	}

	return (
		<section id="contact" className="py-16 md:py-24 scroll-mt-24">
			<div className="container-responsive">
				<div className="grid gap-8 md:grid-cols-2">
					<div>
						<h2 className="text-2xl md:text-3xl font-bold text-deep-green">Get in Touch</h2>
						<p className="mt-4 text-ink/80">
							Our investor club is exclusive and by invitation only – reach out to express interest.
						</p>
					</div>
					<form onSubmit={handleSubmit} className="rounded-xl border border-ink/10 bg-white/70 p-6 shadow-sm">
						<div className="grid gap-4">
							<label className="grid gap-1">
								<span className="text-sm font-medium text-deep-green">Name</span>
								<input
									type="text"
									name="name"
									value={formState.name}
									onChange={handleChange}
									required
									className="rounded-md border border-ink/20 bg-cream px-3 py-2 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold/60"
									placeholder="Your full name"
								/>
							</label>
							<label className="grid gap-1">
								<span className="text-sm font-medium text-deep-green">Email</span>
								<input
									type="email"
									name="email"
									value={formState.email}
									onChange={handleChange}
									required
									className="rounded-md border border-ink/20 bg-cream px-3 py-2 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold/60"
									placeholder="you@example.com"
								/>
							</label>
							<label className="grid gap-1">
								<span className="text-sm font-medium text-deep-green">Message</span>
								<textarea
									name="message"
									value={formState.message}
									onChange={handleChange}
									rows={4}
									required
									className="rounded-md border border-ink/20 bg-cream px-3 py-2 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold/60"
									placeholder="Tell us a bit about your background and interests"
								/>
							</label>
							<button type="submit" className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 font-semibold text-ink shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60">
								Request Invitation
							</button>
							{submitted && (
								<p className="text-sm text-deep-green">Thank you — we will be in touch.</p>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default CTA;