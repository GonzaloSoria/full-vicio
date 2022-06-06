const Categories = () => {
    return (
        <>
            <div className="container-fluid px-0 pt-5">
                <div className="container">
                    <h2 className="subtitles mb-5">Categorías</h2>
                    <div className="row gx-3 d-flex justify-content-center">
                        <a href="#" className="col-5 col-lg-2 bg-rpg py-5 mb-3 mb-lg-0">
                            <h2 className="py-md-5">RPG</h2>
                        </a>
                        <a href="#" className="col-5 offset-1 offset-lg-0 col-lg-2 bg-strategy py-5 mb-3 mb-lg-0">
                            <h2 className="py-md-5">STRATEGY</h2>
                        </a>
                        <a href="#" className="col-5 col-lg-2 bg-shooter py-5 mb-3 mb-lg-0">
                            <h2 className="py-md-5">SHOOTER</h2>
                        </a>
                        <a href="#" className="col-5 offset-1 offset-lg-0 col-lg-2 bg-simulator py-5 mb-3 mb-lg-0">
                            <h2 className="py-md-5">SIMULATOR</h2>
                        </a>
                        <a href="#" className="col-5 col-lg-2 bg-sports py-5 mb-3 mb-lg-0">
                            <h2 className="py-md-5">SPORTS</h2>
                        </a>
                        <a href="#" className="col-5 offset-1 offset-lg-0 col-lg-2 bg-royal py-5 mb-3 mb-lg-0">
                            <h2 className="py-md-5">ROYAL</h2>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;