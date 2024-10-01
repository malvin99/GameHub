import { Menu, MenuButton, Button, MenuList, MenuItem, Text } from "@chakra-ui/react";
import {  BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void,
    CurrentSortOrder: string | null
}

function SortSelector ({onSelectSortOrder, CurrentSortOrder}: Props) {

    const sorting_list = [
        {value: '', label: "Relevence"},
        {value: '-added', label: "Date Added"},
        {value: 'name', label: "Name"},
        {value: '-released', label:"Release Date"},
        {value: '-metacritic', label: "Popularity"},
        {value: '-rating', label: "Average Rating"},
    ]

    const currentOrderObject = sorting_list.find((order) => {
                                if (order.value === CurrentSortOrder)
                                return order
                                })

    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown/>}> <Text>Order By: {currentOrderObject?.label} </Text> </MenuButton>
          <MenuList>
             {sorting_list.map((sort_obj) => <MenuItem onClick = {() => onSelectSortOrder(sort_obj.value)}key={sort_obj.value} value={sort_obj.value}> {sort_obj.label} </MenuItem>)}
          </MenuList>
        </Menu>
      );


}

export default SortSelector