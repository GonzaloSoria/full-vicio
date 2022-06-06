const BannerHome = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="container my-2 container-banner">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center bg-gris">
                        <h2 className="text-center pt-5 pt-md-3">Descubri los mejores Juegos</h2>
                        <p className="text-center mb-4">Encontrá los juegos que mas te gusten en las diferentes categorias</p>
                    </div>
                    <div className="col-12 col-md-6 bg-gris px-0 text-end">
                        <img src="assets/assasins-creed-odyssey.png" alt="" className="img-fluid text-end"/>
                    </div>
                </div>
            </div>
        </div>
        
            
        </>
    );
};

export default BannerHome;