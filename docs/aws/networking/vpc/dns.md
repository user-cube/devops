---
id: dns
sidebar_label: DNS
title: DNS
---

# AWS VPC DNS

DNS in AWS VPCs allows resources with private IP addresses to automatically receive DNS hostnames for internal communication. This guide explains how DNS works in VPCs and how to configure it.

## How VPC DNS Works
- All resources with a private IP address in a VPC automatically get an internal DNS hostname.
- DNS queries are sent to the AWS DNS server at `169.254.169.253`, which is accessible by all instances by default.
- You can also query the second IP address in the VPC, which is reserved for DNS resolution.

## Public IPs and DNS
- By default, only private IP addresses receive DNS hostnames.
- To enable DNS hostnames for public IP addresses, set **enableDNSHostnames** to `True` when creating the VPC.

:::warning Important Considerations
- In the default VPC, public IP addresses also receive DNS records.
:::

## Enabling DNS Support
- To use AWS DNS servers for resolution, ensure **enableDNSSupport** is set to `True` in your VPC settings.

---

**Learn more:**
- [AWS VPC DNS Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html)