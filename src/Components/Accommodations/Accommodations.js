import React from 'react';
import './Accommodations.css';


const Accommodations = (props) => {
    // let places = [
    //     {
    //         name: "",
    //         desc: "",
    //         link: ""
    //     }
    // ]
    let vendors = [
        {
            service: "Photography",
            name: "Don Fields Photography",
            site: "https://www.donfieldsphotography.com/"
        },
        {
            service: "Flowers",
            name: "Sevier Blumen",
            site: "http://sevierblumen.com/"
        },
        {
            service: "Cake",
            name: "Cakery Bakery",
            site: "http://cakerybakerytn.com/"
        },
        {
            service: "Invitations",
            name: "Lauren G",
            site: "http://cakerybakerytn.com/"
        },
        {
            service: "Makeup and Hair",
            name: "Tatyana Wilcox",
            site: "http://wilcoxmakeupartist.com/"
        },
        {
            service: "Table Setting",
            name: "All Occasion Rentals",
            site: "https://aopr.net/"
        },


    ]
    let VendorColumn1 = []
    let VendorColumn2 = []
    for (let i = 0; i < vendors.length; i += 2) {
        VendorColumn1.push(
            <div className="VendorCard">
                <p>
                    {vendors[i].service}
                </p>
                <div className="VendorCardContainer">
                    <div className="VendorCardContainerCard">
                        <p>
                            {vendors[i].name}
                        </p>
                    </div>
                    <div className="VendorCardContainerCard">
                        <a target="_blank"
                            className="VendorCardButton"
                            rel="noopener noreferrer"
                            href={vendors[i].site}
                        >
                            Website Link
                    </a>
                    </div>
                </div>
            </div>
        )
        try {
            VendorColumn2.push(
                <div className="VendorCard">
                    <p>
                        {vendors[i + 1].service}
                    </p>
                    <div className="VendorCardContainer">
                        <div className="VendorCardContainerCard">
                            <p>
                                {vendors[i + 1].name}
                            </p>
                        </div>
                        <div className="VendorCardContainerCard">
                            <a target="_blank"
                                className="VendorCardButton"
                                rel="noopener noreferrer"
                                href={vendors[i + 1].site}
                            >
                                Website Link
                    </a>
                        </div>
                    </div>
                </div>
            )
        }
        catch (e) { }

    }



    return (
        <div className="Accommodations" id="accommodations">
            <div className="TopBuffer">

            </div>
            <h3>
                Where to Stay?
            </h3>
            <div className="AccoContainer">
                <div className="AccoContainerCard">
                    <div className="AccoCard">
                    </div>
                    <div className="AccoCardMargin">
                    </div>
                    <div className="AccoCard">
                    </div>
                    <div className="AccoCardMargin">
                    </div>
                    <div className="AccoCard">
                    </div>
                    <div className="AccoCardMarginBottom">
                    </div>

                </div>
                <div className="AccoContainerCard">
                    <div className="AccoCardMarginTop">
                    </div>
                    <div className="AccoCard">
                    </div>
                    <div className="AccoCardMargin">
                    </div>
                    <div className="AccoCard">
                    </div>
                    <div className="AccoCardMargin">
                    </div>
                    <div className="AccoCard">
                    </div>
                </div>
            </div>
            <h3>
                Who's Making it Possible?
            </h3>
            <div className="AccoContainer">
                <div className="AccoContainerCard">

                    {VendorColumn1}

                </div>
                <div className="AccoContainerCard">
                    {VendorColumn2}
                </div>
            </div>

        </div>

    )


}
export default Accommodations;