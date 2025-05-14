'use client';

import Link from 'next/link';
import { Button, Container, Section, Heading, Text, Card, Flex, Badge, Box, Theme } from '@radix-ui/themes';

export default function Home() {
  return (
    <Theme>
      <Box className="relative">
        <Container size="4">
          {/* Hero Section */}
          <Section size="3" py="9">
            <Flex direction="column" align="center" gap="8">
              <Heading size="9" weight="bold" align="center">
              AI Under Review: Where People Rate Their Digital Companions
              </Heading>
              
              <Text size="5" align="center" style={{ maxWidth: '48rem' }}>
                A collaborative platform for evaluating AI systems with a focus on <Text weight="bold">human-centered</Text> metrics.
              </Text>
              
              <Flex gap="4" mt="6">
                <Button size="3" asChild>
                  <Link href="/ai-systems">Browse AI Systems</Link>
                </Button>
                <Button size="3" variant="soft" asChild>
                  <Link href="/community">Join Community</Link>
                </Button>
              </Flex>
            </Flex>
          </Section>

          {/* Features Section */}
          <Section size="3" py="9" style={{ background: 'var(--gray-2)' }}>
            <Flex direction="column" align="center" gap="8">
              <Heading size="6" weight="bold" align="center">
                Why Human Rating?
              </Heading>
              
              <Flex wrap="wrap" gap="6" justify="center">
                <Card size="3" style={{ width: 320 }}>
                  <Flex direction="column" align="center" gap="3">
                    <Badge size="2" radius="full" variant="solid" color="crimson" style={{ padding: 'var(--space-4)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                      </svg>
                    </Badge>
                    <Heading size="4" align="center">Human-Centered</Heading>
                    <Text size="2" align="center">
                      Evaluations focus on actual human experiences rather than just technical metrics
                    </Text>
                  </Flex>
                </Card>
                
                <Card size="3" style={{ width: 320 }}>
                  <Flex direction="column" align="center" gap="3">
                    <Badge size="2" radius="full" variant="solid" color="amber" style={{ padding: 'var(--space-4)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                    </Badge>
                    <Heading size="4" align="center">Collaborative</Heading>
                    <Text size="2" align="center">
                      Community-driven approach with wiki-style editing and collective moderation
                    </Text>
                  </Flex>
                </Card>
                
                <Card size="3" style={{ width: 320 }}>
                  <Flex direction="column" align="center" gap="3">
                    <Badge size="2" radius="full" variant="solid" color="blue" style={{ padding: 'var(--space-4)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                      </svg>
                    </Badge>
                    <Heading size="4" align="center">Transparent</Heading>
                    <Text size="2" align="center">
                      Clear metrics with structured impact assessments and open evaluation methodologies
                    </Text>
                  </Flex>
                </Card>
              </Flex>
            </Flex>
          </Section>
          
          {/* CTA Section */}
          <Section size="3" py="9">
            <Flex direction="column" align="center" gap="6" style={{ maxWidth: '48rem', margin: '0 auto' }}>
              <Heading size="6" weight="bold" align="center">
                Get Started Today
              </Heading>
              <Text size="3" align="center">
                Join our community of AI enthusiasts and contribute to making AI companions more human-centered.
              </Text>
              <Button size="3" asChild>
                <Link href="/ai-systems">Rate AI Systems Now</Link>
              </Button>
            </Flex>
          </Section>
        </Container>
      </Box>
    </Theme>
  );
}
