import React from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

function Radar(props) {
    const data = [
        {
            data: {
                fragrance: props.data.fragrance,
                aroma: props.data.aroma,
                cleanliness: props.data.cleanliness,
                sweetness: props.data.sweetness,
                taste: props.data.taste,
                acidity: props.data.acidity,
                aftertaste: props.data.aftertaste,
                balance: props.data.balance,
                global: props.data.globalTaste
            },
            meta: { color: "blue" }
        }
    ];

    const captions = {
        // columns
        fragrance: "fragrance",
        aroma: "aroma",
        cleanliness: "cleanliness",
        sweetness: "sweetness",
        taste: "taste",
        acidity: "acidity",
        aftertaste: "aftertaste",
        balance: "balance",
        global: "global"
    };

    return <RadarChart captions={captions} data={data} />;
}

export default Radar;