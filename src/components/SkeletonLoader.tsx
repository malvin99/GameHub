import { Skeleton, Stack} from "@chakra-ui/react"


function SkeletonLoader () {

    return (

        <Stack>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
        </Stack>
    )

}

export default SkeletonLoader