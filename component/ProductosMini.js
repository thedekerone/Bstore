import Carousel from './Carousel';
import React from 'react';
import ProductViewMini from './ProductViewMini';
import ProductView from './ProductView';
import { Link } from '../routes';

export default function ProductosMini() {
	return (
		<Carousel width='150' height='auto' margin='10' slides='6'>
			<Link route='single'>
				<a className='carousel__item'>
					<ProductViewMini />
				</a>
			</Link>
			<Link route='single'>
				<a className='carousel__item'>
					<ProductViewMini />
				</a>
			</Link>
			<Link route='single'>
				<a className='carousel__item'>
					<ProductViewMini />
				</a>
			</Link>
			<Link route='single'>
				<a className='carousel__item'>
					<ProductViewMini />
				</a>
			</Link>
			<Link route='single'>
				<a className='carousel__item'>
					<ProductViewMini />
				</a>
			</Link>
			<Link route='single'>
				<a className='carousel__item'>
					<ProductViewMini />
				</a>
			</Link>

			<style jsx>{``}</style>
		</Carousel>
	);
}
