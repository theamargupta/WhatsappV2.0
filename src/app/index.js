import React, { Suspense } from 'react';
import AppRoute from '../router';
import Loader from '../components/Loader';

export default () => (
  <Suspense fallback={<Loader />}>
    <AppRoute />
  </Suspense>
);
