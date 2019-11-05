import { Flex, Text } from 'rebass'
import React, { ReactNode } from 'react'

import ProfileHeading from 'components/Profile/ProfileHeading'
import ProfileStyledLink from 'components/Profile/ProfileStyledLink'
import Twemoji from 'components/Icons/Twemoji'

const BEIGBEDER_URL = 'http://jstu.art/ojVB'
const COLING_URL = 'http://jstu.art/oijk'
const USPO_URL = 'http://jstu.art/oj1g'

const {
  Camera,
  CrescentMoon,
  France,
  Microscope,
  OpenBook,
  PersonalComputer,
  Rat,
  Scroll,
  ThinkingFace,
} = Twemoji

interface Props {
  children: ReactNode
  Emoji1: any
  Emoji2: any
}

const SubBlurb = ({ Emoji1, Emoji2, children }: Props) => (
  <Flex className="pt4 justify-center justify-end-ns items-center">
    <Text className="f4 fw3 dib tr lh-copy">{children}</Text>
    <Flex className="f6 dib">
      <Emoji1 className="mh2" style={{ height: '1.5rem', width: '1.5rem' }} />
      <Emoji2 style={{ height: '1.5rem', width: '1.5rem' }} />
    </Flex>
  </Flex>
)

const ProfileBlurb = () => (
  <>
    <ProfileHeading />
    <SubBlurb Emoji1={PersonalComputer} Emoji2={ThinkingFace}>
      NYC-based software engineer.
    </SubBlurb>
    <SubBlurb Emoji1={OpenBook} Emoji2={Scroll}>
      <Text className="db">
        Published{' '}
        <ProfileStyledLink href={COLING_URL}>NLP researcher</ProfileStyledLink>,
        and
      </Text>
      <ProfileStyledLink href={USPO_URL}>USPO Patent holder</ProfileStyledLink>.
    </SubBlurb>
    <SubBlurb Emoji1={Microscope} Emoji2={Rat}>
      Neuroscientist by degree.
    </SubBlurb>
    <SubBlurb Emoji1={France} Emoji2={CrescentMoon}>
      <ProfileStyledLink href={BEIGBEDER_URL}>
        French translator{' '}
      </ProfileStyledLink>
      by night.
    </SubBlurb>
    <SubBlurb Emoji1={Camera} Emoji2={CrescentMoon}>
      I also take a lot of photographs.
    </SubBlurb>
  </>
)

export default ProfileBlurb
