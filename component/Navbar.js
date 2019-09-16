import React from 'react';

export default function Navbar() {
	return (
		<div className='navbar-container'>
			<div className='navbar'>
				<div className='main-navbar'>
					<h1 className='main-navbar__title'>Logo</h1>
					<span className='main-navbar__icon'>
						<img className='icon-menu' width='30px' src='/static/icons/menu.svg' alt='' />
					</span>
				</div>
				<div className='secondary-navbar'>
					<nav className='secondary-navbar__items'>
						<ul>
							<li>Hombres</li>
							<li>Mujeres</li>
							<li>Niños</li>
							<li>Accesorios</li>
							<li>Regalos</li>
						</ul>
					</nav>
				</div>
			</div>

			<style jsx>
				{`
                    .navbar-container{
                        position:relative
                    }
					.navbar {
						background: white;
                        width: 100%;
                        
						position: fixed;
					}
					.main-navbar {
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 0 1rem;
                    }
                    .main-navbar__icon{
                        display:flex;
                        align-item:center
                    }
					.icon-menu{
                        color
                    }
					.secondary-navbar {
                        display:none;
						background:#F2F2F2
                    }
                    .secondary-navbar__items ul {
                        display:flex;
                        width:100%;
                        padding:0;
                        margin:0;
                        max-width:600px;
                        justify-content: space-around;
                        align-items:center;
                        height: 3rem
                    }
                    .secondary-navbar__items ul li {
                        list-style:none
                    }
                    @media (min-width: 560px) {
                        .secondary-navbar{
                            display:block
                        }
                        :global(body){
                            background:white
                        }
                    }
				`}
			</style>
		</div>
	);
}
