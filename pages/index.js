import * as React from "react";
import * as Constants from "~/common/constants";

import Head from "next/head";

import { css } from "@emotion/react";

const STYLES_BODY = css`
  max-width: 888px;
  width: 100%;
  padding: 128px 24px 256px 24px;

  h1 {
    font-weight: 400;
    font-size: 64px;
    line-height: 64px;
    margin-bottom: 64px;
    color: #000000;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }

  h2 {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    margin-top: 64px;
    color: #161616;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 32px;
    color: #262626;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }

  .item {
    margin-top: 32px;
    font-size: 24px;
    line-height: 32px;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }

  .member {
    font-size: 24px;
    line-height: 32px;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }
`;

const team = [
  { name: "Jeromy Johnson", title: "Principal" },
  { name: "Jimmy Lee", url: "https://reading.supply/@jim" },
  { name: "Chris Waring" },
  { name: "Martina Long" },
  { name: "Haris Butt" },
  { name: "Tara Lin" },
];

const grant = [
  { name: "Jason Leyser", title: "Lead" },
  { name: "Daniel Akuoko" },
  { name: "Amine Elouarti" },
  { name: "Shariq Butt" },
];

const projects = [
  {
    name: "Slate",
    services: ["Render", "Textile", "Infinite Scroll", "Sentinel"],
    url: "https://github.com/filecoin-project/slate",
  },
  /*
  {
    name: "Slate iOS",
    services: ["Textile", "Infinite Scroll"],
    url: "https://github.com/slate-engineering/slate-ios",
  },
  {
    name: "Slate Design System & NPM Module",
    services: [],
    url: "https://slate.host/_/system",
  },
  {
    name: "Slate Chrome Extension",
    url: "https://github.com/jasonleyser/slate-for-chrome",
    services: [],
  },
  { name: "Slate Sentinel", services: ["Render", "Sentinel"], url: "https://sentinel.slate.host" },
  { name: "Lens", services: ["Render"], url: "https://github.com/slate-engineering/lens" },
  { name: "Fiji", services: ["Render"], url: "https://github.com/slate-engineering/fiji" },
  {
    name: "Shovel",
    services: ["Textile", "Render"],
    url: "https://github.com/slate-engineering/shovel",
  },
  */
  { name: "Filecoin Wallet", services: ["ChainLove"] },
];

export default class IndexPage extends React.Component {
  render() {
    const title = "ARG";
    const description = "Applications Research Group";
    const url = "https://arg.protocol.ai";

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/static/social.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={url} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content="/static/social.png" />

          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />

          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <div css={STYLES_BODY}>
          <h1>꧁𓀨꧂</h1>
          <p>Applications Research Group</p>

          <p>
            At Protocol Labs, we build protocols, tools, and services that improve the Internet
            beyond TCP/IP. The Application Research Group (ARG) bolsters the mission by focusing on
            shipping tools that people love to use on the Internet.
          </p>

          <p>
            All of our work has the potential to serve a lot of people. Over four billion people are
            active internet users as of 2020, and that value is over fifty five percent of the
            global population. Our civilization reached this point by creating an Internet with no
            single centralized governance by either technological implementation or government
            policy. We believe that in order to continue an open global Internet, we must ship more
            well designed software and utilize protocols that preserve what everyone cherishes.
          </p>

          <p>
            Our stance towards Web3 Applications is simple. Internet software today can be better.
            We believe in open source software, and we believe you should have much more autonomy
            over your clients. People should not provide sensitive data to Internet services unless
            it is absolutely necessary. If a person uses software they do become transformed into a
            product against their will. Client-⇶-server architecture has gotten us far, but there no
            longer needs to be a single point of failure for services, and the new clients need to
            be far more robust to handle the world of augmented and virtual reality. People deserve
            transparency from their software, just like they deserve to know what chemicals are in
            their food, or which pollutants are in the water they drink.
          </p>

          <p>
            Our libraries & modules from Protocol Labs have honored the tradition of searching for
            optimal Web3 infrastructure. We are excited to continue to battle test IPFS, LIBP2P,
            IPSQL/IPLD, and other contributions by the many forward thinking engineers and software
            designers who work here. Quality technology deserves an audience.
          </p>

          <p>
            Our partners Textile, Fleek, and Infinite Scroll are leading the way in more ways than
            we can list. They make what our group does possible. Our first product, Slate proves
            that we can incorporate many partners and their services into a single product. Over the
            next decade we will continue to prove our worth and demonstrate that there is space for
            everyone to build together.
          </p>

          <p>Thank you for the opportunity to serve. We will not let you down!</p>

          <h2>Projects</h2>

          {projects.map((p) => {
            return (
              <div className="item" key={p.name}>
                <div>➟ {p.name}</div>
                {p.services.length ? (
                  <div>
                    <span style={{ opacity: 0 }}>➟ </span>
                    {p.services.map((s) => (
                      <span style={{ color: "#888" }}>➥{s}&nbsp;</span>
                    ))}
                  </div>
                ) : null}
                <a href={p.url}>
                  <span style={{ opacity: 0 }}>➟ </span>
                  {p.url}
                </a>
              </div>
            );
          })}

          <h2>Team</h2>
          <br />
          {team.map((t) => {
            return (
              <div className="member">
                {t.url ? (
                  <a href={t.url} target="_blank">
                    {t.name}
                  </a>
                ) : (
                  t.name
                )}{" "}
                {t.title ? <span style={{ color: "#888" }}>◥ {t.title}</span> : ""}
              </div>
            );
          })}

          <h2>Grant Program</h2>

          <p>
            The Application Research Group provides grants to young builders around the world who
            want to help make the Internet a better place. At the moment the program is invite only
            but may open up in the future.
          </p>
          <br />
          {grant.map((t) => {
            return (
              <div className="member">
                {t.name} {t.title ? <span style={{ color: "#888" }}>◥ {t.title}</span> : ""}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
