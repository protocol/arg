import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';
import SceneHome from '@components/SceneHome';

export default async function Page(props) {
  return (
    <DefaultLayout>
      <SceneHome />
    </DefaultLayout>
  );
}
