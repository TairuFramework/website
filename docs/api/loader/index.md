# loader

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

##### getTile()

> **getTile**(`url`, `options`?): `Promise`\<`object`\>

###### Parameters

• **url**: `string`

• **options?**: `Options`

###### Returns

`Promise`\<`object`\>

###### props

> **props**: `object`

###### props.actions?

> `optional` **actions**: (`object` \| `object` \| `object`)[]

###### props.children?

> `optional` **children**: `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\> \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>[]

###### props.description?

> `optional` **description**: `string`

###### props.input?

> `optional` **input**: `object` \| `object`

###### props.key?

> `optional` **key**: `string`

###### props.style?

> `optional` **style**: `object`

###### props.style.alignItems?

> `optional` **alignItems**: `"flex-start"` \| `"center"` \| `"flex-end"`

###### props.style.alignSelf?

> `optional` **alignSelf**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"auto"`

###### props.style.backgroundClip?

> `optional` **backgroundClip**: `"text"` \| `"border-box"`

###### props.style.backgroundColor?

> `optional` **backgroundColor**: `string`

###### props.style.backgroundImage?

> `optional` **backgroundImage**: `string`

###### props.style.backgroundPosition?

> `optional` **backgroundPosition**: `string`

###### props.style.backgroundRepeat?

> `optional` **backgroundRepeat**: `"repeat"` \| `"repeat-x"` \| `"repeat-y"` \| `"no-repeat"`

###### props.style.backgroundSize?

> `optional` **backgroundSize**: `string`

###### props.style.borderBottomColor?

> `optional` **borderBottomColor**: `string`

###### props.style.borderBottomLeftRadius?

> `optional` **borderBottomLeftRadius**: `number`

###### props.style.borderBottomRightRadius?

> `optional` **borderBottomRightRadius**: `number`

###### props.style.borderBottomStyle?

> `optional` **borderBottomStyle**: `"solid"` \| `"dashed"`

###### props.style.borderBottomWidth?

> `optional` **borderBottomWidth**: `number`

###### props.style.borderColor?

> `optional` **borderColor**: `string`

###### props.style.borderLeftColor?

> `optional` **borderLeftColor**: `string`

###### props.style.borderLeftStyle?

> `optional` **borderLeftStyle**: `"solid"` \| `"dashed"`

###### props.style.borderLeftWidth?

> `optional` **borderLeftWidth**: `number`

###### props.style.borderRadius?

> `optional` **borderRadius**: `number`

###### props.style.borderRightColor?

> `optional` **borderRightColor**: `string`

###### props.style.borderRightStyle?

> `optional` **borderRightStyle**: `"solid"` \| `"dashed"`

###### props.style.borderRightWidth?

> `optional` **borderRightWidth**: `number`

###### props.style.borderStyle?

> `optional` **borderStyle**: `"solid"` \| `"dashed"`

###### props.style.borderTopColor?

> `optional` **borderTopColor**: `string`

###### props.style.borderTopLeftRadius?

> `optional` **borderTopLeftRadius**: `number`

###### props.style.borderTopRightRadius?

> `optional` **borderTopRightRadius**: `number`

###### props.style.borderTopStyle?

> `optional` **borderTopStyle**: `"solid"` \| `"dashed"`

###### props.style.borderTopWidth?

> `optional` **borderTopWidth**: `number`

###### props.style.borderWidth?

> `optional` **borderWidth**: `number`

###### props.style.bottom?

> `optional` **bottom**: `number`

###### props.style.boxShadow?

> `optional` **boxShadow**: `string`

###### props.style.display?

> `optional` **display**: `"flex"` \| `"none"`

###### props.style.flexBasis?

> `optional` **flexBasis**: `number`

###### props.style.flexDirection?

> `optional` **flexDirection**: `"row"` \| `"row-reverse"` \| `"column"` \| `"column-reverse"`

###### props.style.flexGrow?

> `optional` **flexGrow**: `number`

###### props.style.flexShrink?

> `optional` **flexShrink**: `number`

###### props.style.flexWrap?

> `optional` **flexWrap**: `"nowrap"` \| `"wrap"` \| `"wrap-reverse"`

###### props.style.gap?

> `optional` **gap**: `number`

###### props.style.height?

