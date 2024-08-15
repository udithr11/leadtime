import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const textStyles1 = {
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '1px',
    color: '#333333',
    '@media (max-width: 600px)': {
      fontSize: '16px',
      lineHeight: '24px',
    },
  };

  const textStyles = {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '26px',
    letterSpacing: '1px',
    color: '#FFFFFFCC',
    '@media (max-width: 600px)': {
      fontSize: '14px',
      lineHeight: '22px',
    },
  };

  return (
    <div>
    <Accordion
  expanded={expanded === 'panel1'}
  onChange={handleChange('panel1')}
  sx={{
    mb: 3,
    borderRadius: '0.5rem !important',
    border: '1px solid #0000001A',
    backgroundColor: expanded === 'panel1' ? '#222220' : 'inherit',
    boxShadow: 'none',
    '&::before': { display: 'none' },
  }}
>

  <AccordionSummary
          expandIcon={<AddIcon sx={{ color: expanded === 'panel1' ? 'white' : '#333333' }} />}
          aria-controls="panel1bh-content"
    id="panel1bh-header"
    sx={{ py: { xs: 1, sm: 1.5, md: 2 },  
          px: { xs: 2, sm: 3, md: 5 }, }}
  >
    <Typography
      sx={{
        ...textStyles1,
        width: '100%',
        flexShrink: 0,
        color: expanded === 'panel1' ? '#FFFFFF' : '#222220',
      }}
    >
      Project managers who believe in the power of creative communication ?
    </Typography>
  </AccordionSummary>
  <AccordionDetails sx={{ p: 0, px: { xs: 2, sm: 3, md: 5 }, mt: -1, pb: 4 }}>
    <Typography sx={{ ...textStyles, color: expanded === 'panel1' ? '#FFFFFFCC' : '#222220' }}>
      At Lead Time, we are a dedicated team of marketing enthusiasts, designers, and project managers who believe in the power of creative communication. Our agency was founded with the vision of revolutionizing the advertising landscape through cutting-edge BTL strategies and eye-catching displays.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion
  expanded={expanded === 'panel2'}
  onChange={handleChange('panel2')}
  sx={{
    mb: 3,
    borderRadius: '0.5rem !important',
    border: '1px solid #0000001A',
    backgroundColor: expanded === 'panel2' ? '#222220' : 'inherit',
    boxShadow: 'none',
    '&::before': { display: 'none' },
  }}
>

  <AccordionSummary
          expandIcon={<AddIcon sx={{ color: expanded === 'panel2' ? 'white' : '#333333' }} />}
          aria-controls="panel1bh-content"
    id="panel1bh-header"
    sx={{ py: { xs: 1, sm: 1.5, md: 2 },  
          px: { xs: 2, sm: 3, md: 5 }, }}
  >
    <Typography
      sx={{
        ...textStyles1,
        width: '100%',
        flexShrink: 0,
        color: expanded === 'panel2' ? '#FFFFFF' : '#222220',
      }}
    >
      Our agency was founded with the vision of revolutionizing the advertising ?
    </Typography>
  </AccordionSummary>
  <AccordionDetails sx={{ p: 0, px: { xs: 2, sm: 3, md: 5 }, mt: -1, pb: 4 }}>
    <Typography sx={{ ...textStyles, color: expanded === 'panel2' ? '#FFFFFFCC' : '#222220' }}>
      At Lead Time, we are a dedicated team of marketing enthusiasts, designers, and project managers who believe in the power of creative communication. Our agency was founded with the vision of revolutionizing the advertising landscape through cutting-edge BTL strategies and eye-catching displays.
    </Typography>
  </AccordionDetails>
</Accordion>

      
<Accordion
  expanded={expanded === 'panel3'}
  onChange={handleChange('panel3')}
  sx={{
    mb: 3,
    borderRadius: '0.5rem !important',
    border: '1px solid #0000001A',
    backgroundColor: expanded === 'panel3' ? '#222220' : 'inherit',
    boxShadow: 'none',
    '&::before': { display: 'none' },
  }}
>

  <AccordionSummary
          expandIcon={<AddIcon sx={{ color: expanded === 'panel3' ? 'white' : '#333333' }} />}
          aria-controls="panel1bh-content"
    id="panel1bh-header"
    sx={{ py: { xs: 1, sm: 1.5, md: 2 },  
          px: { xs: 2, sm: 3, md: 5 }, }}
  >
    <Typography
      sx={{
        ...textStyles1,
        width: '100%',
        flexShrink: 0,
        color: expanded === 'panel3' ? '#FFFFFF' : '#222220',
      }}
    >
     Lead Time, we are a dedicated team of marketing enthusiasts ?
    </Typography>
  </AccordionSummary>
  <AccordionDetails sx={{ p: 0, px: { xs: 2, sm: 3, md: 5 }, mt: -1, pb: 4 }}>
    <Typography sx={{ ...textStyles, color: expanded === 'panel3' ? '#FFFFFFCC' : '#222220' }}>
      At Lead Time, we are a dedicated team of marketing enthusiasts, designers, and project managers who believe in the power of creative communication. Our agency was founded with the vision of revolutionizing the advertising landscape through cutting-edge BTL strategies and eye-catching displays.
    </Typography>
  </AccordionDetails>
</Accordion>

      
<Accordion
  expanded={expanded === 'panel4'}
  onChange={handleChange('panel4')}
  sx={{
    mb: 3,
    borderRadius: '0.5rem !important',
    border: '1px solid #0000001A',
    backgroundColor: expanded === 'panel4' ? '#222220' : 'inherit',
    boxShadow: 'none',
    '&::before': { display: 'none' },
  }}
>

  <AccordionSummary
          expandIcon={<AddIcon sx={{ color: expanded === 'panel4' ? 'white' : '#333333' }} />}
          aria-controls="panel1bh-content"
    id="panel1bh-header"
    sx={{ py: { xs: 1, sm: 1.5, md: 2 },  
          px: { xs: 2, sm: 3, md: 5 }, }}
  >
    <Typography
      sx={{
        ...textStyles1,
        width: '100%',
        flexShrink: 0,
        color: expanded === 'panel4' ? '#FFFFFF' : '#222220',
      }}
    >
      Advertising landscape through cutting-edge strategies and eye-catching display ?
    </Typography>
  </AccordionSummary>
  <AccordionDetails sx={{ p: 0, px: { xs: 2, sm: 3, md: 5 }, mt: -1, pb: 4 }}>
    <Typography sx={{ ...textStyles, color: expanded === 'panel4' ? '#FFFFFFCC' : '#222220' }}>
      At Lead Time, we are a dedicated team of marketing enthusiasts, designers, and project managers who believe in the power of creative communication. Our agency was founded with the vision of revolutionizing the advertising landscape through cutting-edge BTL strategies and eye-catching displays.
    </Typography>
  </AccordionDetails>
</Accordion>

     
<Accordion
  expanded={expanded === 'panel5'}
  onChange={handleChange('panel5')}
  sx={{
    mb: 3,
    borderRadius: '0.5rem !important',
    border: '1px solid #0000001A',
    backgroundColor: expanded === 'panel5' ? '#222220' : 'inherit',
    boxShadow: 'none',
    '&::before': { display: 'none' },
  }}
>

  <AccordionSummary
          expandIcon={<AddIcon sx={{ color: expanded === 'panel5' ? 'white' : '#333333' }} />}
          aria-controls="panel1bh-content"
    id="panel1bh-header"
    sx={{ py: { xs: 1, sm: 1.5, md: 2 },  
          px: { xs: 2, sm: 3, md: 5 }, }}
  >
    <Typography
      sx={{
        ...textStyles1,
        width: '100%',
        flexShrink: 0,
        color: expanded === 'panel5' ? '#FFFFFF' : '#222220',
      }}
    >
      Marketing enthusiasts project managers who believe in the power of creative ?
    </Typography>
  </AccordionSummary>
  <AccordionDetails sx={{ p: 0, px: { xs: 2, sm: 3, md: 5 }, mt: -1, pb: 4 }}>
    <Typography sx={{ ...textStyles, color: expanded === 'panel5' ? '#FFFFFFCC' : '#222220' }}>
      At Lead Time, we are a dedicated team of marketing enthusiasts, designers, and project managers who believe in the power of creative communication. Our agency was founded with the vision of revolutionizing the advertising landscape through cutting-edge BTL strategies and eye-catching displays.
    </Typography>
  </AccordionDetails>
</Accordion>
    </div>
  );
}