import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Header({ config }) {
  const { author, description, social } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H1><Link to="/">{author}</Link></H1>
        <P>{description}</P>
        {social &&
          <Social
            discord={social.discord}
            downloadWin={social.downloadWin}
            downloadLinux={social.downloadLinux}
            github={social.github}
          />
        }
      </Wrapper>
    </Container>
  );
}

export default Header;