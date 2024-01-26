import { hero1, hero2, hero3, hero4 } from "../assets";

const heroBtns = [
  { id: 0, title: "IT Solutions", tagLine: "Finding your Next Advisor" },
  { id: 1, title: "Technology Driven", tagLine: "Get advance Services" },
  { id: 2, title: "Our Experience", tagLine: "Years of Experience" },
  { id: 3, title: "Client First", tagLine: "Doing the right thing" },
];

const carouselInfo = [
  {
    id: 0,
    title: "We Solve Problems",
    body: "We are a team of problem solvers, dedicated to finding innovative solutions to the challenges faced by our clients. Our expertise in IT consultation and services allows us to tackle complex issues head-on, delivering results that drive business growth and efficiency.",
    img: hero1,
  },
  {
    id: 1,
    title: "We are Agile and Collaborative",
    body: "Our approach is rooted in agility and collaboration. We adapt to the changing needs of the business environment, working closely with our clients to understand their unique requirements. Our collaborative spirit fosters a productive partnership that leads to shared success.",
    img: hero3,
  },
  {
    id: 2,
    title: "We Deliver Value",
    body: "Our primary goal is to deliver value to our clients. By providing top-notch IT staff recruiting, staff augmentation, and digital marketing services, we help businesses optimize their operations and reach their full potential.",
    img: hero4,
  },
  {
    id: 3,
    title: "We Deliver Value",
    body: "Our primary goal is to deliver value to our clients. By providing top-notch IT staff recruiting, staff augmentation, and digital marketing services, we help businesses optimize their operations and reach their full potential.",
    img: hero4,
  },
];

const testimonialS = [
  {
    id: 0,
    review:
      "Their work was impressive, fast, and excellent. They were professional, efficient, and hassle free. They are the best IT consultants ever",
    name: "Holden Caulfield",
    post: "UI Developer",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.292908404.1697524748&semt=sphz",
  },
  {
    id: 1,
    review:
      "They made my website beautiful, responsive, and unique. They were helpful and responsive. They are a creative and talented team.",
    name: "Holden Caulfield",
    post: "Real Estate",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.292908404.1697524748&semt=sphz",
  },
  {
    id: 2,
    review:
      "Piscal Innovations was a lifesaver for my business. They solved my critical problem and boosted my business. They were expert and experienced. They gave me strategic advice and guidance. They are a smart and reliable team.",
    name: "Holden Caulfield",
    post: "UI Developer",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.292908404.1697524748&semt=sphz",
  },
  {
    id: 3,
    review:
      "Exceptional services and on-point developers. No language barrier, no communication hurdles, etc. Will work with this firm again.",
    name: "Holden Caulfield",
    post: "Finance",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.292908404.1697524748&semt=sphz",
  },
];

const accordionData = [
  {
    title: "Conctractual Hiring",
    content: `We provide contractual staff as well for IT since the work is mostly project based. Hence, small organisations that do not require full time staff can avail expert IT professionals on contract basis. This saves money while enabling higher efficiency.`,
  },
  {
    title: "Offshore clients",
    content: `We have a number of offshore clients who need the services of IT professionals from India. We get all the details of their project requirements and then form a dedicated team through our hiring service network. Thus, they can get their work done in a stipulated time frame, at lower costs, without or hunting for suitable manpower.`,
  },
  {
    title: "Turnaround Time",
    content: `We have a record low turnaround time. We can provide express service in special cases, wherein IT professional hiring services are rendered within 48 hours. This is possible due to the network of our expert executives who find suitable talent quickly.`,
  },
  {
    title: "Exemplary database",
    content: `Our vast and varied database enables us to provide faster and trustworthy service to every client. It includes IT professionals from different specialised areas like network and communications to AI, ERP and applications.`,
  },
  {
    title: "24x7 Support",
    content: `We provide support services after recruitment also. Keeping in mind our offshore clients, our executives are available for assistance at all times. So if there are any issues regarding staff hired through us, you can contact our team.`,
  },
];

