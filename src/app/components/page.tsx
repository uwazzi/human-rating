'use client';

import React from 'react';
import { 
  Heading, 
  Text, 
  Box, 
  Flex, 
  Button, 
  Card, 
  Tabs,
  Section,
  Badge,
  Avatar,
  TextField,
  TextArea,
  Select,
  Container,
  Separator,
  Switch,
  Checkbox,
  RadioGroup,
  Radio,
  Popover
} from '@radix-ui/themes';

export default function ComponentsPage() {
  return (
    <Container size="3">
      <Section size="3">
        <Heading size="8" className="font-heading mb-8">Radix UI Components</Heading>
        
        {/* Buttons Section */}
        <Flex direction="column" gap="8" mb="9">
          <Heading size="6" className="font-heading">Buttons</Heading>
          <Box>
            <Heading size="3" mb="4">Variants</Heading>
            <Flex gap="4" wrap="wrap" mb="6">
              <Button>Default</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </Flex>
            
            <Heading size="3" mb="4">Sizes</Heading>
            <Flex gap="4" wrap="wrap" mb="6" align="center">
              <Button size="1">Size 1</Button>
              <Button size="2">Size 2</Button>
              <Button size="3">Size 3</Button>
              <Button size="4">Size 4</Button>
            </Flex>
            
            <Heading size="3" mb="4">Colors</Heading>
            <Flex gap="4" wrap="wrap">
              <Button color="crimson">Crimson</Button>
              <Button color="yellow">Yellow</Button>
              <Button color="green">Green</Button>
              <Button color="blue">Blue</Button>
              <Button color="purple">Purple</Button>
            </Flex>
          </Box>
        </Flex>
        
        {/* Cards Section */}
        <Flex direction="column" gap="8" mb="9">
          <Heading size="6" className="font-heading">Cards</Heading>
          <Flex gap="6" wrap="wrap">
            <Card size="2" style={{ width: 300 }}>
              <Flex direction="column" gap="3">
                <Heading size="4">Card Title</Heading>
                <Text size="2">This is a basic card component with some content.</Text>
                <Flex gap="3" mt="3">
                  <Button size="2" variant="soft">Cancel</Button>
                  <Button size="2">Submit</Button>
                </Flex>
              </Flex>
            </Card>
            
            <Card size="2" style={{ width: 300 }}>
              <Flex direction="column" gap="3">
                <Heading size="4">Feature Overview</Heading>
                <Text size="2">Our platform provides comprehensive tools for evaluating AI systems.</Text>
                <Flex gap="3" mt="3" justify="between">
                  <Button size="2" variant="outline">Learn More</Button>
                  <Button size="2">Get Started</Button>
                </Flex>
              </Flex>
            </Card>
            
            <Card size="2" style={{ width: 300 }}>
              <Flex gap="4">
                <Avatar 
                  size="4" 
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                  fallback="AI"
                  radius="full"
                />
                <Box>
                  <Heading size="3" mb="1">AI Assistant Rating</Heading>
                  <Text size="2" color="gray">Rating: 4.8/5</Text>
                  <Flex gap="1" mt="3">
                    <Badge color="yellow">Empathetic</Badge>
                    <Badge color="blue">Responsive</Badge>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          </Flex>
        </Flex>
        
        {/* Tabs Section */}
        <Flex direction="column" gap="8" mb="9">
          <Heading size="6" className="font-heading">Tabs</Heading>
          <Tabs.Root defaultValue="overview">
            <Tabs.List>
              <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
              <Tabs.Trigger value="features">Features</Tabs.Trigger>
              <Tabs.Trigger value="metrics">Metrics</Tabs.Trigger>
              <Tabs.Trigger value="community">Community</Tabs.Trigger>
            </Tabs.List>
            <Box pt="4">
              <Tabs.Content value="overview">
                <Card size="1">
                  <Heading size="4" mb="2">Human Rating Overview</Heading>
                  <Text size="2">Human Rating is a platform designed to evaluate AI companions based on human-centered metrics, focusing on how these systems affect user wellbeing and experience.</Text>
                </Card>
              </Tabs.Content>
              <Tabs.Content value="features">
                <Card size="1">
                  <Heading size="4" mb="2">Key Features</Heading>
                  <Flex direction="column" gap="2">
                    <Text size="2">• Comprehensive evaluation framework</Text>
                    <Text size="2">• Community-driven assessments</Text>
                    <Text size="2">• Transparent scoring system</Text>
                    <Text size="2">• Comparative analysis tools</Text>
                  </Flex>
                </Card>
              </Tabs.Content>
              <Tabs.Content value="metrics">
                <Card size="1">
                  <Heading size="4" mb="2">Evaluation Metrics</Heading>
                  <Text size="2" mb="2">Our evaluation metrics focus on:</Text>
                  <Flex direction="column" gap="2">
                    <Text size="2">• Emotional support and empathy</Text>
                    <Text size="2">• User engagement and attention</Text>
                    <Text size="2">• Sense of accomplishment</Text>
                    <Text size="2">• Feeling of connection</Text>
                  </Flex>
                </Card>
              </Tabs.Content>
              <Tabs.Content value="community">
                <Card size="1">
                  <Heading size="4" mb="2">Join Our Community</Heading>
                  <Text size="2" mb="4">Become part of our growing community of AI enthusiasts and contribute to making AI companions more human-centered.</Text>
                  <Button>Join Now</Button>
                </Card>
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </Flex>
        
        {/* Form Elements */}
        <Flex direction="column" gap="8" mb="9">
          <Heading size="6" className="font-heading">Form Elements</Heading>
          <Card size="2">
            <Flex direction="column" gap="5" style={{ maxWidth: 500 }}>
              <Heading size="4">AI System Registration</Heading>
              <Flex direction="column" gap="3">
                <label>
                  <Text size="2" mb="1" weight="bold">System Name</Text>
                  <TextField.Root placeholder="Enter AI system name" />
                </label>
                
                <label>
                  <Text size="2" mb="1" weight="bold">Description</Text>
                  <TextArea placeholder="Describe the AI system" />
                </label>
                
                <label>
                  <Text size="2" mb="1" weight="bold">Primary Category</Text>
                  <Select.Root defaultValue="assistant">
                    <Select.Trigger />
                    <Select.Content>
                      <Select.Item value="assistant">Virtual Assistant</Select.Item>
                      <Select.Item value="companion">AI Companion</Select.Item>
                      <Select.Item value="tutor">Educational AI</Select.Item>
                      <Select.Item value="creative">Creative AI</Select.Item>
                    </Select.Content>
                  </Select.Root>
                </label>
                
                <Flex direction="column" gap="2">
                  <Text size="2" weight="bold">Features</Text>
                  <Flex gap="5">
                    <label>
                      <Flex gap="2" align="center">
                        <Checkbox /> 
                        <Text size="2">Voice capability</Text>
                      </Flex>
                    </label>
                    <label>
                      <Flex gap="2" align="center">
                        <Checkbox /> 
                        <Text size="2">Image generation</Text>
                      </Flex>
                    </label>
                  </Flex>
                </Flex>
                
                <Flex direction="column" gap="2">
                  <Text size="2" weight="bold">Access Type</Text>
                  <RadioGroup.Root defaultValue="public">
                    <Flex direction="column" gap="2">
                      <label>
                        <Flex gap="2" align="center">
                          <Radio value="public" />
                          <Text size="2">Public</Text>
                        </Flex>
                      </label>
                      <label>
                        <Flex gap="2" align="center">
                          <Radio value="private" />
                          <Text size="2">Private / Subscription</Text>
                        </Flex>
                      </label>
                    </Flex>
                  </RadioGroup.Root>
                </Flex>
                
                <Flex justify="between" align="center">
                  <Flex gap="2" align="center">
                    <Switch />
                    <Text size="2">Notify me of updates</Text>
                  </Flex>
                  <Popover.Root>
                    <Popover.Trigger>
                      <Button variant="soft" size="1">Need help?</Button>
                    </Popover.Trigger>
                    <Popover.Content>
                      <Flex direction="column" gap="3" p="2" style={{ maxWidth: 250 }}>
                        <Heading size="3">Registration Help</Heading>
                        <Text size="2">
                          Fill out this form to register a new AI system for evaluation.
                          All fields are required.
                        </Text>
                      </Flex>
                    </Popover.Content>
                  </Popover.Root>
                </Flex>
                
                <Separator size="4" my="3" />
                
                <Flex gap="3" justify="end">
                  <Button variant="soft">Cancel</Button>
                  <Button>Submit</Button>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Section>
    </Container>
  );
} 