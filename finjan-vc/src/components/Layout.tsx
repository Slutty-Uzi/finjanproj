import type { PropsWithChildren, FC } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="min-h-dvh bg-cream">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;