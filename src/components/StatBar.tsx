import React from "react";
import { LinearProgress, Typography, Box } from "@mui/material";
import { useTheme } from "styled-components";

interface StatBarProps {
  name: string;
  value: number;
  max?: number;
}


export const StatBar: React.FC<StatBarProps> = ({ name, value, max = 255 }) => {
  const theme = useTheme();
  const percent = (value / max) * 100;

  return (
    <Box mb={1}>
      <Typography
        variant="body2"
        style={{ color: theme.color, fontWeight: 500 }}
      >
        {name.toUpperCase()}: {value}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={percent}
        sx={{
          height: 12,
          borderRadius: 6,
          backgroundColor: theme.inputBackground,
          "& .MuiLinearProgress-bar": {
            backgroundColor: theme.primary,
          },
        }}
      />
    </Box>
  );
};
