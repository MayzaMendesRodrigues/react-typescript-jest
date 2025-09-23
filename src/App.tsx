"use client";
import "./App.css";
import Layout from "./Components/Layout";
import {
  ChakraProvider,
  Input,
  Button,
  defaultSystem,
  Flex,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import login from "./Services/login";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Layout>
        <Flex
          minH="100vh"
          align="center"
          justify="center"
          bg="linear-gradient(135deg, #1a365d 0%, #2d3748 100%)"
          p={4}
        >
          <Box
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="2xl"
            w="100%"
            maxW="md"
          >
            <Flex direction="column" align="center" mb={8}>
              <Box
                w="60px"
                h="60px"
                bg="blue.500"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={4}
              >
                {" "}
                Banco
              </Box>
              <Heading size="lg" color="gray.700" mb={2}>
                Banco Seguro
              </Heading>
              <Text color="gray.600" textAlign="center">
                Acesse sua conta bancária
              </Text>
            </Flex>
            <Input
              type="email"
              placeholder="seu@email.com"
              bg="gray.50"
              borderColor="gray.300"
              _hover={{ borderColor: "blue.300" }}
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              pr="4.5rem"
              mb="25px"
            />
            <Input
              type="email"
              placeholder="Digite sua senha"
              bg="gray.50"
              borderColor="gray.300"
              _hover={{ borderColor: "blue.300" }}
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              pr="4.5rem"
              mb="25px"
            />
            <Button
            onClick={login}
              type="submit"
              w="100%"
              bg="blue.500"
              color="white"
              size="lg"
              fontSize="md"
              fontWeight="bold"
              loadingText="Entrando..."
              _hover={{
                bg: "blue.600",
                transform: "translateY(-1px)",
                boxShadow: "lg",
              }}
              _active={{
                bg: "blue.700",
                transform: "translateY(0)",
              }}
              transition="all 0.2s"
            >
              Acessar Conta
            </Button>
            <Flex justify="center" mt={6}>
              <Text color="gray.500" fontSize="sm">
                Esqueceu sua senha?{" "}
                <Text
                  as="span"
                  color="blue.500"
                  cursor="pointer"
                  fontWeight="medium"
                >
                  Clique aqui
                </Text>
              </Text>
            </Flex>

            {/* Security Message */}
            <Box
              mt={8}
              p={3}
              bg="green.50"
              borderRadius="md"
              border="1px solid"
              borderColor="green.200"
            >
              <Text fontSize="xs" color="green.800" textAlign="center">
                🔒 Sua segurança é nossa prioridade. Dados criptografados.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
