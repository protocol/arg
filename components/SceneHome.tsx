import styles from '@components/SceneHome.module.scss';

import * as React from 'react';

export default function SceneHome(props) {
  return (
    <div className={styles.body}>
      <h1 className={styles.heading}>
        Thank you for trying Filecoin Data Tools (FDT), Together we uploaded over 29,309,434,134 files (4+ PiB) to the Filecoin Network across many storage providers in the
        ecosystem.
      </h1>
      <p className={styles.paragraph}>
        On August 1st, 2023 we deprecated our tooling and our data storage onboarding has come to an end. New and exciting upgrades are in development.
      </p>
      <p className={styles.paragraph}>
        Please check out <a href="https://web3.storage/">Web3 Storage</a> and <a href="https://nft.storage/">NFT Storage</a>.
      </p>
    </div>
  );
}
