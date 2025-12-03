import { LitElement, html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/navbar.ts";
import "./components/welcomePage.ts";
import "./components/project.ts";
import "./components/threejs-drawing.ts";

@customElement("portfolio-root")
export class Root extends LitElement {
    protected render(): TemplateResult {
        return html`
            <nav-bar>
            </nav-bar>

            <welcome-page
                    imageSrc="/img/thumbnails/profile.jpg"
                    imageAlt="Lieven Schokker"
            ></welcome-page>

            <project-template
                    subtitle="2D Multiplayer Game Engine "
                    title="Multiplayer in c++"
                    description="A server-authoritative multiplayer game engine written in C++ using SDL."
                    detailedDescription="This is what I am currently working on: 
                    a 2D multiplayer game engine written in C++.The full version 
                    of the engine is expected to be released at the end of January.
                    During this project I learned to understand the basics of C++, 
                    like ownership and RAII, which were completely new concepts to me.
                     I also started to realize where certain design patterns originated 
                     from and why they are so important, since they always indirectly imply
                      some sort of ownership. Multiplayer has also not been easy, with the
                     main challenges being synchronization and authority. I probably 
                    could not have achieved the server-authoritative state without this 
                    blog, which has been an absolute lifesaver:https://gafferongames.com/. 
                    Source code is available on request!"


                    imageSrc="/video/thumbnails/gameEngine.mp4"
                    imageAlt="Game Engine Video"
                    cardTitle="C++ - SDL - Valve GNS"
                    cardSubtitle="Cross platform development via CMAKE"
                    reverseLayout
            >
            </project-template>

            <project-template
                    subtitle="A ThreeJS experiment"
                    title="Draw in 3D"
                    description="A Three.JS Challenge drawing in 3D"
                    detailedDescription="During my time at ING I was working 
                    on Unity DOTS demos, but after a year of Unity I wanted 
                    to try something on the web. I really liked what I saw with 
                    Three.JS so I made a quick drawing demo. It seemed simple but 
                    quickly became a headache. I started by spawning sphere's at the 
                    mouse position, but clicking on a 2D screen in 3D space was a problem. 
                    My first offset-based solution broke the moment you turned the camera. 
                    Then I tried raycasting, but that caused the line to freak out whenever 
                    you crossed another line. In the end the app checks if you hit an existing 
                    line and draws relative to that, which sort of works. 
                    What I liked is how something that 
                    looked super simple became quite a challenge."
                    imageAlt="Simple drawing"
                    cardTitle="Three.JS"
                    cardSubtitle="Drawing in 3D">
                <threejs-drawing slot="interactive"></threejs-drawing>
            </project-template>

            <project-template
                    subtitle="GiffSplash"
                    title="Couchplay Party Game"
                    description="Giffsplash: a web-based game made with Spring Boot and Angular, using WebSockets for player state management."
                    imageSrc="/img/thumbnails/giffSplash.png"
                    imageAlt="Drawing interaction"
                    cardTitle="Spring Boot - Angular - GitLab CI/CD"
                    cardSubtitle="Gamestate management"
                    detailedDescription="During this group project we could create our own assignment, 
                    and since we wanted something fun but also challenging, 
                    we made a Quiplash clone called Giffsplash. 
                    The hardest part was definitely the state management via WebSocket, 
                    since every user had to stay synced through multiple rounds and states.
                     Handling disconnected players was also tough because it could completely throw off a round.
                      I learned a lot about application flow and state handling.
                       If I could work on it again, I’d still want to figure out how to scale a project like this,
                        since everything was just running in one Spring Boot application.
                         Another challenge was creating a full dockerized CI/CD deployment.
                          I handled the backend, set up SSH verification, uploaded the container to the server, 
                          ran the project there, and also performed static code analysis with SonarQube.
                    Source code is available on request!"
                    reverseLayout
            >
            </project-template>
            <project-template
                    subtitle="DLL-Dementia"
                    title="Serious Game in VR"
                    description="A VR experience exploring a smart house as a potential remedy for memory decline "
                    youtubeId="ySxNNuSPeYY"
                    imageAlt="Dementia VR Experience"
                    cardTitle="Unity Game Engine - Shader code"
                    cardSubtitle="Learn more about digital life"
                    detailedDescription="This project was my first experience with Unity. 
                    I worked with 3 graduation student game developers, and I have never learned as much in half a year as I did in that one. 
                    The biggest lessons weren’t even about Unity. 
                    I learned how important organization and discipline are, 
                    since one of the devs was really adamant about working 9 to 5 every day. 
                    I made a lot of mistakes in Unity (like using bools everywhere and abusing GetComponent calls in update loops), 
                    but that discipline gave me an insane learning boost. 
                    I learned about graphs, implemented Kruskal’s algorithm, 
                    made a VR drawing shader, and set up CI/CD.
                     Besides that, we had a great time, and the project was an absolute blast to work on."
            >
            </project-template>
        `;
    }
}