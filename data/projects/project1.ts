export const project1 = {
  id: "project1",
  name: "Project 1",
  description: "Main company website",

  development: {
    url: "https://dev.project1.com",
    env: `
API_URL=https://api-dev.com
`,
    adminLogin: {
      email: "admin@test.com",
      password: "123456",
    },
    userLogin: {
      email: "user@test.com",
      password: "123456",
    },
    notes: "Development environment",
  },

  production: {
    url: "https://project1.com",
    env: `
API_URL=https://api.com
`,
    adminLogin: {
      email: "admin@project1.com",
      password: "123456",
    },
    userLogin: {
      email: "user@project1.com",
      password: "123456",
    },
    notes: "Production environment",
  },
};