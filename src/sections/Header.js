import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import Styles from './header.module.css';

export default props => (

	<React.Fragment>

	<ParallaxLayer offset={0} speed={0.5} className={Styles.parallaxLayerBG}>

		<div className={Styles.container}>
			<div className={Styles.background} />
		</div>

	</ParallaxLayer>

	<ParallaxLayer offset={0} speed={0.25} className={Styles.parallaxLayer}>

		<header className={Styles.container}>

			<h1 className={Styles.title}>Front End Developer</h1>

			<a href="https://github.com/hackersupreme">

				<button className={Styles.button}>

					Github

				</button>

			</a>

		</header>

		<div className={Styles.authorContainer}>

			<h2 className={Styles.author}>Hacker Supreme</h2>

			<h2 className={Styles.author}><span style={{textTransform: 'none'}}>aka</span> Jeff Schwartz</h2>

		</div>

	</ParallaxLayer>

	</React.Fragment>

)