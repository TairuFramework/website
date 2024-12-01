# @tairu/web-client

Web client for Tairu tiles.

## Installation

```sh
npm install @tairu/web-client
```

## Classes

### TileProxy

#### Extends

- `EventTarget`

#### Constructors

##### new TileProxy()

> **new TileProxy**(`params`): [`TileProxy`](index.md#tileproxy)

###### Parameters

###### params

[`TileProxyParams`](index.md#tileproxyparams)

###### Returns

[`TileProxy`](index.md#tileproxy)

###### Overrides

`EventTarget.constructor`

#### Methods

##### \_handleAction()

> **\_handleAction**(`action`, `value`?): `Promise`\<`void`\>

###### Parameters

###### action

\{`label`: `string`;`type`: `"tairu:uri/open"`;`uri`: `string`; \}

###### action.label

`string`

###### action.type

`"tairu:uri/open"`

###### action.uri

`string`

\{`label`: `string`;`payload`: `object`;`state`: `object`;`type`: `"tairu:did/sign"`; \}

###### action.label

`string`

###### action.payload

`object`

###### action.state

`object`

###### action.type

`"tairu:did/sign"`

\{`label`: `string`;`state`: `object`;`type`: `"tairu:did/submit"`; \}

###### action.label

`string`

###### action.state

`object`

###### action.type

`"tairu:did/submit"`

###### value?

`string` | `number` | `boolean` | (`string` \| `number` \| `boolean`)[]

###### Returns

`Promise`\<`void`\>

***

##### load()

> **load**(): `Promise`\<`object`\>

###### Returns

`Promise`\<`object`\>

###### props

> **props**: `object`

###### props.actions?

> `optional` **props.actions**: (\{`label`: `string`;`type`: `"tairu:uri/open"`;`uri`: `string`; \} \| \{`label`: `string`;`payload`: `object`;`state`: `object`;`type`: `"tairu:did/sign"`; \} \| \{`label`: `string`;`state`: `object`;`type`: `"tairu:did/submit"`; \})[]

###### props.children?

> `optional` **props.children**: (\{`props`: `object`;`type`: `"Box"` \| `"Image"` \| `"Text"`; \} \| `object`[])[]

###### props.description?

> `optional` **props.description**: `string`

###### props.input?

> `optional` **props.input**: \{`multiple`: `boolean`;`options`: `object`[];`type`: `"options"`; \} \| \{`defaultValue`: `string`;`label`: `string`;`placeholder`: `string`;`secure`: `boolean`;`type`: `"text"`; \}

###### props.key?

> `optional` **props.key**: `string`

###### props.style?

> `optional` **props.style**: `object`

###### props.style.alignItems?

> `optional` **props.style.alignItems**: `"center"` \| `"flex-start"` \| `"flex-end"`

###### props.style.alignSelf?

> `optional` **props.style.alignSelf**: `"center"` \| `"flex-start"` \| `"flex-end"` \| `"auto"`

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

> `optional` **props.style.justifyContent**: `"center"` \| `"flex-start"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`

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

> **props.title**: `string`

###### type

> **type**: `"Tile"`

###### version

> **version**: `"0.1"`

***

##### render()

> **render**(`tile`): `void`

###### Parameters

###### tile

###### tile.props

`object`

###### tile.props.actions

(\{`label`: `string`;`type`: `"tairu:uri/open"`;`uri`: `string`; \} \| \{`label`: `string`;`payload`: `object`;`state`: `object`;`type`: `"tairu:did/sign"`; \} \| \{`label`: `string`;`state`: `object`;`type`: `"tairu:did/submit"`; \})[]

###### tile.props.children

(\{`props`: `object`;`type`: `"Box"` \| `"Image"` \| `"Text"`; \} \| `object`[])[]

###### tile.props.description

`string`

###### tile.props.input

\{`multiple`: `boolean`;`options`: `object`[];`type`: `"options"`; \} \| \{`defaultValue`: `string`;`label`: `string`;`placeholder`: `string`;`secure`: `boolean`;`type`: `"text"`; \}

###### tile.props.key

`string`

###### tile.props.style

`object`

###### tile.props.style.alignItems

`"center"` \| `"flex-start"` \| `"flex-end"`

###### tile.props.style.alignSelf

`"center"` \| `"flex-start"` \| `"flex-end"` \| `"auto"`

###### tile.props.style.backgroundClip

`"text"` \| `"border-box"`

###### tile.props.style.backgroundColor

`string`

###### tile.props.style.backgroundImage

`string`

###### tile.props.style.backgroundPosition

`string`

###### tile.props.style.backgroundRepeat

`"repeat"` \| `"repeat-x"` \| `"repeat-y"` \| `"no-repeat"`

###### tile.props.style.backgroundSize

`string`

###### tile.props.style.borderBottomColor

`string`

###### tile.props.style.borderBottomLeftRadius

`number`

###### tile.props.style.borderBottomRightRadius

`number`

###### tile.props.style.borderBottomStyle

`"solid"` \| `"dashed"`

###### tile.props.style.borderBottomWidth

`number`

###### tile.props.style.borderColor

`string`

###### tile.props.style.borderLeftColor

`string`

###### tile.props.style.borderLeftStyle

`"solid"` \| `"dashed"`

###### tile.props.style.borderLeftWidth

`number`

###### tile.props.style.borderRadius

`number`

###### tile.props.style.borderRightColor

`string`

###### tile.props.style.borderRightStyle

`"solid"` \| `"dashed"`

###### tile.props.style.borderRightWidth

`number`

###### tile.props.style.borderStyle

`"solid"` \| `"dashed"`

###### tile.props.style.borderTopColor

`string`

###### tile.props.style.borderTopLeftRadius

`number`

###### tile.props.style.borderTopRightRadius

`number`

###### tile.props.style.borderTopStyle

`"solid"` \| `"dashed"`

###### tile.props.style.borderTopWidth

`number`

###### tile.props.style.borderWidth

`number`

###### tile.props.style.bottom

`number`

###### tile.props.style.boxShadow

`string`

###### tile.props.style.display

`"flex"` \| `"none"`

###### tile.props.style.flexBasis

`number`

###### tile.props.style.flexDirection

`"row"` \| `"row-reverse"` \| `"column"` \| `"column-reverse"`

###### tile.props.style.flexGrow

`number`

###### tile.props.style.flexShrink

`number`

###### tile.props.style.flexWrap

`"nowrap"` \| `"wrap"` \| `"wrap-reverse"`

###### tile.props.style.gap

`number`

###### tile.props.style.height

`number`

###### tile.props.style.justifyContent

`"center"` \| `"flex-start"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`

###### tile.props.style.left

`number`

###### tile.props.style.margin

`number`

###### tile.props.style.marginBottom

`number`

###### tile.props.style.marginLeft

`number`

###### tile.props.style.marginRight

`number`

###### tile.props.style.marginTop

`number`

###### tile.props.style.maxHeight

`number`

###### tile.props.style.maxWidth

`number`

###### tile.props.style.minHeight

`number`

###### tile.props.style.minWidth

`number`

###### tile.props.style.objectFit

`"none"` \| `"contain"` \| `"cover"`

###### tile.props.style.opacity

`number`

###### tile.props.style.overflow

`"visible"` \| `"hidden"`

###### tile.props.style.padding

`number`

###### tile.props.style.paddingBottom

`number`

###### tile.props.style.paddingLeft

`number`

###### tile.props.style.paddingRight

`number`

###### tile.props.style.paddingTop

`number`

###### tile.props.style.position

`"relative"` \| `"absolute"`

###### tile.props.style.right

`number`

###### tile.props.style.top

`number`

###### tile.props.style.width

`number`

###### tile.props.title

`string`

###### tile.type

`"Tile"`

###### tile.version

`"0.1"`

###### Returns

`void`

***

##### renderInteractions()

> **renderInteractions**(`interactive`): `HTMLElement`

###### Parameters

###### interactive

###### interactive.actions

(\{`label`: `string`;`type`: `"tairu:uri/open"`;`uri`: `string`; \} \| \{`label`: `string`;`payload`: `object`;`state`: `object`;`type`: `"tairu:did/sign"`; \} \| \{`label`: `string`;`state`: `object`;`type`: `"tairu:did/submit"`; \})[]

###### interactive.input

\{`multiple`: `boolean`;`options`: `object`[];`type`: `"options"`; \} \| \{`defaultValue`: `string`;`label`: `string`;`placeholder`: `string`;`secure`: `boolean`;`type`: `"text"`; \}

###### Returns

`HTMLElement`

***

##### fromPlaceholder()

> `static` **fromPlaceholder**(`params`): [`TileProxy`](index.md#tileproxy)

###### Parameters

###### params

[`FromParams`](index.md#fromparams)

###### Returns

[`TileProxy`](index.md#tileproxy)

***

##### fromPrerendered()

> `static` **fromPrerendered**(`params`): [`TileProxy`](index.md#tileproxy)

###### Parameters

###### params

[`FromParams`](index.md#fromparams)

###### Returns

[`TileProxy`](index.md#tileproxy)

***

### WebClient

#### Constructors

##### new WebClient()

> **new WebClient**(`params`): [`WebClient`](index.md#webclient)

###### Parameters

###### params

[`WebClientParams`](index.md#webclientparams) = `{}`

###### Returns

[`WebClient`](index.md#webclient)

#### Methods

##### fromPlaceholder()

> **fromPlaceholder**(`element`): [`TileProxy`](index.md#tileproxy)

###### Parameters

###### element

`HTMLElement`

###### Returns

[`TileProxy`](index.md#tileproxy)

***

##### fromPrerendered()

> **fromPrerendered**(`element`): [`TileProxy`](index.md#tileproxy)

###### Parameters

###### element

`HTMLElement`

###### Returns

[`TileProxy`](index.md#tileproxy)

***

##### handlePrerendered()

> **handlePrerendered**(): `void`

###### Returns

`void`

***

##### tile()

> **tile**(`url`, `element`): [`TileProxy`](index.md#tileproxy)

###### Parameters

###### url

`string`

###### element

`HTMLElement`

###### Returns

[`TileProxy`](index.md#tileproxy)

## Type Aliases

### FromParams

> **FromParams**: `object`

#### Type declaration

##### context

> **context**: [`TileContext`](index.md#tilecontext)

##### element

> **element**: `HTMLElement`

***

### TileContext

> **TileContext**: `object`

#### Type declaration

##### loader

> **loader**: `Loader`

##### openURI()

> **openURI**: (`uri`) => `void`

###### Parameters

###### uri

`string`

###### Returns

`void`

##### renderer

> **renderer**: `WebRenderer`

***

### TileProxyParams

> **TileProxyParams**: `object`

#### Type declaration

##### context

> **context**: [`TileContext`](index.md#tilecontext)

##### element

> **element**: `HTMLElement`

##### url

> **url**: `string`

***

### WebClientParams

> **WebClientParams**: `object`

#### Type declaration

##### handleOpenURI()?

> `optional` **handleOpenURI**: (`uri`) => `void`

###### Parameters

###### uri

`string`

###### Returns

`void`

##### loader?

> `optional` **loader**: `Loader`

##### renderer?

> `optional` **renderer**: `WebRenderer`
