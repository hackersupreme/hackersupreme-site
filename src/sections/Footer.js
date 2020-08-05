import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import Styles from './footer.module.css';

export default () => (
	<React.Fragment>

	<ParallaxLayer offset={0} speed={-1} className={Styles.parallaxLayer}>

		<p className={Styles.header}>Reach out with any inquiries!</p>

		<footer className={Styles.footer}>
			<a href="https://github.com/hackersupreme" className={Styles.link}>Github</a>
			<a href="https://www.instagram.com/jeffgsch/" className={Styles.link}>Instagram</a>
			<p className={Styles.copy}>&copy; 2020 Hacker Supreme </p>
			<a href="https://www.linkedin.com/in/jeffgsch/" className={Styles.link}>LinkedIn</a>
			<a href="https://codepen.io/hacker-supreme" className={Styles.link}>CodePen</a>
		</footer>

	</ParallaxLayer>

	</React.Fragment>
)