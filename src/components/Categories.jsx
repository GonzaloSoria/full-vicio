import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <>
            <div className="container-fluid px-0 pt-5">
                <div className="container">
                    <div className="row gx-3 d-flex justify-content-center">
                        <Link to='/category/rpg' className="col-5 col-lg-2 bg-rpg py-5 mb-3 mb-lg-0">
                            <h2 className="py-md-5">RPG</h2>
                        </Link>
                        <Link to='/category/strategy' className="col-5 offset-1 offset-lg-0 col-lg-2 bg-strategy py-5 mb-3 mb-lg-0">
                            <h2 className="py-md-5">STRATEGY</h2>
                        </Link>
                        <Link to='/category/shooter' className="col-5 col-lg-2 bg-shooter py-5 mb-3 mb-lg-0">
                            <h2 className="py-md-5">SHOOTER</h2>
                        </Link>
                        <Link to='/category/simulator' className="col-5 offset-1 offset-lg-0 col-lg-2 bg-simulator py-5 mb-3 mb-lg-0">
                            <h2 className="py-md-5">SIMULATOR</h2>
                        </Link>
                        <Link to='/category/sports' className="col-5 col-lg-2 bg-sports py-5 mb-3 mb-lg-0">
                            <h2 className="py-md-5">SPORTS</h2>
                        </Link>
                        <Link to='/category/royal' className="col-5 offset-1 offset-lg-0 col-lg-2 bg-royal py-5 mb-3 mb-lg-0">
                            <h2 className="py-md-5">ROYAL</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;