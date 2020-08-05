import React from 'react';

import { ParallaxLayer } from 'react-spring/renderprops-addons';

import Services from './services.module.css';
import Wordpress from './wordpress.module.css';
import Personal from './personal.module.css';
import Skills from './skills.module.css';
import About from './about.module.css';
import Profile from '../profile.jpg';

import Kairos from './Kairos_Black.png';
import Firstand42 from '../firstand42.PNG';

export default () => (
	<ParallaxLayer offset={0.5} speed={0}>

		<section className={Services.container}>

			<ul className={Services.list}>

				<li className={Services.listItem}>
					<h3 className={Services.header}>Custom Websites</h3>

					<p className={Services.copy}>I specialize in Wordpress and React.js</p>
				</li>

				<li className={Services.listItem}>
					<h3 className={Services.header}>Wordpress Janitor</h3>

					<p className={Services.copy}>I can help with updates, theme customizations, bugs, and more</p>
				</li>

				<li className={Services.listItem}>
					<h3 className={Services.header}>Page Speed / SEO / Security</h3>

					<p className={Services.copy}>Audits to see where you can get some results</p>
				</li>

			</ul>

		</section>

		<section className={Wordpress.container}>

			<h2 className={Wordpress.title}>Wordpress Sites</h2>

			<p className={Wordpress.subtitle}>Developed from scratch</p>

			<ul className={Wordpress.list}>

				<li className={Wordpress.listItem}>

					<img src={Firstand42} className={Wordpress.image} width={200} alt={'First and 42'} />

					<p className={Wordpress.award}>***GDUSA Award Winner***</p>

					<p className={Wordpress.copy}><strong>First and 42</strong> is a West Michigan regional business magazine with over 10,000 subscribers.</p>
					<p className={Wordpress.copy}>
					In late 2018, they desired a modern-looking website that would match the branding they established through their print 
					issues. They also wanted the ability to increase their revenue by implementing e-commerce functionality for purchasing magazine subscriptions
					and advertisements. 
					</p>
					<p className={Wordpress.copy}>
					The new website was built using Wordpress with a custom theme and launched in Summer 2019. It won a GDUSA Web Design Award, making me an award-winning developer!
					</p>

					<a href="https://firstand42.media/" className={Wordpress.link}>Visit Site</a>
				</li>

				<li className={Wordpress.listItem}>

					<img src={Kairos} className={Wordpress.image} width={100} alt={'Kairos West Michigan'} />

					<p className={Wordpress.copy}><strong>Kairos West Michigan</strong> is a local non profit focused on peace in the Middle East.</p>

					<p className={Wordpress.copy}>They wanted to accomplish two main things with their website: the ability to self-publish articles and events, and accepting donations.</p>

					<p className={Wordpress.copy}>Naturally, Wordpress was a nice fit for their needs. The site has a custom theme and was launched in late 2018.</p>

					<a href="https://kairoswestmichigan.org/" className={Wordpress.link}>Visit Site</a>

				</li>

			</ul>

		</section>

		<section className={Personal.container}>

			<h2 className={Personal.title}>React.js Projects</h2>

			<p className={Personal.subtitle}>Personal projects I've developed in my spare time</p>

			<ul className={Personal.list}>

				<li className={Personal.listItem}>

					<h3 className={Personal.header}>univariate-infographics</h3>

					<code className={Personal.code}>npm install --save-dev univariate-infographics</code>

					<p className={Personal.copy}>React component library of customizable svg graphics. Install the library through NPM!</p>

					<a href="http://univariate-infographics.hackersupreme.com" className={Personal.link}>Visit Library Site</a>

					<a href="https://www.npmjs.com/package/univariate-infographics" className={Personal.link}>Visit NPM Page</a>

				</li>

				<li className={Personal.listItem}>

					<h3 className={Personal.header}>Cuopon Calculator</h3>

					<p className={Personal.copy}>Single page app that provides an interface for creating and editing cuopon data to be exported in csv format.</p>

					<a href="http://cuoponcalculator.hackersupreme.com" className={Personal.link}>Visit site</a>

				</li>

				<li className={Personal.listItem}>

					<h3 className={Personal.header}>React Spring Documentation & Examples Series</h3>

					<p className={Personal.copy}>A collection of example projects and written documentation to help learn more about this animation library.</p>

					<a href="https://github.com/hackersupreme/react-spring-collection" className={Personal.link}>See Collection</a>

				</li>

				<li className={Personal.listItem}>

					<h3 className={Personal.header}>Refactoring UI Examples</h3>

					<p className={Personal.copy}>Pages built from the popular Youtube series.</p>

					<a href="https://github.com/hackersupreme/refactoring-ui-collection" className={Personal.link}>See Collection</a>

				</li>

			</ul>

		</section>

		<section className={Skills.container}>

			<ul className={Skills.list}>

				<h2 className={Skills.header}>Looking for a contractor?</h2>

				<h3 className={Skills.subheader}>Here's an overview of my skills</h3>

				<li className={Skills.listItem}>HTML5, CSS3, and Javascript ES6</li>
				<li className={Skills.listItem}>React.js</li>
				<li className={Skills.listItem}>Redux.js</li>
				<li className={Skills.listItem}>Gatsby.js</li>
				<li className={Skills.listItem}>Headless CMS Development</li>
				<li className={Skills.listItem}>Bootstrap</li>
				<li className={Skills.listItem}>PHP</li>
				<li className={Skills.listItem}>Wordpress Theme/Plugin Development</li>
				<li className={Skills.listItem}>CRM Integrations/Transitions</li>
				<li className={Skills.listItem}>CMS Transitions</li>

				<a href="https://github.com/hackersupreme" className={Skills.link}>Github</a>

			</ul>

		</section>

		<section className={About.container}>

			<div className={About.contentWrap}>

				<h3 className={About.header}>About Hacker Supreme</h3>

				<p className={About.subheader}>My real name is Jeff.</p>

				<p className={About.copy}>I've been a web developer since early 2018.</p>

				<p className={About.copy}>I live on the West coast of Michigan.</p>

				<p className={About.copy}>I'm an INTJ and a pisces.</p>

				<p className={About.copy}>I have a bachelors degree in the art of economics from the University of Michigan.</p>

				<img src={Profile} className={About.image} />

			</div>

		</section>

	</ParallaxLayer>
)