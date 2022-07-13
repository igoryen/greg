import "../styles/sam/samMain.scss"

import React from "react";



class Sam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {
        document.body.classList.add('sam');
    }

    componentWillUnmount() {
        document.body.classList.remove('sam');
        console.log("UNMOUNT", this.props);
    }


    render() {

        //=======================
        const codepenStyle = {
            // height: "300px",
            boxSizing: "border-box",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            // border: "2px solid",
            // margin: "1em 0",
            // padding: "1em"
        };
        const codePensFinal = [];
        const codePens = [
            // { slug: "", name: ""},
            // { slug: "", name: ""},
            // { slug: "", name: ""},
            // { slug: "", name: ""},
            // { slug: "", name: ""},
            // { slug: "", name: ""},
            // { slug: "", name: ""},
            // { slug: "", name: ""},
            // { slug: "", name: ""},
            // { slug: "", name: ""},
            // { slug: "", name: ""},
            // { slug: "", name: ""},
            // { slug: "", name: ""},
            { slug: "GRxNywB", name: "Ball bounce left right" },
            { slug: "QWmGaqo", name: "Hole bounce left and right" },
            { slug: "YzapYKN", name: "Square img to Circle" },
            { slug: "zYWoPQg", name: "Mobile dashboard" },
            { slug: "VwXmrRj", name: "About us with Timeline" },
            { slug: "JjLbOXz", name: "Photo to bio modal" },
            { slug: "JjLKxNe", name: "Cocoplum: interlinear texts" },
            { slug: "rNdLPjd", name: "Carambola: prx Eng" },
            { slug: "rNdLPOp", name: "Capulin for Gwoyeu Romatzyh" },
            { slug: "bGveOZN", name: "Capulin Wiki: Wikipedia article clean up for TTS" },
            { slug: "KKoMWQz", name: "Find first even longest string" },
            { slug: "AVgjeg", name: "Loan Calculator" },
            { slug: "AZwOWJ", name: "Array 131216" },
            { slug: "AEryKE", name: "Strings are immutable" },
            { slug: "nYBWqg", name: "Array sort 131216" },
            { slug: "AbzeeE", name: "Incidents" },
            { slug: "nVgjQJ", name: "newlineToBreak()" },
            { slug: "AGzqdJ", name: "escapeHTML()" },
            { slug: "DexzLK", name: "array sorting" },
            { slug: "DLqRVY", name: "working with strings" },
            { slug: "npGEgK", name: "booleans" },
            { slug: "AGzjjr", name: "null and undefined" },
            { slug: "BRZxBp", name: "round brackets" },
            { slug: "zdKxKq", name: "Radios as Select (based on Paul Grant's pen)" },
            { slug: "prNKxN", name: "Adaptive placeholder on fixed-size textarea" },
            { slug: "prwdOy", name: "toggle like Youtube autoplay" },
            { slug: "ZJyvzy", name: "Checkbox label" },
            { slug: "oeGyMN", name: "Most Simple Slider with Thumbnail Navigator in jQuery" },
            { slug: "OjOgbx", name: "Adaptive label in select" },
            { slug: "KvrWXp", name: "Select get-set with JQ" },
            { slug: "JrEQZG", name: "modal box" },
            { slug: "dVNxOZ", name: "Good-bye modal" },
            { slug: "wrdvpr", name: "SVG Filters Gray > Invert Monochrome Color" },
            { slug: "OxzQqQ", name: "CSS-Only Zig Zag Lines" },
            { slug: "zELPrj", name: "Change a CSS Background Image's Opacity" },
            { slug: "zPObEE", name: "animated arrows 4 directions" },
            { slug: "QOLPOO", name: "Menu Tabs" },
            { slug: "eeNLEW", name: "Untitled 4" },
            { slug: "vWvYYM", name: "CSS clipping" },
            { slug: "oEYZwJ", name: "jq array of objects print out" },
            { slug: "ZEEgPpy", name: "Untitled 2" },
            { slug: "GRRVejb", name: "Untitled 1" },
            { slug: "NWPRPxy", name: "191213" },
            { slug: "NWPevML", name: "Example with tiny-slider" },
            { slug: "bGwXovL", name: "210126. D3 rectangles" },
            { slug: "WNGVZyJ", name: "210126. D3 Circles" },
            { slug: "WNjEOpR", name: "210720 dashboard grid" },
            { slug: "bGwXYwQ", name: "210126. D3 text" },
            { slug: "jOBbJqN", name: "Untitled" },

        ];

        const userName = 'igoryen';


        for (let pen of codePens) {
            let hrefLink = 'https://codepen.io/' + userName + '/pen/' + pen.slug;
            codePensFinal.push(
                <li key={pen.slug}>
                    <p className="codepen"
                        data-height="300"
                        data-default-tab="html,result"
                        data-slug-hash={pen.slug}
                        data-user={userName}
                        style={codepenStyle}
                    >
                        <span>
                            <a href={hrefLink} target="_blank" rel="noopener noreferrer">{pen.name}</a>
                        </span>
                    </p>
                </li>
            );
        }
        //=========================
        return (
            <section className="main" id="sam">
                <h1>Sam</h1>
                <div className="name">
                    <svg viewBox="0 0 215 83">
                        <path
                            className="path"
                            fill="white"
                            stroke="#1c1c6d"
                            strokeWidth="4"
                            d="m 1 52 l 30 -40 a 5 5 10 1 1 1 0 c -17 28 -28 65 4 17 c 13 -18 27 -25 21 0 c 3 -31 -17 -9 -20 0 c -17 48 17 10 27 -16 c -55 136 -44 32 18 3 c 2 -1 7 0 4 11 c -17 -55 -41 73 0 2 l 16 -16 c -3 6 3 10 11 6 c -25 12 -22 52 -3 21 c 24 -52 17 -17 10 0 c -6 24 15 9 21 -29 c -31 126 -42 47 6 31 c 15 -9 17 -29 11 -31 c -13 3 -27 73 8 21 c 24 -46 15 -4 3 20 c 66 -105 -18 44 45 -14" />
                    </svg>
                </div>
                <hr />
                <h2>Code pens</h2>
                <ul>{codePensFinal}</ul>
            </section>);
    }
}




export default Sam;