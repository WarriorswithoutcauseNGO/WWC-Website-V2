import React, { useState } from "react";
import "./Newsletter.css";

import navbar_logo from "../../assets/navbar_logo.svg";
import our_drives_1 from "../../assets/our_drives_1.png";
import our_drives_2 from "../../assets/our_drives_2.png";
import our_drives_3 from "../../assets/our_drives_3.png";
import our_drives_4 from "../../assets/our_drives_4.png";

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const CommentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const ShareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const BookmarkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const newsletters = [
  {
    id: 1,
    title: "Winds of Humanity in a World of Dust",
    subtitle: "WWC Buzz — Second Edition 2025",
    date: "Jun – Dec 2025",
    image: our_drives_1,
    summary: "Exploring the power of hope and kindness through community action, resilience, and the ongoing efforts of Warriors Without Cause.",
    content: `The WWC Buzz Newsletter, which includes issues from June to December 2025, mainly talks about the activities, initiatives, and opinions related to Warriors Without Cause, specifically those about humanity, resilience, and human involvement. The theme of this newsletter is encapsulated by the idea "Winds of Humanity in a World of Dust," which refers to the idea of power and hope that can be harnessed by being kind and involving people in a positive way to overcome challenges faced in the world today. Various articles and pieces of information are presented in this newsletter.

A significant part of the newsletter is focused on providing information related to news, consciousness, and other various social issues related to climate change, pollution, floods, internet risks, and various trends happening in the world today. Basically, the aim of the news and other content is to bring more awareness among individuals about the problems happening in the world and the various contributions that individual people could make toward solving those problems. There are inspirational achievements related to successful victories in sports and other accomplishments that show that adversity leads to greatness.

Another significant part of the newsletter is the on-ground initiatives and action reports section. Initiatives such as clothing drives, education projects, awareness campaigns on menstrual hygiene, orphanage visits, and awareness campaigns on healthcare are discussed in detail. This section helps readers understand the work done by the volunteers, not only in terms of providing relief and aid but also in terms of providing dignity, awareness, and a long-term support system. The newsletter highlights the importance of even small acts of service being done with a sense of empathy and consistency.

In addition to these articles, there are sections on volunteering experiences, testimonials, and partnerships wherein there are stories from people involved in the activities promoted by the organization. This section shows how one can be able to create a sense of empathy as well as feeling of belonging through the act of volunteering. From these articles, one gets to learn how volunteering is not just about doing something extraordinary.

Hence, it is clear that the WWC Buzz newsletter is a medium for keeping records of the activities of the organization, raising the awareness of the general public towards major issues, as well as creating awareness among the potential reader about the need to contribute towards community service etc.`,
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Resilience in a Fractured World",
    subtitle: "WWC Buzz — Jan–Jun 2025",
    date: "Jan – Jun 2025",
    image: our_drives_2,
    summary: "Celebrating 5 years of voices, vision, and vigilance — a milestone edition covering social awareness and on-ground impact.",
    content: `WWC Buzz Newsletter (January to June 2025), which focuses on the work and views of Warriors Without Cause, along with social awareness campaigns by Warriors Without Cause, where there is a commemoration of a significant milestone marked by Warriors Without Cause's journey for five years. The overall theme of this newsletter, "Resilience in a Fractured World: 5 Years of Voices, Vision, and Vigilance," shows Warriors Without Cause's dedication to continuing their social work despite problems like inequality and social stratification. In this context, it is described how the initiative has grown to a large size with thousands of lives being changed within India.

A key area that is highlighted in this newsletter is social awareness, where social educating newsletters on essential issues that occur in our society, such as working dignity, maternity rights, mental health, domestic abuse, marital crimes, climate change, digital activism, gender equality, among many others. The social issue, as well as humanitarian, educating newsletters are written to help citizens be empathetic to these essential social concerns, thereby administering a well-informed society.

The newsletter also talks about various events occurring in the country as well as the world in its news and updates segment. It covers various events such as public safety, social justice, terrorism, and various humanitarian crises, focusing on the impact it has on the public, as well as the importance of public awareness, etc. By including such topics, the newsletter tries to relate the readers to the actual events occurring in the world around them.

Another key component of the newsletter is the Action and Impact section, which includes documentation of the organization's work on the ground. One action highlighted is the Beat the Heat campaign. Under the campaign, there were efforts to distribute 'umbrellas,' 'cooling kits,' 'hydration support,' 'slippers,' and protective gear to street vendors, daily wage workers, and the like. The campaign was carried out in Delhi NCR, Chandigarh, and Bangalore, among other cities. Also part of the initiative was the hydration drive and providing green cooling options like earthen pots, apart from the hydration drive. There was a component dedicated to providing for animals as well.

Volunteer stories, testimonials, and other sections of the newsletter also feature the organization's creative contributions. All these sections help illustrate the power of volunteering in establishing a sense of empathy, teamwork, and leadership.

Overall, this edition of the WWC Buzz can be viewed as a culmination of the activities of Warriors Without Cause through its awareness activities, while also influencing readers to be a part of social change.`,
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Equity, Equality & Empowerment",
    subtitle: "WWC Buzz — Apr–Dec 2023",
    date: "Apr – Dec 2023",
    image: our_drives_3,
    summary: "An extensive review of campaigns, social awareness programs, and the Be Her Hero crochet initiative empowering slum communities.",
    content: `The WWC Buzz Newsletter (April to December 2023) includes an extensive review of the activities, campaigns, and social awareness programs implemented by Warriors Without Cause during the last year. The overall theme of this edition of WWC Buzz Newsletter is 'equity and equality.' The importance of providing equal opportunities to people belonging to different social and economic classes has been highlighted in this edition. It is clearly mentioned that 'equality gives proportionate resources to each individual, while equity means providing each individual with the special needs to achieve equal results.'

Considerable space in the newsletter focuses on community projects and empowerment initiatives. Among the community projects discussed in the newsletter was the "Be Her Hero" crochet program that empowered the women of the slum communities through the provision of skills on the art of crocheting and assistance with the sale of the products made through the craft.

The newsletter also records health, hygiene, and social awareness programs, including menstrual hygiene management under Swasthya Raksha. These programs did not only include providing women with sanitary napkins but also raising awareness to break the social barriers associated with menstruation and address the health issues of women. The newsletter explains how these programs aid women in becoming an integral part of education and the workforce by addressing health issues.

Another important section of the newsletter is the recap of the different drives and relief works that the organization has been conducting over the year. These include different education drives conducted by the organization, food distribution programs, cleanliness drives, health-related camps, as well as disaster management operations such as the Yamuna flood relief initiative, where the organization provided food, sanitation assistance, medication, etc., to the affected communities. Overall, this section highlights the NGO's focus on not only immediate aid but also development.

The newsletter also emphasizes the growth of Warriors Without Cause as a youth-centric NGO with operations in various cities of India. The newsletter also develops the point of how the NGO started with small initiatives and diversification of the drive through the involvement of volunteers. The personal experiences of the volunteers as shared in the newsletter also reveal the impact of working for the welfare of the poor as a whole.

Overall, the WWC Buzz newsletter is a record of the organization's campaigns and awareness activities within the community. The newsletter not only provides the community with information on the organization's activities, but it also helps inspire individuals to participate in volunteer activities and become active members of a fair and compassionate society.`,
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Sustainability & Social Responsibility",
    subtitle: "WWC Buzz — Jan–Mar 2023",
    date: "Jan – Mar 2023",
    image: our_drives_4,
    summary: "Highlighting ground-level drives, the Aawaz fundraiser, and awareness articles on poverty, education, and gender equality.",
    content: `The WWC Buzz Newsletter from January to March 2023 highlights the overall picture of all the initiatives, campaigns, and awareness programs done by Warriors Without Cause within the first quarter of the year. The theme followed by this particular edition is all about sustainability and social responsibilities to the community and the empowerment that the organization has given to the common public, highlighting the importance of the year and the positive impacts that the NGO has already created on the lives of thousands of people.

A significant portion of the newsletter focuses on the Action and Impact section of the organization's work on the ground. During this time, the Warriors Without Cause organization conducted multiple drives in the Delhi region and the nearby areas, reaching out to various slum groups in the area through education drives, clothing distribution, sanitary pad distribution, and awareness drives. In the newsletter article, it is noted that the organization's volunteers worked hard on the weekends and also in conjunction with other organizations with which they collaborated, ensuring that the support was delivered to the locals who needed it the most.

In addition, the newsletter highlights the events and initiatives taken for community engagement. In the newsletter, various events are discussed. One event was the fundraising open mic event, known as Aawaz. Various artists and other performers were a part of the event, which was meant for raising funds for social causes. Such events not only helped raise funds but also increased engagement and involvement of the youth in social activities. Further, lectures on the rights of women and LGBTQIA communities, fundraising, and interaction with other volunteers are discussed.

Another interesting section is the one that highlights the social awareness articles. In this section, articles are written based on different topics, including poverty and education, equality of the sexes, safety of women, the environment, equality of all classes of people in the nation, among many others. The major reason for the creation of these kinds of articles is to edify the people of the nation on different pressing matters to ensure that we are responsible individuals.

Additionally, the newsletter will highlight other areas including partnerships, volunteers, and creativity, showing the involvement of the supporters and the volunteers' journeys. In this case, through the testimonials of the volunteers, they explain their experiences of how they are able to develop their own sense of empathy and leadership through the projects of the NGOs, which show the ability of social work to build individuals and communities.

Overall, the WWC Buzz newsletter helps disseminate information on the organization's campaigns, raise awareness about problems plaguing society, and encourage individuals to participate in community work or aid-related activities.`,
    downloadUrl: "#",
  },
];

