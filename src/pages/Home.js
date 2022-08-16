import "../styles/Home/homeMain.scss";
import myResume from "../cv/igoryen-resume.pdf"
const HomePage = () => {

    // https://www.345tool.com/generator/random-id-generator
    const Items = [
        {
            id: 'e1e830a6-824e-4a5a-8876-ddc85e940439',
            title: "Zenkova",
            desc: "a website for a tour guide on Cuba",
            link: "https://liudmilazenkova.netlify.app/",
            date: "2022",
            image: "zenkova.png",
            for: "a friend"
        },
        {
            id: 'dd264b69f8362ee106f25f11b13a46f7',
            title: "Emblica",
            desc: "a React app to learn English",
            link: "https://emblica.herokuapp.com/",
            date: "2020",
            image: "emblica.png",
            for: "my wife",
        },
        {
            id: '6b2985034a01f2fcf9d2836a2dec12e1',
            title: "Dragonfruit",
            desc: "a React app to learn Spanish",
            link: "https://dragonfruit.herokuapp.com/",
            date: "2020",
            image: "dragonfruit.png",
            for: "myself",
        },
        {
            id: '16db7ef414f27c5d54ce976c7710695a',
            title: "Expensify",
            desc: "a React app",
            link: "https://igoryen-expensify.herokuapp.com/",
            date: "2020",
            image: "expensify.png",
            for: "myself",
        },
        {
            id: '18fe7347ac4e04e020d963ce0a1a060d',
            title: "NAS Mobile App",
            desc: "UI by me",
            link:
                "https://apps.apple.com/ca/app/valuation-mobile-app/id536228581#?platform=iphone",
            date: "2019",
            image: "nas.png",
            for: "the Nationwide Group",
        },
        {
            id: '7399d3d109ecf848fb597ffe14fa8101',
            title: "CNX",
            desc: "Brochure website",
            link: "https://www.connexionssoftware.com/",
            date: "2019",
            image: "cnx.png",
            for: "the Nationwide Group",
        },
        {
            id: '3cf3d57a138fb0d0aba3e9eb42582dce',
            title: "NRS",
            desc: "Brochure site, bilingual",
            link: "https://www.nwrs.ca/",
            date: "2018",
            image: "nrs.png",
            for: "the Nationwide Group",
        },
        {
            id: '404bb491f26ee6cbdf99e19d4b031c42',
            title: "HCS",
            link: "https://nwhcs.ca/",
            desc: "Static website, improved by me (WIP)",
            date: "2018",
            image: "hcs.png",
            for: "the Nationwide Group",
        },
        {
            id: 'a1de9672c054b2c64b78186bce19a639',
            title: "NAS",
            link: "https://www.nationwideappraisals.com/NAS/index.jsp",
            desc: "Multiple pages, design implementation",
            date: "2018",
            image: "nas-site.png",
            for: "the Nationwide Group",
        },
        {
            id: '41db778118898f2eab767fbfde3bff48',
            title: "Lexus.ca",
            desc: "Multiple pages, design implementation",
            link: "https://www.lexus.ca/lexus/en",
            date: "2015-2016",
            image: "lexus.png",
            for: "Saatchi & Saatchi",
        },
        {
            id: 'c4a3a9d6ffe80616f3ba1c95b68fe81b',
            title: "Toyota.ca",
            desc: "Multiple pages, design implementation",
            link: "https://www.toyota.ca/toyota/en/",
            date: "2015-2016",
            image: "toyota.png",
            for: "Saatchi & Saatchi",
        },
        {
            id: '80fcc9264ecdb6e0287699b4c43b3e53',
            title: "Mozilla Webmaker",
            desc: "Localization, backend",
            link: "https://foundation.mozilla.org/en/artifacts/webmaker/",
            date: "2013",
            image: "mozilla-webmaker.jpg",
            for: "Mozilla",
        },
        {
            id: '3befde5a4ab44fecf9d926b3643b5870',
            title: "Github",
            desc: "My github account",
            link: "https://github.com/igoryen",
            date: "since 2013",
            image: "github.png",
        },
        // {
        //     id: ,
        //     title: "",
        //     desc: "",
        //     link: "",
        //     date: "",
        // },
    ];
    return (
        <section className="main" id="home">
            <div className="hello">

                {/*<div className="photo">
                    <div className="photo-image"></div>
                </div>*/}
                { /*<h1 className="animate-character">hello</h1> */}

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
                <p>
                    feel free to
                    <a className="download-stuff" href={myResume} target="_blank" rel="noreferrer">download &#x1F4E5; my resume</a>
                    and check out my frontend projects below.
                </p>
            </div>

            <div className="aaa">
                <div className="proj-list-container eye-track-area">
                    <div className="eye-track"></div>

                    {Items.map(item => (
                        <a className="proj-list-card" href={item.link} target="_blank" rel="noreferrer" key={item.id}>
                            <div className="bkgimg"
                                style={{
                                    backgroundImage: `url( ${require(`../../public/images/home/${item.image}`)}`
                                }}></div>
                            <div className="info">
                                <h2>
                                    <span>{item.title}</span>
                                </h2>
                                <div>
                                    <span>{item.desc}</span>
                                </div>
                                <div v-if="item.for">
                                    <span>For: {item.for}</span>
                                </div>
                                <div>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomePage;