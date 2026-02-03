import { nanoid } from "nanoid";
import Bubble from "../components/bubble";

function About(){
    const skills = [
        "Unreal Engine",
        "Blender",
        "Game Design",
        "Maya",
        "Audacity",
        "Photoshop",
        "UX/UI Design",
        "OpenGL",
        "GLSL",
        "ShaderLab",
        "Game Testing",
        "HTML",
        "CSS",
        "Figma",
        "Game Balance",
        "Github",
        "3D Animation",
        "VSCode",
        "Visual Studio",
        "MS Office",
        "Unity",
        "C++",
        "C#",
        "Java",
        "Javascript",
        "JQuery",
        "React",
        "SQL",
        "MongoDB",
        "ExpressJS",
        "Frontend",
        "Backend",
        "Trello"
    ];

    return (
        <div>
            <h2>About Me</h2>
            <p>My name is Tong Yu Hei, but you can call me John. I recently graduated from City University of Hong Kong with a major in Creative Media. I was born in Hong Kong and currently studying Computer Studies at Langara College in Canada.</p>
            <p>I specialize in game design and programming. I have worked on multiple game projects as a team leader and programmer. I have also worked on some solo projects. I have four years of experience in Unity and game development. Currently, I am working on a game project in Unreal. I mainly focus on creating gaming experiences with high replayability and customization.</p>
            <h2>Educations</h2>
            <ul>
                <li>Hong Kong Institute of Vocational Education Higher Diploma in Game and Animation (2019-2021)</li>
                <li>City University of Hong Kong BSc in Creative Media (2021-2023)</li>
            </ul>
            <h2>Awards</h2>
            <ul>
                <li>
                    <a href="https://www.playfulmedia.hk/2023/" target="_blank">City University of Hong Kong SIG 2023 Outstanding Technology Application Award</a>
                </li>
            </ul>
            <h2>Skills</h2>
            <div className="bubble-container">{skills.map((ele)=>{
                return (
                    <Bubble key={nanoid()}>
                        {ele}
                    </Bubble>
                );
            })}</div>
            <h2>Contact</h2>
        </div>
    );
}

export default About;