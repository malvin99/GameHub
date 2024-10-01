import { useState, ChangeEvent, FormEvent } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';

interface SearchBoxProps {
    onSearch: (searchTerm: string) => void; // Prop to pass the search term up
}

function SearchBox({ onSearch }: SearchBoxProps) {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onSearch(searchTerm); // Pass the search term up to the parent
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Flex width="100%" align="center" justify="center">
                <Input
                    placeholder="Search Games..."
                    variant="outline"
                    size="sm"
                    value={searchTerm}
                    onChange={handleInputChange}
                    width="100%"
                    maxWidth="800px"
                    mr={2}
                />
                <Button type="submit" colorScheme="blue" size="sm">
                    Search
                </Button>
            </Flex>
        </form>
    );
}

export default SearchBox;


