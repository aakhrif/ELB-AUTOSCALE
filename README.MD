# AWS Load Balancer - Add EC2 Instance

This example demonstrates how to programmatically add an EC2 instance to a target group of an 
**Application Load Balancer (ALB)** using the AWS SDK for JavaScript (Node.js). The code uses 
the **Elastic Load Balancing API v2** (`ELBv2`) to register an EC2 instance into a target group.

## Prerequisites

- **Node.js** installed. You can download the latest version of [Node.js](https://nodejs.org/).
- **AWS SDK for JavaScript** installed.
- AWS credentials (Access Key and Secret Access Key) with the necessary permissions to interact
     with Elastic Load Balancing and EC2.
- An existing **EC2 instance** and **target group** in your **Application Load Balancer**.

## Installation Instructions

1. **Set up the project**:
   
   Create a new directory and initialize a Node.js project:

   ```bash
   mkdir aws-load-balancer
   cd aws-load-balancer
   npm init -y
