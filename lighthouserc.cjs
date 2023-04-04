module.exports = {
  ci: {
    collect: {
      collect: {
        url: ['http://localhost:5173/'],
        startServerCommand: 'npm run dev',
      },
      assert: {
        preset: 'lighthouse:recommended',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};