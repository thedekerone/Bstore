import Carousel from '../component/Carousel';
import React from 'react';

export default function Productos() {
	return (
		<Carousel width='130' height='210' margin='10' slides='7'>
			<div className='carousel__item'>
				<div className='product'>
					<div className='product__img'>
						<img src='/static/gucci.jpeg' width='100%' alt='' />
					</div>
					<div className='product__description'>
						<span className='product_description--name'>Gucci bag</span>
						<div className='product-discount'>
							<span className='product-discount__price'>300$ </span>
							<span className='product-discount__percent'>-50% </span>
						</div>
						<hr />
						<span className='product__description--actual-price'>150$ </span>
					</div>
				</div>
			</div>
			<div className='carousel__item'>
				<div className='product'>
					<div className='product__img'>
						<img src='/static/gucci.jpeg' width='100%' alt='' />
					</div>
					<div className='product__description'>
						<span className='product_description--name'>Gucci bag</span>
						<div className='product-discount'>
							<span className='product-discount__price'>300$ </span>
							<span className='product-discount__percent'>-50% </span>
						</div>
						<hr />
						<span className='product__description--actual-price'>150$ </span>
					</div>
				</div>
			</div>
			<div className='carousel__item'>
				<div className='product'>
					<div className='product__img'>
						<img src='/static/gucci.jpeg' width='100%' alt='' />
					</div>
					<div className='product__description'>
						<span className='product_description--name'>Gucci bag</span>
						<div className='product-discount'>
							<span className='product-discount__price'>300$ </span>
							<span className='product-discount__percent'>-50% </span>
						</div>
						<hr />
						<span className='product__description--actual-price'>150$ </span>
					</div>
				</div>
			</div>
			<div className='carousel__item'>
				<div className='product'>
					<div className='product__img'>
						<img src='/static/gucci.jpeg' width='100%' alt='' />
					</div>
					<div className='product__description'>
						<span className='product_description--name'>Gucci bag</span>
						<div className='product-discount'>
							<span className='product-discount__price'>300$ </span>
							<span className='product-discount__percent'>-50% </span>
						</div>
						<hr />
						<span className='product__description--actual-price'>150$ </span>
					</div>
				</div>
			</div>
			<div className='carousel__item'>
				<div className='product'>
					<div className='product__img'>
						<img src='/static/gucci.jpeg' width='100%' alt='' />
					</div>
					<div className='product__description'>
						<span className='product_description--name'>Gucci bag</span>
						<div className='product-discount'>
							<span className='product-discount__price'>300$ </span>
							<span className='product-discount__percent'>-50% </span>
						</div>
						<hr />
						<span className='product__description--actual-price'>150$ </span>
					</div>
				</div>
			</div>
			<div className='carousel__item'>
				<div className='product'>
					<div className='product__img'>
						<img src='/static/gucci.jpeg' width='100%' alt='' />
					</div>
					<div className='product__description'>
						<span className='product_description--name'>Gucci bag</span>
						<div className='product-discount'>
							<span className='product-discount__price'>300$ </span>
							<span className='product-discount__percent'>-50% </span>
						</div>
						<hr />
						<span className='product__description--actual-price'>150$ </span>
					</div>
				</div>
			</div>
			<div className='carousel__item'>
				<div className='product'>
					<div className='product__img'>
						<img src='/static/gucci.jpeg' width='100%' alt='' />
					</div>
					<div className='product__description'>
						<span className='product_description--name'>Gucci bag</span>
						<div className='product-discount'>
							<span className='product-discount__price'>300$ </span>
							<span className='product-discount__percent'>-50% </span>
						</div>
						<hr />
						<span className='product__description--actual-price'>150$ </span>
					</div>
				</div>
			</div>

			<style jsx>
				{`
					.product {
						display: flex;
						flex-direction: column;
						height: 100%;
					}
					.product__description {
						height: 100%;
					}
					.product-discount {
						margin-top: .5rem;
					}
					.product-discount,
					.product__description--actual-price {
						margin: 0 0 0 .5rem;
						display: inline-block;
						width: 80%;
					}
					.product__description--actual-price {
						font-weight: bold;
					}
					.product-discount__price {
						text-decoration: line-through;
						color: #b7b7b7;
						font-size: .8rem;
					}
					.product-discount__percent {
						color: red;
						margin-left: .5rem;
					}
					.product_description--name {
						border-bottom: 1px solid #c5c5c5;
						padding: 0 0 0 .5rem;
						display: block;
						margin-bottom: .5rem;
					}
					hr {
						margin: .1rem 0;
					}
					@media (min-width: 660px) {
						:global(#flex) {
							display: flex;
							justify-content: center;
						}
						:global(html) {
							font-size: 20px;
						}
					}
				`}
			</style>
		</Carousel>
	);
}
