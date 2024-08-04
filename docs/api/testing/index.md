# testing

Tairu testing library, providing utilities to test tile handlers.

## Installation

```sh
npm install @tairu/testing
```

## Classes

### TestAgent

#### Extends

- `Loader`

#### Constructors

##### new TestAgent()

> **new TestAgent**(`handlers`, `signer`?): [`TestAgent`](index.md#testagent)

###### Parameters

• **handlers**: `TileHandlers`

• **signer?**: `DIDSigner`

###### Returns

[`TestAgent`](index.md#testagent)

###### Overrides

`Loader.constructor`

#### Accessors

##### signer

> `get` **signer**(): `ActionSigner`

> `set` **signer**(`value`): `void`

###### Parameters

• **value**: `ActionSigner`

###### Returns

`ActionSigner`

###### Inherited from

`Loader.signer`

#### Methods

##### createToken()

> **createToken**(`payload`, `useSigner`?): `Promise`\<`string`\>

###### Parameters

• **payload**: `Record`\<`string`, `unknown`\>

• **useSigner?**: `DIDSigner`

###### Returns

`Promise`\<`string`\>

***

##### getRenderedTile()

> **getRenderedTile**(`path`, `format`): `Promise`\<`string`\>

###### Parameters

• **path**: `string`

• **format**: `RenderFormat`

###### Returns

`Promise`\<`string`\>

###### Overrides

`Loader.getRenderedTile`

***

##### getTile()

> **getTile**(`path`): `Promise`\<`object`\>

###### Parameters

• **path**: `string` = `'/'`

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

###### Overrides

`Loader.getTile`

***

##### postAction()

> **postAction**(`path`, `action`, `useSigner`?): `Promise`\<`object`\>

###### Parameters

• **path**: `string`

• **action**: `object` \| `object`

• **useSigner?**: `DIDSigner`

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

###### Overrides

`Loader.postAction`

***

##### create()

> `static` **create**(`handlers`, `signer`?): [`TestAgent`](index.md#testagent)

###### Parameters

• **handlers**: `TileHandlers`

• **signer?**: `DIDSigner`

###### Returns

[`TestAgent`](index.md#testagent)
