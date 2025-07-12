---
id: igw
sidebar_label: "Internet Gateways"
title: "Internet Gateways"
---

# Internet Gateways (IGW)

Internet Gateways (IGW) are essential for enabling public access to resources in your AWS VPC. This guide explains the key concepts and steps for configuring IGWs.

## What is an Internet Gateway?
- By default, when you create a subnet, it is private.
- To make a subnet public, you must use an **Internet Gateway**.
- Internet Gateways are **region resilient**—they cover all availability zones within the VPC.
- If there is no Internet Gateway attached, all resources in the VPC are private.
- Each VPC can have only one Internet Gateway, and each Internet Gateway can be attached to only one VPC.

## How to Create a Public Subnet
1. Create an Internet Gateway.
2. Attach the Internet Gateway to your VPC.
3. Create a custom routing table.
4. In the routing table, add a default route (`0.0.0.0/0`) pointing to the Internet Gateway.
5. Associate the routing table with the subnet you want to make public.

![IGW Diagram](/img/cloud/aws/vpc/VPC_01-IGW.svg)

## Important Considerations

:::warning Important Considerations
- By default, resources in the VPC only have private IP addresses. You must enable public IP assignment for resources to be accessible from the internet.
:::

Note: Resources are unaware of their public IP address. When you access a resource via its public IP, AWS translates it to the private IP, providing an abstraction. The public and private IPs are closely linked.

---

**Learn more:**
- [AWS Internet Gateway Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)