import Head from 'next/head'
import Link from 'next/link'
// import React from 'react'

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/scrapedCourses', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ TWuser: "random" }),
    })
      .then((res) => res.json())
      .then((userData) => {
        // setUserFollowers(userData)
        console.log(userData)
        console.log("click worked")
      })
  }

  return (
   
       
    <div className="container">

      <Head>
        <title>Middlesex Course Sniper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <h1 className="title">
          Learn :) <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

{/* <button onclick={handleSubmit}>
          <label>
            Load Catalog: 
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </button>
        {userFollowers.subjectName ? (
          <p>Followers: {userFollowers.subjectName}</p>
        ) : (
          <p>{userFollowers.error}</p>
        )} */}
    
<h1 className="title">
  Middlesex Course Sniper
</h1>

        <h1 className="title">
 Access{' '}
  <Link href="/scraped">
  <a onClick={handleSubmit}>Catalog</a>
  </Link>
   
</h1>


 <p className="description">
          A tool to find open seats for your classes.
          {/* <code>pages/index.js</code> */}
        </p>

      <img src="https://cdn.pixabay.com/photo/2016/01/23/16/02/book-1157658_1280.png" width="160px" height="160px"></img>

        <div className="grid">
          {/* <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}

            <p className="description">
          Check the catalog for classes you are interested in but are currently full. 
          Click to subscribe to notifications
          if there are any open seats available. You will be notified if that happens.
          {/* <code>pages/index.js</code> */}
        </p>
        </div>
      </main>

      <footer>
        This website is not created by or sponsored by Middlesex County College. It is made by a fellow student 
        for the use of other students. Good luck!
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          font-size: 10px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )


}






