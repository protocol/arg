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
  { name: 'Why', title: 'Principal' },
  { name: 'Dig' },
  { name: 'Jonathan Gross' },
  { name: `Chhi'mèd Künzang` },
  { name: 'Davis Momii' },
  { name: 'Marshall Culpepper', title: 'Lead' },
  { name: 'Elijah Seed Arita' },
  { name: 'Peter Rabbitson' },
  { name: 'Gabriel Cruz' },
  { name: 'Brenda Lee' },
  { name: 'Adrian Lanzafame' },
  { name: 'Eric Evanchick' },
  { name: 'Johnny Matthews' },
  { name: 'Cake', url: 'https://jimmyl.ee' },
];

const projects = [
  {
    name: 'Estuary — Store and retrieve data',
    url: 'https://estuary.tech',
    services: [],
  },
  {
    name: 'File.app — Filecoin storage analytics',
    url: 'https://file.app',
    services: ['Textile', 'FilRep', 'Filecoin', 'IEXCLoud'],
  },
  {
    name: 'next-bucket',
    url: 'https://github.com/application-research/next-bucket',
    services: ['Textile'],
  },
  {
    name: 'Origin — official ARG static site template',
    url: 'https://github.com/application-research/origin',
    services: ['Fleek'],
  },
  {
    name: 'Sovereign — Filecoin Wallet',
    url: 'https://github.com/filecoin-project/community/discussions/62',
    services: [],
  },
];

export default class IndexPage extends React.Component {
  render() {
    const title = 'ARG';
    const description = 'Application Research Group';
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
          <p>Application Research Group</p>

          <p>
            <a href="https://protocol.ai">Protocol Labs</a> build protocols, tools, and services to radically improve the Internet. The{' '}
            <a href="https://github.com/application-research/" target="_blank">
              Application Research Group
            </a>{' '}
            (ARG) is a team that aims to bolster the mission by focusing on shipping tools that provide daily utility on the Internet.
          </p>

          <p>
            The ARG's work has the potential to serve a lot of people. Over four billion people are active internet users as of 2020, and that value is over fifty five percent of
            the global population. Our civilization reached this point by creating an Internet with no single centralized governance by either technological implementation or
            government policy. We believe that in order to continue an open global Internet, we must ship more well designed software and utilize protocols that preserve what
            everyone cherishes.
          </p>

          <p>
            Our group gets to use libraries and modules from{' '}
            <a href="https://protocol.ai" target="_blank">
              Protocol Labs
            </a>
            , which have honored the tradition of searching for optimal Web3 infrastructure. We are excited for the opportunity to continue to battle test{' '}
            <a href="https://filecoin.io" target="_blank">
              Filecoin
            </a>
            ,{' '}
            <a href="https://ipfs.io" target="_blank">
              IPFS
            </a>
            ,{' '}
            <a href="https://libp2p.io/" target="_blank">
              LIBP2P
            </a>
            ,{' '}
            <a href="https://ipld.io/" target="_blank">
              IPLD
            </a>
            , and other contributions by the many forward thinking engineers and software designers who work here. Quality technology deserves an audience.
          </p>

          <p>Thank you for the opportunity to serve!</p>

          <p>— ARG Team</p>

          <h2>Projects</h2>

          <p>
            Check out our latest{' '}
            <a href="/plan-2022Q2" target="_blank">
              roadmap
            </a>
            .
          </p>

          <h2>Team</h2>
          <br />
          {team.map((t) => {
            return (
              <div className="member" key={t.name}>
                {t.url ? (
                  <a href={t.url} target="_blank">
                    {t.name}
                  </a>
                ) : (
                  t.name
                )}{' '}
                {t.title ? <span style={{ color: '#888' }}>◥ {t.title}</span> : ''}
              </div>
            );
          })}

          <h2>𓃵 Collaborate</h2>
          <p>
            Are you interested in collaborating? Jump into any of the project links and take a look at what we are working on and write to us using Github issues. We love
            experimenting with new concepts and libraries.
          </p>

          <p>© Application Research Group 2020-{getFullYear()}</p>
        </div>
      </React.Fragment>
    );
  }
}
