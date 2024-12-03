import React from "react";

const About = () => {
    return <div>
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Exciting tours for adventorous people.
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Your going to fall in love with nature
                    </h3>
                    <p className="paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora vitae sint aut, sed maxime id tenetur eveniet perferendis enim quaerat, quis voluptate praesentium autem minima libero aspernatur ullam beatae.
                    </p>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Live adventures like you never have before
                    </h3>
                    <p className="paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente tenetur quisquam? Officiis ut animi est, facilis dolores qui ex, eveniet obcaecati corrupti labore ab ratione dicta maiores unde eaque?
                    </p>
                    <a href="#" className="btn-text">
                        Learn more &rarr;
                    </a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src="/img/nat-1.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
                        <img src="/img/nat-2.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />
                        <img src="/img/nat-3.jpg" alt="Photo 3" className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default About