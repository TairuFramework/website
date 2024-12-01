# @tairu/next

Tairu Next.js integration.

## Installation

```sh
npm install @tairu/next
```

## Route handlers

Use the [`@tairu/next/server` export](server/index.md) to create Tile handlers served by Next.

## Type Aliases

### TileProps

> **TileProps**: `object`

#### Type declaration

##### options?

> `optional` **options**: `LoaderOptions`

##### renderer?

> `optional` **renderer**: [`ReactRenderer`](../../react/index.md#reactrenderer)

##### url

> **url**: `string`

## Functions

### Tile()

> **Tile**(`props`): `JSX.Element`

#### Parameters

##### props

[`TileProps`](index.md#tileprops)

#### Returns

`JSX.Element`
