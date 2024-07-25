import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    output: 'export',
    reactStrictMode: true,
    env: {
      mongodb_username: 'luke',
      mongodb_password: '5Z1I9q40ZBXEkhUX',
      mongodb_database: 'contact'
    },
    ...isDev && {
      // 在开发环境中额外的配置
      env: {
        mongodb_username: 'luke',
        mongodb_password: '5Z1I9q40ZBXEkhUX',
        mongodb_database: 'contact'
      },
    }
  };
};


