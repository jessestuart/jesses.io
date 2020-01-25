import Link from 'gatsby-link'
import React from 'react'
import { Box, Flex, Text } from 'rebass/styled-components'

const SeeMoreLink = ({
  href,
  totalNumImages,
  ...rest
}: {
  href: string
  totalNumImages: number
  [otherProp: string]: any
}) => {
  if (totalNumImages <= 6) {
    return null
    /* return ( */
    /*   <Box */
    /*     marginBottom={2} */
    /*     marginTop={4} */
    /*     style={{ borderTop: '1px solid rgb(221, 221, 221)' }} */
    /*   > */
    /*     &nbsp; */
    /*   </Box> */
    /* ) */
  } else {
    return (
      <Box mx={2} {...rest}>
        <Flex
          justifyContent="flex-end"
          alignItems="items-center"
          marginBottom="0"
        >
          <Link to={href}>
            <Text
              color="textMediumMuted"
              // color="textDarkMuted"
              fontFamily="smallcaps"
              fontSize={4}
              sx={{
                ':hover': {
                  color: 'textDark',
                },
              }}
            >
              See More →
            </Text>
          </Link>
        </Flex>
        <Box
          marginBottom={4}
          marginTop={2}
          sx={{ borderTop: '1px solid rgb(221, 221, 221)' }}
        >
          &nbsp;
        </Box>
      </Box>
    )
  }
}

export default SeeMoreLink
