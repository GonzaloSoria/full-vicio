import CartWidget from "./CartWidget";
import FavWidget from "./FavWidget";

const Navbar = () => {
    const menu_sound = new Audio();
    menu_sound.src = 'assets/sounds/xbarrel.wav';

    return (
        <>
        <header className="container-fluid py-4 header-bg w-100">
            <div className="container">
                <nav className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <a onClick={() => menu_sound.play()} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" className="">
                            <label className="lbl-menu">
                                <span className="span1"></span>
                                <span className="span2"></span>
                                <span className="span3"></span>
                            </label>
                        </a>
                        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title menu" id="offcanvasExampleLabel">Menu</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <nav className="nav">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Carrito</a></li>
                                        <li><a href="#">Favoritos</a></li>
                                        <li><a href="#">Consolas</a></li>
                                        <li><a href="#">Categorias</a></li>
                                    </ul>
                                </nav>
                                <a href="#"><h1 className="brand d-block d-md-none border-none">Fullvicio.</h1></a>
                            </div>
                        </div>
                        <a href="#"><h1 className="brand d-none d-md-block">Fullvicio.</h1></a>
                    </div>
                    <div className="d-flex justifi-content-center">
                        <form action="" className="d-flex justify-content-center align-items-center search-form">
                            <input type="search" placeholder="Buscar"/>
                            <input type="image" src="assets/img/lupa.png" className="lupa"/>
                        </form>
                        <div className="bg-juegos mx-2">
                            <a href="#" className="juegos">Juegos</a>
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