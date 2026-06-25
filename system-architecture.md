
in this file i am going to show the system-architecture, means what i design in this to challenge my portfolio.
using aws services
I show you the services i used in developing my portfolio
use the user friendly architecture to build my portfolio
This is going to be the frontend teir challenge that i used to build my portfolio.

Resume Portfolio Challenge Using Cloud is a cloud-native portfolio website that hosts a personal resume on a cloud platform and tracks visitor interactions using serverless services, databases, APIs, and CI/CD pipelines.

I use the following services:
  1. S3 bucket to store my static file content for my portfolio
  2. use the Route53 for the DNS name and domain for my portfolio
  3. then

**AWS Services Commonly Used**

1. Amazon S3 – Static website hosting
2. Amazon CloudFront – Global content delivery
3. AWS Lambda – Backend logic
4. Amazon API Gateway – REST API creation
5. Amazon DynamoDB – Visitor count storage
6. AWS IAM – Security and permissions
7. AWS Certificate Manager – HTTPS certificates
8. Amazon Route 53 – Domain management
9. AWS CodePipeline – Automated deployment



🏗️ The Full Stack, Explained
1. Frontend (HTML/CSS/JS → S3)
Your resume lives as a static website — plain HTML, CSS, and a little JavaScript. No server needed.

Host it in an S3 bucket with static website hosting enabled
Add a small JS snippet that calls your API to fetch + display the visitor count

2. DNS — Amazon Route 53

Buy/configure your domain here
Points your domain → CloudFront distribution
Handles subdomain routing (e.g. resume.yourdomain.com)

3. CDN — Amazon CloudFront

Sits in front of S3 and caches your site at edge locations globally
Adds HTTPS (via ACM certificate — free)
Without this, Indian visitors hit a US S3 bucket on every request. With CloudFront, they hit a nearby edge node

4. Visitor Counter Flow
Browser JS  →  API Gateway (REST)  →  Lambda (Python/Node)  →  DynamoDB
                                  ←  returns count          ←  reads/writes
API Gateway — Creates a public HTTPS endpoint your JS can call

Lambda — Serverless function that runs your logic (no EC2 needed). It:

Reads current count from DynamoDB
Increments it
Returns the new count

DynamoDB — NoSQL key-value table. Just one row: { "id": "visitors", "count": 42 }
5. IAM — Glue for permissions

Lambda needs a role with permission to read/write DynamoDB
Principle of least privilege — only the access it needs

