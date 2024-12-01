# @tairu/handler

Tairu handler, handling HTTP requests to serve tiles.

## Installation

```sh
npm install @tairu/handler
```

## Classes

### Tairu

#### Extends

- `Tairu`\<[`ValidTileInput`](../jsx/index.md#validtileinput)\>

#### Constructors

##### new Tairu()

> **new Tairu**(`options`): [`Tairu`](index.md#tairu)

###### Parameters

###### options

[`TairuOptions`](index.md#tairuoptions) = `{}`

###### Returns

[`Tairu`](index.md#tairu)

###### Overrides

`BaseTairu<ValidTileInput>.constructor`

#### Accessors

##### app

###### Get Signature

> **get** **app**(): `App`

###### Returns

`App`

###### Inherited from

`BaseTairu.app`

###### Defined in

***

##### handler

###### Get Signature

> **get** **handler**(): [`TairuHandler`](index.md#tairuhandler)

###### Returns

[`TairuHandler`](index.md#tairuhandler)

###### Inherited from

`BaseTairu.handler`

###### Defined in

***

##### nodeListener

###### Get Signature

> **get** **nodeListener**(): [`NodeListener`](index.md#nodelistener-1)

###### Returns

[`NodeListener`](index.md#nodelistener-1)

###### Inherited from

`BaseTairu.nodeListener`

###### Defined in

***

##### plainHandler

###### Get Signature

> **get** **plainHandler**(): `PlainHandler`

###### Returns

`PlainHandler`

###### Inherited from

`BaseTairu.plainHandler`

###### Defined in

***

##### urlPrefix

###### Get Signature

> **get** **urlPrefix**(): `string`

###### Returns

`string`

###### Inherited from

`BaseTairu.urlPrefix`

###### Defined in

#### Methods

##### addHandler()

> **addHandler**\<`PathParams`, `SearchParams`\>(`path`, `handler`): `void`

###### Type Parameters

• **PathParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

• **SearchParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

###### Parameters

###### path

`string`

###### handler

`TileHandler`\<`PathParams`, `SearchParams`, [`ValidTileInput`](../jsx/index.md#validtileinput), `H3EventContext`\>

###### Returns

`void`

###### Inherited from

`BaseTairu.addHandler`

***

##### executeHandler()

> **executeHandler**\<`PathParams`, `SearchParams`\>(`handler`, `event`): `Promise`\<[`ValidTileInput`](../jsx/index.md#validtileinput)\>

###### Type Parameters

• **PathParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

• **SearchParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

###### Parameters

###### handler

`TileHandler`\<`PathParams`, `SearchParams`, [`ValidTileInput`](../jsx/index.md#validtileinput), `H3EventContext`\>

###### event

`TairuEvent`

###### Returns

`Promise`\<[`ValidTileInput`](../jsx/index.md#validtileinput)\>

###### Inherited from

`BaseTairu.executeHandler`

***

##### parseHandlerResult()

> **parseHandlerResult**(`result`): `object`

###### Parameters

###### result

[`ValidTileInput`](../jsx/index.md#validtileinput)

###### Returns

`object`

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

> `optional` **props.style.alignItems**: `"flex-start"` \| `"center"` \| `"flex-end"`

###### props.style.alignSelf?

> `optional` **props.style.alignSelf**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"auto"`

###### props.style.backgroundClip?

> `optional` **props.style.backgroundClip**: `"border-box"` \| `"text"`

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

> **props.title**: `string`

###### type

> **type**: `"Tile"`

###### version

> **version**: `"0.1"`

###### Overrides

`BaseTairu.parseHandlerResult`

***

##### render()

> **render**(`event`, `tile`): `Promise`\<`Response`\>

###### Parameters

###### event

`TairuEvent`

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

`"flex-start"` \| `"center"` \| `"flex-end"`

###### tile.props.style.alignSelf

`"flex-start"` \| `"center"` \| `"flex-end"` \| `"auto"`

###### tile.props.style.backgroundClip

`"border-box"` \| `"text"`

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

`"flex-start"` \| `"center"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`

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

`Promise`\<`Response`\>

###### Overrides

`BaseTairu.render`

## Type Aliases

### AnyTileHandler\<Context\>

> **AnyTileHandler**\<`Context`\>: [`TileHandler`](index.md#tilehandlerpathparams-searchparams-context)\<`any`, `any`, `Context`\>

#### Type Parameters

• **Context** = [`TileRequestContext`](index.md#tilerequestcontext)

***

### BoxElement

> **BoxElement**: `ReactElement`\<[`BoxProps`](index.md#boxprops), *typeof* [`Box`](index.md#box)\>

***

### BoxProps

> **BoxProps**: `object`

#### Type declaration

##### children?

> `optional` **children**: `ReactNode` \| [`BoxV0`](../protocol/index.md#boxv0) \| [`TextV0`](../protocol/index.md#textv0) \| ([`BoxV0`](../protocol/index.md#boxv0) \| [`TextV0`](../protocol/index.md#textv0))[]

##### style?

> `optional` **style**: [`BoxStyleV0`](../protocol/index.md#boxstylev0)

***

### ImageElement

> **ImageElement**: `ReactElement`\<[`ImageProps`](index.md#imageprops), *typeof* [`Image`](index.md#image)\>

***

### ImageProps

> **ImageProps**: `object`

#### Type declaration

##### alt

> **alt**: `string`

##### height

> **height**: `number`

##### src

> **src**: `string`

##### width

> **width**: `number`

***

### NodeListener()

> **NodeListener**: (`req`, `res`) => `void`

#### Parameters

##### req

`IncomingMessage`

##### res

`ServerResponse`

#### Returns

`void`

***

### OpenActionElement

> **OpenActionElement**: `ReactElement`\<[`OpenActionProps`](index.md#openactionprops), *typeof* [`OpenAction`](index.md#openaction)\>

***

### OpenActionProps

> **OpenActionProps**: `object`

#### Type declaration

##### label

> **label**: `string`

##### uri

> **uri**: `string`

***

### OptionElement

> **OptionElement**: `ReactElement`\<[`OptionProps`](index.md#optionprops), *typeof* [`Option`](index.md#option)\>

***

### OptionProps

> **OptionProps**: [`InputOptionV0`](../protocol/index.md#inputoptionv0)

***

### OptionsInputElement

> **OptionsInputElement**: `ReactElement`\<[`OptionsInputProps`](index.md#optionsinputprops), *typeof* [`OptionsInput`](index.md#optionsinput)\>

***

### OptionsInputProps

> **OptionsInputProps**: `object`

#### Type declaration

##### children

> **children**: [`OptionElement`](index.md#optionelement) \| [`OptionElement`](index.md#optionelement)[]

##### multiple?

> `optional` **multiple**: `boolean`

***

### ParamsRecord

> **ParamsRecord**: `Record`\<`string`, `string`\>

***

### SignActionElement

> **SignActionElement**: `ReactElement`\<[`SignActionProps`](index.md#signactionprops), *typeof* [`SignAction`](index.md#signaction)\>

***

### SignActionProps

> **SignActionProps**: `object`

#### Type declaration

##### label

> **label**: `string`

##### payload?

> `optional` **payload**: `Record`\<`string`, `unknown`\>

##### state?

> `optional` **state**: `Record`\<`string`, `unknown`\>

***

### SubmitActionElement

> **SubmitActionElement**: `ReactElement`\<[`SubmitActionProps`](index.md#submitactionprops), *typeof* [`SubmitAction`](index.md#submitaction)\>

***

### SubmitActionProps

> **SubmitActionProps**: `object`

#### Type declaration

##### label

> **label**: `string`

##### state?

> `optional` **state**: `Record`\<`string`, `unknown`\>

***

### TairuHandler

> **TairuHandler**: `EventHandler`

***

### TairuOptions

> **TairuOptions**: `object`

#### Type declaration

##### runtimeScriptURL?

> `optional` **runtimeScriptURL**: `string`

##### urlPrefix?

> `optional` **urlPrefix**: `string`

***

### TextElement

> **TextElement**: `ReactElement`\<[`TextProps`](index.md#textprops), *typeof* [`Text`](index.md#text)\>

***

### TextInputElement

> **TextInputElement**: `ReactElement`\<[`TextInputProps`](index.md#textinputprops), *typeof* [`TextInput`](index.md#textinput)\>

***

### TextInputProps

> **TextInputProps**: `object`

#### Type declaration

##### defaultValue?

> `optional` **defaultValue**: `string`

##### label

> **label**: `string`

##### placeholder?

> `optional` **placeholder**: `string`

##### secure?

> `optional` **secure**: `boolean`

***

### TextProps

> **TextProps**: `object`

#### Type declaration

##### children

> **children**: `ReactNode` \| [`TextV0`](../protocol/index.md#textv0) \| [`TextV0`](../protocol/index.md#textv0)[]

##### style?

> `optional` **style**: [`TextStyleV0`](../protocol/index.md#textstylev0)

***

### TileElement

> **TileElement**: `ReactElement`\<[`TileProps`](index.md#tileprops), *typeof* [`Tile`](index.md#tile)\>

***

### TileHandler\<PathParams, SearchParams, Context\>

> **TileHandler**\<`PathParams`, `SearchParams`, `Context`\>: `BaseTileHandler`\<`PathParams`, `SearchParams`, [`ValidTileInput`](../jsx/index.md#validtileinput), `Context`\>

#### Type Parameters

• **PathParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

• **SearchParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

• **Context** = [`TileRequestContext`](index.md#tilerequestcontext)

***

### TileHandlers\<Context\>

> **TileHandlers**\<`Context`\>: [`AnyTileHandler`](index.md#anytilehandlercontext)\<`Context`\> \| `Record`\<`string`, [`AnyTileHandler`](index.md#anytilehandlercontext)\<`Context`\>\>

#### Type Parameters

• **Context** = [`TileRequestContext`](index.md#tilerequestcontext)

***

### TileProps

> **TileProps**: [`BoxProps`](index.md#boxprops) & [`TileMetaV0`](../protocol/index.md#tilemetav0) & `object`

#### Type declaration

##### actions?

> `optional` **actions**: [`TileActionsProp`](../jsx/index.md#tileactionsprop)

##### input?

> `optional` **input**: [`TileInputProp`](../jsx/index.md#tileinputprop)

***

### TileRequest\<PathParams, SearchParams, Context\>

> **TileRequest**\<`PathParams`, `SearchParams`, `Context`\>: `object`

#### Type Parameters

• **PathParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

• **SearchParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

• **Context** = [`TileRequestContext`](index.md#tilerequestcontext)

#### Type declaration

##### action

> **action**: `VerifiedAction` \| `null`

##### context

> **context**: `Context`

##### pathParams

> **pathParams**: `PathParams`

##### searchParams

> **searchParams**: `SearchParams`

##### urlPrefix

> **urlPrefix**: `string`

***

### TileRequestContext

> **TileRequestContext**: `H3EventContext`

## Functions

### Box()

> **Box**(`props`): `ReactElement`\<[`BoxProps`](index.md#boxprops), `string` \| `JSXElementConstructor`\>

#### Parameters

##### props

[`BoxProps`](index.md#boxprops)

#### Returns

`ReactElement`\<[`BoxProps`](index.md#boxprops), `string` \| `JSXElementConstructor`\>

***

### handle()

> **handle**\<`Handlers`\>(`handlers`, `options`?): [`TairuHandler`](index.md#tairuhandler)

#### Type Parameters

• **Handlers** *extends* [`TileHandlers`](index.md#tilehandlerscontext)\<`any`\>

#### Parameters

##### handlers

`Handlers`

##### options?

[`TairuOptions`](index.md#tairuoptions)

#### Returns

[`TairuHandler`](index.md#tairuhandler)

***

### Image()

> **Image**(`props`): `ReactElement`\<[`ImageProps`](index.md#imageprops), `string` \| `JSXElementConstructor`\>

#### Parameters

##### props

[`ImageProps`](index.md#imageprops)

#### Returns

`ReactElement`\<[`ImageProps`](index.md#imageprops), `string` \| `JSXElementConstructor`\>

***

### OpenAction()

> **OpenAction**(`props`): `ReactElement`\<[`OpenActionProps`](index.md#openactionprops), `string` \| `JSXElementConstructor`\>

#### Parameters

##### props

[`OpenActionProps`](index.md#openactionprops)

#### Returns

`ReactElement`\<[`OpenActionProps`](index.md#openactionprops), `string` \| `JSXElementConstructor`\>

***

### Option()

> **Option**(`props`): `ReactElement`\<`object`, `string` \| `JSXElementConstructor`\>

#### Parameters

##### props

###### props.label

`string`

###### props.value

`string` \| `number` \| `boolean`

#### Returns

`ReactElement`\<`object`, `string` \| `JSXElementConstructor`\>

##### label

> **label**: `string`

##### value

> **value**: `string` \| `number` \| `boolean`

***

### OptionsInput()

> **OptionsInput**(`props`): `DOMElement`

#### Parameters

##### props

[`OptionsInputProps`](index.md#optionsinputprops)

#### Returns

`DOMElement`

***

### SignAction()

> **SignAction**(`props`): `ReactElement`\<[`SignActionProps`](index.md#signactionprops), `string` \| `JSXElementConstructor`\>

#### Parameters

##### props

[`SignActionProps`](index.md#signactionprops)

#### Returns

`ReactElement`\<[`SignActionProps`](index.md#signactionprops), `string` \| `JSXElementConstructor`\>

***

### SubmitAction()

> **SubmitAction**(`props`): `ReactElement`\<[`SubmitActionProps`](index.md#submitactionprops), `string` \| `JSXElementConstructor`\>

#### Parameters

##### props

[`SubmitActionProps`](index.md#submitactionprops)

#### Returns

`ReactElement`\<[`SubmitActionProps`](index.md#submitactionprops), `string` \| `JSXElementConstructor`\>

***

### tairu()

> **tairu**\<`Handlers`\>(`handlers`, `options`?): [`Tairu`](index.md#tairu)

#### Type Parameters

• **Handlers** *extends* [`TileHandlers`](index.md#tilehandlerscontext)\<`H3EventContext`\>

#### Parameters

##### handlers

`Handlers`

##### options?

[`TairuOptions`](index.md#tairuoptions)

#### Returns

[`Tairu`](index.md#tairu)

***

### Text()

> **Text**(`props`): `ReactElement`\<[`TextProps`](index.md#textprops), `string` \| `JSXElementConstructor`\>

#### Parameters

##### props

[`TextProps`](index.md#textprops)

#### Returns

`ReactElement`\<[`TextProps`](index.md#textprops), `string` \| `JSXElementConstructor`\>

***

### TextInput()

> **TextInput**(`props`): `ReactElement`\<[`TextInputProps`](index.md#textinputprops), `string` \| `JSXElementConstructor`\>

#### Parameters

##### props

[`TextInputProps`](index.md#textinputprops)

#### Returns

`ReactElement`\<[`TextInputProps`](index.md#textinputprops), `string` \| `JSXElementConstructor`\>

***

### Tile()

> **Tile**(`props`): `ReactElement`\<[`BoxProps`](index.md#boxprops) & `object` & `object`, `string` \| `JSXElementConstructor`\>

#### Parameters

##### props

[`TileProps`](index.md#tileprops)

#### Returns

`ReactElement`\<[`BoxProps`](index.md#boxprops) & `object` & `object`, `string` \| `JSXElementConstructor`\>