// -> Staff Recruitment Data
const staffRecruitmentData = [
  {
    title: "IT Talent Acquisition",
    points: [
      "At Piscal Innovations, we excel in identifying and recruiting exceptional IT talent tailored to meet your organization's unique needs.",
      "Leveraging extensive networks and industry insights, our specialists seek out candidates with precise skills, experience, and cultural alignment.",
    ],
  },
  {
    title: "Recruitment Process Outsourcing (RPO)",
    points: [
      "Streamline your hiring process through Piscal Innovations' RPO services, where we manage the entire recruitment cycle for you.",
      "From candidate sourcing to onboarding, our dedicated team ensures a seamless and efficient recruitment journey.",
    ],
  },
  {
    title: "Executive Search for IT Leadership",
    points: [
      "Empower the future of your IT leadership team with our expert search and development services.",
      "Strategically connecting you with executive talent who align with your organization's vision and drive your strategic goals forward.",
    ],
  },
  {
    title: "IT Skill Assessment and Testing",
    points: [
      "Accurately assess candidates' technical proficiency through our comprehensive skill assessment and testing solutions.",
      "Ensuring candidates presented to you possess the essential technical expertise required for their designated roles is a priority at Piscal Innovations.",
    ],
  },
  {
    title: "Talent Pool Management",
    points: [
      "Nurture a resilient talent pool to effectively address your current and future recruitment needs.",
      "Actively cultivating candidate relationships, we maintain a pool of qualified professionals ready to fulfill your staffing requirements.",
    ],
  },
  {
    title: "Contract Staffing Solutions",
    points: [
      "Address short-term project needs or bridge skill gaps seamlessly with Piscal Innovations' contract staffing solutions.",
      "Providing adaptable and scalable IT professionals throughout your project duration, catering to your specific needs.",
    ],
  },
  {
    title: "IT Recruitment Consultancy",
    points: [
      "Rely on our expertise to offer strategic guidance in IT recruitment.",
      "Piscal Innovations provides valuable insights into market trends, salary benchmarks, and recruitment best practices, strengthening your talent acquisition strategy.",
    ],
  },
  {
    title: "Employer Branding and Talent Attraction",
    points: [
      "Enhance your employer brand to attract top-tier IT talent.",
      "Partnering with you, Piscal Innovations crafts engaging employer branding strategies resonating within the IT workforce.",
    ],
  },
  {
    title: "Inclusive Hiring Strategies",
    points: [
      "Empower your IT teams by embracing diverse talents through our tailored recruitment methods.",
      "Prioritizing inclusivity, Piscal Innovations fosters well-rounded and high-performing IT teams.",
    ],
  },
  {
    title: "Seamless Integration Assistance",
    points: [
      "Effortlessly integrate new recruits into your company culture with our comprehensive onboarding support.",
      "Ensuring a seamless transition, enabling immediate contributions from new team members.",
      "Within IT staff recruitment, Piscal Innovations offers a range of services to enhance your workforce in the ever-evolving tech industry.",
    ],
  },
];

