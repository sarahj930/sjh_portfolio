import React, { useEffect, Component } from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Aos from "aos"
import "aos/dist/aos.css"
import { HashRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'

{/*organization of the app - this is what gets rendered*/}
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="" exact render={
            ()=> {
              return (
                <div className="MainContent">
                <Navbar />
                <HeroHome
                  img="name-hero.png"
                  carrot="My Work"
                  id="hero-name"
                  carrotYes="carrot-down.png"
                />
                <Initials />
                <WorkItem1
                  image="ucre-diagram.png"
                  title="KST Affinity"
                  description1="During the pandemic, meeting and connecting with new people over similar interests is really hard. The community that the Kelly Strayhorn Theater had is lost with virtual performances. People miss being able to connect with other theatergoers and virtual interactions as is do not facilitate the kind of warm community they strive for. Having a safe space to connect is vital to the theater community, so we have developed a way to fill this void through the creation of a system that fosters deep connection virtually. Our in-depth research through interviews, contextual inquiry, and experiential prototyping has yielded key insights that aided in our solution."
                  description2="We have addressed these issues by creating a social matching experience based on a buddy system, which leverages existing virtual platforms like Zoom to pair individuals with similar interests. We give structure to these conversations with lightly guided, small-group discussions with optional conversation prompts based around mutual interests – this format both eases social anxiety and enables participants to build deep and long-term connections with other KST community members."
                  link="affinity"
                  />
                <WorkItem2
                  image="geatwerk.png"
                  title="GE@Work"
                  description1="The summer of 2019, I interned for GE Power and one of my projects was to propose a redesign to their internal employee application. I signed on to this project to practice my skills of translating a well-intended product limited by bad design into a highly enjoyable and useful product. I began by looking at the application in its current state and using it, taking note of things that seemed off to me and ways I felt it could be improved. Then I worked with my boss to define the goals of the redesign to provide direction. I surveyed end users about what they thought about the application in its current state and what they wanted out of it. Through the summer, I created many different iterations of the redesign, testing with users and reworking the best of them. In the end, I had something that I was proud of and presented it to my bosses. Aesthetically, it was cleaner, brighter, and more in line with GE’s design guidelines. Experientially, it had much less superfluous information and was streamlined to the uses the users wanted and the company needed. I was able to take an application that was not useful or usable and create a proposal for an application that would hopefully become an integral part of a GE Power employee’s life."
                />
                <WorkItem1
                  image="uberferplns.png"
                  title="Uber for Planes"
                  description1="This was a class project that I decided to make not only functional, but beautiful. Our goal was to make a website for any service, and we chose a conceptual “Uber for Planes” as a fun thought experiment."
                  description2="The concept was that someone could find a specific type of plane and a certain pilot and select a takeoff location near them. My partner and I made two different modes of use: Pilot and Passenger. These two personas would use the interface in different ways to either post their availability, location, and fleet (Pilot) or to select the service and location desired (Passenger)."
                  description3="While this was mainly a fun project to explore a new form of coding, I decided to try to design the interface in a sleek, dark mood and added orange accents for interest."
                />
                <WorkItem2
                  image="minswpr.png"
                  title="Minesweeper"
                  description1="This was a class project that I decided to make not only functional, but beautiful. My goal was to make a functional Minesweeper game which was the only requirement. However, I decided to spend some time making the interface beautiful, fun, and interactive."
                  description2="As you play, the qute squares turn green to  blend in with the background, revealing the numbers. You can also flag certain boxes, placing a little flag over the white square."
                  description3="When you hit a bomb, the whole screen turns red, dramatically signaling game over."
                />
                <Footer
                  color="green"
                />
                </div>
              );}}/>

          <Route path="/aboutMe" exact render={
            () => {
              return (
                <div className="MainContent">

                <Navbar />

                <Hero
                  img="nice-to-meet-you.png"
                  id="about-pic"
                />

                <TextBlock
                  title="A little about me..."
                  description1="I am a graduate student in the Masters of Human Computer Interaction program at Carnegie Mellon University. I am also a recent graduate of the Honors College at the University of North Carolina at Chapel Hill where earned bachelor’s degrees in Computer Science and Psychology."
                  description2="Through my research and studies in psychology, I worked to understand what factors increase positivity in moments of connection. And through my work and studies in computer science, I gained the tools to be able to implement these factors in the technology we use every day."
                  description3="I am a fast learner and a strong creative, analytic, and visual thinker. I have excellent empathy and interpersonal skills, and I believe these abilities combined with my strong verbal and visual communication and technical programming skills make me an ideal candidate for a user experience designer."
                  description4="The combination of psychology and computer science is ideal for user experience design. As human interaction with technology becomes more and more ubiquitous, it is imperative that those of us creating the digital experience are experts in the impact of these human-computer interactions and design these experiences intentionally to maximize the opportunity for good."
                  description5="I am truly impassioned and excited by solving problems and building beautiful and efficacious products. I am a very creative person moved by beautiful design and aesthetics, and I believe usability is enhanced by intuitive design and beauty."
                />

                <DramaBlock
                  title="My Design Philosophy"
                  paragraph1="I believe that every interaction, whether it be human to human or human to technology, is an opportunity to create positive emotional experiences."
                  paragraph2="​I plan to combine my interests in computer science and psychology to design technology that delights and fosters human wellbeing and potential while being effective and strategic."
                />

                <Footer
                  color="pink"
                />

                </div>
          );}}/>

          <Route path="/affinity" exact render={
            () => {
              return (
                <div className="MainContent">

                <Navbar />

                <DramaBlock
                  title="Kelly Strayhorn Theater: Affinity"
                  paragraph1="During the pandemic, meeting and connecting with new people over similar interests is really hard. The “lobby party” vibe that KST had is lost with virtual performances. People miss being able to connect with other theatergoers and virtual interactions as is do not facilitate the kind of warm community they strive for."
                />

                <br></br><br></br><br></br>

                <Hero
                  img="UCRE-poster.png"
                  id="about-pic"
                />

                <br></br><br></br><br></br><br></br>

                <TextandImage
                  image="kst.jpg"
                  title="Context"
                  align="align-me"
                  description1="A theater that strives to create diversity and understanding among different people, curating contemporary and experimental art, and supporting emerging artists (particularly people of color), located in the East Liberty neighborhood in Pittsburgh, PA, in the middle of a global pandemic."
                />

                <br></br><br></br><br></br><br></br>


                <TextBlock
                  title="Background Research"
                  description1="For our background research, our goal was to cover topics that broadly surround to the main factors of this project, including: understanding how attendees get involved in the theater experience, figuring out how we might transfer the theater experience online, and curating an experience and space that is comfortable and inviting, both online and in person."
                  description4="For the client data analysis, our team investigated data surrounding how audience members discovered KST events as well as the type of events (Dance/Theater/Music/Film) they requested to see in the future. We found that there was a high variability over time for discovery of events by attendees, as well as their request for other art forms. We want to explore in-depth the causes of this variability, such as the decrease in word-of-mouth references for events and the changes in requests for different art forms."
                  />

                  <Hero
                    img="walk-the-wall.png"
                    id="about-pic"
                  />

                  <DramaBlock
                    title="How might we..."
                    paragraph1="How might we translate the physical experience to a remote one that engages the user, fosters community and inclusion, is accessible, and enhances the experience?"
                  />
                  <br></br><br></br><br></br><br></br>

                  <TextandImage
                    title="Generative Think Aloud"
                    description1="Over the course of a week, we conducted five generative competitive think-aloud studies on the New York-based dance theater, Alvin Ailey, with five individuals that we recruited. We had each participant follow a series of tasks that engaged them in different aspects of Alvin Ailey’s site: an online performance, online Zoom dance class, and their donations page."
                    description2="Based on these studies, we discovered several commonalities between subjects. These include the observation of a general anxiety around signing up or participating in online activities without clear descriptions, the need for a degree of personal or emotional connection to a theater for prolonged engagement, and users’ preference to pay to view online performances in lieu of traditional donations."
                    description3="The evidence primarily came from candid conversations with our participants after they had completed each specific task, such as expressing strong opinions on their value of video production quality, their anxiety of participating in online classes, and hesitancy of commiting to monthly donations without a close tie to a theater."
                    image="alvin-ailey.png"
                  />

                  <br></br><br></br><br></br><br></br>


                  <TextBlock
                    title="Contextual Inquiry"
                    description1="[What we did] We conducted intercept interviews directly after virtual events and artifact analyses with individuals in online Discord communities."
                    description2="[What we learned] Communities (even virtual ones) are immensely valuable and important to people, bringing them positivity and hope in uncertain times. While the virtual format presents unique challenges, it also affords opportunities for revolutionary ways to connect."
                    description4="[What are the next steps] We planned to investigate specific opportunities for improvements in fostering online communities based on our insights from this research activity, and begin the ideation process."
                    description5="[What we asked] What makes these online communities inclusive, welcoming, and engaging, and what about them is valuable to their members?"
                  />

                  <br></br><br></br><br></br><br></br>


                  <TextBlock
                    title="Ideation: Speed Dating"
                    description1="After reviewing all of this data together, we came to the conclusion that there may be no way that we can completely replicated the in-person experience, and that is okay. We discussed the benefits of the online and remote experiences for smaller theaters to be able to reach a much wider audience that is likely much more diverse. We also discussed the desire that the director of KST mentioned at the beginning of this process of bringing together people from different backgrounds in a safe space to foster discussion and community."
                    description4="Given these discussions, our focus going forward was not to try to mimic the in-person experience but rather create a way for people to come together, to build and maintain their community that centers around the identity of a person and the experience of performing arts. Thus, we are going to focus on the niche of creating community-centered events that emulate the “theater lobby” feeling of warm community connection that KST strives for."
                  />

                  <TextandImage2
                    description1="<-- Example storyboard for speed dating"
                    description2="Overall, users:"
                    description3="Emphasized the need for similar interests in the activities they participate in, such as discussion on the last theater performance they attended."
                    description31="Showed excitement and desire for structure in these activities and opportunities for engagement, such as moderation, structured conversation, as well as smaller group size and potential matching between attendees who have similar interests"
                    description32="Were mixed on the clarity on the idea being presented - participants were more excited and interested in ideas and activities that were similar to the things that they have done before, such as group Zoom discussions, or that were recurring and more familiar"
                    description33="Said that discussion based activities were highly valuable and interesting, and the activities that were unrelated to connection with other members or the theater performance were confusing, uninteresting and seemed disjointed from the goal of forming community with others."
                    description34="Differed in their potential willingness or motivation to participate in these activities, possibly based on their introverted- or extroverted-ness."
                    image="speed-dating.jpg"
                  />

                  <br></br><br></br><br></br><br></br>


                  <TextBlock
                    title="Experience Prototyping"
                    description1="In the speed dating sessions, users expressed a need and desire for connecting with members of their community over similar interests. There was a strong desire for structure, especially through providing a moderator, a small group size, and topics of conversation. Additionally, we found significant differences between self-proclaimed introverts and extroverts in willingness or motivation to participate in connection activities such as these;"
                    description4="many users expressed discomfort with having to speak to a group of strangers and expressed interest and desire for one-on-one interactions as well as the desire to be able to bring a friend for social security. Given this user data, we wanted to develop a way to facilitate and encourage connection between users with similar interests, while providing ample structure and supporting both introverts and extroverts."
                  />

                  <DramaBlock
                    subtitle="Research Questions"
                    paragraph1="1. How can we make both introverted and extroverted users feel comfortable and welcome in order to support connection for all types of users?"
                    paragraph2="2. How comfortable are users with one-on-one virtual interactions with strangers?"
                    paragraph3="3. What is an appropriate and comfortable level of structure to facilitate interpersonal connection?"
                    paragraph4="4. How can we encourage continued connection between users on shared interests?"
                  />
                  <br></br><br></br>

                  <TextBlock
                    subtitle="Description of Prototype"
                    description1="Taking cues from the latent need for social comfort when meeting strangers, we have developed a system for fostering community engagement through the use of focused online group meetings, wherein each participant is matched up with a “buddy” with mutual interests. This buddy is intended to act as a social safety net that helps users feel comfortable throughout the discussion and promotes connection. At the beginning of each group meeting, participants are sent to breakout rooms with their buddy for one-on-one conversations with “conversation cards” (a Google slide deck with discussion questions based on the shared interests as well as common “low-stakes” questions) to encourage discussion. These questions are entirely optional, and buddies were free to use them as they see fit."
                    description4="After having some time to talk and to get to know each other, buddies are then paired up with another set of buddies for group discussion with a new set of conversation cards. There will be a moderator who will explain the system, relieve ambiguity, and share the discussion points set for the meeting. The participants will be invited to join an online group (Facebook, Slack) for continued engagement after the meeting – participants are encouraged to stay connected with their buddy, although there is no requirement to do so. To test this prototype, we will gather participants based on a similar interest into a Zoom meeting where we will follow the above system to facilitate connection."
                  />

                  <TextBlock
                    subtitle="Justification"
                    description1="We decided to use a virtual bodystorming technique to answer our research questions. After much research, our focus had shifted to trying to create a way for people from all backgrounds to come together in order to build and maintain the KST community. Due to the nature of our chosen focus, we needed to develop a prototype form that would actually ask people to interact with strangers who share an interest with them. Simply describing to users how the interaction would go would not be sufficient to test the concept, validate our assumptions, and answer our research questions. "
                    description4="We found in our speed dating sessions that many people had a hard time imagining such situations and often answered questions about how they would feel in a situation with “it depends”. Thus, to truly understand if our idea would work and what would need to be changed, we would need to have people actually go through the experience of meeting strangers and bonding over shared interests. In this way, we are able to test how comfortable users actually feel in this situation to determine if it is a feasible way to facilitate connection."
                    description2="Low fidelity diagram of system:"

                  />

                  <Hero
                    img="lo-fi-diagram1.png"
                  />

                  <TextBlock
                    subtitle="Findings"
                    description1="After each experience prototype session, we revised our prototype based on what we observed and what the participants thought about the experiences they had. Most of our participants seemed to want more time to talk to their one-on-one partners and groups, so one of the revisions we plan to make is to increase the time from 10 minutes to approximately 15 minutes for each session. While it wasn’t part of our original design, we found sessions that had an informal chat at the beginning were primed for their one-on-one discussions, and was helpful in terms of getting participants to open up and connect – we plan to make this a formalized part of future designs. Many participants mentioned that they would like to have a way to contact the people they had conversations with, so we plan to revise our prototype to include a form (to join a slack group for example) for users to exchange their contact information before the session ends.We recieved feedback about it being uncomfortable to introduce your partner when moving from the one-on-one chats to the group meetings, but some people really enjoyed that aspect, so we plan to revise our prototype to make that optional so that participants feel as comfortable as possible. We also plan to emphasize on the flexibility of the discussion points we provide."
                    description4=" A lot of the users felt that it made them more comfortable and was a nice back up in case there was a lull in conversation, so we plan to have the structure available without making it mandatory. We also decided to add an optional hang out at the end of the sessions to talk more with other participants. We want to do this since we saw that some people preferred having more time, and we think this could provide a realistic lobby experience that people tend to have after attending in person shows.rd time imagining such situations and often answered questions about how they would feel in a situation with “it depends”. Thus, to truly understand if our idea would work and what would need to be changed, we would need to have people actually go through the experience of meeting strangers and bonding over shared interests. In this way, we are able to test how comfortable users actually feel in this situation to determine if it is a feasible way to facilitate connection."
                    description2="Iteration based on findings:"
                  />

                  <Hero
                    img="lo-fi-diagram2.png"
                  />

                  <TextBlock
                    title="Final Pitch"
                    description1="Imagine it’s December 2019, you’ve just walked out of a performance at the Kelly Strayhorn Theater, and you’re greeted by a warm, welcoming lobby where conversation is buzzing and connections are being formed. You leave with the energy and glow that only comes from forming a true connection. "
                    description2="Now we’re in 2020. Meeting and connecting with others has never been more difficult. Having a safe space to connect is vital to the theater community, so we have developed a way to fill this void through the creation of a system that fosters deep connection virtually."
                    description3="Our in-depth research through interviews, contextual inquiry, and experiential prototyping has yielded key insights that aided in our solution. Through contextual inquiries, we have found that successful virtual communities often have a few core elements foundational to building connection: many have an emphasis on positivity, a degree of selectivity, many promote active interaction between members, and capitalize on the affordances provided by the virtual space. These types of communities are immensely valuable to people, bringing them positivity and hope in uncertain times."
                    description4="In our speed dating and user testing sessions, we developed a better understanding of what is desirable and required to foster comfortable and genuine connection virtually. Users wanted to have a loose structure, such as guided discussion and moderation, that provides a sense of safety and familiarity, have a small group setting for intimacy, but also have some kind of social safety net in case of awkwardness when interacting with new people, have opportunities to engage with other members one-on-one for deeper connection"
                    description5="We have addressed these issues by creating a social matching experience based on a buddy system, which leverages existing virtual platforms like Zoom to pair individuals with similar interests. We give structure to these conversations with lightly guided, small-group discussions with optional conversation prompts based around mutual interests – this format both eases social anxiety and enables participants to build deep and long-term connections with other KST community members. "
                  />

                  <Hero
                    img="UCRE-poster.png"
                    id="about-pic"
                  />

                  <DramaBlock
                    title="the end."
                  />
                <Footer
                  color="dark-blue"
                />

                </div>
          );}}/>


        </div>
      </Router>
    );
  }
}


