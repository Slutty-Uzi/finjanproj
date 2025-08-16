import './index.css';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Pillars from './components/Pillars';
import Leadership from './components/Leadership';
import WhyFinjan from './components/WhyFinjan';
import CTA from './components/CTA';

function App() {
	return (
		<Layout>
			<Hero />
			<Mission />
			<Pillars />
			<Leadership />
			<WhyFinjan />
			<CTA />
		</Layout>
	);
}

export default App;
