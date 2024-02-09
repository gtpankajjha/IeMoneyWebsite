import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/cu.css";
import leaderBoard from "../assets/background/leader-board.jpeg";

const contestants = [
  {
    youtube_Id: "qwQsR0IkHgA",
    title:
      "Mariana Sarmiento : Private Investment in Biodiversity Conservation",
    desc: `In this video, we explore the importance and benefits of sustainable private investment in biodiversity conservation. Biodiversity conservation is crucial for maintaining healthy ecosystems, and sustainable private investment can provide financial support for conservation efforts while generating profits for investors. We discuss various investment models and strategies that can be used to support biodiversity conservation, as well as the potential economic, social, and environmental benefits of these investments. Join us to learn more about how profitable preservation can help to protect our planet's natural resources for future generations.
        `,
  },
  {
    youtube_Id: "0quoFYMezKY",
    title: "Russell Armstrong : Positive Change Through Hip-Hop",
    desc: `This video highlights the power of music and its ability to bring people together to create a positive impact on the world. Through a multi-faceted approach to social, environmental, and economic justice, we can achieve real change. Join us as we explore how music can be used to inspire action and bring about a better future for all.`,
  },
  {
    youtube_Id: "g8vUp3WrS0U",
    title: "Brian Von Herzen, Ph.D : Ecosystem Regeneration",
    desc: `Ecosystem regeneration involves restoring degraded ecosystems to their natural and healthy state. This is crucial for addressing climate change, as healthy ecosystems act as carbon sinks, absorbing and storing carbon from the atmosphere in soil and vegetation. Additionally, ecosystem regeneration has implications for food security, as it supports robust and diverse agricultural systems. Measuring carbon export from ecosystems helps track progress in regeneration by quantifying the amount of carbon sequestered. Combining these measurements with assessments of food security provides a comprehensive understanding of the impact of ecosystem regeneration on the environment and human well-being.`,
  },

  {
    youtube_Id: "3GnYNRYg8H0",
    title: "Deborah Moore : Leading the Way in Environmental Activism",
    desc: `This video highlights the incredible efforts of senior citizens who are leading the way in environmental activism. Through their passion and commitment to creating a better future for generations to come, they are inspiring change and making a positive impact in their communities. Join us as we explore their stories and learn about the important role that seniors play in protecting our planet. `,
  },
  {
    youtube_Id: "9lmgSuF6QKM",
    title: "Frederic Fournier : Easy Funding for ReForestation",
    desc: `Green finance plays a vital role in promoting sustainability and mitigating climate change. However, accessing transparent and reliable information about green investments can be challenging. A new open platform utilizing blockchain technology aims to address this issue by providing trustworthy information on forestation projects. This platform enables investors to fund projects confidently and offers real-time updates on funding status and environmental impact. By providing transparency and reliability, this platform empowers investors to make informed choices and drive positive change for the planet.`,
  },

  {
    youtube_Id: "B5F1n5Ep5EU",
    title: "Kjell Kühne : A Fossil-Free Future",
    desc: `In this video, we explore the concept of a fossil-free future where the world is powered by renewable energy sources. We discuss the benefits of such a future and the challenges that we must overcome to make this a reality. Our experts share their insights on the technologies and policies required to transition to a cleaner energy future. Join us on this journey to a sustainable future powered by renewable energy.`,
  },
  {
    youtube_Id: "lxCWlhLPTfM",
    title: "Amar Maruf : Transforming Bajau fishing community",
    desc: `The marginalized Bajau community is now being represented and appreciated through an innovative initiative that utilizes online games and virtual tourism. These interactive games provide players with a deep dive into the vibrant Bajau culture, offering insights into their traditions, language, and strong community bonds. By gamifying aspects of their daily lives, players develop empathy and respect for the Bajau people. Additionally, virtual tourism experiences allow individuals to explore Bajau villages, interact with community members, and learn about their customs and art forms. This fosters cultural exchange and understanding on a global scale.`,
  },
  {
    youtube_Id: "4Wos7P9qXzM",
    title:
      "Kate A Larsen & Gavin Fernie-Jones : Circular Fashion for Social Good",
    desc: `We discuss the need for a circular economy in the fashion industry and showcase various solutions, such as upcycling, recycling, and closed-loop systems. We also highlight the importance of social responsibility in fashion and how circular fashion can benefit communities and the planet. From reducing waste to creating new economic opportunities, circular fashion has the power to drive positive change. So come along on this journey as we learn about circular fashion for social good.
      `,
  },
  {
    youtube_Id: "R5Y90AxXLhk",
    title: "Panel Discussion : French Panel Session",
    desc: `The power of collaboration between groups and industries cannot be overstated. When different groups come together to share their knowledge, skills, and resources, they can achieve more significant outcomes than they could individually. Collaboration can lead to new ideas, increased innovation, and more comprehensive problem-solving. However, collaboration can also encounter obstacles, such as conflicting priorities, lack of trust, communication barriers, and power imbalances. Overcoming these obstacles requires a willingness to listen, compromise, and build trust. Through effective collaboration, groups and industries can achieve common goals and create more significant positive impact for themselves and society as a whole.`,
  },
  // {
  //   youtube_Id: "",
  //   title: "",
  //   desc: ``,
  // },
];
export default class ContestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ////////////////// SCREEN FUNCTION /////////////////////
      navScreen: props.navScreen,
    };
  }

  render() {
    const state = this.state;
    return (
      <StrictMode>
        <div className="cuA">
          <div className="cuAa">GREEN IMPACT CONTEST</div>
          <div className="cuAb">To inspire, educate, equip and motivate.</div>
        </div>

        <div className="cdE">
          <div className="cdEa">
            <div className="cdEaA" />
            <div className="cdEaB" style={{color:"white"}}>
              For investors, start-ups, foundations and individuals.
            </div>
          </div>
          <div className="cdEb" style={{color:"white"}}>
            Impact Ecosystem organized the inaugural 'Invest In Earth Day' event
            with over 50 speakers and panelists from across the world. The round
            the clock April 21, 2023 event inspired, educated, and motivated
            individuals and organizations to take positive action towards the
            betterment of our planet. This event brought together investors,
            start-ups, foundations, and individuals, fostering connections and
            highlighting the most impactful ways to invest in our Earth. A
            number of start-ups have received funding from the Impact Ecosystem
            network and we are in the final stage of our Green Impact Grant
            Contest. To learn more about this event, please visit &nbsp;
            <a
              href="https://investinearthday.org/watch"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              https://investinearthday.org/watch
            </a>
            .
          </div>
        </div>

        <div className="p-10 flex flex-col justify-center items-center black-background" style={{backgroundColor:"black"}}>
          {/* <h1 className="text-5xl font-bold text-center my-10 max-md:text-3xl">
            Leader Board
          </h1> */}
          <img
            src={leaderBoard}
            className="h-[900px] w-[900px]"
            alt="leader-board"
          />
        </div>

        <div className="p-10" style={{backgroundColor:"black"}}>
          <h1 className="text-5xl font-bold text-center my-10 max-md:text-3xl" style={{color:"white"}}>
            Our shortlisted Contestants
          </h1>

          {contestants.map((contestant) => (
            <div className="bg-[#707070]/10 p-4 rounded-md mb-2">
              <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
                <div className="col-span-1 rounded-md">
                  <div>
                    <iframe
                      width="100%"
                      height="200"
                      src={`https://www.youtube.com/embed/${contestant.youtube_Id}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="col-span-2 p-2">
                  <div className="text-2xl font-bold" style={{color:"white"}}>{contestant.title}</div>
                  <div className="pt-4 text-base" style={{color:"white"}}>{contestant.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
