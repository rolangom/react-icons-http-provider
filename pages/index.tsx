import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps } from "next/types";

const inter = Inter({ subsets: ["latin"] });

type Props = { host: string | null };

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => ({ props: { host: context.req.headers.host || null } });

export default function Home({ host }: Props) {
  return (
    <>
      <Head>
        <title>Icons Provider</title>
        <meta
          name="description"
          content="Site / API to get SVG image (react-icons) from URL"
        />
        <meta name="keywords" content="HTML,SVG,React,Icons,API" />
        <meta name="author" content="rolangom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Icons Provider API</h1>
        <div className={styles.card}>
          <p>Get SVG image from URL.</p>
        </div>

        <div className={styles.card}></div>
        <h2>Example:</h2>
        <code className={styles.code}>
          &lt;img src=
          <span className={styles.colored}>
            &quot;https://{host}
            <wbr />
            /api/lu/LuHeartHandshake
            <wbr />
            ?color=salmon&amp;size=100&quot;
          </span>{" "}
          /&gt;
        </code>

        <div className={styles.card}>
          <h2>Result:</h2>
          <p>
            <img
              src="/api/lu/LuHeartHandshake?color=salmon&size=100"
              alt="loading"
            />
          </p>
        </div>

        <div className={styles.card}>
          <p>
            Thanks to{" "}
            <a
              className={styles.colored}
              href="https://react-icons.github.io/react-icons/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &quot;react-icons&quot;
            </a>{" "}
            package.
          </p>
        </div>

        <div className={styles.card}>
          <h2>How to use it</h2>
          <p>
            /api/<b>{"${iconLibrary}"}</b>/<b>{"${iconName}"}</b>?color=
            <b>{"${color}"}</b>&size=<b>{"${size}"}</b>
          </p>
          <ul>
            <li>
              Replace <b>{"${iconLibrary}"}</b> by any of the supported library
              of <em>react-icons</em>.
            </li>
            <li>
              Replace <b>{"${iconName}"}</b> by the name of the desired icon.
            </li>
            <li>
              Replace <b>{"${color}"}</b> by the desired color [OPTIONAL].
            </li>
            <li>
              Replace <b>{"${size}"}</b> by the desired size [OPTIONAL].
            </li>
          </ul>
        </div>

        <div className={`${styles.center} ${inter.className}`}>
          <small>by</small>{" "}
          <a
            className={styles.colored}
            href="https://x.com/rolangom"
            target="_blank"
            rel="noopener noreferrer"
          >
            @rolangom
          </a>
        </div>
        <a
          className={styles.colored}
          href="https://github.com/rolangom/react-icons-http-provider"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>
      </main>
    </>
  );
}
