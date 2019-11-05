import { Box, Flex, Text } from 'rebass/styled-components'
import Link from 'gatsby-link'
import React from 'react'

const SeeMoreLink = ({
  href,
  totalNumImages,
}: {
  href: string
  totalNumImages: number
}) => {
  if (totalNumImages <= 6) {
    return (
      <Box
        marginBottom={2}
        marginTop={4}
        style={{ borderTop: '1px solid rgb(221, 221, 221)' }}
      >
        &nbsp;
      </Box>
    )
  } else {
    return (
      <>
        <Flex
          justifyContent="flex-end"
          alignItems="items-center"
          marginBottom="0"
        >
          <Link to={href}>
            <Text
              color="textDarkMuted"
              fontFamily="smallcaps"
              hoverColor="textDark"
              fontSize={4}
            >
              See More →
            </Text>
          </Link>
        </Flex>
        <Box
          marginBottom={4}
          marginTop={2}
          style={{ borderTop: '1px solid rgb(221, 221, 221)' }}
        >
          &nbsp;
        </Box>
      </>
    )
  }
}

export default SeeMoreLink
