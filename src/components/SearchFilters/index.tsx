import * as S from './styles';

import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchFilters() {
  return (
    <S.Container>
      <S.ContainerItems>
        <S.ListItems>
          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel>Select Location</InputLabel>
              <Select
                id="demo-simple-select"
                value={"teste"} 
                label="Select Location" >
                <MenuItem value={"example1"}>Example 1</MenuItem>
                <MenuItem value={"example2"}>Example 2</MenuItem>
                <MenuItem value={"example3"}>Example 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        
          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel>Tour Type</InputLabel>
              <Select
                id="demo-simple-select"
                value={"teste"} 
                label="Tour Type" >
                <MenuItem value={"example1"}>Example 1</MenuItem>
                <MenuItem value={"example2"}>Example 2</MenuItem>
                <MenuItem value={"example3"}>Example 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        
          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel>Select Month</InputLabel>
              <Select
                value={"teste"}
                label="Select Month" >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        
          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel>Member Quantity</InputLabel>
              <Select
                value={"teste"}
                label="Member Quantity" >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
         
          <S.Icon><AiOutlineSearch /></S.Icon>
        </S.ListItems>
      </S.ContainerItems>
    </S.Container>
  );
}
