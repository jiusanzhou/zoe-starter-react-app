import React from 'react';
import { Flex, Box, SimpleGrid } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../views/ColorModeSwitcher';

const Header = ({ ...props }) => {
  return (
    <SimpleGrid as="header" m="0 auto" h="100%" alignItems="center" {...props}>
      <ColorModeSwitcher justifySelf="flex-end" />
    </SimpleGrid>
  );
};

const Footer = () => {
  return <Flex as="footer"></Flex>;
};

// maxW ??? of page

export default ({ children, header = {}, footer = {}, ...props }) => {
  return (
    <Box>
      <Box
        top={0}
        left={0}
        right={0}
        w="100%"
        h={['3.5em', '4em', '4em', '5em']}
        position="fixed"
        borderBottomWidth="1px"
        borderBottomStyle="solid"
        // borderBottom="1px solid #e2e2e2"
        // borderBottomColor={useColorModeValue('#e2e2e2', 'rgba(255, 255, 255, 0.16)')}
      >
        <Header maxW={['95%', '80%', '80%', '68em']} {...header} />
      </Box>
      {/* the main body for page */}
      <Box as="main" pt={['3.5em', '4em', '4em', '5em']} minH="100vh" d="flex">
        {children}
      </Box>
      <Footer {...footer} />
    </Box>
  );
};
