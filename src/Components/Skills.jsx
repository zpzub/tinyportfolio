import React from "react";
import { Flex, Heading, SimpleGrid, Text, Box, Divider } from "@chakra-ui/react";

export default function Skills(){

    return (
        <>
        <Flex alignContent='flex-start' justifyContent='center' textAlign='left' w='100%' flexDirection='column'>
        <Heading fontSize='36px' fontWeight='900' padding='30px' mt='60px'> Skills</Heading>

        <SimpleGrid columns={{sm:2, md:3}} spacing='10' w='100%' mt='2px' padding='10px 30px' alignItems='top'>

        <Box>
         <Text fontWeight='800' fontSize='15px' color='#888888'>TECH STACK</Text> 
         <Text>Javascript</Text>  
         <Text>React</Text> 
         <Text>Redux</Text> 
         <Text>Node JS</Text> 
         <Text>Express</Text> 
         <Text>Sequelize, Prisma</Text> 
         <Text>GIT & Github</Text> 
         <Text>MySQL, Postgres</Text> 
         <Text>Wordpress</Text> 
         <Text>Woocommerce</Text> 
         <Text>Webpack</Text> 
         <Text>SASS, Chakra, Tailwind</Text> 

        </Box>

        <Box>
         <Text fontWeight='800' fontSize='15px' color='#888888'>DESIGN STACK</Text>   
         <Text>Figma</Text> 
         <Text>Adobe Photoshop</Text> 
         <Text>Adobe Illustrator</Text> 
         <Text>Adobe Premiere</Text> 
         <Text fontWeight='800' fontSize='15px' color='#888888' mt='20px'>COMM SKILLS</Text>   
         <Text>Copywriting</Text> 
         <Text>Content Strategy</Text>
         <Text>Email Marketing</Text>
         <Text>Facebook Ads</Text>  
        </Box>

        <Box>
         <Text fontWeight='800' fontSize='15px' color='#888888'>TOOLS STACK</Text>   
         <Text>Notion</Text> 
         <Text>Trello</Text>
         <Text>VScode</Text> 
         <Text fontWeight='800' fontSize='15px' color='#888888' mt='20px'>SOFT SKILLS</Text>   
         <Text>Team Player</Text> 
         <Text>Curious</Text>
         <Text>Self Taught</Text>
         <Text>Agile Ready</Text>  
         <Text>❤️ Different Cultures</Text> 
        </Box>

        </SimpleGrid>

        </Flex>

        </>


        )
        
    }