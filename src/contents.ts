export const groups = [
  'chap0',
  'chap1',
  'chap2',
  'chap3',
  'chap4',
  'chap5',
  'chap6',
  'project',
] as const
export const slugs = [
  'outline',
  'score',
  'history-of-web',
  'current-web-technologies',
  'future-of-web',
  'dev-tools',
  'html-css',
  'javascript',
  'typescript',
  'programming-concept',
  'react',
  'state',
  'hooks',
  'context',
  'global-state',
  'deploy-react',
  'nextjs',
  'deploy-nextjs',
  'graphql',
  'mongodb',
  'graphql-compose',
  'model',
  'types',
  'relation',
  'fields',
  'resolver',
  'deploy-graphql',
  'apollo-client',
  'graphql-request',
  'password',
  'cors',
  'jwt',
  'https',
  'midterm',
  'final',
] as const

export type Group = typeof groups[number]
export type Slug = typeof slugs[number]
export type Pages = {
  [x in Slug]: {
    title: string
    group: Group
  }
}
export type Menus = {
  [x in Group]: string
}

export const pages: Pages = {
  outline: { title: 'Course outline', group: 'chap0' },
  score: { title: 'Score', group: 'chap0' },
  'history-of-web': { title: 'History of web', group: 'chap1' },
  'current-web-technologies': { title: 'Current web technologies', group: 'chap1' },
  'future-of-web': { title: 'Future of web', group: 'chap1' },
  'dev-tools': { title: 'Web developer tools', group: 'chap2' },
  'html-css': { title: 'Basic web (HTML, CSS)', group: 'chap2' },
  javascript: { title: 'JavaScript', group: 'chap2' },
  typescript: { title: 'TypeScript', group: 'chap2' },
  'programming-concept': { title: 'Programming concept', group: 'chap2' },
  react: { title: 'React', group: 'chap3' },
  state: { title: 'State', group: 'chap3' },
  hooks: { title: 'Hooks', group: 'chap3' },
  context: { title: 'Context', group: 'chap3' },
  'global-state': { title: 'Global state', group: 'chap3' },
  'deploy-react': { title: 'Deploy React app', group: 'chap3' },
  nextjs: { title: 'Next.js', group: 'chap3' },
  'deploy-nextjs': { title: 'Deploy Next.js app', group: 'chap3' },
  graphql: { title: 'GraphQL', group: 'chap4' },
  mongodb: { title: 'MongoDB', group: 'chap4' },
  'graphql-compose': { title: 'graphql-compose', group: 'chap4' },
  model: { title: 'Model', group: 'chap4' },
  types: { title: 'Types', group: 'chap4' },
  relation: { title: 'Relation', group: 'chap4' },
  fields: { title: 'Fields', group: 'chap4' },
  resolver: { title: 'Resolver', group: 'chap4' },
  'deploy-graphql': { title: 'Deploy GraphQL', group: 'chap4' },
  'apollo-client': { title: '@apollo-client', group: 'chap5' },
  'graphql-request': { title: 'graphql-request', group: 'chap5' },
  password: { title: 'Encrypt password', group: 'chap6' },
  cors: { title: 'CORS Origin', group: 'chap6' },
  jwt: { title: 'JWT', group: 'chap6' },
  https: { title: 'HTTPS', group: 'chap6' },
  midterm: { title: 'Midterm', group: 'project' },
  final: { title: 'Final', group: 'project' },
}
export const menus: Menus = {
  chap0: 'Course overview',
  chap1: 'Chap 1: Web technology',
  chap2: 'Chap 2: Become to web developer',
  chap3: 'Chap 3: Front-end (React)',
  chap4: 'Chap 4: Back-end (GraphQL)',
  chap5: 'Chap 5: Connect Front-end and Back-end',
  chap6: 'Chap 6: Authentication and Security',
  project: 'Project',
}
