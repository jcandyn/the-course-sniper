import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h2>
        <Link href="/">
          <a>Yes!</a>
        </Link>
      </h2>
    </>
  )
}