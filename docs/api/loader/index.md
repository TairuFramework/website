# @tairu/loader

Tairu loader, loading and verifying tiles served by a Tairu handler.

## Installation

```sh
npm install @tairu/loader
```

## Classes

### Loader

#### Constructors

##### new Loader()

> **new Loader**(`params`): [`Loader`](index.md#loader)

###### Parameters

• **params**: [`LoaderParams`](index.md#loaderparams) = `{}`

###### Returns

[`Loader`](index.md#loader)

#### Accessors

##### signer

> `get` **signer**(): [`ActionSigner`](index.md#actionsigner)

> `set` **signer**(`value`): `void`

###### Parameters

• **value**: [`ActionSigner`](index.md#actionsigner)

###### Returns

[`ActionSigner`](index.md#actionsigner)

###### Defined in

#### Methods

##### getRenderedTile()

> **getRenderedTile**(`url`, `format`, `options`): `Promise`\<`string`\>

###### Parameters

• **url**: `string`

• **format**: [`RenderFormat`](index.md#renderformat)

• **options**: `Options` = `{}`

###### Returns

`Promise`\<`string`\>

***

##### getStaticTileAsBox()

> **getStaticTileAsBox**(`url`, `options`?): `Promise`\<`object`\>

###### Parameters

• **url**: `string`

• **options?**: `Options`

###### Returns

`Promise`\<`object`\>

###### props

> `readonly` **props**: `object`

###### props.children?

> `readonly` `optional` **props.children**: `object` & `object` \| `object` & `object`[]

###### props.key?

> `readonly` `optional` **props.key**: `string`

###### props.style?

> `readonly` `optional` **props.style**: `object`

###### props.style.alignItems?

> `optional` **props.style.alignItems**: `"flex-start"` \| `"center"` \| `"flex-end"`

###### props.style.alignSelf?

> `optional` **props.style.alignSelf**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"auto"`

###### props.style.backgroundClip?

> `optional` **props.style.backgroundClip**: `"text"` \| `"border-box"`

###### props.style.backgroundColor?

> `optional` **props.style.backgroundColor**: `string`

###### props.style.backgroundImage?

> `optional` **props.style.backgroundImage**: `string`

###### props.style.backgroundPosition?

> `optional` **props.style.backgroundPosition**: `string`

###### props.style.backgroundRepeat?

> `optional` **props.style.backgroundRepeat**: `"repeat"` \| `"repeat-x"` \| `"repeat-y"` \| `"no-repeat"`

###### props.style.backgroundSize?

> `optional` **props.style.backgroundSize**: `string`

###### props.style.borderBottomColor?

> `optional` **props.style.borderBottomColor**: `string`

###### props.style.borderBottomLeftRadius?

> `optional` **props.style.borderBottomLeftRadius**: `number`

###### props.style.borderBottomRightRadius?

> `optional` **props.style.borderBottomRightRadius**: `number`

###### props.style.borderBottomStyle?

> `optional` **props.style.borderBottomStyle**: `"solid"` \| `"dashed"`

###### props.style.borderBottomWidth?

> `optional` **props.style.borderBottomWidth**: `number`

###### props.style.borderColor?

> `optional` **props.style.borderColor**: `string`

###### props.style.borderLeftColor?

> `optional` **props.style.borderLeftColor**: `string`

###### props.style.borderLeftStyle?

> `optional` **props.style.borderLeftStyle**: `"solid"` \| `"dashed"`

###### props.style.borderLeftWidth?

> `optional` **props.style.borderLeftWidth**: `number`

###### props.style.borderRadius?

> `optional` **props.style.borderRadius**: `number`

###### props.style.borderRightColor?

> `optional` **props.style.borderRightColor**: `string`

###### props.style.borderRightStyle?

> `optional` **props.style.borderRightStyle**: `"solid"` \| `"dashed"`

###### props.style.borderRightWidth?

> `optional` **props.style.borderRightWidth**: `number`

###### props.style.borderStyle?

> `optional` **props.style.borderStyle**: `"solid"` \| `"dashed"`

###### props.style.borderTopColor?

> `optional` **props.style.borderTopColor**: `string`

###### props.style.borderTopLeftRadius?

> `optional` **props.style.borderTopLeftRadius**: `number`

###### props.style.borderTopRightRadius?

> `optional` **props.style.borderTopRightRadius**: `number`

###### props.style.borderTopStyle?

> `optional` **props.style.borderTopStyle**: `"solid"` \| `"dashed"`

###### props.style.borderTopWidth?

> `optional` **props.style.borderTopWidth**: `number`

###### props.style.borderWidth?

> `optional` **props.style.borderWidth**: `number`

###### props.style.bottom?

> `optional` **props.style.bottom**: `number`

###### props.style.boxShadow?

> `optional` **props.style.boxShadow**: `string`

###### props.style.display?

> `optional` **props.style.display**: `"flex"` \| `"none"`

###### props.style.flexBasis?

> `optional` **props.style.flexBasis**: `number`

###### props.style.flexDirection?

> `optional` **props.style.flexDirection**: `"row"` \| `"row-reverse"` \| `"column"` \| `"column-reverse"`

###### props.style.flexGrow?

> `optional` **props.style.flexGrow**: `number`

###### props.style.flexShrink?

> `optional` **props.style.flexShrink**: `number`

###### props.style.flexWrap?

> `optional` **props.style.flexWrap**: `"nowrap"` \| `"wrap"` \| `"wrap-reverse"`

###### props.style.gap?

> `optional` **props.style.gap**: `number`

###### props.style.height?

> `optional` **props.style.height**: `number`

###### props.style.justifyContent?

> `optional` **props.style.justifyContent**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`

###### props.style.left?

> `optional` **props.style.left**: `number`

###### props.style.margin?

> `optional` **props.style.margin**: `number`

###### props.style.marginBottom?

> `optional` **props.style.marginBottom**: `number`

###### props.style.marginLeft?

> `optional` **props.style.marginLeft**: `number`

###### props.style.marginRight?

> `optional` **props.style.marginRight**: `number`

###### props.style.marginTop?

> `optional` **props.style.marginTop**: `number`

###### props.style.maxHeight?

> `optional` **props.style.maxHeight**: `number`

###### props.style.maxWidth?

> `optional` **props.style.maxWidth**: `number`

###### props.style.minHeight?

> `optional` **props.style.minHeight**: `number`

###### props.style.minWidth?

> `optional` **props.style.minWidth**: `number`

###### props.style.objectFit?

> `optional` **props.style.objectFit**: `"none"` \| `"contain"` \| `"cover"`

###### props.style.opacity?

> `optional` **props.style.opacity**: `number`

###### props.style.overflow?

> `optional` **props.style.overflow**: `"visible"` \| `"hidden"`

###### props.style.padding?

> `optional` **props.style.padding**: `number`

###### props.style.paddingBottom?

> `optional` **props.style.paddingBottom**: `number`

###### props.style.paddingLeft?

> `optional` **props.style.paddingLeft**: `number`

###### props.style.paddingRight?

> `optional` **props.style.paddingRight**: `number`

###### props.style.paddingTop?

> `optional` **props.style.paddingTop**: `number`

###### props.style.position?

> `optional` **props.style.position**: `"relative"` \| `"absolute"`

###### props.style.right?

> `optional` **props.style.right**: `number`

###### props.style.top?

> `optional` **props.style.top**: `number`

###### props.style.width?

> `optional` **props.style.width**: `number`

###### type

> `readonly` **type**: `"Box"`

***

##### getTile()

> **getTile**(`url`, `options`?): `Promise`\<`object`\>

###### Parameters

• **url**: `string`

• **options?**: `Options`

###### Returns

`Promise`\<`object`\>

###### props

> `readonly` **props**: `object`

###### props.actions?

> `readonly` `optional` **props.actions**: (`object` \| `object` \| `object`)[]

###### props.children?

> `readonly` `optional` **props.children**: `object` & `object` \| `object` & `object`[]

###### props.description?

> `readonly` `optional` **props.description**: `string`

###### props.input?

> `readonly` `optional` **props.input**: `object` \| `object`

###### props.key?

> `readonly` `optional` **props.key**: `string`

###### props.style?

> `readonly` `optional` **props.style**: `object`

###### props.style.alignItems?

> `optional` **props.style.alignItems**: `"flex-start"` \| `"center"` \| `"flex-end"`

###### props.style.alignSelf?

> `optional` **props.style.alignSelf**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"auto"`

###### props.style.backgroundClip?

> `optional` **props.style.backgroundClip**: `"text"` \| `"border-box"`

###### props.style.backgroundColor?

> `optional` **props.style.backgroundColor**: `string`

###### props.style.backgroundImage?

> `optional` **props.style.backgroundImage**: `string`

###### props.style.backgroundPosition?

> `optional` **props.style.backgroundPosition**: `string`

###### props.style.backgroundRepeat?

> `optional` **props.style.backgroundRepeat**: `"repeat"` \| `"repeat-x"` \| `"repeat-y"` \| `"no-repeat"`

###### props.style.backgroundSize?

> `optional` **props.style.backgroundSize**: `string`

###### props.style.borderBottomColor?

> `optional` **props.style.borderBottomColor**: `string`

###### props.style.borderBottomLeftRadius?

> `optional` **props.style.borderBottomLeftRadius**: `number`

###### props.style.borderBottomRightRadius?

> `optional` **props.style.borderBottomRightRadius**: `number`

###### props.style.borderBottomStyle?

> `optional` **props.style.borderBottomStyle**: `"solid"` \| `"dashed"`

###### props.style.borderBottomWidth?

> `optional` **props.style.borderBottomWidth**: `number`

###### props.style.borderColor?

> `optional` **props.style.borderColor**: `string`

###### props.style.borderLeftColor?

> `optional` **props.style.borderLeftColor**: `string`

###### props.style.borderLeftStyle?

> `optional` **props.style.borderLeftStyle**: `"solid"` \| `"dashed"`

###### props.style.borderLeftWidth?

> `optional` **props.style.borderLeftWidth**: `number`

###### props.style.borderRadius?

> `optional` **props.style.borderRadius**: `number`

###### props.style.borderRightColor?

> `optional` **props.style.borderRightColor**: `string`

###### props.style.borderRightStyle?

> `optional` **props.style.borderRightStyle**: `"solid"` \| `"dashed"`

###### props.style.borderRightWidth?

> `optional` **props.style.borderRightWidth**: `number`

###### props.style.borderStyle?

> `optional` **props.style.borderStyle**: `"solid"` \| `"dashed"`

###### props.style.borderTopColor?

> `optional` **props.style.borderTopColor**: `string`

###### props.style.borderTopLeftRadius?

> `optional` **props.style.borderTopLeftRadius**: `number`

###### props.style.borderTopRightRadius?

> `optional` **props.style.borderTopRightRadius**: `number`

###### props.style.borderTopStyle?

> `optional` **props.style.borderTopStyle**: `"solid"` \| `"dashed"`

###### props.style.borderTopWidth?

> `optional` **props.style.borderTopWidth**: `number`

###### props.style.borderWidth?

> `optional` **props.style.borderWidth**: `number`

###### props.style.bottom?

> `optional` **props.style.bottom**: `number`

###### props.style.boxShadow?

> `optional` **props.style.boxShadow**: `string`

###### props.style.display?

> `optional` **props.style.display**: `"flex"` \| `"none"`

###### props.style.flexBasis?

> `optional` **props.style.flexBasis**: `number`

###### props.style.flexDirection?

> `optional` **props.style.flexDirection**: `"row"` \| `"row-reverse"` \| `"column"` \| `"column-reverse"`

###### props.style.flexGrow?

> `optional` **props.style.flexGrow**: `number`

###### props.style.flexShrink?

> `optional` **props.style.flexShrink**: `number`

###### props.style.flexWrap?

> `optional` **props.style.flexWrap**: `"nowrap"` \| `"wrap"` \| `"wrap-reverse"`

###### props.style.gap?

> `optional` **props.style.gap**: `number`

###### props.style.height?

> `optional` **props.style.height**: `number`

###### props.style.justifyContent?

> `optional` **props.style.justifyContent**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`

###### props.style.left?

> `optional` **props.style.left**: `number`

###### props.style.margin?

> `optional` **props.style.margin**: `number`

###### props.style.marginBottom?

> `optional` **props.style.marginBottom**: `number`

###### props.style.marginLeft?

> `optional` **props.style.marginLeft**: `number`

###### props.style.marginRight?

> `optional` **props.style.marginRight**: `number`

###### props.style.marginTop?

> `optional` **props.style.marginTop**: `number`

###### props.style.maxHeight?

> `optional` **props.style.maxHeight**: `number`

###### props.style.maxWidth?

> `optional` **props.style.maxWidth**: `number`

###### props.style.minHeight?

> `optional` **props.style.minHeight**: `number`

###### props.style.minWidth?

> `optional` **props.style.minWidth**: `number`

###### props.style.objectFit?

> `optional` **props.style.objectFit**: `"none"` \| `"contain"` \| `"cover"`

###### props.style.opacity?

> `optional` **props.style.opacity**: `number`

###### props.style.overflow?

> `optional` **props.style.overflow**: `"visible"` \| `"hidden"`

###### props.style.padding?

> `optional` **props.style.padding**: `number`

###### props.style.paddingBottom?

> `optional` **props.style.paddingBottom**: `number`

###### props.style.paddingLeft?

> `optional` **props.style.paddingLeft**: `number`

###### props.style.paddingRight?

> `optional` **props.style.paddingRight**: `number`

###### props.style.paddingTop?

> `optional` **props.style.paddingTop**: `number`

###### props.style.position?

> `optional` **props.style.position**: `"relative"` \| `"absolute"`

###### props.style.right?

> `optional` **props.style.right**: `number`

###### props.style.top?

> `optional` **props.style.top**: `number`

###### props.style.width?

> `optional` **props.style.width**: `number`

###### props.title

> `readonly` **props.title**: `string`

###### type

> `readonly` **type**: `"Tile"`

###### version

> `readonly` **version**: `"0.1"`

***

##### postAction()

> **postAction**(`url`, `action`, `useSigner`?, `options`?): `Promise`\<`object`\>

###### Parameters

• **url**: `string`

• **action**: `object` \| `object`

• **useSigner?**: [`ActionSigner`](index.md#actionsigner)

• **options?**: `Options`

###### Returns

`Promise`\<`object`\>

###### props

> `readonly` **props**: `object`

###### props.actions?

> `readonly` `optional` **props.actions**: (`object` \| `object` \| `object`)[]

###### props.children?

> `readonly` `optional` **props.children**: `object` & `object` \| `object` & `object`[]

###### props.description?

> `readonly` `optional` **props.description**: `string`

###### props.input?

> `readonly` `optional` **props.input**: `object` \| `object`

###### props.key?

> `readonly` `optional` **props.key**: `string`

###### props.style?

> `readonly` `optional` **props.style**: `object`

###### props.style.alignItems?

> `optional` **props.style.alignItems**: `"flex-start"` \| `"center"` \| `"flex-end"`

###### props.style.alignSelf?

> `optional` **props.style.alignSelf**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"auto"`

###### props.style.backgroundClip?

> `optional` **props.style.backgroundClip**: `"text"` \| `"border-box"`

###### props.style.backgroundColor?

> `optional` **props.style.backgroundColor**: `string`

###### props.style.backgroundImage?

> `optional` **props.style.backgroundImage**: `string`

###### props.style.backgroundPosition?

> `optional` **props.style.backgroundPosition**: `string`

###### props.style.backgroundRepeat?

> `optional` **props.style.backgroundRepeat**: `"repeat"` \| `"repeat-x"` \| `"repeat-y"` \| `"no-repeat"`

###### props.style.backgroundSize?

> `optional` **props.style.backgroundSize**: `string`

###### props.style.borderBottomColor?

> `optional` **props.style.borderBottomColor**: `string`

###### props.style.borderBottomLeftRadius?

> `optional` **props.style.borderBottomLeftRadius**: `number`

###### props.style.borderBottomRightRadius?

> `optional` **props.style.borderBottomRightRadius**: `number`

###### props.style.borderBottomStyle?

> `optional` **props.style.borderBottomStyle**: `"solid"` \| `"dashed"`

###### props.style.borderBottomWidth?

> `optional` **props.style.borderBottomWidth**: `number`

###### props.style.borderColor?

> `optional` **props.style.borderColor**: `string`

###### props.style.borderLeftColor?

> `optional` **props.style.borderLeftColor**: `string`

###### props.style.borderLeftStyle?

> `optional` **props.style.borderLeftStyle**: `"solid"` \| `"dashed"`

###### props.style.borderLeftWidth?

> `optional` **props.style.borderLeftWidth**: `number`

###### props.style.borderRadius?

> `optional` **props.style.borderRadius**: `number`

###### props.style.borderRightColor?

> `optional` **props.style.borderRightColor**: `string`

###### props.style.borderRightStyle?

> `optional` **props.style.borderRightStyle**: `"solid"` \| `"dashed"`

###### props.style.borderRightWidth?

> `optional` **props.style.borderRightWidth**: `number`

###### props.style.borderStyle?

> `optional` **props.style.borderStyle**: `"solid"` \| `"dashed"`

###### props.style.borderTopColor?

> `optional` **props.style.borderTopColor**: `string`

###### props.style.borderTopLeftRadius?

> `optional` **props.style.borderTopLeftRadius**: `number`

###### props.style.borderTopRightRadius?

> `optional` **props.style.borderTopRightRadius**: `number`

###### props.style.borderTopStyle?

> `optional` **props.style.borderTopStyle**: `"solid"` \| `"dashed"`

###### props.style.borderTopWidth?

> `optional` **props.style.borderTopWidth**: `number`

###### props.style.borderWidth?

> `optional` **props.style.borderWidth**: `number`

###### props.style.bottom?

> `optional` **props.style.bottom**: `number`

###### props.style.boxShadow?

> `optional` **props.style.boxShadow**: `string`

###### props.style.display?

> `optional` **props.style.display**: `"flex"` \| `"none"`

###### props.style.flexBasis?

> `optional` **props.style.flexBasis**: `number`

###### props.style.flexDirection?

> `optional` **props.style.flexDirection**: `"row"` \| `"row-reverse"` \| `"column"` \| `"column-reverse"`

###### props.style.flexGrow?

> `optional` **props.style.flexGrow**: `number`

###### props.style.flexShrink?

> `optional` **props.style.flexShrink**: `number`

###### props.style.flexWrap?

> `optional` **props.style.flexWrap**: `"nowrap"` \| `"wrap"` \| `"wrap-reverse"`

###### props.style.gap?

> `optional` **props.style.gap**: `number`

###### props.style.height?

> `optional` **props.style.height**: `number`

###### props.style.justifyContent?

> `optional` **props.style.justifyContent**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`

###### props.style.left?

> `optional` **props.style.left**: `number`

###### props.style.margin?

> `optional` **props.style.margin**: `number`

###### props.style.marginBottom?

> `optional` **props.style.marginBottom**: `number`

###### props.style.marginLeft?

> `optional` **props.style.marginLeft**: `number`

###### props.style.marginRight?

> `optional` **props.style.marginRight**: `number`

###### props.style.marginTop?

> `optional` **props.style.marginTop**: `number`

###### props.style.maxHeight?

> `optional` **props.style.maxHeight**: `number`

###### props.style.maxWidth?

> `optional` **props.style.maxWidth**: `number`

###### props.style.minHeight?

> `optional` **props.style.minHeight**: `number`

###### props.style.minWidth?

> `optional` **props.style.minWidth**: `number`

###### props.style.objectFit?

> `optional` **props.style.objectFit**: `"none"` \| `"contain"` \| `"cover"`

###### props.style.opacity?

> `optional` **props.style.opacity**: `number`

###### props.style.overflow?

> `optional` **props.style.overflow**: `"visible"` \| `"hidden"`

###### props.style.padding?

> `optional` **props.style.padding**: `number`

###### props.style.paddingBottom?

> `optional` **props.style.paddingBottom**: `number`

###### props.style.paddingLeft?

> `optional` **props.style.paddingLeft**: `number`

###### props.style.paddingRight?

> `optional` **props.style.paddingRight**: `number`

###### props.style.paddingTop?

> `optional` **props.style.paddingTop**: `number`

###### props.style.position?

> `optional` **props.style.position**: `"relative"` \| `"absolute"`

###### props.style.right?

> `optional` **props.style.right**: `number`

###### props.style.top?

> `optional` **props.style.top**: `number`

###### props.style.width?

> `optional` **props.style.width**: `number`

###### props.title

> `readonly` **props.title**: `string`

###### type

> `readonly` **type**: `"Tile"`

###### version

> `readonly` **version**: `"0.1"`

## Type Aliases

### ActionSigner

> **ActionSigner**: [`DIDSigner`](../protocol/index.md#didsigner) \| `Promise`\<[`DIDSigner`](../protocol/index.md#didsigner)\>

***

### LoaderParams

> **LoaderParams**: `object`

#### Type declaration

##### options?

> `optional` **options**: `Options`

##### signer?

> `optional` **signer**: [`ActionSigner`](index.md#actionsigner)

***

### PostActionParams

> **PostActionParams**: `object`

#### Type declaration

##### action

> **action**: [`PostActionV0`](../protocol/index.md#postactionv0)

##### options?

> `optional` **options**: `Options`

##### signer

> **signer**: [`ActionSigner`](index.md#actionsigner)

##### url

> **url**: `string`

***

### RenderFormat

> **RenderFormat**: `Exclude`\<[`HandlerFormatV0`](../protocol/index.md#handlerformatv0), `"json"`\>

## Variables

### noSigner

> `const` **noSigner**: [`DIDSigner`](../protocol/index.md#didsigner)

**`Internal`**

***

### noSignerError

> `const` **noSignerError**: `Error`

**`Internal`**

## Functions

### getTile()

> **getTile**(`url`, `options`?): `Promise`\<[`TileV0`](../protocol/index.md#tilev0)\>

#### Parameters

• **url**: `string`

• **options?**: `Options`

#### Returns

`Promise`\<[`TileV0`](../protocol/index.md#tilev0)\>

***

### postAction()

> **postAction**(`params`): `Promise`\<[`TileV0`](../protocol/index.md#tilev0)\>

#### Parameters

• **params**: [`PostActionParams`](index.md#postactionparams)

#### Returns

`Promise`\<[`TileV0`](../protocol/index.md#tilev0)\>
