import React from 'react';

import { ListItem, ListIcon  } from "@chakra-ui/react";
const CustomLinkItem = ({icon, body}) => {
    return (
        <ListItem _hover={{ color: '#23A6F0', borderLeft: '3px solid #23A6F0' }} fontSize={'16px'} border='1px solid #EBEBEB' fontWeight='500' pt='18px' pb='25px' px='20px' lineHeight={'26px'} fontFamily='montserrat'>
            {icon && <ListIcon fontSize={'24px'} mr='20px'  as={icon} />}
           {body}
        </ListItem>
    );
};

export default CustomLinkItem;