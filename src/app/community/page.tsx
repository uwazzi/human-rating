'use client';

import Link from 'next/link';
import { 
  Container, 
  Heading, 
  Box, 
  Flex, 
  Text, 
  Card, 
  Button, 
  Avatar, 
  Grid, 
  Badge, 
  Select,
  TextField,
  Separator
} from '@radix-ui/themes';

export default function CommunityPage() {
  // Mock data - in a real app, this would come from the database
  const topContributors = [
    {
      id: '1',
      name: 'Jane Smith',
      image: 'https://placehold.co/100x100',
      reputation: 452,
      contributions: 55
    },
    {
      id: '2',
      name: 'John Doe',
      image: 'https://placehold.co/100x100',
      reputation: 326,
      contributions: 42
    },
    {
      id: '3',
      name: 'Alex Johnson',
      image: 'https://placehold.co/100x100',
      reputation: 289,
      contributions: 37
    },
    {
      id: '4',
      name: 'Maya Williams',
      image: 'https://placehold.co/100x100',
      reputation: 275,
      contributions: 31
    },
    {
      id: '5',
      name: 'Sam Chen',
      image: 'https://placehold.co/100x100',
      reputation: 204,
      contributions: 25
    }
  ];

  const discussions = [
    {
      id: '1',
      title: 'How should we evaluate AI emotional intelligence?',
      excerpt: 'I\'ve been thinking about metrics for emotional intelligence in AI companions and wanted to get the community\'s thoughts on how we might standardize...',
      author: 'Alex Johnson',
      date: '3 days ago',
      comments: 12,
      upvotes: 24,
      tags: ['Methodology', 'Emotional AI', 'Standards']
    },
    {
      id: '2',
      title: 'Proposed updates to the Humane Tech Scorecard',
      excerpt: 'After collecting data for the past few months, I\'ve noticed some potential improvements we could make to our scoring system, particularly around...',
      author: 'Jane Smith',
      date: '1 week ago',
      comments: 28,
      upvotes: 47,
      tags: ['Humane Tech', 'Scorecard', 'Methodology']
    },
    {
      id: '3',
      title: 'Red teaming results: patterns across different LLMs',
      excerpt: 'I\'ve compiled the results from our community red teaming efforts across the top 5 LLMs and found some interesting patterns that might be worth...',
      author: 'Sam Chen',
      date: '2 weeks ago',
      comments: 19,
      upvotes: 36,
      tags: ['Red Teaming', 'Safety', 'LLMs']
    },
    {
      id: '4',
      title: 'Comparative study: Human vs AI evaluation consistency',
      excerpt: 'We recently conducted a small study comparing the consistency of human evaluators vs. automated metrics for AI rating, and the results are quite interesting...',
      author: 'Maya Williams',
      date: '2 weeks ago',
      comments: 15,
      upvotes: 29,
      tags: ['Research', 'Methodology', 'Evaluation']
    }
  ];

  return (
    <Box className="min-h-screen bg-[var(--mauve-5)]">
      <Container size="4" py="8">
        <Flex justify="between" align="center" mb="8">
          <Heading size="6" className="font-heading">Community</Heading>
          <Button size="3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            New Discussion
          </Button>
        </Flex>

        <Grid columns={{ initial: "1", lg: "3" }} gap="6">
          <Box className="lg:col-span-2 space-y-8">
            <Box>
              <Flex justify="between" align="center" mb="5">
                <Heading size="4">Discussions</Heading>
                <Flex gap="3">
                  <Select.Root defaultValue="recent">
                    <Select.Trigger />
                    <Select.Content>
                      <Select.Item value="recent">Most Recent</Select.Item>
                      <Select.Item value="upvoted">Most Upvoted</Select.Item>
                      <Select.Item value="comments">Most Comments</Select.Item>
                    </Select.Content>
                  </Select.Root>
                  <TextField.Root placeholder="Search discussions...">
                    <TextField.Slot side="left">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </TextField.Slot>
                  </TextField.Root>
                </Flex>
              </Flex>

              <Flex direction="column" gap="4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} size="2" className="hover:shadow-md transition">
                    <Link href={`/community/discussions/${discussion.id}`}>
                      <Heading size="3" mb="2" className="text-[var(--crimson-9)] hover:underline">
                        {discussion.title}
                      </Heading>
                    </Link>
                    <Text size="2" mb="4">{discussion.excerpt}</Text>
                    
                    <Flex wrap="wrap" gap="2" mb="4">
                      {discussion.tags.map((tag, i) => (
                        <Link 
                          key={i} 
                          href={`/community/tags/${tag.toLowerCase()}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <Badge variant="surface" radius="full">
                            {tag}
                          </Badge>
                        </Link>
                      ))}
                    </Flex>
                    
                    <Flex justify="between" align="center">
                      <Flex gap="3">
                        <Text size="1" color="gray">By {discussion.author}</Text>
                        <Text size="1" color="gray">{discussion.date}</Text>
                      </Flex>
                      <Flex gap="3">
                        <Flex align="center" gap="1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                          </svg>
                          <Text size="1" color="gray">{discussion.comments}</Text>
                        </Flex>
                        <Flex align="center" gap="1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                          </svg>
                          <Text size="1" color="gray">{discussion.upvotes}</Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Card>
                ))}
              </Flex>
              
              <Flex justify="center" mt="8" gap="1">
                <Button variant="surface" size="1" color="gray">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </Button>
                <Button variant="soft" size="1">1</Button>
                <Button variant="surface" size="1">2</Button>
                <Button variant="surface" size="1">3</Button>
                <Text size="1" color="gray" align="center" style={{ width: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>...</Text>
                <Button variant="surface" size="1">8</Button>
                <Button variant="surface" size="1" color="gray">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Button>
              </Flex>
            </Box>
          </Box>
          
          <Flex direction="column" gap="6">
            <Card size="2">
              <Heading size="3" mb="4">Top Contributors</Heading>
              
              <Flex direction="column" gap="4">
                {topContributors.map((contributor, index) => (
                  <Flex key={contributor.id} align="center" gap="3">
                    <Box className="w-7 h-7 rounded-full bg-[var(--mauve-4)] flex items-center justify-center">
                      <Text size="1" weight="medium">
                        {index + 1}
                      </Text>
                    </Box>
                    <Avatar 
                      size="2"
                      src={contributor.image}
                      fallback={contributor.name.substring(0, 2)}
                      radius="full"
                    />
                    <Box style={{ flex: 1 }}>
                      <Link 
                        href={`/profile/${contributor.id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Text size="2" weight="medium" className="hover:text-[var(--crimson-9)]">
                          {contributor.name}
                        </Text>
                      </Link>
                      <Text size="1" color="gray">
                        {contributor.contributions} contributions
                      </Text>
                    </Box>
                    <Badge color="blue" variant="soft">
                      {contributor.reputation}
                    </Badge>
                  </Flex>
                ))}
              </Flex>
              
              <Separator size="4" my="4" />
              
              <Text align="center" size="1">
                <Link href="/community/contributors" style={{ textDecoration: 'none', color: 'var(--crimson-9)' }}>
                  View all contributors →
                </Link>
              </Text>
            </Card>
            
            <Card size="2">
              <Heading size="3" mb="4">Popular Tags</Heading>
              
              <Flex wrap="wrap" gap="2">
                <Link href="/community/tags/methodology" style={{ textDecoration: 'none' }}>
                  <Badge size="2">Methodology</Badge>
                </Link>
                <Link href="/community/tags/humane-tech" style={{ textDecoration: 'none' }}>
                  <Badge size="2">Humane Tech</Badge>
                </Link>
                <Link href="/community/tags/llms" style={{ textDecoration: 'none' }}>
                  <Badge size="2">LLMs</Badge>
                </Link>
                <Link href="/community/tags/evaluation" style={{ textDecoration: 'none' }}>
                  <Badge size="2">Evaluation</Badge>
                </Link>
                <Link href="/community/tags/emotional-ai" style={{ textDecoration: 'none' }}>
                  <Badge size="2">Emotional AI</Badge>
                </Link>
                <Link href="/community/tags/research" style={{ textDecoration: 'none' }}>
                  <Badge size="2">Research</Badge>
                </Link>
                <Link href="/community/tags/safety" style={{ textDecoration: 'none' }}>
                  <Badge size="2">Safety</Badge>
                </Link>
                <Link href="/community/tags/red-teaming" style={{ textDecoration: 'none' }}>
                  <Badge size="2">Red Teaming</Badge>
                </Link>
              </Flex>
            </Card>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
} 