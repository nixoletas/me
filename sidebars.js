/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check


const sidebars = {

  tutorialSidebar: [
    'experience',
    'education',
    {
      type: 'category',
      label: 'Projects',
      link: {
        type: 'doc',
        id: 'projects/projects', // Documento principal renderizado ao clicar na categoria
      },
      items: [
        'projects/intranet',  // Subitem 1
        'projects/entrance-exit',  // Subitem 2
      ],
    },
    // 'hello',
    // {
    //   type: 'category',
    //   label: 'Tutorial',
    //   items: ['tutorial-basics/create-a-document'],
    // },
  ],
};

export default sidebars;
