---
id: firewalls-intro
sidebar_label: Firewalls
title: Firewalls
---

# AWS Firewalls Overview

Firewalls in AWS are essential for controlling network traffic and securing your cloud resources. AWS provides two main types of firewalls: Network Access Control Lists (NACLs) and Security Groups. These can be stateless or stateful, and are defined by sets of inbound and outbound rules.

## Types of Firewalls in AWS
- **Network Access Control Lists (NACLs)**
- **Security Groups**

Both act as firewalls but have different behaviors and use cases.

## Stateless Firewalls

Stateless firewalls require you to explicitly define both inbound and outbound rules. For example, if you allow inbound traffic on port 443, the response will return on a high ephemeral port (range 1024-65535), so you must allow outbound rules for those ports as well.

- NACLs in AWS are stateless: return traffic must be explicitly allowed.

## Stateful Firewalls

Stateful firewalls are intelligent enough to recognize that requests and responses are part of the same connection. When you allow inbound traffic, the corresponding outbound response is automatically allowed.

- Security Groups in AWS are stateful: return traffic is automatically permitted if it is part of an established connection.

## Key Points
- Use NACLs for stateless, subnet-level control.
- Use Security Groups for stateful, instance-level control.
- Define clear inbound and outbound rules for your use case.

---

**Learn more:**
- [AWS Security Groups](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html)
- [AWS Network ACLs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html)
- [AWS Firewall Documentation](https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html)