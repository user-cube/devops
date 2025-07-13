---
id: natgateway
sidebar_label: "NAT Gateways"
title: "NAT Gateways"
---

# AWS NAT Gateways

NAT Gateways in AWS allow private resources in your VPC to initiate outbound connections to the internet, while preventing inbound connections from the internet. This guide explains the key concepts and steps for configuring NAT Gateways.

## Why Use a NAT Gateway?
- Internet Gateways make all services in a public subnet accessible from the internet.
- If you want your servers to initiate connections to the outside world, but prevent the outside world from initiating connections to your servers, use a NAT Gateway.

## How NAT Gateways Work
- A NAT Gateway does not replace the Internet Gateway; it requires one to function.
- After creating an Internet Gateway and a routing table to make a subnet public, you can deploy a NAT Gateway in that public subnet.
- External services and clients can access the NAT Gateway, but not the private resources behind it.
- Add a default route in your private subnet's routing table pointing to the NAT Gateway. This allows private resources to initiate outbound communication, but blocks inbound traffic from the internet.
- Like Internet Gateways, NAT Gateways are managed by AWS—just create and configure them, AWS handles the rest.

## Important Considerations

:::warning Important Considerations
- A NAT Gateway requires an Internet Gateway to function.
- NAT Gateways do not replace Internet Gateways.
- NAT Gateways are not region-resilient; you must configure one per subnet for high availability.
:::

- NAT Gateways use Elastic IPs.
- They support 5Gbps bandwidth and automatically scale up to 100Gbps.
- NAT Gateways are billed per hour and per GB of data processed.

## High-Availability Deployment

To deploy NAT Gateways for high availability, create one in each public subnet across multiple availability zones.

![NAT Gateway Diagram](/img/cloud/aws/vpc/VPC_01-NAT.svg)

---

**Learn more:**
- [AWS NAT Gateway Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html)