const testimonials = [
  {
    author: "Inoulen Konjengbam",
    text: "I've had the pleasure of working with Mahamadou Nouridine over the past few months, and he's proven to be quite the developer. He's skilled in both Front-end and Back-end work, consistently delivering projects with impressive speed. What's really great is his knack for turning code into something efficient and effective. Working with Mahamadou means you're in for some valuable learning experiences; he's always ready to share knowledge and help you improve your skills. Plus, he's adept at handling unexpected situations thanks to his strong technical know-how and friendly demeanor.",
    date: "October 10, 2023",
    source: "linkedin",
    link: "https://www.linkedin.com/in/mahamadou-nouridine/details/recommendations/",
  },
  {
    author: "Marco Díaz",
    text: `During our time at Microverse, I was fortunate enough to work alongside Mahamadou Nouridine on numerous web development initiatives. His mastery over JavaScript, React, Redux, HTML, and CSS became apparent very quickly and significantly contributed to our successful projects.

   Mahamadou has an extraordinary ability to utilize modern tools and frameworks, and his skills in React and Redux are noteworthy. He creates web applications that aren't just practical, but they are also aesthetically engaging and user-focused. His deep understanding of HTML and CSS further complements these abilities, enabling him to deliver comprehensive and compelling user interfaces.

   One of Mahamadou's most exceptional qualities is his blend of high technical proficiency and a strong team collaboration ethic. He readily provides support to his teammates and demonstrates excellent responsibility in his work. His ability to balance multiple tasks and still meet project deadlines reflects his efficient time management skills.`,
    date: "June 23, 2023",
    source: "linkedin",
    link: "https://www.linkedin.com/in/mahamadou-nouridine/details/recommendations/",
  },
  {
    author: "Otmane Echchafyky",
    text: `I highly endorse Mahamadou based on his exceptional software development skills and problem-solving abilities. His work ethic is exemplary, consistently surpassing expectations to ensure timely and top-notch project completion. Mahamadou possesses a remarkable aptitude for quick learning, eagerly embracing new challenges, and staying up-to-date with emerging technologies. His unwavering dedication and commitment to his work are truly praiseworthy. Having collaborated with him as coding partner in Microverse, I can confidently attest that Mahamadou is an intelligent and talented software developer. Any team or organization would be fortunate to have him as he undoubtedly brings immense value to every project he undertakes.`,
    date: "June 23, 2023",
    source: "linkedin",
    link: "https://www.linkedin.com/in/mahamadou-nouridine/details/recommendations/",
  },
  {
    author: "Michael okbamichael",
    text: `Mrs Nouridine is young talented ,harder work and team player especially at remote pair programming projects during microverse study period.He has high skill of problem solving and outbox think capacity in Javascript,react and node.js`,
    date: "June 22, 2023",
    source: "linkedin",
    link: "https://www.linkedin.com/in/mahamadou-nouridine/details/recommendations/",
  },
];

export const urlGenerator = (author) => {
  const names = author.split(" ");
  let name = "";
  for (let n of names) {
    if (names.indexOf(n) != names.lenght - 1) {
      name += "+" + n;
    } else {
      name += n;
    }
  }
  return "https://ui-avatars.com/api/?format=svg&background=383838&color=ffff&name="+name;
};

export default testimonials;
