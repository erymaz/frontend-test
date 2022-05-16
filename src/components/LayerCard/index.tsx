import {useState} from 'react';
import { Card, CardMedia, Checkbox, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/system';
import React from 'react';

interface LayerCardProps {
  /**
   * Checked?
   */
  checked?: boolean;
  /**
   * What background image to use
   */
  backgroundImage?: string;
  /**
   * Card contents
   */
  label: string;
  /**
   * Optional change checkbox
   */
  onCheckedChange?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const LayerCard = ({
  checked,
  backgroundImage,
  label,
  onCheckedChange,
  ...props
}: LayerCardProps) => {
  const [hover, setHover]= useState(false);

  const onMouseOver = () => {
    setHover(true);
  };

  const onMouseOut = () => {
    setHover(false);
  };

  return (
    <Card
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      sx={{
        width: '229px',
        borderRadius: '10px',
        border: checked ? '1px solid #3D8479' : !hover ? '1px solid #EFEFEF' : 0,
        boxShadow: hover ? '0px 0px 0px 2px #65E9D9;' : 0,
      }}
    >
      <CardMedia
        component="img"
        height="100px"
        image={backgroundImage}
        alt="background image"
      />
      <Box sx={{display: "flex", height: "50px", alignItems: "center", paddingLeft: "18.25px"}}>
        <FormControlLabel
          checked={checked}
          onChange={onCheckedChange}
          control={
            <Checkbox
              sx={{
                color: "#616161",
                '&.Mui-checked': {
                  color: "#21B6A8",
                },
              }}/>}
          label={<Typography sx={{fontSize: "14px", fontWeight: 400, color: "#1B1B1B"}}>{label}</Typography>} />
      </Box>
    </Card>
  );
};
