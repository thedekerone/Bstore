import React, { Component } from 'react';
import Carousel from '../component/Carousel';
import MarcasDisplay from '../component/MarcasDisplay';
import Productos from '../component/Productos';
import ProductosMini from '../component/ProductosMini';
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
					<MainDisplayer />
					<div className='tiendas'>
						<h2>TIENDAS DISPONIBLES</h2>
						<MarcasDisplay />
					</div>
					<div className='ofertas'>
						<h2>HASTA 50% DE DESCUENTO</h2>
						<ProductosMini />
					</div>
					<div className='ofertas'>
						<h2>NIÑOS</h2>
						<ProductosMini />
					</div>
					<div className='ofertas'>
						<h2>BLUSAS</h2>
						<ProductosMini />
					</div>
					<div className='ofertas'>
						<h2>ZAPATILLAS Y MÁS</h2>
						<ProductosMini />
					</div>
				</div>

				<style jsx>{`
					@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');

					.container {
						max-width: 1150px;
						width: 100%;
						padding: 0;
						padding-top: 80px;
						overflow: hidden;
						margin: 0 auto 4rem;
					}

					.tiendas {
						padding-left: 10px;
					}

					h2 {
						font-size: 1rem;
						font-weight: 400;
						margin-bottom: 1.5em;
						text-transform: uppercase;
					}
					.tiendas h2 {
						font-size: .9em;
					}

					.ofertas {
						padding-left: 10px;
					}
					.tiendas,
					.ofertas {
						margin-top: 2.5rem;
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
					:global(a) {
						text-decoration: none;
					}
					:global(img) {
						-webkit-user-drag: none;
						-khtml-user-drag: none;
						-moz-user-drag: none;
						-o-user-drag: none;
						user-drag: none;
					}
					@media (min-width: 660px) {
						:global(#flex) {
							display: flex;
							justify-content: center;
						}
						:global(body) {
							background: white;
						}
						.container {
							padding-top: 150px;
						}
						:global(.carousel__item) {
							border: 1px solid #e8e8e8;
						}
					}
				`}</style>
			</div>
		);
	}
}
