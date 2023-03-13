import React from 'react'
import { HomeButton } from '../../../src/components/shared/NavBar/HomeButton/HomeButton'

export default {
  title: 'Components/Shared/Buttons/HomeButton',
  component: HomeButton
}

const Template = (args) => <HomeButton {...args} />

export const Default = Template.bind({})
