import CustomList from "./components/CustomList";
import { Box } from "@chakra-ui/react";
import { BiErrorAlt, BiError, BiCode } from "react-icons/bi";
import { MdOutlineAlarmOn,MdInsertDriveFile } from "react-icons/md";

import './font.css'
import CustomLinkItem from "./components/CustomLinkItem";
function App() {
  return (
    <div className="App">
      <Box w='600px' mt='20' mx='auto'>
      <CustomList>
        <CustomLinkItem icon={BiErrorAlt} body={'Raw denim you probably havent heard'}/>
        <CustomLinkItem icon={BiError} body={' Williamsburg carles vegan helvetica.'}/>
        <CustomLinkItem icon={MdOutlineAlarmOn} body={'Raw denim you probably havent heard'}/>
        <CustomLinkItem icon={BiCode} body={'Reprehenderit butcher retro'}/>
        <CustomLinkItem icon={MdInsertDriveFile} body={'Cosby sweater eu banh mi'}/>
      </CustomList>
      </Box>

    </div>
  );
}

export default App;
