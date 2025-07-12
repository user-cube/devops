---
id: subnets
sidebar_label: Subnets
title: Subnets in AWS VPC
---

# AWS VPC Subnets

Subnets are fundamental building blocks in AWS VPCs, allowing you to organize and isolate resources within your cloud network. This guide covers the essentials and practical details for understanding and designing subnets.

## What is a Subnet?

A subnet is a range of IP addresses within a VPC:
- Each subnet resides in a single availability zone.
- Subnets can be public (accessible from the internet) or private (internal only).
- Must be within the VPC's CIDR range, and sized between /16 and /28.
- The first 4 IP addresses in every subnet are reserved and cannot be used:
  - `192.168.10.0` – Network address
  - `192.168.10.1` – Reserved for VPC
  - `192.168.10.2` – Reserved for DNS
  - `192.168.10.3` – Reserved for future use
- The last address (e.g., `192.168.10.255`) is reserved for broadcast.

## Subnet Size Table

| CIDR  | Subnet Mask       | # of IPs | # of Usable IPs |
|-------|-------------------|----------|-----------------|
| /16   | 255.255.0.0       | 65,536   | 65,534          |
| /17   | 255.255.128.0     | 32,768   | 32,766          |
| /18   | 255.255.192.0     | 16,384   | 16,382          |
| /19   | 255.255.224.0     | 8,192    | 8,190           |
| /20   | 255.255.240.0     | 4,096    | 4,094           |
| /21   | 255.255.248.0     | 2,048    | 2,046           |
| /22   | 255.255.252.0     | 1,024    | 1,022           |
| /23   | 255.255.254.0     | 512      | 510             |
| /24   | 255.255.255.0     | 256      | 254             |
| /25   | 255.255.255.128   | 128      | 126             |
| /26   | 255.255.255.192   | 64       | 62              |
| /27   | 255.255.255.224   | 32       | 30              |
| /28   | 255.255.255.240   | 16       | 14              |

## Network Considerations

:::warning Important Considerations
- Subnets cannot overlap within the same VPC.
:::

![Subnet Overlap Example](/img/cloud/aws/vpc/VPC_01-Subnet_Overlap.svg)

Other notes:
- You can use IPv6 in subnets.
- Subnets can be configured to use only IPv6 and discard IPv4.
- Public IPs (IPv4 or IPv6) can be auto-assigned in addition to private IPs.

---

**Learn more:**
- [AWS VPC Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html)
- [Routing in AWS VPC](./routing.md)