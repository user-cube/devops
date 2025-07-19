---
id: network-load-balancer
sidebar_label: "Network Load Balancers"
title: "Network Load Balancers"
---

# Network Load Balancers (NLB)

Network Load Balancers operate at **Layer 4 (Transport Layer)** of the OSI model and are optimized for handling **TCP** and **UDP** traffic. They are specifically designed for **non-HTTP/S** workloads that require ultra-low latency and high throughput.

---

## Key Features

- **Protocol Support**:
  - Supports **TCP**, **UDP**, and **TLS**
  - Ideal for applications that do not use HTTP or HTTPS

- **High Performance**:
  - Offers **lower latency** and **higher throughput** than Application Load Balancers
  - Capable of handling **millions of requests per second** while maintaining ultra-low latencies

- **Health Checks**:
  - Performed at the **connection level** using **TCP** or **ICMP**
  - Helps detect unresponsive or unhealthy targets

- **Connection Forwarding**:
  - NLBs **forward the entire TCP/UDP connection** directly to the target instance
  - No **SSL termination** or Layer 7 inspection is performed

---

## SSL/TLS Handling

If SSL/TLS encryption is required:
- You must install the **SSL certificate directly on the EC2 instance**
- The NLB acts as a **pass-through** and does not terminate or inspect SSL traffic

This approach ensures end-to-end encryption but shifts certificate management to the backend infrastructure.

---

## Summary

Network Load Balancers are ideal for:
- **Latency-sensitive applications**
- **Real-time communication protocols**
- **Custom TCP/UDP-based applications**
- Scenarios where **Layer 7 features are not needed**

They provide extreme performance and reliability for workloads that require fast, direct, and unprocessed traffic routing.