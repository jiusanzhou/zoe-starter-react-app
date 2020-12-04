import React from 'react';
import {
  Center,
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Code,
} from '@chakra-ui/react';

export default ({ location, history, title = '404：页面未找到!' }) => {
  return (
    <Center w="100%">
      <Flex maxWidth="80em" p="1rem" margin="auto">
        <Box w="sm" borderWidth="1px" rounded="lg" p='1rem'>
          <Heading size="sm">{title}</Heading>
          <Text mt="1em">
            URL: <Code>{location.pathname}</Code>
          </Text>
          <Flex mt="1em" justifyContent="end">
            <Button
              size="sm"
              onClick={() => {
                history.goBack();
              }}
            >
              返回
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Center>
  );
};
