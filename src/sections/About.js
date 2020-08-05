import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import Styles from './about.module.css';
import Profile from '../profile.jpg';

export default () => (
	<React.Fragment>

	<ParallaxLayer offset={5.25} speed={0.5} className={Styles.parallaxLayer}>



	</ParallaxLayer>

	<ParallaxLayer offset={5.25} speed={0.25} className={Styles.parallaxLayer}>

		<section className={Styles.container}>

			<h3 className={Styles.header}>About Hacker Supreme</h3>

			<p className={Styles.subheader}>My real name is Jeff.</p>

			<img src={Profile} width={240} className={Styles.image} />

			<p className={Styles.copy}>I've been a web developer since early 2018.</p>

			<p className={Styles.copy}>I live on the West coast of Michigan.</p>

			<p className={Styles.copy}>I'm an INTJ and a pisces.</p>

			<p className={Styles.copy}>I have a bachelors degree in the art of economics from the University of Michigan.</p>

		</section>

	</ParallaxLayer>

	</React.Fragment>
)