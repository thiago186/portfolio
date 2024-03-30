import React from "react";

import AboutMe from "../../components/AboutMe/AboutMe";

function AboutMePage() {
    const headerContent = "Sobre Mim";
    const textContent = `Meu nome é ThigaoThe one-man tech team ready to bring your next big idea to life.
    I'm Timmy, an independent full-stack web developer from Ireland, building apps and online experiences for companies large and small.`;
    const imageUrl = "https://avatars.githubusercontent.com/u/61497883?v=4";

    return (
        <AboutMe
        headerContent={headerContent}
        textContent={textContent}
        imageUrl={imageUrl}
        />
    );
}

export default AboutMePage;