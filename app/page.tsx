import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div>
    Main Dashboard!
    What is my Name?
    <a href="/"><pre>    </pre>Main</a>
    <a href="/name"><pre>    </pre>Name</a>
    <a href="/name/address"><pre>    </pre>Address</a>
    </div>
}