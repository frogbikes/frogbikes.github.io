---
title: NetSuite Connector Setup
---

# NetSuite Connector Setup

This page documents configuration and deployment of the connector between NetSuite and Shopify.

Checklist:

- Connector selection: SaaS connector vs custom middleware.
- API credentials: NetSuite integration role + consumer key/secret or token-based auth; Shopify API key + secret and required scopes.
- Mapping tables: SKU to Item mapping, warehouses, locations.
- Webhook endpoints: secure HTTPS endpoints for order and inventory events.
- Error handling: DLQ and retry strategy.

Deployment:

- Use environment-specific config for staging and production.
- Secrets stored in a secrets manager or CI environment.
- CI/CD pipeline for connector configuration changes.
