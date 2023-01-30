import { useState } from 'react';
import { Center } from '@mantine/core';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import App from '../../components/App';
import Receive from '../../components/Receive';

export default function Odeslat() {
  const [session, setSession] = useState(null);

  return (
    <App>
      <Center style={{ width: '100%', height: '100%' }}>
        <Receive />
      </Center>
    </App>
  );
}
// export const getServerSideProps = withPageAuth();
