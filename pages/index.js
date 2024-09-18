/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  if(!session) return;
  console.log({session});
  return <Layout>
    <div className="text-green-900 flex justify-between">
      <h2>
        Hola, <b>{session?.user?.name}</b>
      </h2>
        <div className="flex bg-teal-100 text-black gap-1 rounded-lg overflow-hidden">
         <img src={session?.user.image} alt="" className="w-6 h-6"/>
         
         <span className="px-2"> 
            {session?.user?.name}
         </span>
      </div>
    </div>
  </Layout>
}
