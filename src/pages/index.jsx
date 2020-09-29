import React from 'react';
import { Flex, Code, Text } from '@chakra-ui/core';

export default ({ ...props }) => {
  return (
    <Flex w="100%" {...props} justifyContent="center" alignItems="center">
      <Text>
        Edit <Code fontSize="xl">src/pages/index.jsx</Code> and save to reload.
      </Text>
    </Flex>
  );
};
