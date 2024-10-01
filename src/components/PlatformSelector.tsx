import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';

interface Platform {
  id: number;
  name: string | string[];
}

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { platform } = usePlatforms();
  
  return (
    <Menu>
      <MenuButton as={Button}> {selectedPlatform?.name || "Platforms"} </MenuButton>
      <MenuList>
        {platform?.map((p) => (
          <MenuItem key={p.id} onClick={() => onSelectPlatform(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
