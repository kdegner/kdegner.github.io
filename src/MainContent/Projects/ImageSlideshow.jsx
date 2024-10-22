const ImageSlideshow = (props) => {
    const id = "projectCarousel" + props.id.toString();
    const images = props.images;
    const firstImage = images[0];
    const imagesWithoutFirst = images.slice(1, images.length + 1);
    const imagesElement = [];
    const indicatorsElement = [];
    let indicatorCount = 1;

    imagesElement.push(
        <div className="carousel-item active">
            <img src={firstImage} className="image d-block w-100" alt={"TODO"}/>
        </div>
    );

    indicatorsElement.push(
        <li data-bs-target={"#" + id} data-bs-slide-to="0" className="active"></li>
    );

    imagesWithoutFirst.forEach((image) => {
        imagesElement.push(
            <div className="carousel-item">
                <img src={image} className="image d-block w-100" alt={"TODO"}/>
            </div>
        );

        indicatorsElement.push(
            <li data-bs-target={"#" + id} data-bs-slide-to={indicatorCount.toString()}></li>
        );

        indicatorCount++;
    });


    return (
        <div id={id} className={"carousel carousel-dark slide"} data-bs-ride={"false"}>

            <ol className="carousel-indicators">
                {indicatorsElement}
            </ol>

            <div className="carousel-inner">
                {imagesElement}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target={"#" + id} data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={"#" + id} data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
}

export default ImageSlideshow;