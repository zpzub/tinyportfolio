import React from "react";
import { Flex, Heading, SimpleGrid, Text, Box, Divider, Link } from "@chakra-ui/react";

export default function Contact(){

    return (
        <>
        <Flex alignContent='flex-start' justifyContent='center' textAlign='left' w='100%' flexDirection='column' mb='100px'>
        <Heading fontSize='36px' fontWeight='900' padding='30px' mt='60px'> Contact me</Heading>
        <a name='contact'></a>
        <Text padding='10px 30px' color='#888888' fontSize='24px'>You can email me at →<Link href="mailto:bonjour@patriciozubiri.com" color='#333333'>bonjour@patriciozubiri.com</Link></Text>
        <Text padding='10px 30px' color='#888888' fontSize='24px'>Or use LinkedIn → <Link href="https://www.linkedin.com/in/patriciozubiri-dev/" color='#333333'>linkedin.com/in/patriciozubiri-dev</Link></Text>
        <Divider  mt='50px' mb='50px' />
        </Flex>

        </>


        )
        
    }