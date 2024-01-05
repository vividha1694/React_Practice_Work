function MenuCardGallery (props) {
    const href = props.href;
    const image = props.image;

    return (
        <>
        
        
        <article className="flip_card">
                <div className="flip_card_inner">
                    <div className="flip_card_front">
                        <img src={image} alt="" className="menu_img"/>
                    </div>
                    <div className="flip_card_back">
                        <h3 className="menu_h">CAFFE AMERICANO</h3>
                        <p className="menu_p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
                            dolores.
                        </p>
                        <h3 className="menu_h">₹ COST</h3>
                    </div>
                </div>
            </article>
      
        
        </>
    );
}

export default MenuCardGallery;