---
id: routing
sidebar_label: Routing
title: Routing in AWS VPC
---

# AWS VPC Routing

Routing in AWS VPCs is essential for controlling how network traffic flows within and outside your cloud environment. This guide covers the key concepts and practical details you need to understand VPC routing.

## What is a VPC Router?

Every VPC has a built-in **VPC Router**. This router:

- Has an interface in each availability zone.
- Is accessible at the first usable IP address of each subnet (subnet+1).
- Enables communication between subnets in the same VPC.
- Allows traffic from external sources to reach resources inside the VPC.

## Routing Tables

AWS uses **routing tables** to control how traffic is directed:

- Each routing table contains rules (routes) that specify where network traffic should go based on its destination IP address.
- The router checks the destination address and forwards traffic according to the most specific matching route (longest subnet mask).
- If multiple routes overlap, AWS selects the route with the largest subnet mask (most specific).

### Default and Custom Routing Tables

- Every VPC has a default routing table.
- Each subnet can be associated with its own routing table, or share one with other subnets.
- When a subnet is created, it inherits the VPC's default routing table unless you specify otherwise.
- The default table always includes a **local** route, which enables communication between all subnets in the VPC.

## Example: Routing Table Entry

| Destination    | Target         | Description                  |
|----------------|----------------|------------------------------|
| 10.0.0.0/16    | local          | Internal VPC traffic         |
| 0.0.0.0/0      | igw-xxxxxxxx   | Internet access via gateway  |
| 192.168.1.0/24 | pcx-xxxxxxxx   | VPC peering connection       |

## Key Points

- Routing tables are critical for security and connectivity.
- You can use them to isolate subnets, enable internet access, or connect to other VPCs and networks.
- Always review your routes to avoid accidental exposure or connectivity issues.

---

**Learn more:**

- [AWS VPC Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html)