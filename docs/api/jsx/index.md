# @tairu/jsx

Tairu JSX, exposing Tile components and a parser to convert the JSX elements to the JSON format.

## Installation

```sh
npm install @tairu/jsx
```

## Type Aliases

### ActionElement

> **ActionElement**: [`OpenActionElement`](index.md#openactionelement) \| [`SignActionElement`](index.md#signactionelement) \| [`SubmitActionElement`](index.md#submitactionelement)

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

### TileActionsProp

> **TileActionsProp**: [`ActionV0`](../protocol/index.md#actionv0) \| [`ActionElement`](index.md#actionelement) \| ([`ActionV0`](../protocol/index.md#actionv0) \| [`ActionElement`](index.md#actionelement))[]

***

### TileElement

> **TileElement**: `ReactElement`\<[`TileProps`](index.md#tileprops), *typeof* [`Tile`](index.md#tile)\>

***

### TileInputProp

> **TileInputProp**: [`InputV0`](../protocol/index.md#inputv0) \| [`OptionsInputElement`](index.md#optionsinputelement) \| [`TextInputElement`](index.md#textinputelement)

***

### TileProps

> **TileProps**: [`BoxProps`](index.md#boxprops) & [`TileMetaV0`](../protocol/index.md#tilemetav0) & `object`

#### Type declaration

##### actions?

> `optional` **actions**: [`TileActionsProp`](index.md#tileactionsprop)

##### input?

> `optional` **input**: [`TileInputProp`](index.md#tileinputprop)

***

### ValidTileInput

> **ValidTileInput**: `ReactElement` \| [`TileV0`](../protocol/index.md#tilev0)

## Functions

### Box()

> **Box**(`props`): `ReactElement`\<[`BoxProps`](index.md#boxprops), `string` \| `JSXElementConstructor`\<`any`\>\>

#### Parameters

• **props**: [`BoxProps`](index.md#boxprops)

#### Returns

`ReactElement`\<[`BoxProps`](index.md#boxprops), `string` \| `JSXElementConstructor`\<`any`\>\>

***

### Image()

> **Image**(`props`): `ReactElement`\<[`ImageProps`](index.md#imageprops), `string` \| `JSXElementConstructor`\<`any`\>\>

#### Parameters

• **props**: [`ImageProps`](index.md#imageprops)

#### Returns

`ReactElement`\<[`ImageProps`](index.md#imageprops), `string` \| `JSXElementConstructor`\<`any`\>\>

***

### OpenAction()

> **OpenAction**(`props`): `ReactElement`\<[`OpenActionProps`](index.md#openactionprops), `string` \| `JSXElementConstructor`\<`any`\>\>

#### Parameters

• **props**: [`OpenActionProps`](index.md#openactionprops)

#### Returns

`ReactElement`\<[`OpenActionProps`](index.md#openactionprops), `string` \| `JSXElementConstructor`\<`any`\>\>

***

### Option()

> **Option**(`props`): `ReactElement`\<`object`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Parameters

• **props**

• **props.label**: `string`

• **props.value**: `string` \| `number` \| `boolean`

#### Returns

`ReactElement`\<`object`, `string` \| `JSXElementConstructor`\<`any`\>\>

##### label

> `readonly` **label**: `string`

##### value

> `readonly` **value**: `string` \| `number` \| `boolean`

***

### OptionsInput()

> **OptionsInput**(`props`): `DOMElement`\<[`OptionsInputProps`](index.md#optionsinputprops), `Element`\>

#### Parameters

• **props**: [`OptionsInputProps`](index.md#optionsinputprops)

#### Returns

`DOMElement`\<[`OptionsInputProps`](index.md#optionsinputprops), `Element`\>

***

### parseTile()

> **parseTile**(`root`): [`TileV0`](../protocol/index.md#tilev0)

#### Parameters

• **root**: `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Returns

[`TileV0`](../protocol/index.md#tilev0)

***

### SignAction()

> **SignAction**(`props`): `ReactElement`\<[`SignActionProps`](index.md#signactionprops), `string` \| `JSXElementConstructor`\<`any`\>\>

#### Parameters

• **props**: [`SignActionProps`](index.md#signactionprops)

#### Returns

`ReactElement`\<[`SignActionProps`](index.md#signactionprops), `string` \| `JSXElementConstructor`\<`any`\>\>

***

### SubmitAction()

> **SubmitAction**(`props`): `ReactElement`\<[`SubmitActionProps`](index.md#submitactionprops), `string` \| `JSXElementConstructor`\<`any`\>\>

#### Parameters

• **props**: [`SubmitActionProps`](index.md#submitactionprops)

#### Returns

`ReactElement`\<[`SubmitActionProps`](index.md#submitactionprops), `string` \| `JSXElementConstructor`\<`any`\>\>

***

### Text()

> **Text**(`props`): `ReactElement`\<[`TextProps`](index.md#textprops), `string` \| `JSXElementConstructor`\<`any`\>\>

#### Parameters

• **props**: [`TextProps`](index.md#textprops)

#### Returns

`ReactElement`\<[`TextProps`](index.md#textprops), `string` \| `JSXElementConstructor`\<`any`\>\>

***

### TextInput()

> **TextInput**(`props`): `ReactElement`\<[`TextInputProps`](index.md#textinputprops), `string` \| `JSXElementConstructor`\<`any`\>\>

#### Parameters

• **props**: [`TextInputProps`](index.md#textinputprops)

#### Returns

`ReactElement`\<[`TextInputProps`](index.md#textinputprops), `string` \| `JSXElementConstructor`\<`any`\>\>

***

### Tile()

> **Tile**(`props`): `ReactElement`\<[`BoxProps`](index.md#boxprops) & `object` & `object`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Parameters

• **props**: [`TileProps`](index.md#tileprops)

#### Returns

`ReactElement`\<[`BoxProps`](index.md#boxprops) & `object` & `object`, `string` \| `JSXElementConstructor`\<`any`\>\>

***

### toValidTile()

> **toValidTile**(`input`): [`TileV0`](../protocol/index.md#tilev0)

#### Parameters

• **input**: [`ValidTileInput`](index.md#validtileinput)

#### Returns

[`TileV0`](../protocol/index.md#tilev0)
