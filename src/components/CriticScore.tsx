import { Badge } from "@chakra-ui/react";


interface Props {
   score: number;
}

function CriticScore ({score}:Props) {

    return (
        <Badge> {score} </Badge>
    )


}

export default CriticScore