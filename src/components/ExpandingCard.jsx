import React from 'react';
// import { makeStyles } from '@mui/styles';
// import {  } from '@mui/material';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
// import { Accordion } from '@mui/material';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//   },
// }));

const ExpandingCard = () => {
//   const classes = useStyles();

  return (
    <div style={{root:{width:'100vw'}}}>
      <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Expandable Card Title</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{width:'60vw'}}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
            dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in
            libero.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ExpandingCard;