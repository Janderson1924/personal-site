import React from 'react'
import { HeroContactButton } from '../../../src/components/homepage/components/HeroContactButton'

export default {
  title: 'Components/Homepage/HeroContactButton',
  component: HeroContactButton
}

const Template = (args) => {
  return <HeroContactButton {...args} />
}

export const Default = Template.bind({})
