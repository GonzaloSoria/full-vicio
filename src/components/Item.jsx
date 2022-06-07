const Item = ({title, image, price}) => {
    const choose_item = new Audio();
    choose_item.src = 'assets/sounds/choose_item.ogg';

    return (
        <>
            <a onClick={() => choose_item.play()} href="#" className="col-6 col-md-2 my-3 item">
                <img src={image} alt="" className="img-fluid"/>
                <h2 className="mt-2">{title}</h2>
                <p>ARS ${price}</p>
            </a>
        </>
    );
};

export default Item;