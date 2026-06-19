export const project2 = {
  id: "project2",
  name: "Project 2",
  description: "CRM System",

  development: {
    url: "https://dev.project2.com",
    env: `
API_URL=https://api-dev.project2.com
`,
    adminLogin: {
      email: "admin@dev.project2.com",
      password: "123456",
    },
    userLogin: {
      email: "user@dev.project2.com",
      password: "123456",
    },
    notes: "Development environment",
  },
  production: {
    url: "https://project2.com",
    env: `
API_URL=https://api.project2.com
`,
    adminLogin: {
      email: "admin@project2.com",
      password: "123456",
    },
    userLogin: {
      email: "user@project2.com",
      password: "123456",
    },
    notes: "Production environment",
  },
};