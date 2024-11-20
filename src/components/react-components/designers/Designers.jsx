import { Image } from "astro:assets";

import styled from "./Designers.module.css"

const Designers = () => {

    const designerData = [
        {
            id: 1,
            image: "/malik.webp",
            name: "Malik, Visionary of Bold Design",
            quote: "Fashion is about creating spaces where people feel seen and powerful.",
            bio: "Malik Ade's work is defined by striking contrasts and a fearless use of color. His designs exude confidence, blending structured tailoring with unexpected textures.",
        },
        {
            id: 2,
            image: "/nour.webp",
            name: "Nour, Minimalist Storyteller",
            quote: "Fashion is my way of painting the whispers of the wind and the stories of the sands.",
            bio: "Nour Nour creates timeless designs that emphasize simplicity and elegance. Her work reflects a deep connection to nature, utilizing flowing lines and organic forms.",
        },
        {
            id: 3,
            image: "/aya.webp",
            name: "Aya, Architect of Elegance",
            quote: "Great design is like poetry—every line has meaning, every detail tells a story.",
            bio: "Aya combines precision and creativity in her designs, crafting garments that are both innovative and timeless. Her pieces often explore structure and movement.",
        },
    ];

    return ( 
        <div className={styled.main_container}>
            <div className={styled.container_header}>
                <h2 className={styled.header_title}>Discover the Visionaries Behind the Art</h2>
                <ul className={styled.container_description_list}>
                    <li className={styled.header_description_one}>Step into the world of fashion through the eyes of three visionary designers whose creativity knows no bounds. Each one has crafted a unique narrative, using their designs to challenge conventions and spark new conversations within the fashion world. From bold experimentation with color and structure to minimalist approaches that capture the beauty of simplicity, their work reflects a deep commitment to innovation and self-expression. These designers are redefining what fashion can represent, turning every piece into a statement of individuality.</li>
                    <li className={styled.header_description_two}>As you explore their designs, you’ll uncover the stories that inspire them—stories that celebrate diversity, heritage, and the endless possibilities of creation. With a shared passion for pushing boundaries, they bring to life garments that go beyond the material. Their collections are a reflection of their values, philosophies, and artistic journeys, inviting you to join them in experiencing fashion as an evolving, living art form.</li>
                </ul>
            </div>
            <div className={styled.cards_container}>
                {
                    designerData.map((designer) => {
                        return (
                            <div key={designer.id} className={styled.designer_card}>
                                <div className={styled.designer_card_image_container}>
                                    <img src={designer.image} alt={designer.name} className={styled.designer_card_image}/>
                                </div>
                                <div className={styled.designer_card_body}>
                                    <h3 className={styled.card_body_title}>{designer.name}</h3>
                                    <p className={styled.card_body_quote}>{designer.quote}</p>
                                    <p className={styled.card_body_bio}>{designer.bio}</p>
                                    <a href="/" className={styled.card_body_link}>Learn more</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Designers;