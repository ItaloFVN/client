import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJs, NextJs e StyledComponents'
  }
}

export const Basic = (args: any) => <Main {...args} />
