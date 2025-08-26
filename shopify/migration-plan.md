---
title: Migration Plan & Rollout
---

# Migration Plan & Rollout

Phases:

1. Discovery & Mapping
   - Inventory current Magento customizations and integrations.
   - Map Magento data model to NetSuite and Shopify models.
2. Connector Implementation
   - Implement or configure the NetSuite ⇄ Shopify connector (Alumio replacement or connector product).
   - Build transformers and mapping for Product, Inventory, Customer, Order.
3. Staging & Testing
   - Sync data to a staging Shopify environment.
   - End-to-end testing: checkout, payment, fulfillment, refunds, returns.
4. Pilot
   - Limited customer segment or region.
   - Monitor metrics and resolve issues.
5. Cutover
   - Freeze Magento writes, migrate last-mile data, switch DNS and set Shopify live.
6. Post-launch Support
   - Monitor syncs, shipping, finance reconciliation.

Rollback plan:

- Re-enable Magento storefront or route traffic back with DNS TTLs and CDN rules.
- Ensure order reconciliation is possible for any in-flight orders.
