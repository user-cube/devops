---
id: privatevspublic
sidebar_label: "Public Networks vs Private Networks"
title: "Public Networks vs Private Networks"
---

# Public Networks vs Private Networks

When deciding whether to use a public or private subnet in AWS, ask yourself: Does your service need to be accessed by external users?

- If yes, use a **public subnet**.
- If no, use a **private subnet**.

## Examples
- A web application should be placed in a public subnet so it can be accessed by users on the internet.
- A database should be placed in a private subnet, accessible only by the web application or other internal services.

## Key Points
- Public subnets allow inbound and outbound internet access (with an Internet Gateway).
- Private subnets restrict inbound internet access, but can initiate outbound connections (using a NAT Gateway).
- Use security groups and network ACLs to further control access to resources.

---

**Learn more:**
- [AWS Subnet Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html)