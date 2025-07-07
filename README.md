# 🚀 Hello Lambda (Node.js + TypeScript + Serverless)

This project demonstrates how to build and deploy an AWS Lambda function using **Node.js (v22)**, **TypeScript**, and the **Serverless Framework**.

---

## 📦 Tech Stack

- **Language:** TypeScript
- **Platform:** AWS Lambda
- **Deployment Tool:** Serverless Framework
- **Bundler:** esbuild

---

## 📁 Project Structure

.
├── handler.ts # Lambda function code
├── serverless.yml # Serverless deployment config
├── tsconfig.json # TypeScript compiler config
├── package.json # NPM dependencies
└── README.md

---

## 🔧 Prerequisites

- Node.js (v18 or later)
- AWS CLI configured (`aws configure`)
- Serverless Framework installed globally  
  ```bash
  npm install -g
  set aws config # set your aws access token and secrete
  serverless deploy
