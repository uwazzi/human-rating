'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Container, 
  Heading, 
  Box, 
  Flex, 
  Text, 
  Card, 
  TextField, 
  Select, 
  Badge, 
  Grid, 
  Progress,
  Separator 
} from '@radix-ui/themes';

export default function AISystems() {
  // Placeholder data - in a real app, this would come from the database
  const aiSystems = [
    {
      id: '1',
      name: 'ChatGPT',
      description: 'Conversational AI assistant with broad knowledge and capabilities',
      imageUrl: '/images/ai-logos/chatgpt.png',
      category: 'Large Language Model',
      provider: 'OpenAI',
      scores: {
        caredFor: 4.2,
        present: 4.5,
        fulfilled: 4.3,
        connected: 3.9,
        average: 4.2
      }
    },
    {
      id: '2',
      name: 'Claude',
      description: 'Helpful, harmless, and honest AI assistant focused on safety',
      imageUrl: '/images/ai-logos/claude.png',
      category: 'Large Language Model',
      provider: 'Anthropic',
      scores: {
        caredFor: 4.5,
        present: 4.3,
        fulfilled: 4.4,
        connected: 4.2,
        average: 4.4
      }
    },
    {
      id: '3',
      name: 'Gemini',
      description: 'Multimodal AI system with text, image, and video capabilities',
      imageUrl: '/images/ai-logos/gemini.png',
      category: 'Multimodal AI',
      provider: 'Google',
      scores: {
        caredFor: 4.0,
        present: 4.2,
        fulfilled: 4.3,
        connected: 3.8,
        average: 4.1
      }
    },
    {
      id: '4',
      name: 'Replika',
      description: 'AI companion focused on emotional support and friendship',
      imageUrl: '/images/ai-logos/replika.png',
      category: 'AI Companion',
      provider: 'Luka, Inc.',
      scores: {
        caredFor: 4.8,
        present: 4.7,
        fulfilled: 4.2,
        connected: 4.9,
        average: 4.7
      }
    }
  ];

  return (
    <Box className="min-h-screen bg-[var(--mauve-5)]">
      <Container size="4" py="8">
        <Flex justify="between" align="center" mb="6">
          <Heading size="6" className="font-heading">AI Systems & Companions</Heading>
          <Flex gap="4">
            <Box position="relative">
              <TextField.Root placeholder="Search AI systems...">
                <TextField.Slot side="left">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </TextField.Slot>
              </TextField.Root>
            </Box>
            <Select.Root defaultValue="all">
              <Select.Trigger placeholder="Filter by category" />
              <Select.Content>
                <Select.Item value="all">All Categories</Select.Item>
                <Select.Item value="Large Language Model">Large Language Model</Select.Item>
                <Select.Item value="Multimodal AI">Multimodal AI</Select.Item>
                <Select.Item value="AI Companion">AI Companion</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        </Flex>

        <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap="5">
          {aiSystems.map((ai) => (
            <Link href={`/ai-systems/${ai.id}`} key={ai.id} style={{ textDecoration: 'none' }}>
              <Card size="2" style={{ height: '100%' }} className="hover:shadow-xl transition-shadow">
                <Box style={{ height: '180px' }} className="bg-[var(--mauve-4)] rounded-t-lg overflow-hidden relative flex items-center justify-center">
                  <Image 
                    src={ai.imageUrl} 
                    alt={ai.name} 
                    className="object-contain"
                    width={150}
                    height={150}
                  />
                </Box>
                <Box p="4">
                  <Flex justify="between" align="start" mb="2">
                    <Heading size="4">{ai.name}</Heading>
                    <Badge color="blue" radius="full">
                      {ai.category}
                    </Badge>
                  </Flex>
                  <Text size="2" color="gray" mb="3">{ai.provider}</Text>
                  <Text size="2" mb="4">{ai.description}</Text>
                  
                  <Separator size="4" mb="4" />
                  
                  <Flex justify="between" align="center" mb="2">
                    <Text size="2" weight="medium">Humane Tech Score</Text>
                    <Text size="5" weight="bold" color="blue">{ai.scores.average}/5</Text>
                  </Flex>
                  <Progress value={ai.scores.average * 20} color="blue" radius="full" mb="4" />
                  <Grid columns="2" gap="2">
                    <Flex justify="between">
                      <Text size="1">Cared for:</Text>
                      <Text size="1" weight="medium">{ai.scores.caredFor}/5</Text>
                    </Flex>
                    <Flex justify="between">
                      <Text size="1">Present:</Text>
                      <Text size="1" weight="medium">{ai.scores.present}/5</Text>
                    </Flex>
                    <Flex justify="between">
                      <Text size="1">Fulfilled:</Text>
                      <Text size="1" weight="medium">{ai.scores.fulfilled}/5</Text>
                    </Flex>
                    <Flex justify="between">
                      <Text size="1">Connected:</Text>
                      <Text size="1" weight="medium">{ai.scores.connected}/5</Text>
                    </Flex>
                  </Grid>
                </Box>
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 