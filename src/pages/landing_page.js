import React from "react";
import styled from "styled-components";

const StyledLandingPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;

    & > .scrolldown-wrapper {
        text-align: center;
        bottom: 0;
        border: 2px solid black;
        padding: 10px;
        border-radius: 20px;
        transform: translate(0, -50%);
    }

    & > .scrolldown {
        border: 2px solid #ffffff;
        border-radius: 30px;
        height: 46px;
        margin: 0 auto 8px;
        text-align: center;
        width: 30px;
    }

    & > .scrolldown-p1,
    .scrolldown-p2 {
        animation-duration: 1.5s;
        animation-name: scrolldown;
        animation-iteration-count: infinite;
        fill: black;
    }

    & > .scrolldown-p2 {
        animation-delay: 0.75s;
    }

    @keyframes scrolldown {
        0% {
            opacity: 0.5;
            transform: translateY(-8px);
        }
        50% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(8px);
        }
    }

    @keyframes bubble1 {
        0% {
            width: calc(300px * 1.1);
            height: calc(300px * 1.1);
        }
        50% {
            width: calc(300px * 0.9);
            height: calc(300px * 0.9);
        }
        100% {
            width: calc(300px * 1.1);
            height: calc(300px * 1.1);
        }
    }

    & > .circle {
        z-index: -1;
        position: absolute;
        left: -50px;
        top: 0px;
        display: block;
        width: 300px;
        height: 300px;
        background-color: #639fabff;
        opacity: 0.5;
        border-radius: 50%;
        animation: bubble1 5s infinite;
    }

    & > .landingPage_content {
        display: flex;
        width: 80%;
        justify-content: space-between;
        align-items: center;
        margin-top: 10rem;

        & > .content_text {
            width: 60%;
            font-size: 1.5rem;
            margin-right: 5rem;
        }

        & > .content_div_svg {
            position: relative;

            & > svg {
                width: 100%;
            }
            &::before {
                content: "";
                position: absolute;
                display: block;
                width: 500px;
                height: 500px;
                background-color: #639fabff;
                opacity: 0.5;
                border-radius: 50%;
                z-index: -1;
            }
        }
    }

    @media only screen and (max-width: 1500px) {
        & > .landingPage_content {
            & > .content_text {
                font-size: 1.2rem;
                width: 70%;
            }
            & > .content_div_svg::before {
                top: 2rem;
                width: 400px;
                height: 400px;
            }
        }
    }

    @media only screen and (max-width: 1200px) {
        & > .landingPage_content {
            & > .content_text {
                font-size: 1.2rem;
                width: 100%;
            }
            & > .content_div_svg::before {
                top: 5rem;
                width: 300px;
                height: 300px;
            }
        }
    }
    @media only screen and (max-width: 1000px) {
        & > .landingPage_content {
            & > .content_text {
                font-size: 1.2rem;
                width: 200%;
            }
        }
    }
    @media only screen and (max-width: 850px) {
        & > .circle {
            display: none;
        }
        & > .landingPage_content {
            flex-direction: column;

            & > .content_text {
                font-size: 1.2rem;
                width: 100%;
                margin: unset;
            }
        }
    }

    @media only screen and (max-width: 500px) {
        & > .landingPage_content {
            margin-top: unset;
            position: relative;
            margin-bottom: 10rem;

            & > .content_div_svg {
                position: absolute;
                opacity: 0.5;
            }
        }
    }
