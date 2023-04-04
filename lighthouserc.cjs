module.exports = {
  ci: {
    collect: {
      collect: {
        url: ['http://localhost:5173/'],
        startServerCommand: 'npm run dev',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};