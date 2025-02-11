# Voicemaker: A Text to Speech Converter using AWS Polly (Phase 1)

## Overview

Voicemaker is a user-friendly web application designed to convert text into spoken words using AWS Polly, a cloud service by Amazon Web Services that provides advanced text-to-speech capabilities. This application allows users to input text and receive high-quality, natural-sounding speech output, leveraging  [AWS Polly](https://aws.amazon.com/polly/)'s deep learning models. With support for various languages and voices, Voicemaker can be used for a wide range of applications, from enhancing accessibility to creating interactive audio content. 

The primary goal of this project is to provide a seamless and intuitive interface for users to generate speech from text, offering playback controls and download options for the generated audio. This initial phase focuses on core functionality and user experience, with future phases planned to enhance features and capabilities.
![image](https://github.com/user-attachments/assets/1350847a-3f0b-4508-8933-0f440521ab18)



## Usage

Once the application is running, you can:

1. **Enter Text**: Type or paste the text you want to convert to speech.
2. **Generate Speech**: Click the generate button to process the text and produce speech.
3. **Playback**: Use the playback controls to listen to the generated speech.
4. **Download**: Save the speech as an audio file if needed.
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

# Voicemaker: A Text to Speech Converter using AWS Polly (Phase 2)

In This phase of text-to-speech converter we will host aur app on cloud using [IAM](https://aws.amazon.com/iam/) & [AWS s3](https://aws.amazon.com/s3/) service.

## Tech Stack

- AWS s3
- IAM

## Prerequisites

### 1. AWS IAM User with Required Permissions
Ensure the IAM user has the following permissions:
- `ec2fullaccess`
- `iamfullaccess`
- `s3fullaccess`

![2024-08-26 16-01-08 - frame at 1m44s](https://github.com/user-attachments/assets/f6e4407c-a400-4d1e-a7d3-c4ae97ff876a)


## Steps to Set Up a Static Website on S3

### 2. Create an S3 Bucket
1. Open the Amazon S3 console.
2. Click on **Create bucket**.

   ![Create Bucket](https://github.com/user-attachments/assets/b0d59e57-edfd-43ae-9660-f020f6184805)

3. Configure the bucket settings:
   - **Block all public access**.
   - Click **Create bucket**.

   ![Block Public Access](https://github.com/user-attachments/assets/8bbf7087-ddb4-44ac-a742-df6680ceb6ae)
   ![2024-08-26 16-01-08 - frame at 2m48s](https://github.com/user-attachments/assets/1dde1c36-6448-4db9-ae06-ef03c4ce430a)


### 3. Configure the S3 Bucket for Static Website Hosting
1. Go to the **Properties** tab of the bucket.
2. Scroll down to **Static website hosting** and enable it.
3. Set the **Index document** to `index.html`.

   ![Enable Static Website Hosting](https://github.com/user-attachments/assets/5b632d8f-843e-44ac-ae24-5ae64f0d2171)

### 4. Set Bucket Permissions
1. Navigate to the **Permissions** tab.
2. Scroll down to **Bucket Policy** and click **Edit**.
3. Add a new statement:
   - **Service**: `s3`
   - **Action**: `s3:GetObject`
   - **Resource**: Add the ARN for your bucket in the following format:
     ```
     arn:aws:s3:::your-bucket-name/*
     ```

   ![Add Bucket Policy](https://github.com/user-attachments/assets/05a9a5e7-967f-4975-a569-13e97aaca162)

4. Save changes.

   ![Save Bucket Policy](https://github.com/user-attachments/assets/292a0cdf-b974-4be4-a9ae-c7ac9663b5c3)

### 5. Upload Files to the S3 Bucket
1. Open a terminal in Visual Studio Code (VS Code).
2. Run the following command to sync your local `build` directory with the S3 bucket:

   ```bash
   aws s3 sync build/ s3://your-bucket-name
   ```

   ![2024-08-26 16-01-08 - frame at 7m3s](https://github.com/user-attachments/assets/68681859-cc2d-48b2-b5e9-487484f27b1c)
   ![2024-08-26 16-01-08 - frame at 7m23s](https://github.com/user-attachments/assets/d2c32bd4-5323-4e1b-9919-83efef96d7e7)

### 6. Access Your Static Website
   1.Go to the Properties tab of the S3 bucket.
   
   2.Scroll down to Static website hosting to find the Endpoint URL.

   ![2024-08-26 16-01-08 - frame at 7m29s](https://github.com/user-attachments/assets/24198edd-ea11-49e1-90be-ec7a362722c8)

   3.Use the provided Endpoint URL to access your deployed website.

   ![2024-08-26 16-01-08 - frame at 7m55s](https://github.com/user-attachments/assets/d8e3e4b5-0a42-478c-b522-46ab3832664e)



## Facing Difficulties?
- [Watch Deployment Tutorial(Phase-1) - "Deployment at local"](https://drive.google.com/file/d/16ECJRfUZ3GXtnM4I0vq6aONL6s88XChc/view?usp=sharing)
- [Watch Deployment Tutorial(Phase-2) - "Deployment at aws s3"](https://drive.google.com/file/d/1yPv-bGJTFgeIXu9Z_aGj93k-paWD09X7/view?usp=sharing)




## Connect with me
- [LinkedIn](https://www.linkedin.com/in/imatharva/)
