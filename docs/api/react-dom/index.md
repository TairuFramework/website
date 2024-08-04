# react-dom

React DOM client for Tairu tiles.

## Installation

```sh
npm install @tairu/react-dom
```

## Classes

### ReactDOMRenderer

#### Extends

- `Renderer`\<`ReactNode`\>

#### Constructors

##### new ReactDOMRenderer()

> **new ReactDOMRenderer**(): [`ReactDOMRenderer`](index.md#reactdomrenderer)

###### Returns

[`ReactDOMRenderer`](index.md#reactdomrenderer)

###### Inherited from

`Renderer<ReactNode>.constructor`

#### Methods

##### createBox()

> **createBox**(`props`, `children`): `Element`

###### Parameters

• **props**

• **props.children?**: `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\> \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>[]

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

• **children**: `Children`

###### Returns

`Element`

###### Overrides

`Renderer.createBox`

***

##### createBoxChildren()

> **createBoxChildren**(`children`?, `key`?): `ElementChildren`\<`ReactNode`\>

###### Parameters

• **children?**: `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\> \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>[]

• **key?**: `string`

###### Returns

`ElementChildren`\<`ReactNode`\>

###### Inherited from

`Renderer.createBoxChildren`

***

##### createElement()

> **createElement**(`el`, `key`?): `ReactNode`

###### Parameters

• **el**: `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>

• **key?**: `string`

###### Returns

`ReactNode`

###### Inherited from

`Renderer.createElement`

***

##### createImage()

> **createImage**(`props`): `Element`

###### Parameters

• **props**

• **props.alt**: `string`

• **props.height**: `number`

• **props.key?**: `string`

• **props.src**: `string`

• **props.width**: `number`

###### Returns

`Element`

###### Overrides

`Renderer.createImage`

***

##### createText()

> **createText**(`props`, `children`): `Element`

###### Parameters

• **props**

• **props.children**: `string` \| `number` \| `boolean` \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\> \| (`string` \| `number` \| `boolean` \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>)[]

• **props.key?**: `string`

• **props.style?**

• **props.style.color?**: `string`

• **props.style.fontFamily?**: `string`

• **props.style.fontSize?**: `number`

• **props.style.fontStyle?**: `"normal"` \| `"italic"`

• **props.style.fontWeight?**: `"bold"` \| `"normal"` \| `"black"` \| `"medium"` \| `"thin"` \| `"100"` \| `"200"` \| `"300"` \| `"400"` \| `"500"` \| `"600"` \| `"700"` \| `"800"` \| `"900"` \| `"ultralight"` \| `"light"` \| `"regular"` \| `"semibold"` \| `"condensedBold"` \| `"condensed"` \| `"heavy"`

• **props.style.letterSpacing?**: `number`

• **props.style.lineHeight?**: `number`

• **props.style.textAlign?**: `"center"` \| `"left"` \| `"right"` \| `"justify"`

• **props.style.textDecoration?**: `string`

• **props.style.textOverflow?**: `"clip"` \| `"ellipsis"`

• **props.style.textShadow?**: `string`

• **props.style.textTransform?**: `"none"` \| `"capitalize"` \| `"lowercase"` \| `"uppercase"`

• **props.style.textWrap?**: `"wrap"` \| `"balance"`

• **props.style.whiteSpace?**: `"nowrap"` \| `"normal"` \| `"pre"` \| `"pre-line"` \| `"pre-wrap"`

• **props.style.wordBreak?**: `"normal"` \| `"break-all"` \| `"break-word"` \| `"keep-all"`

• **children**: `Children`

###### Returns

`Element`

###### Overrides

`Renderer.createText`

***

##### createTextChildren()

> **createTextChildren**(`children`?): `ElementChildren`\<`ReactNode`\>

###### Parameters

• **children?**: `string` \| `number` \| `boolean` \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\> \| (`string` \| `number` \| `boolean` \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>)[]

###### Returns

`ElementChildren`\<`ReactNode`\>

###### Inherited from

`Renderer.createTextChildren`

***

##### render()

> **render**(`props`): `ReactNode`

###### Parameters

• **props**: `RenderProps`

###### Returns

`ReactNode`

###### Inherited from

`Renderer.render`

***

##### renderInteractions()

> **renderInteractions**(`props`): `Element`

###### Parameters

• **props**: `RenderInteractionsProps`

###### Returns

`Element`

###### Overrides

`Renderer.renderInteractions`

***

##### renderTile()

> **renderTile**(`props`): `ReactNode`

###### Parameters

• **props**: `RenderTileProps`\<`ReactNode`\>

###### Returns

`ReactNode`

###### Inherited from

`Renderer.renderTile`

## Type Aliases

### TileProps

> **TileProps**: `object`

#### Type declaration

##### renderLoadError()?

> `optional` **renderLoadError**: (`props`) => `ReactNode`

###### Parameters

• **props**: `LoadErrorProps`

###### Returns

`ReactNode`

##### renderPostError()?

> `optional` **renderPostError**: (`props`) => `ReactNode`

###### Parameters

• **props**: `PostErrorProps`

###### Returns

`ReactNode`

##### renderer?

> `optional` **renderer**: `ReactRenderer`

##### url

> **url**: `string`

## Functions

### Tile()

> **Tile**(`props`): `Element`

#### Parameters

• **props**: [`TileProps`](index.md#tileprops)

#### Returns

`Element`
