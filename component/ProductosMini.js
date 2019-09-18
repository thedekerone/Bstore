import Carousel from './Carousel';
import React from 'react';
import ProductViewMini from './ProductViewMini';
import ProductView from './ProductView';

export default function ProductosMini() {
	return (
		<Carousel width='150' height='240' margin='10' slides='7'>
			<div className='carousel__item' />

			<style jsx>{``}</style>
		</Carousel>
	);
}
