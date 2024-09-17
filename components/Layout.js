import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '@/components/Nav'


export default function Layout({children}) {
  const { data: session } = useSession();
  if (!session){
    return (
      <div className="bg-green-500 w-screen h-screen flex items-center" >
      <div className="text-center w-full">
        <button onClick={() => signIn('google')} className='bg-white p-2 px-5 rounded-lg'>Login with google</button>
      </div>
    </div>
    );
  }


  return (
    <div className="bg-green-500 min-h-screen flex">
    <Nav />
      <div className='bg-lime-100 flex-grow mt-2 mr-2 mb-2 rounded-lg p-4'>
        {children}
      </div>
      
    </div>
    
  );
}
