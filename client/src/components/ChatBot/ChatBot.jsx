// ChatBot.js
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useNavigate } from 'react-router-dom';



const Chatbot = () => {
	const navigate = useNavigate();
	
    const steps = [
        {
            id: '0',
            message: 'Hey there! I am Memo, your virtual assistant. How can I assist you today?',
            trigger: '1',
        },
        {
            id: '1',
            message: 'Please write your username',
            trigger: '2'
        },
        {
            id: '2',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            message: "Hi {previousValue}, how can I help you?",
            trigger: '4'
        },
        {
            id: '4',
            options: [
                { value: 1, label: 'Create Asset', trigger: 'cassets' },
                { value: 2, label: 'View Assets', trigger: 'vassets' },
				{ value: 3, label: 'Asset History', trigger: 'hassets' },
                
            ],
        },
		{
            id: 'cassets',
            message: 'create assets',
            trigger: () => {
                navigate('/create');
                return '5';
            }
        },
		{
            id: 'vassets',
            message: 'view assets',
            trigger: () => {
                navigate('/assetList'); 
                return '5';
            }
        },
        {
            id: 'hassets',
            message: 'history',
            trigger: () => {
                navigate('/history'); 
                return '5';
            }
        },
        {
            id: '5',
            message: 'Is there anything else I can assist you with?',
            trigger: '4'
        }
    ];

    const theme = {
        background: '#ADD8E6',
        headerBgColor: '#708090',
        headerFontSize: '20px',
        botBubbleColor: '#708090',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: '#FF5733',
        userFontColor: 'white',
    };

    const config = {
        botAvatar: "https://w7.pngwing.com/pngs/802/825/png-transparent-redbubble-polite-cat-meme-funny-cat-meme-thumbnail.png",
        floating: true,
		style: {
             // Reduce the height of the widget
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                headerTitle="Memo"
                steps={steps}
                {...config}
            />
        </ThemeProvider>
    );
}

export default Chatbot;
