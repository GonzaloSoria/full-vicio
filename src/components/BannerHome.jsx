const BannerHome = () => {
    return (
        <>
            <div className="container-fluid pt-3 pt-md-1" id="categorias">
                <div className="container my-2 container-banner">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center bg-gris">
                            <h2 className="text-center pt-5 pt-md-3">Descubri los mejores Juegos</h2>
                            <p className="text-center mb-5 mb-md-4">Encontrá los juegos que mas te gusten en las diferentes categorias</p>
                        </div>
                        <div className="col-12 col-md-6 bg-gris px-0 text-center">
                            <img src="assets/banner-caracters.png" alt="" className="img-fluid d-none d-md-block"/>
                        </div>
                    </div>
                </div>
            </div>           
        </>
    );
};

export default BannerHome;