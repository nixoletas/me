const sidebars = {
  tutorialSidebar: [
    "experience",
    "education",
    {
      type: "category",
      label: "Projects",
      link: {
        type: "doc",
        id: "projects/projects",
      },
      items: [
        "projects/angular-apod",
        "projects/shopping-vila-bella",
        "projects/futevento",
        "projects/intranet",
        "projects/presence-list",
        "projects/shopping",
        "projects/entrance-exit",
        "projects/famsecurity",
        "projects/todo",
      ],
    },
  ],
};

export default sidebars;
