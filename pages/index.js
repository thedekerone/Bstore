import React, { Component } from 'react';
import Carousel from '../component/Carousel';
import MarcasDisplay from '../component/MarcasDisplay';
import Productos from '../component/Productos';
import Head from 'next/head';
import MainDisplayer from '../component/MainDisplayer';
import Navbar from '../component/Navbar';
import ProductView from '../component/ProductView';
import ProductViewMini from '../component/ProductViewMini';
import BrandDisplayer from '../component/BrandDisplayer';
import Selector from '../component/Selector';
export default class index extends Component {
	render() {
		return (
			<div>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				</Head>
				<Navbar />
				<div className='container'>
					<BrandDisplayer />
					<Selector />
					<Productos />
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
					.container > div {
						margin-bottom: 2.5rem;
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
