---
title: Architecture & Data Flow
---

# Architecture & Data Flow

Components:

- Shopify (Storefront, Admin API, Webhooks)
- NetSuite (ERP, records: Item, Customer, SalesOrder, Inventory)
- Connector (middleware or SaaS connector to map/transform and sync data)
- Third-party services (payment gateways, shipping providers, analytics)

High-level flows:

- Product & Catalog: NetSuite authoritative product data -> Connector -> Shopify product creation/updates.
- Inventory: NetSuite inventory levels -> Connector -> Shopify inventory updates (near real-time).
- Orders: Shopify orders -> Connector -> NetSuite sales orders; receipts and fulfillment updates flow back.
- Customers: Customer create/update sync between Shopify and NetSuite as required.
- Webhooks: Shopify webhooks trigger connector actions for order paid, order fulfilled, inventory updates.

Integration patterns:

- Event-driven (webhooks) for orders and inventory deltas.
- Scheduled/full sync (daily or hourly) for catalog reconciliation.
- Idempotent operations with deduplication and conflict detection.

Operational considerations:

- Retries, DLQs, and monitoring for failed messages.
- Data validation and reporting for mismatches.
- Security: OAuth/API keys, least-privilege API users, encrypted credentials.
