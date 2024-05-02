import { Box, Flex, Text, Button, VStack, HStack, Heading, useColorModeValue } from '@chakra-ui/react';
import { FaNetworkWired, FaChartLine, FaBell, FaTools } from 'react-icons/fa';

const Index = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bg} color={color} minH="100vh">
      <Flex direction="column" align="center" p={5}>
        <Heading mb={4}>Network Automation Dashboard</Heading>
        <Text fontSize="lg" mb={6}>Real-time insights and management tools for network operations.</Text>
      </Flex>
      <VStack spacing={5} p={5}>
        <HStack spacing={5} align="center">
          <Button leftIcon={<FaNetworkWired />} colorScheme="teal">Network Overview</Button>
          <Button leftIcon={<FaChartLine />} colorScheme="purple">Analytics</Button>
        </HStack>
        <HStack spacing={5} align="center">
          <Button leftIcon={<FaBell />} colorScheme="red">Alerts</Button>
          <Button leftIcon={<FaTools />} colorScheme="orange">Tools</Button>
        </HStack>
      </VStack>
      <Flex direction="column" align="center" p={5}>
        <Text fontSize="sm">© 2023 Network Automation Dashboard. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;