export const people = [
  {
    id: 1,
    name: "Yash Golani",
    pors: ["General Secretary, ACAC"],
    category: "gen-sec",
    email: "gensecy_acac@iitj.ac.in",
    phone: "+91 1234567890",
    links: {
      linkedin: "https://www.linkedin.com/in/yash-golani/",
      instagram: "https://www.instagram.com/yash_golani/"
    },
    image: "/images/people/yash_golani.jpg"
  },
  {
    id: 2,
    name: "Tharakdatta Hegde",
    pors: ["General Secretary, Student Senate"],
    category: "gen-sec",
    email: "gensecy_ss@iitj.ac.in",
    phone: "+91 1234567890",
    links: {
      linkedin: "https://www.linkedin.com/in/tharakdatta-hegde/",
      instagram: "https://www.instagram.com/tharakdatta_hegde/"
    },
    image: "/images/people/tharakdatta_hegde.jpg"
  },
  {
    id: 3,
    name: "Manas Chechani",
    pors: ["General Secretary, SAC"],
    category: "gen-sec",
    email: "gensecy_sac@iitj.ac.in",
    phone: "+91 1234567890",
    links: {
      linkedin: "https://www.linkedin.com/in/manas-chechani/",
      instagram: "https://www.instagram.com/manas_chechani/"
    },
    image: "/images/people/manas_chechani.jpg"
  },
  {
    id: 4,
    name: "Krish Teckchandani",
    pors: ["Vice President, BAI"],
    category: "vp",
    email: "vp_bai@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  },
  {
    id: 5,
    name: "Sourav Chahar",
    pors: ["Vice President, BDS"],
    category: "vp",
    email: "vp_bds@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  },
  {
    id: 6,
    name: "Anchitya Kumar",
    pors: ["Vice President, BCD"],
    category: "vp",
    email: "vp_bcd@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  },
  {
    id: 7,
    name: "Raghuveer Kulkarni",
    pors: ["Vice President, SAA"],
    category: "vp",
    email: "vp_saa@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  },
  {
    id: 8,
    name: "Vyom Shah",
    pors: ["Vice President, BIE"],
    category: "vp",
    email: "vp_bie@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  },
  {
    id: 9,
    name: "Sambhav Jha",
    pors: ["Vice President, BCCA"],
    category: "vp",
    email: "vp_bcca@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  },
  {
    id: 10,
    name: "Vaibhav Singh",
    pors: ["Vice President, BAC"],
    category: "vp",
    email: "vp_bac@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  },
  {
    id: 11,
    name: "Sudhanshu Tamhankar",
    pors: ["Vice President, BSS"],
    category: "vp",
    email: "vp_bss@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  },
  {
    id: 12,
    name: "Anshit Agarwal",
    pors: ["Vice President, BLA"],
    category: "vp",
    email: "vp_bla@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  },
  {
    id: 13,
    name: "Harsh Kumar",
    pors: ["Vice President, BHA"],
    category: "vp",
    email: "vp_bha@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  },
  {
    id: 14,
    name: "Person A",
    pors: ["Coordinator, Devlup Labs", "Vice President, BSS"],
    category: "technical-club",
    email: "person.a@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  },
  {
    id: 15,
    name: "Person B",
    pors: ["Coordinator, Robotics Society"],
    category: "technical-club",
    club: "Robotics Society",
    email: "person.b@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  },
  {
    id: 16,
    name: "Person C",
    pors: ["Coordinator, The Groove Theory"],
    category: "cultural-club",
    club: "The Groove Theory",
    email: "person.c@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  },
  {
    id: 17,
    name: "Person D",
    pors: ["Coordinator, Cricket Society"],
    category: "sports-club",
    club: "Cricket Society",
    email: "person.d@iitj.ac.in",
    phone: "+91 1234567890",
    links: {},
    image: "/images/people/default.jpg"
  }
];

export const clubMembers = {
  technicalClubs: people.filter(p => p.category === 'technical-club').reduce((acc, curr) => {
      const clubName = curr.club || curr.pors.find(p => p.includes('Coordinator'))?.split(', ')[1] || 'Unknown';
      if (!acc.find(c => c.clubName === clubName)) {
          acc.push({ clubName, members: [] });
      }
      acc.find(c => c.clubName === clubName)?.members.push(curr);
      return acc;
  }, []),
  culturalClubs: people.filter(p => p.category === 'cultural-club').reduce((acc, curr) => {
      const clubName = curr.club || curr.pors.find(p => p.includes('Coordinator'))?.split(', ')[1] || 'Unknown';
      if (!acc.find(c => c.clubName === clubName)) {
          acc.push({ clubName, members: [] });
      }
      acc.find(c => c.clubName === clubName)?.members.push(curr);
      return acc;
  }, []),
  sportsClubs: people.filter(p => p.category === 'sports-club').reduce((acc, curr) => {
      const clubName = curr.club || curr.pors.find(p => p.includes('Coordinator'))?.split(', ')[1] || 'Unknown';
      if (!acc.find(c => c.clubName === clubName)) {
          acc.push({ clubName, members: [] });
      }
      acc.find(c => c.clubName === clubName)?.members.push(curr);
      return acc;
  }, []),
};
