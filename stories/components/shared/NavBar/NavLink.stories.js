import React from 'react'
import { NavLink } from '../../../../src/components/shared/NavBar/NavLink/NavLink'

export default {
  title: 'Components/Shared/NavBar/NavLink',
  component: NavLink
}

const Template = (args) => {
  return <NavLink {...args}>EXAMPLE</NavLink>
}

export const Default = Template.bind({})
