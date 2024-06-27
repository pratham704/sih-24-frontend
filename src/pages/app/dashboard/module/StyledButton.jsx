// StyledButton.js

import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  borderRadius: 8,
  padding: '10px 20px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: '#4caf50',
  },
});

const StyledButton = ({ children, ...rest }) => {
  return (
    <CustomButton {...rest}>
      {children}
    </CustomButton>
  );
};

export default StyledButton;
