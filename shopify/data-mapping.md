---
title: Data Mapping (Products, Customers, Orders)
---

# Data Mapping

Products:

- NetSuite Item -> Shopify Product/Variant.
- Key fields: SKU, title, description, price, weight, inventory, images, attributes.
- Handling bundles/kit items and configurable products.

Customers:

- Decide master source (NetSuite or Shopify) for customer records.
- Map name, email, addresses, tax IDs, and custom fields.

Orders:

- Shopify order -> NetSuite SalesOrder mapping.
- Line items, discounts, taxes, shipping, payments mapping.
- Rounding and currency considerations.

Data validation:

- Reconciliation reports: unmatched SKUs, inventory drift, failed syncs.
