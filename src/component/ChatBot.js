import React , { useState } from 'react'
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import './ChatBot.css'

const ContactChatBot = () => {

  const [refresh, setRefresh] = useState(false);

    const theme = {
        background: 'rgba(255, 255, 255, 0.8)',
        fontFamily: 'Helvetica Neue',
        headerBgColor: 'rgba(0, 0, 0, 0.8)',
        
        
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: 'black',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
        
      };
    
      const config ={
        width: "400px",
        height: "600px",
        floating: true,
        // botAvatar:"guidme_logo.png",
        // avatarStyle:{
        //   width:"10px",
        //   height:"25px",
        // }
        // opened:true
        cache:false,
      };

      const floatingStyle = {
        backgroundColor: 'black',
        color: '#fff',
        border: '3px solid white',
        padding: '10px',
        // boxShadow: '0px 0px 0px white',
        // transition: 'all 0.2s ease-in-out',
        '&:hover': {
          // scale:"1.1",
          cursor: 'pointer',
        }
      };
    
      const steps = [
        {
          id: "Greet",
    
          message: "Hello, Welcome to our shop",
    
          trigger: "Done",
        },
    
        {
          id: "Done",
    
          message: "hi",
    
          trigger: "a",
        },
        {
          id: "a",
    
          message: "hi",
    
          trigger: "b",
        },
        {
          id: "b",
    
          message: "hi",
    
          trigger: "c",
        },
        {
          id: "c",
    
          message: "hi",
    
          trigger: "d",
        },
        {
          id: "d",
    
          message: "hi",
    
          trigger: "Done1",
        },
        {
          id: "Done1",
    
          message: "hi",
    
          trigger: "Done2",
        },
        
        {
          id: "Done2",
    
          message: "Please enter your name!",
    
          trigger: "waiting1",
        },
        
    
        {
          id: "waiting1",
    
          user: true,
    
          trigger: "Name",
        },
    
        {
          id: "Name",
    
          message: "Hi {previousValue}, Please select your issue",
    
          trigger: "issues",
        },
    
        {
          id: "issues",
    
          options: [
            {
              value: "React",
    
              label: "React",
    
              trigger: "React",
            },
    
            { value: "Angular", label: "Angular", trigger: "Angular" },
          ],
        },
    
        {
          id: "React",
    
          message:
            "Thanks for letting your React issue, Our team will resolve your issue ASAP",
    
          end: true,
        },
    
        {
          id: "Angular",
    
          message:
            "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
    
          end: true,
        },
      ];

      const handleClose = () => {
        console.log('handleClose ');
        // setRefresh(!refresh);
      };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} headerTitle="Hello World" {...config}  floatingStyle={floatingStyle}
        key={refresh} onClose={() => handleClose()}/>
        </ThemeProvider>
        
    </>
  )
}

export default ContactChatBot
