
import styled from 'styled-components';
import { Button } from './Button';
import { HiHeart, HiOutlineEmojiHappy, HiSun, HiOutlineHeart } from 'react-icons/hi';
import {Box} from './Box';
import { AppBar } from './AppBar';

const Text = styled.p`
color: ${p => p.theme.colors.accent};
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes.l};
padding: ${p => p.theme.space[4]}px;
// padding-bottom
`;

export const App = () => {
  return (
    <Box position='relative'as='main' // this feature is part of the library Emotion or styled components
    >
      <AppBar/>
      
      <Box display="flex" justifyContent="flex-end" mt={4} as="section">
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
        possimus.
      </Text>
      </Box>

      <Box as="section" mt={6}>
      <Button icon={HiOutlineEmojiHappy}>Search</Button>
      <Button icon={HiOutlineHeart}>Filter</Button>
      <Button icon={HiSun}>Show Modal</Button>
      <Button icon={HiHeart} type = "submit">
        LogIn
      </Button>
      <Button type="submit" disabled>
        LogIn
      </Button>
      </Box>

    </Box>
  );
};

// spacing props