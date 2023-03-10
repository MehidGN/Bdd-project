import React from 'react'
import Chat from '../components/Feed/chat/Chat.jsx'
import "./../components/Feed/feed.css"
import LeftpartFeed from '../components/Feed/LeftpartFeed.jsx'
import NavbarFeed from '../components/Feed/NavbarFeed.jsx'
import PostsPart from '../components/Feed/PostsPart.jsx'
import RightPart from '../components/Feed/RightPart.jsx'
import Chatbox from '../components/Feed/chat/Chatbox.jsx'

export default function Feed() {
    return (
        <div className='flex items-center justify-start w-full flex-col h-screen relative'>
            <div className='px-5 w-full'>
                <NavbarFeed />
            </div>
            <div className='parent w-full p-6'>
                <LeftpartFeed/>
                <PostsPart/>
                <RightPart/>
            </div>
            <div className='chat-div font-fam-feed'>
                <Chatbox/>
                <Chat/>
            </div>
        </div>
    )
}