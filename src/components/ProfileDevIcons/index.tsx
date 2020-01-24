import 'styles/hvr-animations.css'

import { Box, Flex, Text, TextProps } from 'rebass/styled-components'
import React, { Fragment } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import colors from 'utils/colors'

import DevIconColumn from './DevIconColumn'
import DevIconSkills from './DevIconSkills'

const WhatImUpToText = styled(Text)<TextProps & { fontWeight: any }>``

const ProfileDevIcons = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <WhatImUpToText
          fontFamily="serif"
          fontSize={3}
          fontWeight="body"
          mb={3}
          mt={5}
          py={3}
          textAlign="center"
          width="75%"
        >
          Tackling novel problems —
          <span style={{ whiteSpace: 'nowrap' }}>
            &nbsp;at every level of the stack&nbsp;
          </span>
          — <span style={{ whiteSpace: 'nowrap' }}>is my jam.</span>
          <br />
          Here are some of the technologies I've enjoyed hacking on lately:
        </WhatImUpToText>
      </Flex>
      <DevIconsSection
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        width="90%"
      >
        {DevIconSkills.map((devIcon, index) => (
          <Fragment key={devIcon.label}>
            <DevIconLabel
              className="moon-gray flex items-center justify-start"
              fontFamily="monospace"
              fontSize={4}
            >
              {devIcon.label}
            </DevIconLabel>
            {devIcon.icons.map((DevIcon, innerIndex) => (
              <DevIconColumn
                key={innerIndex}
                DevIcon={DevIcon}
                className={classNames({
                  'bb b--white-50':
                    innerIndex + 1 > devIcon.icons.length / 2 &&
                    index < DevIconSkills.length,
                  'bb-ns b--white-50': innerIndex + 1 < devIcon.icons.length,
                })}
              />
            ))}
          </Fragment>
        ))}
      </DevIconsSection>
    </>
  )
}

const DevIconLabel = styled(Text)`
  @media (max-width: 45em) {
    border-bottom: 1px solid ${colors.primary};
    grid-column: span 9;
    grid-row: span 2;
  }
  @media (min-width: 45em) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    grid-row: span 1;
    grid-column: span 2;
  }
`

const DevIconsSection = styled(Box)`
  display: grid;
  @media (max-width: 45em) {
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: max-content;
  }
  @media (min-width: 45em) {
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`

export default ProfileDevIcons
