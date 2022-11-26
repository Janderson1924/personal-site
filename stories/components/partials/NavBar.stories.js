import React from 'react'
import { NavBar } from '../../../src/components/partials/NavBar'

export default {
  title: 'Components/Partials/NavBar',
  component: NavBar
}

const Template = (args) => <NavBar {...args} />

export const Default = Template.bind({})
