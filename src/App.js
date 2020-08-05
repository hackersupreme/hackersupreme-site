import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

import Header from './sections/Header.js';
import Content from './sections/Content.js';
import About from './sections/About.js';
import Footer from './sections/Footer.js';

class App extends Component {

	constructor() {
		super();
		this.state = {
			windowWidth: null,
			windowHeight: null, 
			mobile: false,
			mounted: false
		}
		this.handleResize = this.handleResize.bind(this);
		this.handleLoad = this.handleLoad.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize)
		window.addEventListener('load', this.handleLoad)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize)
		window.removeEventListener('load', this.handleLoad)
	}

	handleLoad() {
		this.setState({
			windowWidth: window.innerWidth, 
			windowHeight: window.innerHeight,
			mounted: true, 
			mobile: window.innerWidth < 860 ? true : false
		})
	}

	handleResize() {
		this.setState({
			windowWidth: window.innerWidth, 
			windowHeight: window.innerHeight,
			mobile: window.innerWidth < 860 ? true : false,
		})
	}

	render() {
		const { mobile, windowHeight } = this.state;
		const x = 5800;
		let pages = mobile ? (x / windowHeight)  : 6.1;
		
		console.log(pages);
		return(
		<React.Fragment>
		{
			this.state.mounted ? (
			<Parallax pages={pages} scrolling={true} verital ref={ref => (this.parallax = ref)}>

				<Header 
				toWordpress={() => this.parallax.scrollTo(1)} 
				toPersonal={() => this.parallax.scrollTo(1.625)}
				toAbout={() => this.parallax.scrollTo(4)}
				/>

				<Content />
				
				<Footer />

			</Parallax>
				) : null
		}
		</React.Fragment>
		)

	}
}

export default App;