import React from 'react'
import { NavBar } from '../../../../src/components/shared/NavBar'

export default {
  title: 'Components/Shared/NavBar/NavBar',
  component: NavBar
}

const Template = (args) => <NavBar {...args} />

export const Default = Template.bind({})