> `optional` **height**: `number`

###### props.style.justifyContent?

> `optional` **justifyContent**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`

###### props.style.left?

> `optional` **left**: `number`

###### props.style.margin?

> `optional` **margin**: `number`

###### props.style.marginBottom?

> `optional` **marginBottom**: `number`

###### props.style.marginLeft?

> `optional` **marginLeft**: `number`

###### props.style.marginRight?

> `optional` **marginRight**: `number`

###### props.style.marginTop?

> `optional` **marginTop**: `number`

###### props.style.maxHeight?

> `optional` **maxHeight**: `number`

###### props.style.maxWidth?

> `optional` **maxWidth**: `number`

###### props.style.minHeight?

> `optional` **minHeight**: `number`

###### props.style.minWidth?

> `optional` **minWidth**: `number`

###### props.style.objectFit?

> `optional` **objectFit**: `"none"` \| `"contain"` \| `"cover"`

###### props.style.opacity?

> `optional` **opacity**: `number`

###### props.style.overflow?

> `optional` **overflow**: `"visible"` \| `"hidden"`

###### props.style.padding?

> `optional` **padding**: `number`

###### props.style.paddingBottom?

> `optional` **paddingBottom**: `number`

###### props.style.paddingLeft?

> `optional` **paddingLeft**: `number`

###### props.style.paddingRight?

> `optional` **paddingRight**: `number`

###### props.style.paddingTop?

> `optional` **paddingTop**: `number`

###### props.style.position?

> `optional` **position**: `"relative"` \| `"absolute"`

###### props.style.right?

> `optional` **right**: `number`

###### props.style.top?

> `optional` **top**: `number`

###### props.style.width?

> `optional` **width**: `number`

###### props.title

> **title**: `string`

###### type

> **type**: `"Tile"`

###### version

> **version**: `"0.1"`

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

> **props**: `object`

###### props.actions?

> `optional` **actions**: (`object` \| `object` \| `object`)[]

###### props.children?

> `optional` **children**: `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\> \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>[]

###### props.description?

> `optional` **description**: `string`

###### props.input?

> `optional` **input**: `object` \| `object`

###### props.key?

> `optional` **key**: `string`

###### props.style?

> `optional` **style**: `object`

###### props.style.alignItems?

> `optional` **alignItems**: `"flex-start"` \| `"center"` \| `"flex-end"`

###### props.style.alignSelf?

> `optional` **alignSelf**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"auto"`

###### props.style.backgroundClip?

> `optional` **backgroundClip**: `"text"` \| `"border-box"`

###### props.style.backgroundColor?

> `optional` **backgroundColor**: `string`

###### props.style.backgroundImage?

> `optional` **backgroundImage**: `string`

###### props.style.backgroundPosition?

> `optional` **backgroundPosition**: `string`

###### props.style.backgroundRepeat?

> `optional` **backgroundRepeat**: `"repeat"` \| `"repeat-x"` \| `"repeat-y"` \| `"no-repeat"`

###### props.style.backgroundSize?

> `optional` **backgroundSize**: `string`

###### props.style.borderBottomColor?

> `optional` **borderBottomColor**: `string`

###### props.style.borderBottomLeftRadius?

> `optional` **borderBottomLeftRadius**: `number`

###### props.style.borderBottomRightRadius?

> `optional` **borderBottomRightRadius**: `number`

###### props.style.borderBottomStyle?

> `optional` **borderBottomStyle**: `"solid"` \| `"dashed"`

###### props.style.borderBottomWidth?

> `optional` **borderBottomWidth**: `number`

###### props.style.borderColor?

> `optional` **borderColor**: `string`

###### props.style.borderLeftColor?

> `optional` **borderLeftColor**: `string`

###### props.style.borderLeftStyle?

> `optional` **borderLeftStyle**: `"solid"` \| `"dashed"`

###### props.style.borderLeftWidth?

> `optional` **borderLeftWidth**: `number`

###### props.style.borderRadius?

> `optional` **borderRadius**: `number`

###### props.style.borderRightColor?

> `optional` **borderRightColor**: `string`

###### props.style.borderRightStyle?

> `optional` **borderRightStyle**: `"solid"` \| `"dashed"`

###### props.style.borderRightWidth?

> `optional` **borderRightWidth**: `number`

###### props.style.borderStyle?

> `optional` **borderStyle**: `"solid"` \| `"dashed"`

###### props.style.borderTopColor?

> `optional` **borderTopColor**: `string`

###### props.style.borderTopLeftRadius?

> `optional` **borderTopLeftRadius**: `number`

###### props.style.borderTopRightRadius?

> `optional` **borderTopRightRadius**: `number`

###### props.style.borderTopStyle?

> `optional` **borderTopStyle**: `"solid"` \| `"dashed"`

###### props.style.borderTopWidth?

> `optional` **borderTopWidth**: `number`

###### props.style.borderWidth?

> `optional` **borderWidth**: `number`

###### props.style.bottom?

> `optional` **bottom**: `number`

###### props.style.boxShadow?

> `optional` **boxShadow**: `string`

###### props.style.display?

> `optional` **display**: `"flex"` \| `"none"`

###### props.style.flexBasis?

> `optional` **flexBasis**: `number`

###### props.style.flexDirection?

> `optional` **flexDirection**: `"row"` \| `"row-reverse"` \| `"column"` \| `"column-reverse"`

###### props.style.flexGrow?

> `optional` **flexGrow**: `number`

###### props.style.flexShrink?

> `optional` **flexShrink**: `number`

###### props.style.flexWrap?

> `optional` **flexWrap**: `"nowrap"` \| `"wrap"` \| `"wrap-reverse"`

###### props.style.gap?

> `optional` **gap**: `number`

###### props.style.height?

> `optional` **height**: `number`

###### props.style.justifyContent?

> `optional` **justifyContent**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`

