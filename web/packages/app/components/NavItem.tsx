import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";

interface Props {
  title: string;
  id: string;
  link: string;
  items: Array<PageItem>;
  colorInvert?: boolean;
}

const NavItem = ({
  title,
  id,
  link,
  colorInvert = false,
}: Props): JSX.Element => {
  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{ cursor: 'pointer' }}
      >
        <Link href={link} style={{textDecoration: 'none'}}>
          <Typography
            fontWeight={400}
            fontSize={20}
            color={linkColor}
          >
            {title}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default NavItem;
