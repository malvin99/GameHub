import { Flex, Text,Spinner } from "@chakra-ui/react";

function SkeletonLoader () {
  return (
    <Flex
      height="100vh" // Full height of the viewport
      width="100%"   // Full width of the viewport
      alignItems="center" // Center vertically
      justifyContent="center" // Center horizontally
    >
      <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
       />
      <Text marginLeft={4}>Loading...</Text> {/* Optional loading text */}
    </Flex>
  );
};

export default SkeletonLoader