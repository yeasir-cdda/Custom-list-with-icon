import React from 'react';

import {List } from "@chakra-ui/react";
const CustomList = ({children}) => {
    return (
        <List >
                {
                    children && children.map(child=>child)
                }
           
         
           
        </List>
    );
};

export default CustomList;