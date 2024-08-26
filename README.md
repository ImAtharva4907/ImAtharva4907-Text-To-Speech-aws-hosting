# Voicemaker: A Text to Speech Converter using AWS Polly (Phase 1)

This is text-to-speech converter using [AWS Polly](https://aws.amazon.com/polly/) service. It is a simple web application that takes text as input and converts it to speech.

## Live Site

The project is hosted on vercel and can be accessed [here](https://im-atharva4907-text-to-speech-aws-hosting.vercel.app/).
![2024-08-26 15-42-39 - frame at 5m31s](https://github.com/user-attachments/assets/0d499459-57d4-4836-9c20-ef2b47d7d1d8)


## Features

- Text to speech conversion
- Listen to the audio directly
- Download the speech as an audio file
- Progress bar to show the audio playing progress

## Tech Stack

- React.js
- AWS Polly

## Prerequisites

1. **AWS Account**: If you don’t have an AWS account, sign up for a free account [here](https://aws.amazon.com/free/).
2. **AWS IAM User**:
   - Open the IAM console and click on "Users".
     
     ![IAM Console](https://github.com/user-attachments/assets/93e94e1e-a99e-4796-856b-b67c43e3f562)

   - Create a new user with a descriptive name.

     ![Create User](https://github.com/user-attachments/assets/e494e61e-2a24-47e0-b2d2-283673cee301)

   - Attach the `AmazonPollyFullAccess` policy directly to this user.
  
     ![Attach Policy](https://github.com/user-attachments/assets/699c010b-c3db-4132-9585-32e299e006d2)

   - Create the user.
  
     ![Create User](https://github.com/user-attachments/assets/b0fdfe9f-85a1-4aa5-a829-18543c90ca74)

3. **Access Key ID and Secret Access Key**:
   - Click on the newly created user.

      ![2024-08-26 15-42-39 - frame at 2m16s](https://github.com/user-attachments/assets/79ff9a94-f244-4aac-816b-953882fdfbcc)

   - Go to the **Security credentials** tab.
  
     ![2024-08-26 15-42-39 - frame at 2m19s](https://github.com/user-attachments/assets/e12d85a5-221e-4d37-a34d-ae539258c5e9)

   - Scroll down to **Access keys** and click on **Create access key**.
  
     ![2024-08-26 15-42-39 - frame at 2m22s](https://github.com/user-attachments/assets/1d1bdbc4-c529-4854-a331-705cabd23a2c)

   - Choose **Local Code** and click **Next**.

    
     ![2024-08-26 15-42-39 - frame at 2m28s](https://github.com/user-attachments/assets/9cae4b27-975a-4814-831f-ec542d382058)

   - Click **Create access key**.
  
     ![2024-08-26 15-42-39 - frame at 2m30s](https://github.com/user-attachments/assets/33309865-6648-403b-bf1d-c2472145679f)

   - You will receive both the **Access Key ID** and **Secret Access Key**. Store these securely as you'll need them for the `.env` file.
  
     ![2024-08-26 15-42-39 - frame at 2m33s](https://github.com/user-attachments/assets/8fb5bc00-57cf-4a14-8ca0-32f734d931d9)




Don't worry AWS free tier grants 5 million characters per month (for using AWS Polly) for the first 12 months.

## Local Setup

- Clone the repository
- Install node modules using `npm install`
- Create a `.env` file in the root directory and add the following environment variables:

```
REACT_APP_CLIENTID=<your_aws_access_key_id>
REACT_APP_SECRETKEY=<your_aws_secret_access_key>
REACT_APP_REGION=<your_aws_region>
```
![2024-08-26 15-42-39 - frame at 2m10s](https://github.com/user-attachments/assets/7792387e-def0-419f-a67e-f006a30dbf9b)


## Run Locally

- Run the application using `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Connect with me
- [LinkedIn](https://www.linkedin.com/in/imatharva/)