{/*bootstrap navbar*/}
function Navbar() {
  return (
    <div className="Nav">
      <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <ReactBootStrap.Navbar.Brand href="/">Sarah Jessamyn Hand</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootStrap.Nav className="mr-auto">
      </ReactBootStrap.Nav>

      <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#work">My Work</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="aboutMe">About Me</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="Sarah-Hand-Resume-Fall-2020.pdf" download>Resume</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Contact">Contact</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

{/*My Name and project names in hero section*/}
function Hero(props) {
  return (
    <div className="Hero">
      <ReactBootStrap.Container fluid>
        <ReactBootStrap.Row>
          <ReactBootStrap.Col id="hero" sm={12} xs={12}>
          <ReactBootStrap.Image id={props.id} src={props.img} fluid/>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col sm={12} xs={12}>
            <div id="project-names">
              <div className="project-name">{props.carrot}</div>
              <div className="project-name">
              <ReactBootStrap.Image id="carrot-down" src={props.carrotYes}/>
              </div>
            </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}

{/*My Name and project names in hero section*/}
function HeroHome(props) {
  return (
    <div className="Hero-home">
      <ReactBootStrap.Container fluid>
        <ReactBootStrap.Row>
          <ReactBootStrap.Col id="hero" sm={12} xs={12}>
          <ReactBootStrap.Image id={props.id} src={props.img} fluid/>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col sm={12} xs={12}>
            <div id="project-names">
              <div className="project-name">{props.carrot}</div>
              <div className="project-name">
              <ReactBootStrap.Image id="carrot-down" src={props.carrotYes}/>
              </div>
            </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}

{/*SVG Animation for the background of the home page*/}
function Initials() {
  return (
    <svg className="b" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,1224,792">
    <path strokeWidth="17" d="M219.508+177.707C219.508+138.434+148.547+107.232+151.372+163.73C153.448+205.254+191.541+244.935+213.684+276.707C262.397+346.599+321.522+418.96+338.308+504.989C344.831+538.422+346.144+579.282+333.649+611.56C309.941+672.806+238.729+721.439+172.337+713.472C155.575+711.461+142.929+702.336+132.737+689.596C94.7895+642.161+138.309+590.035+170.008+552.742C197.643+520.23+232.901+492.523+263.767+463.06C330.457+399.401+395.367+327.317+443.714+248.754C465.005+214.156+503.656+136.996+457.108+103.748C407.762+68.5002+389.725+128.837+392.467+167.224C394.304+192.95+404.443+215.835+412.267+240.018C428.622+290.571+458.315+336.689+483.314+383.277C519.245+450.24+552.361+517.269+574.744+590.013C585.618+625.356+603.908+710.616+557.855+732.107C547.542+736.921+537.051+735.549+526.991+731.525C475.88+711.081+474.898+641.205+496.126+598.748C558.391+474.217+700.716+390.236+740.714+256.907C752.576+217.369+766.766+114.628+709.267+100.254C680.692+93.1098+666.653+127.283+663.844+149.754C656.266+210.378+673.821+274.301+694.126+330.866C752.976+494.805+883.551+606.319+1061.59+606.319" fill="none" strokeLinecap="round" opacity="1" strokeLinejoin="round"/>
    </svg>
  );
}

{/*Reusable component for static project data*/}
function WorkItem1(props) {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <div id="pad">
    <a name="work"></a>
      <ReactBootStrap.Container data-aos="fade-up">
        <ReactBootStrap.Row>
          <ReactBootStrap.Col sm={true} lg={true}>
          <ReactBootStrap.Image className="work-pic" src={props.image} fluid/>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col sm={true} lg={true} className='align-me'>
            <div>
              <h1 className="left-align">{props.title}</h1>
              <p className="left-align">{props.description1}</p>
              <p className="left-align">{props.description2}</p>
              <p className="left-align">{props.description3}</p>
            </div>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col sm={.5} lg={.5} className='align-me'>
          <ReactBootStrap.Nav.Link href={props.link}><ReactBootStrap.Image src="carrot-right.png" id="carrot-right"/></ReactBootStrap.Nav.Link>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}

function WorkItem2(props) {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <div id="pad">

      <ReactBootStrap.Container data-aos="fade-up">
        <ReactBootStrap.Row>
          <ReactBootStrap.Col sm={true} lg={true} className='align-me'>
            <div>
              <h1 className="left-align">{props.title}</h1>
              <p className="left-align">{props.description1}</p>
              <p className="left-align">{props.description2}</p>
              <p className="left-align">{props.description3}</p>
            </div>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col sm={true} lg={true}>
            <ReactBootStrap.Image className="work-pic" src={props.image} fluid/>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col sm={.5} lg={.5} className='align-me'>
          <ReactBootStrap.Nav.Link href={props.link}><ReactBootStrap.Image src="carrot-right.png" id="carrot-right"/></ReactBootStrap.Nav.Link>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}

function Footer(props) {
  return (
    <div id={props.color}>
    <a name="Contact"></a>
      <h1>Hey! Let's get in touch.</h1>

      <h2>
        <a href="https://www.linkedin.com/in/sarahjessamynhand" className="link">
          <ReactBootStrap.Image className="contact-pic" src="linkedin.png"/>
           Connect with me
        </a>
      </h2>

      <h2>
        <a href="https://www.instagram.com/sarahjessamyn/" className="link">
         <ReactBootStrap.Image className="contact-pic" src="insta.png"/>
          @sarahjessamyn
        </a>
      </h2>

      <h2>
        <ReactBootStrap.Image className="contact-pic" src="email.png"/>
         sarah.jessamyn.hand@gmail.com
      </h2>
      <br></br>
      <br></br>
      <h1>Sarah Jessamyn Hand</h1>
    </div>
  )
}

function TextBlock(props) {
  return (
    <div className="first-block">
      <ReactBootStrap.Container >
        <ReactBootStrap.Row>
          <ReactBootStrap.Col sm={true} lg={true}>
            <h1 className="left-align">{props.title}</h1>
            <h3 className="left-align">{props.subtitle}</h3>

            <p className="left-align">{props.description1}</p>
            <p className="left-align">{props.description2}</p>
            <p className="left-align">{props.description3}</p>
            <p className="left-align">{props.description31}</p>

          </ReactBootStrap.Col>

          <ReactBootStrap.Col sm={true} lg={true}>
            <div id="pad2">
            <h3 className="left-align">{props.subtitle2}</h3>
              <p className="left-align">{props.description4}</p>
              <p className="left-align">{props.description5}</p>
              <p className="left-align">{props.description6}</p>
            </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}



function DramaBlock(props) {
  return (
    <div id="drama-block">
      <h1 id="drama-title">{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <h3 id="drama-p">{props.paragraph1}</h3>
      <h3 id="drama-p">{props.paragraph2}</h3>
      <h3 id="drama-p">{props.paragraph3}</h3>
      <h3 id="drama-p">{props.paragraph4}</h3>

    </div>
  );
}

function TextandImage(props) {
  return (
    <div>
      <ReactBootStrap.Container>
        <ReactBootStrap.Row>
          <ReactBootStrap.Col sm={true} lg={true} className={props.align}>
            <div>
              <h1 className="left-align">{props.title}</h1>
              <p className="left-align">{props.description1}</p>
              <p className="left-align">{props.description2}</p>
              <p className="left-align">{props.description3}</p>
              <p className="left-align">{props.description31}</p>
              <p className="left-align">{props.description32}</p>
              <p className="left-align">{props.description33}</p>

            </div>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col sm={true} lg={true} className='align-me'>
            <ReactBootStrap.Image className="work-pic" src={props.image} fluid/>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}

function TextandImage2(props) {
  return (
    <div>
      <ReactBootStrap.Container className={props.align}>
        <ReactBootStrap.Row>
        <ReactBootStrap.Col sm={true} lg={true} className='align-me'>
          <ReactBootStrap.Image className="work-pic" src={props.image} fluid/>
        </ReactBootStrap.Col>
          <ReactBootStrap.Col sm={true} lg={true}>
            <div>
              <h1 className="left-align">{props.title}</h1>
              <p className="left-align">{props.description1}</p>
              <h3 className="left-align">{props.description2}</h3>
              <p className="left-align">{props.description3}</p>
              <p className="left-align">{props.description31}</p>
              <p className="left-align">{props.description32}</p>
              <p className="left-align">{props.description33}</p>
              <p className="left-align">{props.description34}</p>

            </div>
          </ReactBootStrap.Col>

        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}


export default App;
