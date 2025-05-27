import { UserCheck2 } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center text-white p-8">
      <header className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-75"></div>
            <div className="relative bg-gray-900 rounded-full p-2">
              <UserCheck2 className="w-24 h-24 " />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Obisike Treasure
          </h1>
          <p className="text-xl text-gray-400">
            Fullstack Developer & Technical Writer
          </p>
          <div className="flex space-x-4 text-gray-300">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cyan-400"
              >
                <path d="M12 2L2 22h20L12 2z"></path>
                <path d="M12 2L7 12h10L12 2z"></path>
              </svg>
              <span>Vue.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cyan-400"
              >
                <path d="M21 12.79V21H3V3h18v4.79"></path>
                <path d="M14.5 4.5L12 2L9.5 4.5"></path>
                <path d="M12 2v10"></path>
                <path d="M8 19l3-3 3 3"></path>
              </svg>
              <span>Laravel</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cyan-400"
              >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                <path d="M3 12v5h16a2 2 0 0 1 0 4H3v-4"></path>
              </svg>
              <span>Express</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
