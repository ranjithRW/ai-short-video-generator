import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
export default function Page() {
    return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
         <Image src={"/login.jfif"} alt="Vercel Logo" width={400} height={400}/>
        </div>
        <div className='flex items-center justify-center h-screen '>
            <SignIn />
        </div>
    </div>
    )
}