const itConsultingServicesData = [
  {
    id: 1,
    title: "Strategic IT Consulting",
    description:
      "Our approach at Piscal Innovations aligns your business objectives with cutting-edge IT strategies...",
    points: [
      "Crafting and implementing IT strategies in alignment with your business objectives.",
      "Offering insights into emerging technologies to gain a competitive edge.",
      "Conducting comprehensive IT assessments and audits to optimize your infrastructure.",
    ],
  },
  {
    id: 2,
    title: "Digital Transformation",
    description:
      "We guide your business through a seamless digital evolution, streamlining processes with digitalization...",
    points: [
      "Efficiently streamlining business processes through digitalization.",
      "Ensuring a smooth transition to a digital-first business model.",
      "Integration of innovative technologies like AI, IoT, and Blockchain.",
    ],
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description:
      "Piscal Innovations designs, implements, and optimizes secure and scalable cloud infrastructures...",
    points: [
      "Designing and implementing secure and scalable cloud infrastructure.",
      "Migration services for a seamless transition to cloud environments.",
      "Cloud optimization to maximize performance and cost-effectiveness.",
    ],
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Our robust cybersecurity solutions safeguard your digital assets and privacy...",
    points: [
      "Developing robust cybersecurity strategies to protect your digital assets.",
      "Providing threat intelligence and risk assessments to identify vulnerabilities.",
      "Implementing advanced security measures and compliance solutions.",
    ],
  },
  {
    id: 5,
    title: "Managed IT Services",
    description:
      "We provide proactive monitoring, maintenance, and 24/7 helpdesk support for your IT systems...",
    points: [
      "Proactive monitoring and maintenance for seamless IT operations.",
      "24/7 helpdesk support for swift issue resolution.",
      "Regular updates and patches ensuring system reliability.",
    ],
  },
  {
    id: 6,
    title: "Data Analytics",
    description:
      "Unlock the power of data with our advanced analytics solutions at Piscal Innovations...",
    points: [
      "Leveraging advanced analytics to harness the potential of data.",
      "Offering business intelligence solutions for informed decision-making.",
      "Predictive analytics for anticipating market trends and customer behavior.",
    ],
  },
  {
    id: 7,
    title: "Custom Software Development",
    description:
      "Piscal Innovations specializes in developing tailored software solutions to meet your unique business requirements...",
    points: [
      "Developing customized software solutions aligned with your business needs.",
      "Using agile methodologies for flexible and rapid project delivery.",
      "Seamless integration with existing systems for efficient workflows.",
    ],
  },
];

const staffAugmentationData = [
  {
    id: 1,
    title: 'Flexible Staffing Solutions',
    description: `At our firm, we provide adaptable and scalable staffing options tailored to suit your organization's distinct demands. Whether it's short-term project assistance or long-term resource enhancement, our solutions are crafted to seamlessly align with your specific needs, ensuring a perfect fit for your requirements.`,
  },
  {
    id: 2,
    title: 'Specialized IT Professionals',
    description: `Our extensive network houses highly skilled and experienced IT professionals proficient across multiple domains, including software development, network administration, cybersecurity, and data analysis. This diverse talent pool enables us to adeptly match the right professionals to suit your project's unique requirements.`,
  },
  {
    id: 3,
    title: 'Rapid Resource Deployment',
    description: `Recognizing the pivotal role of agility in the IT sector, our firm excels in swiftly deploying our resources to your organization. This ensures not only keeping your projects on course but also enables rapid responses to evolving market demands.`,
  },
  {
    id: 4,
    title: 'Cost-Effective Solutions',
    description: `Our Staff Augmentation services offer a streamlined approach, trimming recruitment, onboarding, and training expenses. With a pay-as-you-go model, you exclusively invest in the required resources, alleviating the load on your HR and administrative divisions.`,
  },
  {
    id: 5,
    title: 'Streamlined Onboarding',
    description: `Collaborating closely with you, we prioritize a seamless onboarding journey for the augmented IT professionals. This involves harmonizing them with your company's culture, policies, and project goals, enabling swift integration for immediate contributions to your team.`,
  },
  {
    id: 6,
    title: 'Quality Assurance',
    description: `At our firm, our steadfast commitment revolves around upholding unparalleled quality standards. Our professionals undergo meticulous selection and vetting procedures to ensure alignment with your project's specific requirements and exceed your expectations.`,
  },
  {
    id: 7,
    title: 'Project Management Support',
    description: `Apart from furnishing skilled IT professionals, we extend comprehensive project management support to guarantee the seamless integration of augmented staff. Our team excels in aiding project planning, monitoring, and delivery, ensuring effective achievement of your project milestones.`,
  },
];


export {
  heroBtns,
  carouselInfo,
  testimonialS,
  accordionData,
  staffRecruitmentData,
  itConsultingServicesData,
  staffAugmentationData,
};
