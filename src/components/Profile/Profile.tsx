import React from 'react'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

import Avatar from './Avatar'
import BlackMirror from './BlackMirror'
import ProfileBlurb from './ProfileBlurb'
import ProfileFooter from './ProfileFooter'

const IntroWrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  min-height: calc(100vh - 56px);

  // background: linear-gradient(
  //   180deg,
  //   rgba(55, 59, 70, 1) 0%,
  //   rgba(103, 58, 183, 0.1) 50%,
  //   rgba(103, 58, 183, 0.5) 70%,
  //   rgba(103, 58, 183, 1) 80%,
  //   rgba(103, 58, 183, 1) 100%
  // );

  @media (min-width: 45em) {
    grid-template-rows: repeat(2, 1fr);
  }
`

const AvatarContainer = styled(Box)`
  @media (max-width: 45em) {
    grid-column: 1 / 13;
  }
  @media (min-width: 45em) and (max-width: 60em) {
    grid-column: 2 / 5;
    grid-row: 1 / 5;
  }
  @media (min-width: 60em) {
    grid-column: 3 / 6;
    grid-row: 1 / 5;
  }
`

const BlurbContainer = styled(Box)`
  grid-column: 1 / 13;

  @media (min-width: 45em) and (max-width: 60em) {
    grid-column: 5 / 12;
    grid-row: 1 / 5;
  }
  @media (min-width: 60em) {
    grid-column: 5 / 10;
    grid-row: 1 / 5;
  }
`

const FooterContainer = styled(Box)`
  grid-column: 1 / 13;
  grid-row: 5 / 7;
`

const Profile = ({ avatar }: any) => {
  return (
    <IntroWrapper justifyContent="center" alignItems="center" mt={4}>
      <AvatarContainer
        ml={['25%', '0']}
        width={['50%', '100%']}
        className="center"
      >
        <Avatar image={avatar} />
        <BlackMirror />
      </AvatarContainer>
      <BlurbContainer className="tc tr-ns ph2" pb="4">
        <ProfileBlurb />
      </BlurbContainer>
      <FooterContainer className="bt b--light-silver">
        <ProfileFooter />
      </FooterContainer>
    </IntroWrapper>
  )
}

export default Profile
