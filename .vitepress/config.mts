export default async () => {
  // const posts = await createContentLoader('notice/*.md').load()
  return {
    base: '/open-portal',
    title: '华东师范大学门户',
    description: '华东师范大学门户',
    ignoreDeadLinks: true,
    themeConfig: {
      validate: false,
      docsDir: '/',
      nav: [
        {
          text: '华东师范大学',
          link: 'https://www.ecnu.edu.cn/',
          noIcon: true,
        },
        {
          text: '华东师范大学',
          link: 'https://www.ecnu.edu.cn/',
          noIcon: true,
        },
      ],
      aside: true,
    },
    vite: {
      ssr: {
        noExternal: ['vitepress-plugin-twoslash'],
      },
    },
  }
}
