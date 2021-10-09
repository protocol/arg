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
    const title = 'ARG: Software Engineering Job';
    const description = 'Application Research Group: Software Engineering Job';
    const url = 'https://arg.protocol.ai/job-software-engineer';

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
          <p>The Application Research Group is looking for software engineer to help us build the future of P2P distributed networks.</p>

          <h2>I. Team</h2>

          <p>
            Protocol Labs build protocols, tools, and services to radically improve the Internet. <a href="/">The Application Research Group (ARG)</a> is a team that aims to
            bolsters the mission by focusing on shipping tools that provide daily utility on the Internet. Our group gets to use libraries and modules from Protocol Labs, which
            have honored the tradition of searching for optimal Web3 infrastructure.
          </p>

          <p>
            Everything we do is{' '}
            <a href="https://github.com/application-research" target="_blank">
              open source
            </a>{' '}
            and we encourage everyone on the team to work out in the open. We hope that we can innovate enough where the rest of the ecosystem can take our solutions and apply them
            to solve problems for their users.
          </p>

          <h2>II. What we are looking for</h2>

          <p>
            A proactive and autonomous builder that can draft a roadmap forward and execute with code. You are someone who has both passion for hands on development of distributed
            systems as well as problem solving with in a complex system.
          </p>

          <p>➝ You worked on at least one project with users that involved large amounts of data storage and network traffic.</p>

          <p>
            ➝ You have some interest in IPFS and Filecoin. If you do not have any interest, you should be genuinely curious about what those technologies are and hope to develop an
            interest.
          </p>

          <p>➝ You have designed architecture, developed, and debuged software programs for databases, applications, tools, networks etc.</p>

          <p>➝ You are familiar with the Go programming language or you are someone who is willing to pick it up and you have the foundation to do so.</p>

          <p>➝ You have a B.Sc. in Computer Science. A degree is not required but a lot of what we do requires a computer science foundation.</p>

          <h2>III. How to apply?</h2>

          <p>If you are interested in this role...</p>
          <p>
            ➝ Please contact{' '}
            <a href="https://www.twitter.com/wwwjim" target="_blank">
              Jim
            </a>{' '}
            ➝ <a href="mailto:jl@protocol.ai">jl@protocol.ai</a>.
          </p>

          <p>➝ Include a CV, and a link to your GitHub.</p>

          <p>
            ➝ Or ignore all of this and dive straight into our code and start making commits and talking to us at{' '}
            <a href="https://filecoin.io/slack">#ARG or #fil-lobby in Slack</a> (tag @arg-team).
          </p>

          <p>
            <a href="/">Return to ARG</a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}
