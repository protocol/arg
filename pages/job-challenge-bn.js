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
    margin-top: 88px;
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

export default class IndexPage extends React.Component {
  render() {
    const title = 'ARG: Work On Estuary Challenge';
    const description = 'Application Research Group: A challenge for those who want to work on Estuary.';
    const url = 'https://arg.protocol.ai/job-challenge-fn';

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
          <p>
            If you are viewing this page, it is because you expressed the interest to work with the <a href="https://arg.protocol.ai">ARG</a> and on Estuary.{' '}
            <a href="https://estuary.tech">Estuary</a> is our next generation IPFS Node with archival storage and retrieval using Filecoin. We have put together a simple challenge
            involving it.
          </p>{' '}
          <p>
            If this website was not sent to you directly and you're passionate about building cool applications for the P2P distributed WWW, we will not stop you from taking a shot
            at this. We want to work with people from all backgrounds from anywhere in the world.
          </p>
          <h2>I. Why?</h2>
          <p>We do not believe in white board interviews or brain teasers, we would rather you try something you will actually work on with us.</p>
          <p>
            Working on the Application Research team can be challenging, we try to integrate technology the entire Filecoin ecosystem develops while attempting to innovate on new
            infrastructure that everyone can upgrade to (e.g. <a href="https://estuary.tech">Estuary</a>). To have an understanding of whats going on we have to iterate on
            prototypes and experiments so that collaborators can learn from us and our OSS.
          </p>
          <p>
            When we built Estuary we started with <a href="https://github.com/application-research/estuary/blob/master/node/node.go">modules</a> developed by many open source
            teams. Our work and success depends on the contributions of many people and we want to honor those contributions by recruiting people who care.
          </p>
          <h2>II. The task</h2>
          <p>
            We would like you to make a successful storage deal on the Filecoin Network using Estuary. Except you will need to run your own Estuary Node, and you will need to run
            the website client on your own.
          </p>
          <p>
            The first step will be learning how to run an Estuary Node. Please read the <a href="https://github.com/application-research/estuary">README.md on GitHub</a>. Next you
            will want to prepare your Estuary Node for development, visit this page next:{' '}
            <a href="https://github.com/application-research/estuary/blob/master/GettingStartedDevelopment.md">
              https://github.com/application-research/estuary/blob/master/GettingStartedDevelopment.md
            </a>
            .
          </p>
          <p>
            Once your Estuary node is running, you'll need to run your own copy of the website and point it to your Estuary node. You can find the instructions{' '}
            <a href="https://github.com/application-research/estuary-www">here</a>. You will need to change where the{' '}
            <a href="https://github.com/application-research/estuary-www/blob/master/common/constants.ts#L45">client is pointing</a>.
          </p>
          <p>
            Once everything is working, you should store a file from this list{' '}
            <a href="https://github.com/filecoin-project/slingshot/blob/master/datasets.md">https://github.com/filecoin-project/slingshot/blob/master/datasets.md</a>. You'll have
            to find storage providers from the <a href="https://file.app">community</a> and provide{' '}
            <a href="https://estuary.tech/verify-cid?cid=QmVrrF7DTnbqKvWR7P7ihJKp4N5fKmBX29m5CHbW9WLep9">proof</a> that the data is stored.
          </p>
          <p>At any moment when you're stuck, feel free to ask questions and reach out, and if you want to stop at any point, that is okay too.</p>
          <h2>III. When you finish</h2>
          <p>
            When you finish, find us on{' '}
            <a target="_blank" href="https://filecoin.io/slack">
              #ARG Slack
            </a>{' '}
            or on twitter at <a href="https://www.twitter.com/aresearchgroup">@aresearchgroup</a>. DM me and we'll schedule time to go over what you did.
          </p>
          <p>
            <a href="/">Return to ARG</a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}
