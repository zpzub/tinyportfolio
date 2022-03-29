import React from "react";
import { Flex, Heading, SimpleGrid, Text, Box, Divider } from "@chakra-ui/react";

export default function Cv(){

    return (
        <>
        <SimpleGrid columns={{sm:1, md:2}} spacing='20' w='100%' mt='100px' bg='#eaeaea' padding='40px 30px' alignItems='center' borderRadius='10px'>
        
        <Box>
        <Heading textAlign='left' fontSize='28px' fontWeight='900'> Searching for new work opportunities from April 2022</Heading>
        <Text fontSize='20px' textAlign='left' color='#888888' lineHeight='25px' mt='15px'>I am looking for a company/start-up/agency that can offer exciting product challenges, a passion for design, and a lovely culture.</Text>
        </Box>

        <Box>
        <Text fontSize='15px' textAlign='left' color='#888888' borderBottom='1px solid #cccccc'> BRIEF RESUMÉ
        </Text>

        <Text fontWeight='700' mt='30px' textAlign='left'>BixdooStudio</Text>
        <Text textAlign='left' color='#888888'> 2017 → 2021</Text>
        <Text textAlign='left'> Lead Developer JS, React, Wordpress, Woocommerce | Co-founder</Text>

        <Text fontWeight='700' mt='30px' textAlign='left'>SAIA (Sociedad Argentina de Inteligencia Artificial)</Text>
        <Text textAlign='left' color='#888888'> 2020 → Today</Text>
        <Text textAlign='left'> Research & Communications</Text>

        <Text fontWeight='700' mt='30px' textAlign='left'>Makers Arena</Text>
        <Text textAlign='left' color='#888888'> 2012 → 2017</Text>
        <Text textAlign='left'> Designer & Developer, Wordpress</Text>

        </Box>



        </SimpleGrid>
        </>
    )
}