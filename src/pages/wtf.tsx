import * as C from '@chakra-ui/react';
import Link from 'next/link';
import Check from '../images/check.svg';
import ChevronRight from '../images/chevron-right.svg';
import LogoIcon from '../images/logo-icon.svg';
import Logo from '../images/logo.svg';

const WtfPage = () => (
  <C.Container maxW={{ base: 'container.xs', sm: 'container.md' }} pb={24} textAlign="center">
    <C.Box as="header">
      <C.Heading alignItems="center" as="h1" display="flex" justifyContent="space-between" pt={8}>
        <C.VisuallyHidden>llist — dynamic checklists</C.VisuallyHidden>
        <C.Icon aria-hidden as={Logo} h={10} w="auto" />
        <C.Icon aria-hidden as={LogoIcon} h={10} w="auto" />
      </C.Heading>
      <C.Heading as="p" mt={24} size="xl">
        <C.Box
          as="span"
          bgClip="text"
          bgGradient="linear(to-r, green.400, blue.400, purple.400, pink.400, red.400, orange.400, yellow.400)"
        >
          conquer the chaos with
        </C.Box>{' '}
        dynamic checklists
      </C.Heading>
      <C.Button
        as={Link}
        href="/"
        iconSpacing={6}
        mt={24}
        rightIcon={<C.Icon as={ChevronRight} boxSize={6} />}
        variant="primary"
        w="full"
      >
        give it a whirl
      </C.Button>
      <C.Center>
        <C.Divider display={{ base: 'none', sm: 'block' }} h={24} orientation="vertical" />
      </C.Center>
       <C.Center bg="inherit" layerStyle="borderCard" py={24}>
        <C.List color="fgSecondary" spacing={2} textAlign="left">
          {['no sign up required', 'no analytics or ads', 'free & open source'].map((item) => (
            <C.ListItem alignItems="center" display="flex" key={item}>
              <C.ListIcon as={Check} boxSize={6} color="fgPrimary" me={6} />
              {item}
            </C.ListItem>
          ))}
        </C.List>
      </C.Center>
    </C.Box>
    <C.Center>
      <C.Divider h={24} orientation="vertical" />
    </C.Center>
    <C.Box as="main" bg="inherit" layerStyle="borderCard">
      {[
        ['categories & tags', <>generate checklists for&nbsp;any&nbsp;occasion</>],
        ['cross-device sync', <>access your checklists from&nbsp;anywhere</>],
        ['export as markdown', <>share your checklists with&nbsp;anyone</>],
        ['streamlined design', <>adios, outdated, clunky checklist&nbsp;apps</>],
      ].map(([heading, description]) => (
        <C.Box
          _first={{ borderStyle: 'none' }}
          as="section"
          borderColor="borderPrimary"
          borderStyle="solid none none"
          borderWidth="1px"
          key={heading as string}
          px={{ base: 4, sm: 14 }}
          py={24}
        >
          <C.Heading as="h2">{heading}</C.Heading>
          <C.Text mt={3}>{description}</C.Text>
        </C.Box>
      ))}
    </C.Box>
    <C.Center>
      <C.Divider h={24} orientation="vertical" />
    </C.Center>
    <C.Box as="footer" mt={{ base: 24, sm: 0 }}>
      <C.Button
        as={Link}
        href="/"
        iconSpacing={6}
        rightIcon={<C.Icon as={ChevronRight} boxSize={6} />}
        variant="primary"
        w="full"
      >
        give it a whirl
      </C.Button>
      <C.List mt={24} spacing={6}>
        <C.ListItem>
          built by <C.Link href="https://twitter.com/zaidmukaddam">@zaidmukaddam</C.Link>
        </C.ListItem>
        <C.ListItem>
          <C.Link href="https://github.com/zaidmukaddam/llist">source code</C.Link>
        </C.ListItem>
      </C.List>
    </C.Box>
  </C.Container>
);

export default WtfPage;
