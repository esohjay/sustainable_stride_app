export const getGoal = (goal) => {
  let sdg = {};
  switch (goal) {
    case 1:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-01.png"),
        title: "No Poverty",
        description:
          "End poverty in all its forms everywhere by ensuring that all people have access to basic resources, services, and opportunities for economic empowerment.",
        url: "https://www.un.org/sustainabledevelopment/poverty/",
      };
      break;
    case 2:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-02.png"),
        title: "Zero Hunger",
        description:
          "End hunger, achieve food security, improve nutrition, and promote sustainable agriculture to ensure everyone has access to nutritious food.",
        url: "https://www.un.org/sustainabledevelopment/hunger/",
      };
      break;
    case 3:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-03.png"),
        title: "Good Health and Well-being",
        description:
          "Ensure healthy lives and promote well-being for all at all ages by providing access to healthcare services, reducing maternal and child mortality, and combating diseases.",
        url: "https://www.un.org/sustainabledevelopment/health/",
      };
      break;
    case 4:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-04.png"),
        title: "Quality Education",
        description:
          "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all, aiming to provide education that is accessible, relevant, and of high quality.",
        url: "https://www.un.org/sustainabledevelopment/education/",
      };
      break;
    case 5:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-05.png"),
        title: "Gender Equality",
        description:
          "Achieve gender equality and empower all women and girls by eliminating discrimination, ensuring equal rights and opportunities, and promoting their participation in decision-making processes.",
        url: "https://www.un.org/sustainabledevelopment/gender-equality/",
      };
      break;
    case 6:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-06.png"),
        title: "Clean Water and Sanitation",
        description:
          "Ensure availability and sustainable management of water and sanitation for all, aiming to achieve universal access to safe and affordable drinking water and adequate sanitation facilities.",
        url: "https://www.un.org/sustainabledevelopment/water-and-sanitation/",
      };
      break;
    case 7:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-07.png"),
        title: "Affordable and Clean Energy",
        description:
          "Ensure access to affordable, reliable, sustainable, and modern energy for all, while promoting renewable energy sources and energy efficiency.",
        url: "https://www.un.org/sustainabledevelopment/energy/",
      };
      break;
    case 8:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-08.png"),
        title: "Decent Work and Economic Growth",
        description:
          "Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all, aiming to eradicate forced labor and child labor.",
        url: "https://www.un.org/sustainabledevelopment/economic-growth/",
      };
      break;
    case 9:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-09.png"),
        title: "Industry, Innovation, and Infrastructure",
        description:
          "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation to support economic development and human well-being.",
        url: "https://www.un.org/sustainabledevelopment/infrastructure-industrialization/",
      };
      break;
    case 10:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-10.png"),
        title: "Reduced Inequality",
        description:
          "Reduce inequality within and among countries by promoting social, economic, and political inclusion, ensuring equal opportunities for all, and empowering marginalized and vulnerable groups.",
        url: "https://www.un.org/sustainabledevelopment/inequality/",
      };
      break;
    case 11:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-11.png"),
        title: "Sustainable Cities and Communities",
        description:
          "Make cities and human settlements inclusive, safe, resilient, and sustainable by ensuring access to basic services, affordable housing, and sustainable transportation.",
        url: "https://www.un.org/sustainabledevelopment/cities/",
      };
      break;
    case 12:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-12.png"),
        title: "Responsible Consumption and Production",
        description:
          "Ensure sustainable consumption and production patterns by promoting resource efficiency, reducing waste generation, and minimizing environmental impact.",
        url: "https://www.un.org/sustainabledevelopment/sustainable-consumption-production/",
      };
    case 13:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-13.png"),
        title: "Climate Action",
        description:
          "Take urgent action to combat climate change and its impacts by implementing measures to mitigate greenhouse gas emissions, adapt to climate change, and promote sustainable development.",
        url: "https://www.un.org/sustainabledevelopment/climate-change/",
      };
      break;
    case 14:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-14.png"),
        title: "Life Below Water",
        description:
          "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development by addressing marine pollution, protecting marine biodiversity, and regulating overfishing.",
        url: "https://www.un.org/sustainabledevelopment/oceans/",
      };
      break;
    case 15:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-15.png"),
        title: "Life on Land",
        description:
          "Protect, restore, and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, halt and reverse land degradation, and halt biodiversity loss.",
        url: "https://www.un.org/sustainabledevelopment/biodiversity/",
      };
      break;
    case 16:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-16.png"),
        title: "Peace, Justice, and Strong Institutions",
        description:
          "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels.",
        url: "https://www.un.org/sustainabledevelopment/peace-justice/",
      };
      break;
    case 17:
      sdg = {
        goal,
        imgPath: require("../assets/sdg/E-WEB-Goal-17.png"),
        title: "Partnerships for the Goals",
        description:
          "Strengthen the means of implementation and revitalize the global partnership for sustainable development by mobilizing resources, enhancing international cooperation, and promoting sustainable development policies and practices at all levels.",
        url: "https://www.un.org/sustainabledevelopment/globalpartnerships/",
      };
      break;

    default:
      sdg = {
        goal: 0,
        imgPath: require("../assets/sdg/E-WEB-Goal-0.png"),
        title: "Overview",
        description:
          "Sustainable development calls for concerted efforts towards building an inclusive, sustainable and resilient future for people and planet.For sustainable development to be achieved, it is crucial to harmonize three core elements: economic growth, social inclusion and environmental protection. These elements are interconnected and all are crucial for the well-being of individuals and societies.",
        url: "https://www.un.org/sustainabledevelopment/development-agenda/",
      };
  }
  return sdg;
};
