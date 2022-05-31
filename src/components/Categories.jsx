const Categories = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <h2 className="categorias mb-5">Categorias</h2>
                        <a href="#" className="col-12 col-md-4 bg-rpg py-5 mb-3 mb-md-0">
                            <h2 className="py-md-5">RPG</h2>
                        </a>
                        <a href="#" className="col-12 col-md-8 bg-strategy py-5 mb-3 mb-md-0">
                            <h2 className="py-md-5">STRATEGY</h2>
                        </a>
                        <a href="#" className="col-12 col-md-4 bg-shooter py-5 mb-3 mb-md-0">
                            <h2 className="py-md-5">SHOOTER</h2>
                        </a>
                        <a href="#" className="col-12 col-md-4 bg-simulator py-5 mb-3 mb-md-0">
                            <h2 className="py-md-5">SIMULATOR</h2>
                        </a>
                        <a href="#" className="col-12 col-md-4 bg-sports py-5 mb-3 mb-md-0">
                            <h2 className="py-md-5">SPORTS</h2>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;