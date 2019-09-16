import React, { Component } from 'react';
import Carousel from '../component/Carousel';
import MarcasDisplay from '../component/MarcasDisplay';
import Productos from '../component/Productos';
import Head from 'next/head';
import MainDisplayer from '../component/MainDisplayer';
import Navbar from '../component/Navbar';
export default class index extends Component {
	render() {
		return (
			<div>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				</Head>
				<Navbar />
				<div className='container'>
					<div className='displayer'>
						<MainDisplayer />
					</div>
					<div className='tiendas'>
						<h2>Tiendas disponibles</h2>
						<MarcasDisplay />
					</div>
					<div className='ofertas'>
						<h2>Mejores ofertas</h2>
						<Productos />
					</div>
				</div>
				<style jsx>{`
					@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');
					.container {
						max-width: 960px;
						width: 100%;
						padding: 0;
						padding-top: 140px;
						overflow: hidden;
						margin: 0 auto;
					}
					.tiendas {
						padding-left: 10px;
					}
					h2 {
						font-size: 1rem;
						font-weight: 400;
						text-transform: uppercase;
					}
					.ofertas {
						padding-left: 10px;
					}

					:global(body) {
						background: #f3f3f3;
						margin: 0;
						position: relative;
						font-family: 'Montserrat', sans-serif;
					}
					:global(*) {
						color: #646464;
					}
					:global(hr) {
						border-width: 0px;
					}
				`}</style>
			</div>
		);
	}
}
