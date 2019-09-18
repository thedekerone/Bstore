import React from 'react';
import ProductView from './ProductView';

export default function Productos() {
	return (
		<div className='productos'>
			<ProductView />
			<ProductView />
			<ProductView />
			<ProductView />
			<ProductView />
			<ProductView />
			<style jsx>
				{`
                .productos{
                    display: grid;
                    gap: 1em ;
                    grid-template-columns: repeat(auto-fill, minmax(300px,1fr))
                `}
			</style>
		</div>
	);
}
