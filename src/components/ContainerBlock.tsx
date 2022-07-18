import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from './NavBar';
import { useNav } from "../context/NavContext";

import styles from '../../styles/main.module.css';
import Socials from "./Socials";
import HamburgerMenu from "./HamburgerMenu";
import Main from "./Main";

export default function ContainerBlock({ children, ...customMeta }: any) {
  const router = useRouter();
  const navOpen = useNav();

  const meta = {
    title: "Vernon Neilly - Full Stack Developer",
    description: `Over 10 years of experience. Let's get in touch.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://neilly.dev${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://neilly.dev${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Vernon Neilly" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@neillydev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="containerBlock">
        <NavBar refs={customMeta.refs}/>
        {navOpen ? <HamburgerMenu /> : null}
        <Socials />
        <Main />
        <div className="mainContent">
            <main className={styles.mainContainer}>
              {children}
            </main>
        </div>
        
      </div>
    </div>
  );
}