import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";
import FavWidget from "./FavWidget";

const Navbar = () => {
    const links = [{
        name: 'Inicio',
        route: '/'
    },{
        name: 'Carrito',
        route: '/carrito'
    },{
        name: 'Favoritos',
        route: '/favoritos'
    },{
        name: 'Juegos',
        route: '/productos'
    }]

    return (
        <>
            <header className="container-fluid py-4 primary-bg w-100">
                <div className="container">
                    <nav className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" className="">
                                <label className="lbl-menu">
                                    <span className="span1"></span>
                                    <span className="span2"></span>
                                    <span className="span3"></span>
                                </label>
                            </a>
                            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header justify-content-end">
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <nav className="nav">
                                        <ul>
                                            {links.map((link) => {
                                                return (
                                                    <li key={link.name} className="d-flex align-items-center"><Link to={link.route}>{link.name}<img src="assets/download.png" alt="" className="mb-0 ps-3"/></Link></li>
                                                )
                                            })}
                                        </ul>
                                    </nav>
                                    <Link to='/'><h1 className="brand d-block d-md-none border-none">Fullvicio.</h1></Link>
                                </div>
                            </div>
                            <Link to='/'><h1 className="brand d-none d-md-block">Fullvicio.</h1></Link>
                        </div>
                        <div className="d-flex justifi-content-center">
                            <div className="bg-juegos mx-2">
                                <Link to='/productos' className="juegos">Juegos</Link>
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