export type Experience = {
  company: string;
  role: string;
  period: string;
  type: string;
  challenge: string;
  responsibility: string;
  outcome: string;
};

export const experiences: Experience[] = [
  {
    company: "Elsewedy Technical Academy (STA) & Elsewedy Cables",
    role: "3-Year Technical Program — Oracle Track",
    period: "2020 - 2023",
    type: "Education & Training",
    challenge: "I needed to learn how real companies run their IT — not just theory, but how Oracle databases, ERP systems, and industrial software actually work on a factory floor.",
    responsibility: "Spent three years studying database design, SQL, Java, and enterprise software architecture. Worked directly with Elsewedy Cables' IT infrastructure, which meant I saw how production systems handle thousands of records daily. Built projects that mimicked real business workflows.",
    outcome: "Graduated with a 96.5% grade and earned the Oracle Certificate of Completion. More importantly, I left understanding how software fits into a business — not just how to write code.",
  },
  {
    company: "IEEE Student Branch — Elsewedy University",
    role: "Vice President → AESS Chairman",
    period: "Ongoing",
    type: "Leadership",
    challenge: "There was no IEEE presence at our university. Starting a technical community from zero meant convincing students that engineering clubs are worth their time — and then actually delivering on that promise.",
    responsibility: "Co-wrote the branch charter and handled the IEEE application process. As AESS Chairman, I plan technical workshops, coordinate with guest speakers from industry, and manage a growing team of committee leads. I also run onboarding for new members each semester.",
    outcome: "The branch now has active members across multiple societies. We've hosted workshops on topics from Git basics to embedded systems, and I've built enough organizational muscle to run events end-to-end without things falling apart.",
  },
  {
    company: "Elsewedy University of Technology",
    role: "Student Ambassador",
    period: "Ongoing",
    type: "Community",
    challenge: "The university needed someone who could explain the technical programs clearly to prospective students and their families — most of whom had never heard of an applied technology university before.",
    responsibility: "Represented the university at recruitment fairs across multiple governorates. Ran orientation sessions for incoming classes, answered questions about curriculum, and helped new students navigate registration. Also participated in AIESEC cultural exchange projects at Ain Shams.",
    outcome: "Got comfortable presenting to rooms of 100+ people. Learned how to adjust my message depending on the audience — parents care about job outcomes, students care about what they'll actually build.",
  },
];
