import React from 'react';

export default function ProductViewMini() {
	return (
		<div className='product'>
			<div className='product__img'>
				<img src='/static/gucci.jpeg' width='100%' alt='' />
			</div>
			<div className='product__description'>
				<div className='product-title'>
					<h3>GUCCI BAG</h3>
				</div>
				{/* <div className='product-banner'>
					<span>OFERTA EXCLUSIVA</span>
				</div> */}
				<div className='product-discount'>
					<span className='product-discount__price'>300$</span>
					<span className='product-discount__percentage'>-50%</span>
				</div>
				<div className='product-price'>
					<span>150$</span>
				</div>
			</div>
			<style jsx>
				{`
					.product {
						display: grid;
						grid-template: 1fr 1fr 1fr/1fr;
					}
					.product__img {
						grid-row: 1/3;
					}
					.product-title h3 {
						border-bottom: 1px solid #c5c5c5;
						margin: 0;
						padding: .2rem 0;
					}
					.product__description,
					.product__img {
						background: white;
						width: 100%;
					}
					.product__description {
						padding-left: .4rem;
						box-sizing: border-box;
					}

					.product-banner span {
						color: white;
						font-size: .7rem;
						background: rgb(181, 0, 191);
						background: linear-gradient(90deg, rgba(181, 0, 191, 1) 0%, rgba(0, 8, 180, 1) 100%);
						padding: 0 .4rem;
					}
					.product-discount {
						margin-bottom: .5rem;
					}
					.product-discount__price {
						font-size: .8rem;
					}
					.product-discount__percentage {
						margin-left: .4rem;
						color: red;

						font-size: .9rem;
					}
				`}
			</style>
		</div>
	);
}
