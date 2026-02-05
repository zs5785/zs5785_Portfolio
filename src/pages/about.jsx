import { nanoid } from "nanoid";
import Bubble from "../components/bubble";
import Filters from "../components/filter";
import { useState } from "react";

function BubbleList({label, list}){
    return (
        <div>
            <h2>{label}</h2>
            <div className="bubble-container">{list.map((ele)=>{
                return (
                    <Bubble key={nanoid()}>
                        {ele}
                    </Bubble>
                );
            })}</div>
        </div>
    );
}

function Overview(){
    return (
        <div>
            <h2>About Me</h2>
            <p>My name is Tong Yu Hei, but you can call me John. I recently graduated from City University of Hong Kong with a major in Creative Media. I was born in Hong Kong and currently studying Computer Studies at Langara College in Canada.</p>
            <p>I specialize in game design and programming. I have worked on multiple game projects as a team leader and programmer. I have also worked on some solo projects. I have four years of experience in Unity and game development. Currently, I am working on a game project in Unreal. I mainly focus on creating gaming experiences with high replayability and customization.</p>
            <h2>Educations</h2>
            <ul>
                <li>Hong Kong Institute of Vocational Education Higher Diploma in Game and Animation (2019-2021)</li>
                <li>City University of Hong Kong BSc in Creative Media (2021-2023)</li>
                <li>Langara College Diploma in Computer Studies (2024-2025)</li>
            </ul>
            <h2>Awards</h2>
            <ul>
                <li>
                    <a href="https://www.playfulmedia.hk/2023/" target="_blank">City University of Hong Kong SIG 2023 Outstanding Technology Application Award</a>
                </li>
            </ul>
        </div>
    );
}

function Skills(){
    const language = [
        "C++",
        "C#",
        "Java",
        "Javascript",
        "HTML",
        "CSS",
        "GLSL",
        "ShaderLab",
        "SQL"
    ];
    const software = [
        "Unreal Engine",
        "Unity",
        "Blender",
        "Maya",
        "Audacity",
        "Photoshop",
        "Figma",
        "Github",
        "VSCode",
        "Visual Studio",
        "MS Office",
        "Trello"
    ];
    const library = [
        "JQuery",
        "React"
    ];
    const api = [
        "OpenGL"
    ];
    const roles = [
        "Game Design",
        "UX/UI Design",
        "Game Testing",
        "Game Balance",
        "3D Animation",
        "Frontend",
        "Backend"
    ];

    return (
        <div>
            <BubbleList label="Roles" list={roles} />
            <BubbleList label="Programming Languages" list={language} />
            <BubbleList label="Softwares" list={software} />
            <BubbleList label="Libraries" list={library} />
            <BubbleList label="APIs" list={api} />
        </div>
    );
}

function Contact(){
    return (
        <table className="contact pure-table pure-table-horizontal">
            <tbody>
                <tr>
                    <td>Email</td>
                    <td>zssniper5785@gmail.com</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>+1(236)660-2478</td>
                </tr>
                <tr>
                    <td>Whatsapp</td>
                    <td>+1(236)660-2478</td>
                </tr>
                <tr>
                    <td>Linkedin</td>
                    <td><a href="https://linkedin.com/in/yu-hei-tong" target="_blank">linkedin.com/in/yu-hei-tong</a></td>
                </tr>
                <tr>
                    <td>Github</td>
                    <td><a href="https://github.com/zs5785" target="_blank">https://github.com/zs5785</a></td>
                </tr>
            </tbody>
        </table>
    );
}

function About(){

    const tabs = ['Overview', 'Skills', 'Contact'];
    const [tab, setTab] = useState(tabs[0]);

    return (
        <div>
            <div>
                <Filters list={tabs} select={tab} handleClick={(ele)=>setTab(ele)}/>
            </div>

            {tab === tabs[0] && <Overview />}
            {tab === tabs[1] && <Skills />}
            {tab === tabs[2] && <Contact />}
            
        </div>
    );
}

export default About;