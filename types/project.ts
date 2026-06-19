export interface Login {
  email: string;
  password: string;
}

export interface Environment {
  url: string;
  env: string;
  adminLogin: Login;
  userLogin: Login;
  notes: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  development: Environment;
  production: Environment;
}