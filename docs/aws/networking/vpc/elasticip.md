---
id: elasticip
sidebar_label: "Elastic IP"
title: "Elastic IP"
---

# AWS Elastic IP

Elastic IPs (EIP) are static, public IPv4 addresses designed for dynamic cloud computing in AWS. This guide explains how Elastic IPs work and how to use them effectively.

## What is an Elastic IP?
- When an IP is associated with an EC2 instance, it is not reserved and may change if the instance is stopped or restarted.
- An Elastic IP is a static IPv4 address allocated to your AWS account, which you can associate with AWS resources (such as EC2 instances).
- Security groups can be configured to allow or restrict access to an Elastic IP.
- To update a service without downtime, you can create a new resource and reassign the Elastic IP to it.

## Cost and Usage
- There is no extra cost for an Elastic IP if it is associated with a running instance.
- If the Elastic IP is not associated with any resource, you are charged a reservation fee.
- If you assign multiple Elastic IPs to a single resource, you are charged for each additional IP.
- Elastic IPs are region-specific.
- Addresses must first be allocated to your AWS account, then associated with an instance or resource.

---

**Learn more:**
- [AWS Elastic IP Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html)
- [EC2 Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)