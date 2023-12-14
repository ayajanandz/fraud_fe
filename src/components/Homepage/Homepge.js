import * as React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import Login from './Login';
import Signup from './Signup'
// import Tab from '@mui/material/Tab';
import { Tab } from '@mui/material';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Log In" value="1" />
            <Tab label="Sign Up" value="2" />
            
          </TabList>
        </Box>
        <TabPanel value="1"><Login /></TabPanel>
        <TabPanel value="2"><Signup/></TabPanel>
        
      </TabContext>
    </Box>
  );
}

