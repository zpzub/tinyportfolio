import React from "react";
import { Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import pz from '../patricioZubiri.jpg'


export default function Hero(){

    return (
        <>
        <Flex flexDirection='column' w='100%'>
        <Image src={pz} alt='Patricio Zubiri' h='140px' w='140px' mb='30px' mt='90px'/>
        <Heading textAlign='left' fontSize='34px' fontWeight='900'>Hi! Im Patricio Zubiri, <br/>a Developer and Designer<br/> based in Buenos Aires</Heading>
        <Text fontSize='25px' textAlign='left' color='#888888'>My new website is coming in a few days :)</Text>

        <Text fontSize='23px' textAlign='left' color='#888888' fontWeight='400' mt='65px'><b>TL;DR —</b> I'm a Full stack web dev and designer 🧔🏻 with + 15 years of experience,  getting deep into the Javascript ecosystem. Curious human, almost a doctor and avid reader, i'm looking to work with disruptive companies in far away lands.  </Text>
        <a href='#contact' borderBottom='1px solid #cccccc' textAlign='left'> <Button mt='30px' w='200px' h='25px'>Get in touch</Button></a>
        </Flex>
        </>

    )


}