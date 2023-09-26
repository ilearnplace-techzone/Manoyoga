import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Career Counselling',
    description: 'The Counsellors conduct lectures, workshops, and courses throughout the academic year.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Stress Management Therapy',
    description: 'We are mental health service provider specialty focusing on personal and interpersonal functioning and emotional, social, vocational, educational, developmental, and organizational concerns.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Emotion Transformation Therapy',
    description: 'Psychology to improve their well-being, prevent and alleviate distress and maladjustment, resolve crises, and increase their ability ',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Motivation Enhancement Therapy',
    description: 'We help people through Counseling Psychology to improve their well-being, prevent and alleviate distress and maladjustment, resolve crises, and increase their ability to function better in their lives.',
    icon: <ContactSupportIcon />,
  },
]
