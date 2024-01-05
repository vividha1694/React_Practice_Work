

function PeopleInfo (props) {
    const href = props.href;
    const image = props.image;
    const inst = props.inst;
    const face = props.face;

    return (
        <>
         
                <div>
                    <p>"For far away, behind the world mountains,far from countries Vokalia and Consonantia, there live
                        the
                        blind texts. Separated the live in Bookmarksgrove right at the coast of the Semantics, a large
                        language ocean."</p><br/>
                    <img className="slider-img" src={image}/>
                    <h3 className="sliders-name-one">Charles White</h3>
                    <hr className="sliders-hr1"/>
                    <div className="social">
                        <img src={inst} className="slider-social"/>
                        <img src={face} className="slider-social"/>
                    </div>
                </div>
                
        </>
        
    );
}

export default PeopleInfo;