###### props.style.left?

> `optional` **left**: `number`

###### props.style.margin?

> `optional` **margin**: `number`

###### props.style.marginBottom?

> `optional` **marginBottom**: `number`

###### props.style.marginLeft?

> `optional` **marginLeft**: `number`

###### props.style.marginRight?

> `optional` **marginRight**: `number`

###### props.style.marginTop?

> `optional` **marginTop**: `number`

###### props.style.maxHeight?

> `optional` **maxHeight**: `number`

###### props.style.maxWidth?

> `optional` **maxWidth**: `number`

###### props.style.minHeight?

> `optional` **minHeight**: `number`

###### props.style.minWidth?

> `optional` **minWidth**: `number`

###### props.style.objectFit?

> `optional` **objectFit**: `"none"` \| `"contain"` \| `"cover"`

###### props.style.opacity?

> `optional` **opacity**: `number`

###### props.style.overflow?

> `optional` **overflow**: `"visible"` \| `"hidden"`

###### props.style.padding?

> `optional` **padding**: `number`

###### props.style.paddingBottom?

> `optional` **paddingBottom**: `number`

###### props.style.paddingLeft?

> `optional` **paddingLeft**: `number`

###### props.style.paddingRight?

> `optional` **paddingRight**: `number`

###### props.style.paddingTop?

> `optional` **paddingTop**: `number`

###### props.style.position?

> `optional` **position**: `"relative"` \| `"absolute"`

###### props.style.right?

> `optional` **right**: `number`

###### props.style.top?

> `optional` **top**: `number`

###### props.style.width?

> `optional` **width**: `number`

###### props.title

> **title**: `string`

###### type

> **type**: `"Tile"`

###### version

> **version**: `"0.1"`

## Type Aliases

### ActionSigner

> **ActionSigner**: `DIDSigner` \| `Promise`\<`DIDSigner`\>

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

> **action**: `PostActionV0`

##### options?

> `optional` **options**: `Options`

##### signer

> **signer**: [`ActionSigner`](index.md#actionsigner)

##### url

> **url**: `string`

***

### RenderFormat

> **RenderFormat**: `Exclude`\<`HandlerFormatV0`, `"json"`\>

## Functions

### getTile()

> **getTile**(`url`, `options`?): `Promise`\<`TileV0`\>

#### Parameters

• **url**: `string`

• **options?**: `Options`

#### Returns

`Promise`\<`TileV0`\>

***

### postAction()

> **postAction**(`params`): `Promise`\<`TileV0`\>

#### Parameters

• **params**: [`PostActionParams`](index.md#postactionparams)

#### Returns

`Promise`\<`TileV0`\>
