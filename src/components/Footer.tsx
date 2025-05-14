'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Box, Container, Flex, Grid, Text, Button, Heading, Link as RadixLink } from '@radix-ui/themes';

export default function Footer() {
  // Use a static year initially for server rendering, then update on client if needed
  const [year, setYear] = useState(2024);
  
  // Update year on client-side only after component mounts
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Box style={{ background: 'var(--gray-2)', borderTop: '1px solid var(--gray-5)' }} pt="8" pb="4">
      <Container size="4">
        <Grid columns={{ initial: "1", sm: "4" }} gap="6">
          <Flex direction="column" gap="4">
            <Flex align="center" gap="2">
              <Box style={{ 
                width: 'var(--space-9)', 
                height: 'var(--space-9)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: 'var(--crimson-9)', 
                borderRadius: 'var(--radius-3)' 
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" style={{ width: 'var(--space-5)', height: 'var(--space-5)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </Box>
              <Text weight="bold" size="4">Human Rating</Text>
            </Flex>
            <Text size="2">
              A collaborative platform for evaluating AI systems and companions with a focus on human-centered metrics.
            </Text>
            <Box>
              <Button size="2">Join Waitlist</Button>
            </Box>
          </Flex>
          
          <Flex direction="column" gap="3">
            <Heading size="3">Resources</Heading>
            <Flex direction="column" gap="2">
              <RadixLink asChild size="2" color="gray">
                <Link href="/about">About us</Link>
              </RadixLink>
              <RadixLink asChild size="2" color="gray">
                <Link href="/docs">Documentation</Link>
              </RadixLink>
              <RadixLink asChild size="2" color="gray">
                <Link href="/blog">Blog</Link>
              </RadixLink>
            </Flex>
          </Flex>
          
          <Flex direction="column" gap="3">
            <Heading size="3">Community</Heading>
            <Flex direction="column" gap="2">
              <RadixLink asChild size="2" color="gray">
                <Link href="/roadmap">Roadmap</Link>
              </RadixLink>
              <RadixLink asChild size="2" color="gray">
                <Link href="/feedback">Feedback</Link>
              </RadixLink>
              <RadixLink asChild size="2" color="gray">
                <Link href="/contribute">Contribute</Link>
              </RadixLink>
            </Flex>
          </Flex>
          
          <Flex direction="column" gap="3">
            <Heading size="3">Contact</Heading>
            <Flex direction="column" gap="2">
              <Text size="2" color="gray">hello@humanrating.com</Text>
              <Text size="2" color="gray">San Francisco, CA</Text>
              <Flex gap="4" mt="2">
                <RadixLink asChild color="gray" highContrast>
                  <a href="#">
                    <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Twitter</span>
                    <svg style={{ height: 'var(--space-4)', width: 'var(--space-4)' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </RadixLink>
                <RadixLink asChild color="gray" highContrast>
                  <a href="#">
                    <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>GitHub</span>
                    <svg style={{ height: 'var(--space-4)', width: 'var(--space-4)' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </RadixLink>
              </Flex>
            </Flex>
          </Flex>
        </Grid>
        
        <Flex direction={{ initial: "column", sm: "row" }} justify="between" align="center" mt="8" pt="6" style={{ borderTop: '1px solid var(--gray-5)' }}>
          <Text size="1" color="gray">
            &copy; {year} Human Rating. All rights reserved.
          </Text>
          <Flex gap="6" mt={{ initial: '4', sm: '0' }}>
            <RadixLink asChild size="1" color="gray">
              <Link href="/privacy">Privacy Policy</Link>
            </RadixLink>
            <RadixLink asChild size="1" color="gray">
              <Link href="/terms">Terms of Service</Link>
            </RadixLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
} 