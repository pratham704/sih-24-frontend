import React from 'react';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';



import data from '../../../../utils/data/mentors.data'

const SliderArrow = ({ onClick, type, className }) => {
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: '-28px !important',
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  );
};

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));

const Mentor = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  const sliderConfig = {
    infinite: true,
    // autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  };

  return (
    <Box
      id="mentors"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: {
          xs: 8,
          md: 12,
        },
        backgroundColor: '#ecf3f3',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ fontSize: 40 }}>
          Our Expert Mentors
        </Typography>

        <Slider {...sliderConfig}>
          {data.map((item) => (
            <MentorCardItem key={String(item.id)} item={item} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};




const MentorCardItem = ({ item }) => {
    return (
      <Box
        sx={{
          px: 1.5,
          py: 5,
        }}
      >
        <Box
          sx={{
            p: 2,
            backgroundColor: 'background.paper',
            borderRadius: 4,
            transition: (theme) => theme.transitions.create(['box-shadow']),
            '&:hover': {
              boxShadow: 2,
            },
          }}
        >
          <Box
            sx={{
              lineHeight: 0,
              overflow: 'hidden',
              borderRadius: 3,
              height: 200,
              mb: 2,
            }}
          >
            <img src={item.photo} width={570} height={427} alt={'Mentor ' + item.id} />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
              {item.name}
            </Typography>
            <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.category}</Typography>
            <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
              {item.description}
            </Typography>
            <Box sx={{ '& img': { height: 26 } }}>
              <img src={item.company.logo} alt={item.company.name + ' logo'} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

export default Mentor;
