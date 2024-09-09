import React from 'react';
import { useRouter } from 'next/router';

export const runtime = "edge";

const NotFoundPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.replace('/');
  });

  return null;
};

export default NotFoundPage;
