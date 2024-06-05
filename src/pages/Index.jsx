import { useState } from "react";
import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer, Input, Textarea, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([
    { title: "Post Title 1", content: "This is a summary of the first blog post..." },
    { title: "Post Title 2", content: "This is a summary of the second blog post..." }
  ]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const handleAddPost = () => {
    const newPost = { title: newPostTitle, content: newPostContent };
    setPosts([newPost, ...posts]);
    setNewPostTitle("");
    setNewPostContent("");
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg={useColorModeValue("brand.800", "gray.800")} color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <Spacer />
            <HStack spacing={4}>
              <Link href="#home" _hover={{ textDecoration: "none", color: "brand.700" }}>Home</Link>
              <Link href="#about" _hover={{ textDecoration: "none", color: "brand.700" }}>About</Link>
              <Link href="#contact" _hover={{ textDecoration: "none", color: "brand.700" }}>Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={10} color={useColorModeValue("black", "white")}>
        <VStack spacing={8} align="start">
          <Box>
            <Heading as="h2" size="xl">Welcome to My Blog</Heading>
            <Text fontSize="lg" mt={4}>This is a place where I share my thoughts and experiences.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg">Add a New Post</Heading>
            <VStack spacing={4} mt={4} align="start">
              <Input
                placeholder="Title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
              />
              <Textarea
                placeholder="Content"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              />
              <Button colorScheme="blue" onClick={handleAddPost}>Add Post</Button>
            </VStack>
          </Box>
          <Box>
            <Heading as="h3" size="lg">Latest Posts</Heading>
            <VStack spacing={4} mt={4} align="start">
              {posts.map((post, index) => (
                <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
                  <Heading fontSize="xl">{post.title}</Heading>
                  <Text mt={4}>{post.content}</Text>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg={useColorModeValue("brand.800", "gray.800")} color="white" py={4} mt={10}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <Spacer />
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <FaLinkedin />
              </Link>
              <Link href="https://github.com" isExternal>
                <FaGithub />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;