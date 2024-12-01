# @tairu/react-native

React Native client for Tairu tiles.

## Installation

```sh
npm install @tairu/react-native
```

## Classes

### ReactNativeRenderer

#### Extends

- [`Renderer`](../renderer/index.md#rendererelementtype)\<`ReactNode`\>

#### Constructors

##### new ReactNativeRenderer()

> **new ReactNativeRenderer**(): [`ReactNativeRenderer`](index.md#reactnativerenderer)

###### Returns

[`ReactNativeRenderer`](index.md#reactnativerenderer)

###### Inherited from

[`Renderer`](../renderer/index.md#rendererelementtype).[`constructor`](../renderer/index.md#constructors)

#### Methods

##### createBox()

> **createBox**(`props`, `children`): `Element`

###### Parameters

###### props

###### props.children

(\{`props`: `object`;`type`: `"Box"` \| `"Image"` \| `"Text"`; \} \| `object`[])[]

###### props.key

`string`

###### props.style

`object`

###### props.style.alignItems

`"center"` \| `"flex-start"` \| `"flex-end"`

###### props.style.alignSelf

`"auto"` \| `"center"` \| `"flex-start"` \| `"flex-end"`

###### props.style.backgroundClip

`"text"` \| `"border-box"`

###### props.style.backgroundColor

`string`

###### props.style.backgroundImage

`string`

###### props.style.backgroundPosition

`string`

###### props.style.backgroundRepeat

`"repeat"` \| `"repeat-x"` \| `"repeat-y"` \| `"no-repeat"`

###### props.style.backgroundSize

`string`

###### props.style.borderBottomColor

`string`

###### props.style.borderBottomLeftRadius

`number`

###### props.style.borderBottomRightRadius

`number`

###### props.style.borderBottomStyle

`"solid"` \| `"dashed"`

###### props.style.borderBottomWidth

`number`

###### props.style.borderColor

`string`

###### props.style.borderLeftColor

`string`

###### props.style.borderLeftStyle

`"solid"` \| `"dashed"`

###### props.style.borderLeftWidth

`number`

###### props.style.borderRadius

`number`

###### props.style.borderRightColor

`string`

###### props.style.borderRightStyle

`"solid"` \| `"dashed"`

###### props.style.borderRightWidth

`number`

###### props.style.borderStyle

`"solid"` \| `"dashed"`

###### props.style.borderTopColor

`string`

###### props.style.borderTopLeftRadius

`number`

###### props.style.borderTopRightRadius

`number`

###### props.style.borderTopStyle

`"solid"` \| `"dashed"`

###### props.style.borderTopWidth

`number`

###### props.style.borderWidth

`number`

###### props.style.bottom

`number`

###### props.style.boxShadow

`string`

###### props.style.display

`"none"` \| `"flex"`

###### props.style.flexBasis

`number`

###### props.style.flexDirection

`"row"` \| `"column"` \| `"row-reverse"` \| `"column-reverse"`

###### props.style.flexGrow

`number`

###### props.style.flexShrink

`number`

###### props.style.flexWrap

`"nowrap"` \| `"wrap"` \| `"wrap-reverse"`

###### props.style.gap

`number`

###### props.style.height

`number`

###### props.style.justifyContent

`"center"` \| `"flex-start"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`

###### props.style.left

`number`

###### props.style.margin

`number`

###### props.style.marginBottom

`number`

###### props.style.marginLeft

`number`

###### props.style.marginRight

`number`

###### props.style.marginTop

`number`

###### props.style.maxHeight

`number`

###### props.style.maxWidth

`number`

###### props.style.minHeight

`number`

###### props.style.minWidth

`number`

###### props.style.objectFit

`"none"` \| `"contain"` \| `"cover"`

###### props.style.opacity

`number`

###### props.style.overflow

`"visible"` \| `"hidden"`

###### props.style.padding

`number`

###### props.style.paddingBottom

`number`

###### props.style.paddingLeft

`number`

###### props.style.paddingRight

`number`

###### props.style.paddingTop

`number`

###### props.style.position

`"relative"` \| `"absolute"`

###### props.style.right

`number`

###### props.style.top

`number`

###### props.style.width

`number`

###### children

[`Children`](index.md#children)

###### Returns

`Element`

###### Overrides

[`Renderer`](../renderer/index.md#rendererelementtype).[`createBox`](../renderer/index.md#createbox)

***

##### createBoxChildren()

> **createBoxChildren**(`children`?, `key`?): [`ElementChildren`](../renderer/index.md#elementchildrenelementtype)\<`ReactNode`\>

###### Parameters

###### children?

\{`props`: `object`;`type`: `"Box"` \| `"Image"` \| `"Text"`; \}

###### children.props

`object`

###### children.type

`"Box"` \| `"Image"` \| `"Text"`

`object`[]

###### key?

`string`

###### Returns

[`ElementChildren`](../renderer/index.md#elementchildrenelementtype)\<`ReactNode`\>

###### Inherited from

[`Renderer`](../renderer/index.md#rendererelementtype).[`createBoxChildren`](../renderer/index.md#createboxchildren)

***

##### createElement()

> **createElement**(`el`, `key`?): `ReactNode`

###### Parameters

###### el

###### el.props

`object`

###### el.type

`"Box"` \| `"Image"` \| `"Text"`

###### key?

`string`

###### Returns

`ReactNode`

###### Inherited from

[`Renderer`](../renderer/index.md#rendererelementtype).[`createElement`](../renderer/index.md#createelement)

***

##### createImage()

> **createImage**(`props`): `ReactNode`

###### Parameters

###### props

###### props.alt

`string`

###### props.height

`number`

###### props.key

`string`

###### props.src

`string`

###### props.width

`number`

###### Returns

`ReactNode`

###### Overrides

[`Renderer`](../renderer/index.md#rendererelementtype).[`createImage`](../renderer/index.md#createimage)

***

##### createText()

> **createText**(`props`, `children`): `Element`

###### Parameters

###### props

###### props.children

`string` \| `number` \| `boolean` \| \{`props`: `object`;`type`: `"Text"`; \} \| (`string` \| `number` \| `boolean` \| \{`props`: `object`;`type`: `"Text"`; \})[]

###### props.key

`string`

###### props.style

`object`

###### props.style.color

`string`

###### props.style.fontFamily

`string`

###### props.style.fontSize

`number`

###### props.style.fontStyle

`"normal"` \| `"italic"`

###### props.style.fontWeight

`"bold"` \| `"normal"` \| `"100"` \| `"200"` \| `"300"` \| `"400"` \| `"500"` \| `"600"` \| `"700"` \| `"800"` \| `"900"` \| `"ultralight"` \| `"thin"` \| `"light"` \| `"medium"` \| `"regular"` \| `"semibold"` \| `"condensedBold"` \| `"condensed"` \| `"heavy"` \| `"black"`

###### props.style.letterSpacing

`number`

###### props.style.lineHeight

`number`

###### props.style.textAlign

`"center"` \| `"right"` \| `"left"` \| `"justify"`

###### props.style.textDecoration

`string`

###### props.style.textOverflow

`"clip"` \| `"ellipsis"`

###### props.style.textShadow

`string`

###### props.style.textTransform

`"none"` \| `"uppercase"` \| `"lowercase"` \| `"capitalize"`

###### props.style.textWrap

`"wrap"` \| `"balance"`

###### props.style.whiteSpace

`"nowrap"` \| `"normal"` \| `"pre"` \| `"pre-wrap"` \| `"pre-line"`

###### props.style.wordBreak

`"normal"` \| `"break-all"` \| `"break-word"` \| `"keep-all"`

###### children

[`Children`](index.md#children)

###### Returns

`Element`

###### Overrides

[`Renderer`](../renderer/index.md#rendererelementtype).[`createText`](../renderer/index.md#createtext)

***

##### createTextChildren()

> **createTextChildren**(`children`?): [`ElementChildren`](../renderer/index.md#elementchildrenelementtype)\<`ReactNode`\>

###### Parameters

###### children?

`string`

`number`

`boolean`

\{`props`: `object`;`type`: `"Text"`; \}

###### children.props

`object`

###### children.type

`"Text"`

(`string` \| `number` \| `boolean` \| \{`props`: `object`;`type`: `"Text"`; \})[]

###### Returns

[`ElementChildren`](../renderer/index.md#elementchildrenelementtype)\<`ReactNode`\>

###### Inherited from

[`Renderer`](../renderer/index.md#rendererelementtype).[`createTextChildren`](../renderer/index.md#createtextchildren)

***

##### render()

> **render**(`props`): `ReactNode`

###### Parameters

###### props

[`RenderProps`](../renderer/index.md#renderprops)

###### Returns

`ReactNode`

###### Inherited from

[`Renderer`](../renderer/index.md#rendererelementtype).[`render`](../renderer/index.md#render)

***

##### renderInteractions()

> **renderInteractions**(`props`): `ReactNode`

###### Parameters

###### props

[`RenderInteractionsProps`](../renderer/index.md#renderinteractionsprops)

###### Returns

`ReactNode`

###### Overrides

[`Renderer`](../renderer/index.md#rendererelementtype).[`renderInteractions`](../renderer/index.md#renderinteractions)

***

##### renderTile()

> **renderTile**(`props`): `ReactNode`

###### Parameters

###### props

[`RenderTileProps`](../renderer/index.md#rendertilepropselementtype)\<`ReactNode`\>

###### Returns

`ReactNode`

###### Inherited from

[`Renderer`](../renderer/index.md#rendererelementtype).[`renderTile`](../renderer/index.md#rendertile)

## Type Aliases

### Children

> **Children**: [`ElementChildren`](../renderer/index.md#elementchildrenelementtype)\<`ReactNode`\>

***

### TileProps

> **TileProps**: `Omit`\<[`TileRendererProps`](../react/index.md#tilerendererprops), `"handleOpenURI"` \| `"renderLoadError"` \| `"renderer"`\> & `object`

#### Type declaration

##### renderer?

> `optional` **renderer**: [`ReactRenderer`](../react/index.md#reactrenderer)

##### renderLoadError()?

> `optional` **renderLoadError**: (`props`) => `ReactNode`

###### Parameters

###### props

[`LoadErrorProps`](../react/index.md#loaderrorprops)

###### Returns

`ReactNode`

## Functions

### Tile()

> **Tile**(`props`): `Element`

#### Parameters

##### props

[`TileProps`](index.md#tileprops)

#### Returns

`Element`
