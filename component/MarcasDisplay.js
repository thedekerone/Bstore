import Carousel from '../component/Carousel';
import React from 'react';

export default function MarcasDisplay() {
	return (
		<Carousel slides='4' width='230px' margin='25px' height='98px'>
			<div className='carousel__item'>
				<img src='/static/marcas/Adidas-1280x720.jpg' width='100%' height='100%' alt='' />
			</div>
			<div className='carousel__item'>
				<img src='/static/marcas/gucci.png' width='100%' height='100%' alt='' />
			</div>
			<div className='carousel__item'>
				<img src='/static/marcas/nike.png' width='100%' height='100%' alt='' />
			</div>
			<div className='carousel__item'>
				<img src='/static/marcas/Adidas-1280x720.jpg' width='100%' height='100%' alt='' />
			</div>

			<style jsx>
				{`
					:global(img) {
						-webkit-user-drag: none;
						-khtml-user-drag: none;
						-moz-user-drag: none;
						-o-user-drag: none;
						user-drag: none;
					}
				`}
			</style>
		</Carousel>
	);
}
