'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Box, Button, Flex, Text, IconButton, Avatar } from '@radix-ui/themes';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { appearance, setAppearance } = useTheme();
  
  const toggleTheme = () => {
    setAppearance(appearance === 'light' ? 'dark' : 'light');
  };
  
  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <Box className="sticky top-0 z-50 border-b border-[var(--mauve-6)]" style={{ backgroundColor: 'var(--color-background)' }}>
      <Flex justify="between" align="center" py="4" px="6" className="max-w-7xl mx-auto">
        <Flex align="center">
          <Link href="/" className="flex items-center">
            <Box className="w-10 h-10 flex items-center justify-center bg-[var(--crimson-9)] rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
              </svg>
            </Box>
            <Text ml="3" weight="bold" size="4" className="font-heading">Human Rating</Text>
          </Link>
          
          <Flex gap="6" ml="6" display={{ initial: 'none', sm: 'flex' }}>
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-md text-base font-body font-medium ${
                isActive('/') 
                  ? 'text-[var(--crimson-9)] font-semibold' 
                  : 'text-[var(--mauve-11)] hover:text-[var(--crimson-9)]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/ai-systems" 
              className={`px-3 py-2 rounded-md text-base font-body font-medium ${
                isActive('/ai-systems') 
                  ? 'text-[var(--crimson-9)] font-semibold' 
                  : 'text-[var(--mauve-11)] hover:text-[var(--crimson-9)]'
              }`}
            >
              AI Systems
            </Link>
            <Link 
              href="/community" 
              className={`px-3 py-2 rounded-md text-base font-body font-medium ${
                isActive('/community') 
                  ? 'text-[var(--crimson-9)] font-semibold' 
                  : 'text-[var(--mauve-11)] hover:text-[var(--crimson-9)]'
              }`}
            >
              Community
            </Link>
            <Link 
              href="/components" 
              className={`px-3 py-2 rounded-md text-base font-body font-medium ${
                isActive('/components') 
                  ? 'text-[var(--crimson-9)] font-semibold' 
                  : 'text-[var(--mauve-11)] hover:text-[var(--crimson-9)]'
              }`}
            >
              Components
            </Link>
          </Flex>
        </Flex>
        
        <Flex align="center" gap="4" display={{ initial: 'none', sm: 'flex' }}>
          <IconButton variant="ghost" onClick={toggleTheme} aria-label="Toggle theme">
            {appearance === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            )}
          </IconButton>
          <Button>Sign in</Button>
          <Avatar
            size="3"
            src="https://placehold.co/100x100"
            fallback="US"
            radius="full"
          />
        </Flex>
        
        <Box display={{ sm: 'none' }}>
          <IconButton
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {!isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </IconButton>
        </Box>
      </Flex>

      {isMenuOpen && (
        <Box className="sm:hidden bg-[var(--color-background)] border-t border-[var(--mauve-6)]">
          <Flex direction="column" p="4" gap="2">
            <Link 
              href="/" 
              className={`py-2 px-3 font-body text-base ${
                isActive('/') 
                  ? 'text-[var(--crimson-9)] font-semibold' 
                  : 'text-[var(--mauve-11)]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/ai-systems" 
              className={`py-2 px-3 font-body text-base ${
                isActive('/ai-systems') 
                  ? 'text-[var(--crimson-9)] font-semibold' 
                  : 'text-[var(--mauve-11)]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              AI Systems
            </Link>
            <Link 
              href="/community" 
              className={`py-2 px-3 font-body text-base ${
                isActive('/community') 
                  ? 'text-[var(--crimson-9)] font-semibold' 
                  : 'text-[var(--mauve-11)]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link 
              href="/components" 
              className={`py-2 px-3 font-body text-base ${
                isActive('/components') 
                  ? 'text-[var(--crimson-9)] font-semibold' 
                  : 'text-[var(--mauve-11)]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Components
            </Link>
            
            <Flex align="center" gap="2" mt="2">
              <IconButton variant="ghost" onClick={toggleTheme} aria-label="Toggle theme">
                {appearance === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                )}
              </IconButton>
              <Text size="2">Toggle {appearance === 'light' ? 'Dark' : 'Light'} Mode</Text>
            </Flex>
            
            <Button mt="2">Sign in</Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
} 