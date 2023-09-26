import React from 'react';

import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-slate-900 w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl capitalize bg-green-900 rounded-2xl mx-auto p-2 lg:w-2/5 flex justify-center md:text-4xl mb-4">
        Abdullah chatbot
      </h1>
      {/* <h1 className="text-3xl md:text-4xl mb-4">
        ▲ Next.js + LangChain.js 🦜🔗
      </h1> */}
      <ul className='mt-11'>
        {/* <li className="text-l">a
          
          <span className="ml-2">
            This chatbot using{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            and the Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            in a{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            project.a
          </span>
        </li> */}


        {/* <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            You can find the prompt and model logic for this use-case in{" "}
            <code>app/api/chat/route.ts</code>.
          </span>
        </li> */}


        {/* <li> 💻 I have learned AI chatbot from Sir Inzimam Malik. 
          

        </li> */}



        {/* <li>
          🏴‍☠️
          <span className="ml-2">
            By default, the bot is pretending to be a pirate, but you can change
            the prompt to whatever you want!
          </span>
        </li> */}




        {/* <li className="hidden text-l md:block">
          🎨
          <span className="ml-2">
            The main frontend logic is found in <code>app/page.tsx</code>.
          </span>
        </li> */}



        {/* <li className="text-l">
          🐙
          <span className="ml-2">
            This template is open source - you can see the source code and
            deploy your own version{" "}
            <a
              href="https://github.com/langchain-ai/langchain-nextjs-template"
              target="_blank"
            >
              from the GitHub repo
            </a>
            !
          </span>
        </li> */}




        <li className=" flex justify-center text-l ">
          
          <span className="ml-2 mt-18 flex justify-center shrink-0 p-2 flex-1 text-2xl">
          Try asking the Abdullah chatbot about its capabilities 
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji=""
      titleText="Chat with Abdullah chatbot"
      placeholder="Feel free to ask any question from Abdullah's chatbot."
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
