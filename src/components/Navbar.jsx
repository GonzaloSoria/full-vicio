import { useState } from "react";

const Navbar = () => {
    const [favoritos, setFavoritos] = useState(0)
    const [carrito, setCarrito] = useState(0)

    return (
        <>
        <header className="container-fluid py-4 header-bg">
            <div className="container">
                <nav className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
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
                                        <li><a href="#">Consolas</a></li>
                                        <li><a href="#">Categorias</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <a href="#"><img src="img/full-vicio.png" alt="full vicio" className="brand"/></a>
                    </div>
                    <div className="d-flex justifi-content-center">
                        <form action="" className="d-flex justify-content-center align-items-center search-form">
                            <input type="search" />
                            <input type="image" src="img/lupa.png" className="lupa"/>
                        </form>
                        <div className="bg-fav mx-2">
                            <a href="#"><img src="img/favorito.png" alt="" /></a>
                            <div className="budget d-flex justify-content-center align-items-center">{favoritos}</div>
                        </div>
                        <div className="bg-cart">
                            <a href="#"><img src="img/cart.png" alt="" /></a>
                            <div className="budget d-flex justify-content-center align-items-center">{carrito}</div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Navbar;