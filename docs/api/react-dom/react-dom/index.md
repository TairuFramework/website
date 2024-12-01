# @tairu/react-dom

React DOM client for Tairu tiles.

## Installation

```sh
npm install @tairu/react-dom
```

## React Server Components

Use the [`@tairu/react-dom/server` export](server/index.md) for compatibility with React Server Components.

## Type Aliases

### ActionHandler()

> **ActionHandler**: (`action`, `submitValue`?) => `Promise`\<`void`\>

#### Parameters

##### action

[`ActionV0`](../../protocol/index.md#actionv0)

##### submitValue?

[`SubmitValueV0`](../../protocol/index.md#submitvaluev0)

#### Returns

`Promise`\<`void`\>

***

### TileProps

> **TileProps**: `object`

#### Type declaration

##### renderer?

> `optional` **renderer**: [`ReactRenderer`](../../react/index.md#reactrenderer)

##### renderLoadError()?

> `optional` **renderLoadError**: (`props`) => `ReactNode`

###### Parameters

###### props

[`LoadErrorProps`](../../react/index.md#loaderrorprops)

###### Returns

`ReactNode`

##### renderPostError()?

> `optional` **renderPostError**: (`props`) => `ReactNode`

###### Parameters

###### props

[`PostErrorProps`](../../react/index.md#posterrorprops)

###### Returns

`ReactNode`

##### url

> **url**: `string`

## Functions

### ActionHandlerProvider()

> **ActionHandlerProvider**(`props`): `ReactNode`

#### Parameters

##### props

`ProviderProps`\<`null` \| [`ActionHandler`](index.md#actionhandler)\>

#### Returns

`ReactNode`

***

### Tile()

> **Tile**(`props`): `Element`

#### Parameters

##### props

[`TileProps`](index.md#tileprops)

#### Returns

`Element`
