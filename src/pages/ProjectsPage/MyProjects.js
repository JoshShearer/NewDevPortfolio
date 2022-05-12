export const MyProjects = [
  {
    id: 0,
    title: "Travel Diary",
    skills:
      "Scrum, Design Patterns, React State Management, Full Stack Web Development, CSS",
    toolset: "React, NodeJs, Express, MongoDB, Heroku, JS, Google Maps, Axios",
    notableLibraries: "Material UI",
    projectOverview:
      "This is a full stack web app that was designed to be easily portable to mobile platforms via react-native.  This is a simple app meant to allow people to capture their thoughts while traveling and associate them with the locations they occured.",
    keyLessons:
      "This was a challenging and pivotal project.  It taught me about all the intricasies of the react front-end especially as it relates to state management.",
    demoLink: "http://react-travel-diary.herokuapp.com",
    githubLink: "https://github.com/JoshShearer/TravelDiary",
    imageLink:
      "https://live.staticflickr.com/65535/48368684197_72fa4f2fef_k.jpg",
  },
  {
    id: 1,
    title: "Web3 MTB Token Exchange",
    skills: "Web 3, Heroku, Blockchain, Redux/Rematch",
    toolset: "Javscript, React, Nextjs, Typescript, Solidity, Truffle, Ganache",
    notableLibraries: "Nextjs, Typescript, Redux/Rematch, Tailwindui, Headwindui, Solidity",
    projectOverview: "This is built with a Nextjs/Typescript front-end.  It will pull in HD Account data via the metamask add-in in the browser.  The exchange will execute Deposit/Withdraw and buy/sell orders for the local MTB for ETH.  Contracts of written in solidity.",
    keyLessons:
      "This project is was a great opportunity to learn modern front end build stacks and incorporating code reliability via typescript, in addition to getting great experience in using and writing web 3 contracts in solidity.",
    demoLink: "https://my-crypto-exchange.herokuapp.com/",
    githubLink: "https://github.com/JoshShearer/MyCryptoExchange",
    imageLink:
      "https://bitcoinexchangeguide.com/wp-content/uploads/2019/03/Delving-into-Blockchain-as-the-Origin-Point-for-the-new-Generation-of-dApps-on-Web-3-0.jpg",
  },
  {
    id: 2,
    title: "Fully Automated Brew Station",
    skills:
      "Beer Making, Procurement, Fabrication, Soldering, Electrical Design, Automation",
    toolset: "Python, Raspberry Pi 4, Linux",
    notableLibraries: "Craft Beer Pi 3",
    projectOverview: "This was a great project that ended up automating the brewing process and allowed me to really hone in on the recipe process and make the great beers fully repeatable and reliable.  Those great brews are no longer as the behest of chance occurances and minute differences in the recipe that might vary slightly in the manual process.",
    keyLessons:
      "This project proved very challenging in the breadth required for completion.  Hardware design & procurement, soldiering, fabricating, high and low voltage design as well as knowledge of Python in addition to sensor data verification and aquisition were all required to get this system up and running.",
    // demoLink: "http://react-traveldiary.web.app",
    githubLink: "https://github.com/JoshShearer/AutomatedBrew",
    imageLink: "https://up.picr.de/39892247gq.jpeg",
  },
  {
    id: 3,
    title: "Nutrition Macro Transfer",
    skills:
      "WebScraping, Automated Data Aquisition and Entry",
    toolset: "Python",
    notableLibraries: "Selenium, Pandas",
    projectOverview: "This project was an attempt to port several years of nutritional macro data from MyFitnessPal to Cronometer.  There was no tools at the time to do this.  I was able to learn and combine several tools to take data exported to .csv from MyFitnessPal and import the macro data into Cronometer.  This project proved very challenging as the tools are functional but not always reliable and sometimes at the whim of page loading times or internet speed.  In addition to the macro nutrient data, I imported all biometric data from sources like wellnessfx.com.",
    keyLessons:
      "Selenium is a great automation tool, but can be very particular in accessing data and waiting on pages to load.  The design process required the assumption that the script would break and need to restart was random intervals.",
    // demoLink: "http://react-traveldiary.web.app",
    githubLink: "https://github.com/JoshShearer/HealthDataTransfer",
    imageLink:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.v_lPMNggFGsYMVp_8tR8iAHaHo%26pid%3DApi&f=1",
  },
  {
    id: 4,
    title: "Continuous Glucose Monitoring Analysis",
    skills: "WebScraping, Data Entry Automation",
    toolset: "Python, Numpy, Pandas, matplotlib, Bokeh ",
    notableLibraries: "Pandas",
    projectOverview: "This project was meant to learn more about my body and how it specifically processes different sources or glucose (sugar).  I used a Dexcom G5 sensor and xDrip to gather and log the raw CGM data.  I them used several Python tools to generate visual aids to viewing understanding how my body reacts to glucose.  These reactions include amplitude and rate of spikes and troughs, how it relates to food eaten and whether exercise occurred slightly before or after the meal.  Several visual aids were used to see how Food, Glucose, Exercise and Sleep all interact to better understand and minimize glucose spikes in my body.",
    keyLessons:
      "This project ended up being much more time consuming that expected.  It allowed me to really learn the power of tools like Pandas and Numpy and the tools used in visualizing.",
    // demoLink: "http://react-traveldiary.web.app",
    githubLink: "https://github.com/JoshShearer/CGMAnalysis",
    imageLink:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HJ2iPwhHfk6GfM5BWbfadAHaE8%26pid%3DApi&f=1",
  },
  // {
  //   id: 5,
  //   title: "Image Recognition",
  //   skills:
  //     "Scrum, Design Patters, React State Management, Full Stack Web Developement, Authorization, CSS",
  //   toolset: "Python, TensorFlow",
  //   notableLibraries: "Material UI",
  //   projectOverview: "",
  //   keyLessons:
  //     "This was a challenging and pivotal project.  It taught me about all the intricasies of the react front-end especially as it relates to state management",
  //   demoLink: "http://react-traveldiary.web.app",
  //   githubLink: "https://github.com/JoshShearer",
  //   imageLink: "https://www.talkwalker.com/images/blog/image-recognition.png",
  // },
];