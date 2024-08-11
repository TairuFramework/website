# @tairu/renderer

Renderer for tiles implementing the Tairu protocol.

## Installation

```sh
npm install @tairu/renderer
```

## Classes

### Renderer\<ElementType\>

#### Extended by

#### Type Parameters

• **ElementType**

#### Constructors

##### new Renderer()

> **new Renderer**\<`ElementType`\>(): [`Renderer`](index.md#rendererelementtype)\<`ElementType`\>

###### Returns

[`Renderer`](index.md#rendererelementtype)\<`ElementType`\>

#### Methods

##### createBox()

> **createBox**(`props`, `children`): `ElementType`

###### Parameters

• **props**

• **props.children?**: `object` & `object` \| `object` & `object`[]

• **props.key?**: `string`

• **props.style?**

• **props.style.alignItems?**: `"flex-start"` \| `"center"` \| `"flex-end"`

• **props.style.alignSelf?**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"auto"`

• **props.style.backgroundClip?**: `"text"` \| `"border-box"`

• **props.style.backgroundColor?**: `string`

• **props.style.backgroundImage?**: `string`

• **props.style.backgroundPosition?**: `string`

• **props.style.backgroundRepeat?**: `"repeat"` \| `"repeat-x"` \| `"repeat-y"` \| `"no-repeat"`

• **props.style.backgroundSize?**: `string`

• **props.style.borderBottomColor?**: `string`

• **props.style.borderBottomLeftRadius?**: `number`

• **props.style.borderBottomRightRadius?**: `number`

• **props.style.borderBottomStyle?**: `"solid"` \| `"dashed"`

• **props.style.borderBottomWidth?**: `number`

• **props.style.borderColor?**: `string`

• **props.style.borderLeftColor?**: `string`

• **props.style.borderLeftStyle?**: `"solid"` \| `"dashed"`

• **props.style.borderLeftWidth?**: `number`

• **props.style.borderRadius?**: `number`

• **props.style.borderRightColor?**: `string`

• **props.style.borderRightStyle?**: `"solid"` \| `"dashed"`

• **props.style.borderRightWidth?**: `number`

• **props.style.borderStyle?**: `"solid"` \| `"dashed"`

• **props.style.borderTopColor?**: `string`

• **props.style.borderTopLeftRadius?**: `number`

• **props.style.borderTopRightRadius?**: `number`

• **props.style.borderTopStyle?**: `"solid"` \| `"dashed"`

• **props.style.borderTopWidth?**: `number`

• **props.style.borderWidth?**: `number`

• **props.style.bottom?**: `number`

• **props.style.boxShadow?**: `string`

• **props.style.display?**: `"flex"` \| `"none"`

• **props.style.flexBasis?**: `number`

• **props.style.flexDirection?**: `"row"` \| `"row-reverse"` \| `"column"` \| `"column-reverse"`

• **props.style.flexGrow?**: `number`

• **props.style.flexShrink?**: `number`

• **props.style.flexWrap?**: `"nowrap"` \| `"wrap"` \| `"wrap-reverse"`

• **props.style.gap?**: `number`

• **props.style.height?**: `number`

• **props.style.justifyContent?**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`

• **props.style.left?**: `number`

• **props.style.margin?**: `number`

• **props.style.marginBottom?**: `number`

• **props.style.marginLeft?**: `number`

• **props.style.marginRight?**: `number`

• **props.style.marginTop?**: `number`

• **props.style.maxHeight?**: `number`

• **props.style.maxWidth?**: `number`

• **props.style.minHeight?**: `number`

• **props.style.minWidth?**: `number`

• **props.style.objectFit?**: `"none"` \| `"contain"` \| `"cover"`

• **props.style.opacity?**: `number`

• **props.style.overflow?**: `"visible"` \| `"hidden"`

• **props.style.padding?**: `number`

• **props.style.paddingBottom?**: `number`

• **props.style.paddingLeft?**: `number`

• **props.style.paddingRight?**: `number`

• **props.style.paddingTop?**: `number`

• **props.style.position?**: `"relative"` \| `"absolute"`

• **props.style.right?**: `number`

• **props.style.top?**: `number`

• **props.style.width?**: `number`

• **children**: [`ElementChildren`](index.md#elementchildrenelementtype)\<`ElementType`\>

###### Returns

`ElementType`

***

##### createBoxChildren()

> **createBoxChildren**(`children`?, `key`?): [`ElementChildren`](index.md#elementchildrenelementtype)\<`ElementType`\>

###### Parameters

• **children?**: `object` & `object` \| `object` & `object`[]

• **key?**: `string`

###### Returns

[`ElementChildren`](index.md#elementchildrenelementtype)\<`ElementType`\>

***

##### createElement()

> **createElement**(`el`, `key`?): `ElementType`

###### Parameters

• **el**: `object` & `object`

• **key?**: `string`

###### Returns

`ElementType`

***

##### createImage()

> **createImage**(`props`): `ElementType`

###### Parameters

• **props**

• **props.alt**: `string`

• **props.height**: `number`

• **props.key?**: `string`

• **props.src**: `string`

• **props.width**: `number`

###### Returns

`ElementType`

***

##### createText()

> **createText**(`props`, `children`): `ElementType`

###### Parameters

• **props**

• **props.children**: `string` \| `number` \| `boolean` \| `object` & `object` \| (`string` \| `number` \| `boolean` \| `object` & `object`)[]

• **props.key?**: `string`

• **props.style?**

• **props.style.color?**: `string`

• **props.style.fontFamily?**: `string`

• **props.style.fontSize?**: `number`

• **props.style.fontStyle?**: `"normal"` \| `"italic"`

• **props.style.fontWeight?**: `"normal"` \| `"bold"` \| `"100"` \| `"200"` \| `"300"` \| `"400"` \| `"500"` \| `"600"` \| `"700"` \| `"800"` \| `"900"` \| `"ultralight"` \| `"thin"` \| `"light"` \| `"medium"` \| `"regular"` \| `"semibold"` \| `"condensedBold"` \| `"condensed"` \| `"heavy"` \| `"black"`

• **props.style.letterSpacing?**: `number`

• **props.style.lineHeight?**: `number`

• **props.style.textAlign?**: `"right"` \| `"left"` \| `"center"` \| `"justify"`

• **props.style.textDecoration?**: `string`

• **props.style.textOverflow?**: `"clip"` \| `"ellipsis"`

• **props.style.textShadow?**: `string`

• **props.style.textTransform?**: `"none"` \| `"uppercase"` \| `"lowercase"` \| `"capitalize"`

• **props.style.textWrap?**: `"wrap"` \| `"balance"`

• **props.style.whiteSpace?**: `"nowrap"` \| `"normal"` \| `"pre"` \| `"pre-wrap"` \| `"pre-line"`

• **props.style.wordBreak?**: `"normal"` \| `"break-all"` \| `"break-word"` \| `"keep-all"`

• **children**: [`ElementChildren`](index.md#elementchildrenelementtype)\<`ElementType`\>

###### Returns

`ElementType`

***

##### createTextChildren()

> **createTextChildren**(`children`?): [`ElementChildren`](index.md#elementchildrenelementtype)\<`ElementType`\>

###### Parameters

• **children?**: `string` \| `number` \| `boolean` \| `object` & `object` \| (`string` \| `number` \| `boolean` \| `object` & `object`)[]

###### Returns

[`ElementChildren`](index.md#elementchildrenelementtype)\<`ElementType`\>

***

##### render()

> **render**(`props`): `ElementType`

###### Parameters

• **props**: [`RenderProps`](index.md#renderprops)

###### Returns

`ElementType`

***

##### renderInteractions()

> **renderInteractions**(`props`): `ElementType`

###### Parameters

• **props**: [`RenderInteractionsProps`](index.md#renderinteractionsprops)

###### Returns

`ElementType`

***

##### renderTile()

> **renderTile**(`props`): `ElementType`

###### Parameters

• **props**: [`RenderTileProps`](index.md#rendertilepropselementtype)\<`ElementType`\>

###### Returns

`ElementType`

## Type Aliases

### ActionHandler()

> **ActionHandler**: (`action`, `submitValue`?) => `Promise`\<`void`\>

#### Parameters

• **action**: [`ActionV0`](../protocol/index.md#actionv0)

• **submitValue?**: [`SubmitValueV0`](../protocol/index.md#submitvaluev0)

#### Returns

`Promise`\<`void`\>

***

### BoxPropsV0

> **BoxPropsV0**: `InferOutput`\<*typeof* [`boxPropsV0`](../protocol/index.md#boxpropsv0-1)\>

***

### ElementChild\<ElementType\>

> **ElementChild**\<`ElementType`\>: `null` \| [`ValueV0`](../protocol/index.md#valuev0) \| `ElementType`

#### Type Parameters

• **ElementType**

***

### ElementChildren\<ElementType\>

> **ElementChildren**\<`ElementType`\>: [`ElementChild`](index.md#elementchildelementtype)\<`ElementType`\> \| [`ElementChild`](index.md#elementchildelementtype)\<`ElementType`\>[]

#### Type Parameters

• **ElementType**

***

### ImagePropsV0

> **ImagePropsV0**: `InferOutput`\<*typeof* [`imagePropsV0`](../protocol/index.md#imagepropsv0-1)\>

***

### RenderInteractionsHandler()\<ElementType\>

> **RenderInteractionsHandler**\<`ElementType`\>: (`props`) => `ElementType`

#### Type Parameters

• **ElementType**

#### Parameters

• **props**: [`RenderInteractionsProps`](index.md#renderinteractionsprops)

#### Returns

`ElementType`

***

### RenderInteractionsProps

> **RenderInteractionsProps**: [`TileInteractiveV0`](../protocol/index.md#tileinteractivev0) & `object`

#### Type declaration

##### handleAction?

> `optional` **handleAction**: [`ActionHandler`](index.md#actionhandler)

***

### RenderProps

> **RenderProps**: `object`

#### Type declaration

##### handleAction?

> `optional` **handleAction**: [`ActionHandler`](index.md#actionhandler)

##### tile

> **tile**: [`TileV0`](../protocol/index.md#tilev0)

***

### RenderTileProps\<ElementType\>

> **RenderTileProps**\<`ElementType`\>: `object`

#### Type Parameters

• **ElementType**

#### Type declaration

##### children

> **children**: [`ElementChildren`](index.md#elementchildrenelementtype)\<`ElementType`\>

##### handleAction?

> `optional` **handleAction**: [`ActionHandler`](index.md#actionhandler)

##### tile

> **tile**: [`TileV0`](../protocol/index.md#tilev0)

***

### TextPropsV0

> **TextPropsV0**: `InferOutput`\<*typeof* [`textPropsV0`](../protocol/index.md#textpropsv0-1)\>

## Functions

### isValue()

> **isValue**(`value`): value is string \| number \| boolean

**`Internal`**

#### Parameters

• **value**: `unknown`

#### Returns

value is string \| number \| boolean
