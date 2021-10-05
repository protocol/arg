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
    const title = 'ARG: Collab Challenge';
    const description = 'Application Research Group: Collab Challenge';
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
            For creative engineers and computational designers, we put together a simple challenge for a few select individuals who are interested in working with the{' '}
            <a href="https://arg.protocol.ai">ARG</a> long term.
          </p>{' '}
          <p>
            Although if you want to work with the ARG, and you're passionate about building cool applications for the P2P distributed WWW, We will not stop you from taking a shot
            at this. We want to work with people from all backgrounds from anywhere in the world.
          </p>
          <h2>I. Why make me do this?</h2>
          <p>I don't believe in white board interviews or technical interrogations, I think the work is about code and systems design so that is our focus.</p>
          <p>
            Working on the Application Research team is challenging, we try to integrate technology the entire Filecoin ecosystem develops while attempting to innovate on new
            infrastructure that everyone can upgrade to (e.g. <a href="https://estuary.tech">Estuary</a>). To really have an understanding of whats going on we have to iterate on
            prototypes and experiments. The wilingness to use technology that is unproven and the desire to help our collaborators improve their OSS is essential to working here.
          </p>
          <p>
            When we built Estuary we started with <a href="https://github.com/application-research/estuary/blob/master/node/node.go">modules</a> developed by many open source
            teams. Our work and success depends on the contributions of many people and we want to honor that by bringing in people who care.
          </p>
          <h2>II. The challenge</h2>
          <p>As a team we are ready to share our open source stack for building decentralized web applications (clientside, frontend).</p>
          <p>
            Clone and setup this starting point <a href="https://github.com/application-research/origin-playground">https://github.com/application-research/origin-playground</a>
          </p>
          <p>We want you to take this starting point, and build anything you want with one the following collaborators on this list. You can pick from:</p>
          <p>
            ➝ <a href="https://docs.textile.io/buckets/">Textile</a>
          </p>
          <p>
            ➝ <a href="https://guide.fission.codes/">Fission</a>
          </p>
          <p>
            ➝ <a href="https://github.com/ceramicstudio/self.id">3Box/Ceramic</a>
          </p>
          <p>
            ➝ <a href="https://github.com/metamask">Metamask</a>
          </p>
          <p>
            ➝ <a href="https://github.com/filecoin-project">Filecoin-project</a>
          </p>
          <p>And thats it, try not to take forever on it, but maybe spend 4-6 hours split across anywhere between a day or a few weeks.</p>
          <p>Good luck.</p>
          <h2>III. When you finish</h2>
          <p>
            When you finish, you know where to find us on{' '}
            <a target="_blank" href="https://filecoin.io/slack">
              Slack
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