export default function Newsletter() {
  const [selectedNl, setSelectedNl] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="newsletter-page">
      {/* Header */}
      <header className="newsletter-header">
        <h1>
          WWC <span>Buzz</span>
        </h1>
        <p className="tagline">
          Because every small act of kindness deserves to be told
        </p>
      </header>

      {/* Instagram-Style Card Slider */}
      <section className="newsletter-slider-wrap">
        <div className="newsletter-slider">
          {newsletters.map((nl) => (
            <article
              key={nl.id}
              className="insta-card"
              onClick={() => setSelectedNl(nl)}
            >
              {/* Card Header */}
              <div className="insta-card-header">
                <img
                  src={navbar_logo}
                  alt="WWC"
                  className="insta-card-avatar"
                />
                <div>
                  <div className="insta-card-username">{nl.subtitle}</div>
                  <div className="insta-card-date">{nl.date}</div>
                </div>
              </div>

              {/* Card Image */}
              <div className="insta-card-img-wrap">
                <img src={nl.image} alt={nl.title} />
              </div>

              {/* Action Icons */}
              <div className="insta-card-actions">
                <HeartIcon />
                <CommentIcon />
                <ShareIcon />
                <span className="bookmark"><BookmarkIcon /></span>
              </div>

              {/* Body */}
              <div className="insta-card-body">
                <h3 className="insta-card-title">{nl.title}</h3>
                <p className="insta-card-summary">{nl.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="newsletter-cta">
        <h2>
          Stay in the <span>loop</span>
        </h2>
        <p>
          Subscribe to receive the next edition of WWC Buzz straight to your inbox.
        </p>
        <form className="newsletter-subscribe-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">
            {subscribed ? "Subscribed!" : "Subscribe"}
          </button>
        </form>
      </section>

      {/* Modal */}
      {selectedNl && (
        <div
          className="newsletter-modal-overlay"
          onClick={() => setSelectedNl(null)}
        >
          <div
            className="newsletter-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="newsletter-modal-close">
              <button onClick={() => setSelectedNl(null)}>&times;</button>
            </div>
            <img
              src={selectedNl.image}
              alt={selectedNl.title}
              className="newsletter-modal-img"
            />
            <div className="newsletter-modal-body">
              <h2>{selectedNl.title}</h2>
              <div className="modal-date">{selectedNl.subtitle} &middot; {selectedNl.date}</div>
              <div className="modal-content">{selectedNl.content}</div>
              <a
                href={selectedNl.downloadUrl}
                className="modal-download"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Newsletter
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
