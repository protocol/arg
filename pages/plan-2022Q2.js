import * as React from 'react';
import * as Constants from '~/common/constants';

import Head from 'next/head';

import { css } from '@emotion/react';

const getFullYear = () => {
  var d = new Date();
  var n = d.getFullYear();
  return n;
};

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
`;

const projects = [
  {
    status: 'ongoing',
    name: 'Estuary Node',
    style: { opacity: 0.3 },
    goals: ['over a petabyte of storage capacity', 'two hundred terabytes a week of deal making capability', 'self hosting instructions', 'education videos'],
    people: ['Why', 'Brenda Lee 🆕', 'Peter Rabbitson 🆕', 'Elijah Seed Arita', 'Adrian Lanzafame', 'Johnny Matthews 🆕', 'Cake'],
    github: 'https://github.com/application-research/estuary',
    website: 'https://estuary.tech',
  },
  {
    status: 'ongoing',
    name: 'Barge',
    style: { opacity: 0.3 },
    goals: ['local directory sync', 'git style interface', 'large scale Filecoin storage', 'encryption for Estuary users'],
    people: ['Why', 'Johnny Matthews 🆕', 'Cake'],
  },
  {
    status: 'ongoing',
    name: 'Rainbow — IPFS Gateway',
    style: { opacity: 0.3 },
    goals: ['v2'],
    people: ['Why', 'Adrian Lanzafame'],
  },
  {
    status: 'new',
    name: 'ARG—OSS—Grants',
    goals: ['v1'],
    people: ['Why', 'Cake'],
  },
  {
    status: 'ongoing',
    name: 'Estuary WWW — Client',
    style: { opacity: 0.3 },
    goals: ['redesign', 'marketing rebrand', 'customer driven feature work', 'customer onboarding'],
    people: ['Why', 'Brenda Lee 🆕', 'Cake'],
    github: 'https://github.com/application-research/estuary-www',
    website: 'https://estuary.tech',
  },
  {
    status: 'new',
    name: 'Estuary API — SwiftUI Client',
    goals: ['v1'],
    people: ['Cake'],
  },
  {
    status: 'new',
    name: 'Estuary API — Expo Mobile Client',
    goals: ['v1'],
    people: ['Cake'],
  },
  {
    status: 'ongoing',
    style: { opacity: 0.3 },
    name: 'Estuary Documentation ➝ New Product: Format',
    github: 'https://github.com/application-research/estuary-docs',
    website: 'https://docs.estuary.tech/',
    goals: ['v2', 'multiplayer programmable documentation with first class markdown support'],
    people: ['Johnny Matthews 🆕', 'Cake'],
  },
  {
    status: 'ongoing',
    name: 'Origin',
    style: { opacity: 0.3 },
    github: 'https://github.com/application-research/origin',
    goals: [
      'v0.4',
      'education videos',
      'p2p distributed web examples for any developer in the world',
      'example: Textile Bucket',
      'example: DaemonLand',
      'example: Ceramic',
      'example: Fission',
      'example: Estuary',
      'example: Metamask',
      'various plugins',
    ],
    people: ['Chris Waring', 'Johnny Matthews 🆕', 'Cake'],
  },
  {
    status: 'ongoing',
    style: { opacity: 0.3 },
    name: 'FILC',
    github: 'https://github.com/application-research/filclient',
    goals: ['v1', 'easy Filecoin retrieval'],
    people: ['Elijah Seed Arita'],
  },
  {
    status: 'ongoing',
    style: { opacity: 0.3 },
    name: 'Sovereign — Filecoin Wallet',
    github: 'https://github.com/application-research/wallet',
    goals: ['v1', 'SwiftUI', 'transactions API', 'send signed transactions', 'security audited', 'ledger integration'],
    people: ['Cake'],
  },
  {
    status: 'ongoing',
    style: { opacity: 0.3 },
    name: 'ChainPage',
    goals: ['v1', 'ledger integration'],
    people: ['Cake'],
  },
  {
    status: 'ongoing',
    style: { opacity: 0.3 },
    website: 'https://file.app',
    github: 'https://github.com/application-research/file.app',
    name: 'Analytics, intelligence & data sources',
    goals: ['https://file.app', 'https://storage.market [needs repurpose]', 'https://storage.filecoin.io'],
    people: ['Cake'],
  },
  {
    status: 'ongoing',
    name: 'next-*',
    style: { opacity: 0.3 },
    github: 'https://github.com/application-research/next-sass',
    goals: ['v2', 'React based developer examples for the p2p distributed web'],
    people: ['Cake'],
  },
  {
    status: 'new',
    name: 'Set',
    website: 'https://set.world',
    goals: ['v1', 'game API', 'game engine', 'NFTs'],
    people: ['Cake'],
  },
];

export default class IndexPage extends React.Component {
  render() {
    const title = 'ARG PLAN➝2022Q2';
    const description = 'Application Research Group: PLAN➝2022Q2 - Starts November 25th, 2022';
    const url = 'https://arg.protocol.ai';

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
          <meta property="og:image" content="https://next-s3-public.s3.us-west-2.amazonaws.com/social/arg.protocol.ai.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={url} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content="https://next-s3-public.s3.us-west-2.amazonaws.com/social/arg.protocol.ai.png" />

          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />

          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <div css={STYLES_BODY}>
          <h1>꧁𓀨꧂</h1>
          <p>𓆏 PLAN➝2022Q2</p>

          <p>
            Our goals remain the same, we want to provide the most cohesive developer story for P2P distributed web and improve Filecoin adoption. After an insanely successful
            year, on November 25th, 2021, we will focus our efforts on select projects. Our desire is to ship everything by July 2022.
          </p>
          <br />
          <p style={{ marginBottom: 128 }}>Interested in helping? Tag the @arg-team in Slack to be listed offically.</p>

          {projects.map((p, index) => {
            return (
              <p key={`projects-${index}`}>
                <span>{p.name}</span>&nbsp;
                <span style={p.style}>[{p.status}]</span>
                {p.github ? (
                  <React.Fragment>
                    &nbsp;
                    <a href={p.github} style={p.style}>
                      [source]
                    </a>
                  </React.Fragment>
                ) : null}
                {p.website ? (
                  <React.Fragment>
                    &nbsp;
                    <a href={p.website} style={p.style}>
                      [www]
                    </a>
                  </React.Fragment>
                ) : null}
                <br />
                {p.goals.map((g) => {
                  return (
                    <React.Fragment>
                      <span>➝ {g}</span>
                      <br />
                    </React.Fragment>
                  );
                })}
                {p.people.map((w) => {
                  return (
                    <React.Fragment>
                      <span style={{ opacity: 0.4 }}>{w}</span>
                      <br />
                    </React.Fragment>
                  );
                })}
              </p>
            );
          })}

          <h2 style={{ marginTop: 128 }}>𓃵 Collaborate</h2>
          <p>
            Are you interested in collaborating? Jump into any of the project links and take a look at what we are working on and write to us using Github issues. We love
            experimenting with new concepts and libraries. We're also hiring people to work on <a href="/job-software-engineer">Estuary</a>.
          </p>

          <p>
            <a href="/">Return to ARG</a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}
