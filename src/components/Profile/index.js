import React from 'react'

import Avatar from './Avatar'
import ProfileBlurb from './ProfileBlurb'
import ProfileFooter from './ProfileFooter'

import styled from 'styled-components'

const IntroWrapper = styled.div.attrs({
  className: 'items-center justify-center pv4',
})`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  min-height: calc(100vh - 21px);

  @media (min-width: 45em) {
    grid-template-rows: repeat(2, 1fr);
  }
`

const AvatarContainer = styled.div.attrs({
  className: 'center mw-100-ns mw-50',
})`
  grid-column: 5 / 9;

  @media (min-width: 45em) and (max-width: 60em) {
    grid-column: 2 / 5;
    grid-row: 1 / 5;
  }
  @media (min-width: 60em) {
    grid-column: 3 / 5;
    grid-row: 1 / 5;
  }
`

const BlurbContainer = styled.div.attrs({
  className: 'tc tr-ns ph2',
})`
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

const FooterContainer = styled.div.attrs({
  className: 'bt b--light-silver',
})`
  grid-column: 1 / 13;
  grid-row: 5 / 7;
`

const Profile = () => (
  <IntroWrapper>
    <AvatarContainer>
      <Avatar />
    </AvatarContainer>
    <BlurbContainer>
      <ProfileBlurb />
    </BlurbContainer>
    <FooterContainer>
      <ProfileFooter />
    </FooterContainer>
  </IntroWrapper>
)

export default Profile
