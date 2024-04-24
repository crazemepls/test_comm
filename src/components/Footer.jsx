import { Box, Divider, Stack, Typography } from "@mui/material";


const Footer = () => {
  return (
    <div style={{ backgroundColor: '#3B424E', paddingTop: 50, paddingBottom: 80 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} width={'40vw'} margin={'auto'}>
        <Box width={'30%'}>
          <Box direction={{ xs: 'column', md: 'row' }} display={'flex'}>
            <Typography color={'#00A7D4'} fontSize={14} width={'40%'}>
              Contact
            </Typography>
            <Box flexDirection={"column"} display={'flex'}>
              <Typography color={'#ACAEA8'} fontSize={14} >
                Lindenstraße 6
              </Typography>
              <Typography color={'#ACAEA8'} fontSize={14}>
                14467 Potsdam
              </Typography>
              <Typography color={'#ACAEA8'} fontSize={14} >
                Telephone: 0331-730 73-0
              </Typography>
              <Typography color={'#ACAEA8'} fontSize={14}>
                Fax: 0331-730 73-99
              </Typography>
              <Typography color={'#ACAEA8'} fontSize={14}>
                office@commsult.de
              </Typography>
            </Box>
          </Box>

          <Box flexDirection={"row"} display={'flex'} gap={4}>
            <Typography color={'white'} paddingTop={10}>
              Imprint
            </Typography>

            <Typography color={'white'} paddingTop={10}>
              Data Protection
            </Typography>
          </Box>

        </Box>
        <Divider orientation="vertical" flexItem style={{ marginLeft: 40, marginRight: 40, background: 'white' }} />
        <Box width={'30%'}>
          <Box flexDirection={"column"} display={'flex'}>
            <Typography color={'#00A7D4'} fontSize={14}>
              Upcoming Events
            </Typography>
            <Typography color={'#ACAEA8'} fontSize={14} >
              Get to know the experts for mobile solutions!
            </Typography>
          </Box>

          <Box marginTop={'13px'} marginBottom={'30px'} color={'white'}>
            <Typography>Congress</Typography>
            <Typography>  VLB Logistics Congress 2024</Typography>
            <Typography>   March 4th – 6th, 2024 in Chemnitz</Typography>
          </Box>

          <Box marginTop={'13px'} color={'white'}>
            <Typography>LogiMAT 2024 trade fair</Typography>
            <Typography>March 19 – 21, 2024 in Stuttgart</Typography>
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem style={{ marginLeft: 40, marginRight: 40, background: 'white' }} />
        <Box width={'30%'}>
          <Box>
            <Typography color={'#ACAEA8'} fontSize={14}>
              The specialists

            </Typography>
            <Typography color={'#ACAEA8'} fontSize={14}>
              for mobile software in business processes.

            </Typography>

            <Box marginTop={'13px'} color={'white'}>
              <Typography>www.commsult.de</Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}

export default Footer;
