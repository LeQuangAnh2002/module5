import React, {Fragment} from 'react';
import {Carousel,Button} from "react-bootstrap";
export default function HeaderSlider() {
    return (
        <Fragment>
            <Carousel variant="dark" >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{height:"100vh", objectFit:"cover"}}
                        src="../image/slider/pure-pu-ladies-shoulder-bag.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className="bg-white">
                        <h5>Summer Collection Pure PU Ladies Shoulder Bag </h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <div className="mb-3">
                            <Button variant="dark">Shop Now</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "100vh", objectFit: "cover" }}
                        src="../image/slider/young-handsome-guy-smart-suit.png"
                        alt="pure mustard oil"
                    />
                    <Carousel.Caption className="bg-white">
                        <h5>100% Cotton Men Blac Suits</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <div className="mb-3">
                            <Button variant="dark">Shop Now</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "100vh", objectFit: "cover" }}
                        src="../image/slider/blender-fruits-kitchen-space.png"
                        alt="smart blender home appliance"
                    />
                    <Carousel.Caption className="bg-white">
                        <h5>Decorate Your Smart Kitchen</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <div className="mb-3">
                            <Button variant="dark">Shop Now</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </Fragment>
    )
}