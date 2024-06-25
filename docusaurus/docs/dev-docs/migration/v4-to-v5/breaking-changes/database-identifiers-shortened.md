---
title: Database identifiers shortened in v5
description: Database identifiers are shortened in Strapi v5 and can't be longer than 55 characters to avoid issues with identifiers that are too long.
sidebar_label: Database identifiers shortened
displayed_sidebar: devDocsMigrationV5Sidebar
tags:
 - breaking changes
 - database
 - upgrade to Strapi 5
---

import Intro from '/docs/snippets/breaking-change-page-intro.md'
import MigrationIntro from '/docs/snippets/breaking-change-page-migration-intro.md'
import NoPlugins from '/docs/snippets/breaking-change-not-affecting-plugins.md'
import YesCodemods from '/docs/snippets/breaking-change-handled-by-codemod.md'

# Database identifiers shortened in v5

In Strapi 5, database identifiers can't be longer than 55 characters. <Intro />

<NoPlugins />
<YesCodemods />

(_This breaking change is actually handled by a data migration script that runs when your Strapi project is upgraded to Strapi 5._)

## Breaking change description

<SideBySideContainer>

<SideBySideColumn>

**In Strapi v4**

Database identifiers could be longer than 55 characters, potentially causing issues with some databases.

</SideBySideColumn>

<SideBySideColumn>

**In Strapi 5**

Database identifiers can't be longer than 55 characters and will be shortened.

</SideBySideColumn>

</SideBySideContainer>

## Migration

<MigrationIntro />

### Notes

- A hashing key will be added when shortening database identifiers to avoid conflicts. It will consist in the first 6 characters of SHA-256. For example, `my_very_very_very_very_very_very_very_too_long_identifier_unique` will be shortened to `my_very_very_very_very_very_very_very_very_a2dx3_uq` in Strapi v5.
- Some suffixes will be used:

  | Suffix                 | Short version |
  | ---------------------- | ------------- |
  | `component_type_index` | `cmpix`       |
  | `component`            | `cmp`         |
  | `components`           | `cmps`        |
  | `entity_fk`            | `etfk`        |
  | `field_index`          | `flix`        |
  | `fk`                   | `fk`          |
  | `id_column_index`      | `idix`        |
  | `index`                | `idx`         |
  | `inv_fk`               | `ifk`         |
  | `links`                | `lnk`         |
  | `morphs`               | `mph`         |
  | `order_fk`             | `ofk`         |
  | `order_index`          | `oidx`        |
  | `order_inv_fk`         | `oifk`        |
  | `order`                | `ord`         |
  | `primary`              | `pk`          |
  | `unique`               | `uq`         |

### Manual procedure

No manual migration is required. Strapi will handle everything when starting the application in Strapi v5.