`;

function LandingPage() {
    return (
        <StyledLandingPage>
            <div className="circle"></div>
            <div className="landingPage_content">
                <div className="content_text">
                    <b>Hello -</b>
                    <br />
                    <br />
                    my name is <b>Talha Bayansar</b>, I’m a programmer based in
                    Oppuurs and this is a selection of my personal and
                    professional work.
                </div>
                <div className="content_div_svg">
                    <svg
                        id="e189b3b9-b88e-4ad6-86fc-a3cf637fca9f"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1082.43901"
                        height="449.88124"
                        viewBox="0 0 1082.43901 449.88124"
                    >
                        <title>code_thinking</title>
                        <polygon
                            points="77.591 390.495 52.772 388.84 61.045 426.069 89.173 414.487 77.591 390.495"
                            fill="#ffb9b9"
                        />
                        <polygon
                            points="305.1 321.001 247.189 264.744 214.096 290.391 148.739 368.985 156.185 380.567 235.606 326.792 289.381 397.113 340.674 371.467 305.1 321.001"
                            fill="#2f2e41"
                        />
                        <polygon
                            points="305.1 321.001 247.189 264.744 214.096 290.391 148.739 368.985 156.185 380.567 235.606 326.792 289.381 397.113 340.674 371.467 305.1 321.001"
                            opacity="0.1"
                        />
                        <path
                            d="M368.84451,583.28933l-7.44576,5.79115-60.39337-20.68267-14.06421-5.79114-28.12842,5.79114s0-23.16458,26.47381-22.33727l27.30111,6.61845,32.265,2.48192Z"
                            transform="translate(-58.78049 -225.05938)"
                            fill="#ffb9b9"
                        />
                        <polygon
                            points="363.839 419.451 345.638 431.033 324.128 431.033 224.024 393.804 77.591 420.278 73.454 388.84 207.478 330.102 324.956 368.985 363.839 419.451"
                            fill="#2f2e41"
                        />
                        <path
                            d="M305.14191,497.24946l-12.4096,2.48191-2.70423-3.15494a16.71669,16.71669,0,0,1-2.25961-18.355h0l34.74687-45.50186s9.92768-22.33728,25.6465-13.23691-13.2369,23.99189-13.2369,23.99189l-17.37344,27.30112,1.65461,14.06421Z"
                            transform="translate(-58.78049 -225.05938)"
                            fill="#ffb9b9"
                        />
                        <circle
                            cx="324.95554"
                            cy="186.1502"
                            r="32.26495"
                            fill="#ffb9b9"
                        />
                        <path
                            d="M369.25817,434.78781,384.14968,470.362l35.57418-14.89151s-11.58229-28.12842-11.58229-28.95573S369.25817,434.78781,369.25817,434.78781Z"
                            transform="translate(-58.78049 -225.05938)"
                            fill="#ffb9b9"
                        />
                        <path
                            d="M467.21951,540.02944a185.3827,185.3827,0,0,1-9.09209,57.34061l-2.41572,7.42925-11.5823,52.94762-12.40959,3.30922-9.10037-11.58229L404.41869,636.237l-13.2369-21.51-11.35062-18.91222-3.5409-5.907-12.4096-62.048L316.7242,501.386l-15.71882-2.48192,3.30923-9.10037,14.06421-19.02805L332.443,469.121l4.13653-3.30922,3.30923,1.65461,13.2369-7.44576,4.13653,1.65462,24.19044,2.25025,14.693-3.07756L417.275,449.50558l8.65364,1.41471,29.783,24.8192A185.22006,185.22006,0,0,1,467.21951,540.02944Z"
                            transform="translate(-58.78049 -225.05938)"
                            fill="#575a89"
                        />
                        <path
                            d="M119.17072,628.36472s7.40995-12.55867,4.28015-14.02487-16.42157-7.31125-16.42157-7.31125l-19.49215-6.45971s-28.126-41.801-28.74337-5.45025,20.47916,45.08869,20.47916,45.08869S98.0885,680.7,108.74669,674.243,130.07,645.86717,130.07,645.86717,110.85,635.53508,119.17072,628.36472Z"
                            transform="translate(-58.78049 -225.05938)"
                            fill="#2f2e41"
                        />
                        <polygon
                            points="399.413 307.764 367.975 328.447 321.051 370.755 317.51 364.848 307.582 315.21 310.064 315.21 335.711 268.054 399.413 307.764"
                            opacity="0.1"
                        />
                        <polygon
                            points="335.711 263.09 310.064 310.246 300.964 310.246 295.173 326.792 281.936 330.102 317.51 368.985 367.975 323.483 399.413 302.8 335.711 263.09"
                            fill="#575a89"
                        />
                        <path
                            d="M358.64047,387.21919l-3.49581,1.345a4.88017,4.88017,0,0,1-1.24759-6.86l-6.4602-.30231a48.78211,48.78211,0,0,1,72.82519-5.86988c.29412-1.013,3.50037.95787,4.80938,2.95626.43984-1.64837,3.4461,6.31994,4.5094,11.95247.49227-1.8754,2.385,1.15218.72681,4.05727,1.05066-.15351,1.52525,2.53462.71189,4.0322,1.1494-.54.95568,2.66884-.29057,4.81326,1.64017-.14573-12.93544,22.47575-18.83687,35.696-1.71358-7.87343-3.64027-16.1643-9.16573-22.02916-.93919-.99689-1.96768-1.90488-2.9945-2.81126l-5.55369-4.90228c-6.4579-5.70042-12.33246-12.7359-20.93549-14.8664-5.91224-1.46413-9.65052-1.7947-6.42852-8.45681-2.911,1.21478-5.6294,3.02129-8.5665,4.14957C358.28712,389.19225,358.69761,388.15058,358.64047,387.21919Z"
                            transform="translate(-58.78049 -225.05938)"
                            fill="#2f2e41"
                        />
                        <circle
                            cx="341.08801"
                            cy="189.87308"
                            r="5.79115"
                            fill="#ffb9b9"
                        />
                        <rect
                            x="178.43901"
                            y="59.71015"
                            width="28"
                            height="28"
                            fill="#6c63ff"
                        />
                        <path
                            d="M282.21951,296.76953h-34v-34h34Zm-32.52174-1.47826h31.04348V264.24779H249.69777Z"
                            transform="translate(-58.78049 -225.05938)"
                            fill="#3f3d56"
                        />
                        <rect
                            x="108.80838"
                            y="374.61657"
                            width="28"
                            height="28"
                            transform="translate(403.98758 -61.23638) rotate(74.06317)"
                            fill="#6c63ff"
                        />
                        <path
                            d="M133.24341,417.87594l-9.33563-32.69321,32.69321-9.33564,9.33563,32.69321Zm-7.50829-31.67767,8.52384,29.85032,29.85032-8.52383-8.52384-29.85033Z"
                            transform="translate(-58.78049 -225.05938)"
                            fill="#3f3d56"
                        />
                        <rect
                            x="118.48664"
                            y="239.04858"
                            width="28"
                            height="28"
                            transform="translate(349.04671 103.9752) rotate(133.06281)"
                            fill="#6c63ff"
                        />
                        <path
                            d="M112.78106,277.063l23.21519-24.8406,24.84059,23.21519-23.21518,24.84059Zm23.28586-22.75121-21.19647,22.68054L137.551,298.18876l21.19647-22.68054Z"
                            transform="translate(-58.78049 -225.05938)"
                            fill="#3f3d56"
                        />
                        <path
                            d="M1085.0123,230.4217H824.8427v-5.36232h-117.971v5.36232H445.62961a17.5985,17.5985,0,0,0-17.59851,17.59851V604.2724A17.59855,17.59855,0,0,0,445.62961,621.871H1085.0123a17.59855,17.59855,0,0,0,17.59851-17.59857V248.02021A17.5985,17.5985,0,0,0,1085.0123,230.4217Z"
                            transform="translate(-58.78049 -225.05938)"
                            fill="#3f3d56"
                        />
                        <rect
                            x="392.84481"
                            y="36.46377"
                            width="627.3913"
                            height="353.91304"
                            fill="#6c63ff"
                        />
                        <circle
                            cx="706.00423"
                            cy="20.37681"
                            r="6.43478"
                            fill="#6c63ff"
                        />
                        <polygon
                            points="840.813 390.377 392.845 390.377 392.845 36.464 840.813 390.377"
                            opacity="0.1"
                        />
                        <circle
                            cx="491.01276"
                            cy="303.58656"
                            r="60.3068"
                            fill="#f2f2f2"
                        />
                        <path
                            d="M563.21822,573.97237A75.01578,75.01578,0,1,1,638.234,498.9566,75.10088,75.10088,0,0,1,563.21822,573.97237Zm0-149.05095A74.03518,74.03518,0,1,0,637.2534,498.9566,74.119,74.119,0,0,0,563.21822,424.92142Z"
                            transform="translate(-58.78049 -225.05938)"
                            fill="#3f3d56"
                        />
                        <rect
                            x="852.39173"
                            y="227.33189"
                            width="58.6052"
                            height="12.24586"
                            fill="#3f3d56"
                        />
                        <rect
                            x="781.54067"
                            y="131.9891"
                            width="200.30733"
                            height="5.24823"
                            fill="#3f3d56"
                        />
                        <rect
                            x="781.54067"
                            y="148.60849"
                            width="200.30733"
                            height="5.24823"
                            fill="#3f3d56"
                        />
                        <rect
                            x="781.54067"
                            y="165.22788"
                            width="200.30733"
                            height="5.24823"
                            fill="#3f3d56"
                        />
                        <rect
                            x="781.54067"
                            y="181.84726"
                            width="200.30733"
                            height="5.24823"
                            fill="#3f3d56"
                        />
                        <rect
                            x="781.54067"
                            y="198.46665"
                            width="200.30733"
                            height="5.24823"
                            fill="#3f3d56"
                        />
                        <rect
                            x="957.35627"
                            y="43.64395"
                            width="24.49173"
                            height="24.49173"
                            fill="#f2f2f2"
                        />
                        <path
                            d="M1051.99965,304.56621h-29.74v-29.74h29.74Zm-28.44691-1.293h27.15387V276.1193h-27.15387Z"
                            transform="translate(-58.78049 -225.05938)"
                            fill="#3f3d56"
                        />
                        <path
                            d="M1120.2266,609.00139h-61.22932v-4.41153a.87467.87467,0,0,0-.8747-.87471h-20.99291a.87468.87468,0,0,0-.8747.87471v4.41153H1023.1344v-4.41153a.87468.87468,0,0,0-.8747-.87471h-20.99291a.87468.87468,0,0,0-.87471.87471v4.41153H987.27152v-4.41153a.87468.87468,0,0,0-.87471-.87471H965.4039a.87468.87468,0,0,0-.8747.87471v4.41153H951.40863v-4.41153a.87468.87468,0,0,0-.8747-.87471H929.541a.87467.87467,0,0,0-.8747.87471v4.41153H915.54575v-4.41153a.87468.87468,0,0,0-.87471-.87471h-20.9929a.87468.87468,0,0,0-.87471.87471v4.41153H879.68286v-4.41153a.87468.87468,0,0,0-.8747-.87471H857.81525a.87468.87468,0,0,0-.8747.87471v4.41153H843.82v-4.41153a.87468.87468,0,0,0-.8747-.87471H678.50083a.87468.87468,0,0,0-.8747.87471v4.41153H664.50556v-4.41153a.87468.87468,0,0,0-.87471-.87471H642.638a.87468.87468,0,0,0-.87471.87471v4.41153H628.64267v-4.41153a.87467.87467,0,0,0-.8747-.87471H606.77506a.87468.87468,0,0,0-.8747.87471v4.41153H592.77979v-4.41153a.87468.87468,0,0,0-.8747-.87471H570.91218a.87468.87468,0,0,0-.87471.87471v4.41153H556.91691v-4.41153a.87468.87468,0,0,0-.87471-.87471H535.04929a.87468.87468,0,0,0-.8747.87471v4.41153H521.054v-4.41153a.87468.87468,0,0,0-.8747-.87471H499.18641a.87467.87467,0,0,0-.8747.87471v4.41153H485.19114v-4.41153a.87468.87468,0,0,0-.87471-.87471h-20.9929a.87468.87468,0,0,0-.87471.87471v4.41153H422.21241a20.99292,20.99292,0,0,0-20.9929,20.99291v9.4925a20.99291,20.99291,0,0,0,20.9929,20.99285H1120.2266a20.99292,20.99292,0,0,0,20.99291-20.99285v-9.4925A20.99293,20.99293,0,0,0,1120.2266,609.00139Z"
                            transform="translate(-58.78049 -225.05938)"
                            fill="#3f3d56"
                        />
                    </svg>
                </div>
            </div>
            <div className="scrolldown-wrapper">
                <div className="scrolldown">
                    <svg height="30" width="10">
                        <circle
                            className="scrolldown-p2"
                            cx="5"
                            cy="15"
                            r="4"
                        />
                    </svg>
                </div>
            </div>
        </StyledLandingPage>
    );
}

export default LandingPage;
