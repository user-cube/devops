---
id: vpc-intro
sidebar_label: VPC
title: Virtual Private Cloud (VPC)
---

# AWS VPC Overview

Virtual Private Cloud (VPC) is a core networking service in AWS that lets you create isolated, customizable cloud networks. This guide covers the essentials and practical details for understanding and designing VPCs.

## What is a VPC?

A VPC is a segment of a virtual network hosted on AWS:

- Isolates your resources from others in the cloud.
- Gives you full control over IP address ranges, routing tables, firewall access (security groups, NACLs), and gateways.
- VPCs are region-specific and cannot span multiple regions.
- By default, VPCs are isolated and do not communicate with other VPCs (this can be changed).

## VPC IP Ranges

- Each VPC has an associated IP range, defined by CIDR blocks.
- CIDR blocks determine which addresses resources can use within the VPC.
- IPv4 block sizes range from /16 to /28. You can also add a secondary IPv4 block and an IPv6 block (/56).
- You can have up to 5 CIDR blocks per VPC (limit is adjustable).

## Types of VPCs

- **Default VPC** – Automatically configured by AWS.
- **Custom VPC** – Allows you to customize all settings.

![Default VPC Diagram](/img/cloud/aws/vpc/VPC_01.svg)

## Default VPC Configuration

Each AWS region has a default VPC:

- IPv4 CIDR block: `172.31.0.0/16`
- Default subnet per availability zone: `/20` (4096 addresses per subnet)
- An Internet Gateway is attached to the VPC
- A route that directs all traffic (`0.0.0.0/0`) to the Internet Gateway
- All resources deployed in the default VPC are accessible from the internet
- A default security group is provided
- A default Network Access Control List (NACL) is provided

## Topics

- [Routing](./routing.md)
- [Subnets](./subnets.md)

---

**Learn more:**

- [AWS VPC Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
- [Subnets in AWS VPC](./subnets.md)
- [Routing in AWS VPC](./routing.md)