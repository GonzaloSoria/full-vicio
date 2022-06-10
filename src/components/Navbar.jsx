import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";
import FavWidget from "./FavWidget";

const Navbar = () => {
    const link = new Audio();
    const open_menu = new Audio();

    link.src = 'assets/sounds/link-nav.wav';
    open_menu.src = 'assets/sounds/open_menu.wav';

    return (
        <>
            <header className="container-fluid py-4 primary-bg w-100">
                <div className="container">
                    <nav className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <a onClick={() => open_menu.play()} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" className="">
                                <label className="lbl-menu">
                                    <span className="span1"></span>
                                    <span className="span2"></span>
                                    <span className="span3"></span>
                                </label>
                            </a>
                            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header justify-content-end">
                                    <button onClick={() => open_menu.play()} type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <nav className="nav">
                                        <ul>
                                            <li className="d-flex align-items-center"><Link onMouseOver={() => link.play()} onClick={() => open_menu.play()}  to='/'>Inicio<img src="assets/download.png" alt="" className="mb-0 ps-3"/></Link></li>
                                            <li><Link onMouseOver={() => link.play()} onClick={() => open_menu.play()} to='/carrito'>Carrito<img src="assets/download.png" alt="" className="mb-0 ps-3"/></Link></li>
                                            <li><Link onMouseOver={() => link.play()} onClick={() => open_menu.play()} to='/favoritos'>Favoritos<img src="assets/download.png" alt="" className="mb-0 ps-3"/></Link></li>
                                            <li><Link onMouseOver={() => link.play()} onClick={() => open_menu.play()} to='/productos'>Juegos<img src="assets/download.png" alt="" className="mb-0 ps-3"/></Link></li>
                                            <li><Link onMouseOver={() => link.play()} onClick={() => open_menu.play()} to='/#categorias'>Categorias<img src="assets/download.png" alt="" className="mb-0 ps-3"/></Link></li>
                                        </ul>
                                    </nav>
                                    <Link to='/'><h1 className="brand d-block d-md-none border-none">Fullvicio.</h1></Link>
                                </div>
                            </div>
                            <Link to='/'><h1 className="brand d-none d-md-block">Fullvicio.</h1></Link>
                        </div>
                        <div className="d-flex justifi-content-center">
                            <form action="" className="d-flex justify-content-center align-items-center search-form">
                                <input type="search" placeholder="Buscar"/>
                                <input type="image" src="assets/lupa.png" className="lupa"/>
                            </form>
                            <div className="bg-juegos mx-2">
                                <Link to='/productos' onClick={() => open_menu.play()} className="juegos">Juegos</Link>
                            </div>
                            <FavWidget />
                            <CartWidget />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar;