# @tairu/protocol

Tairu protocol schemas and types.

## Installation

```sh
npm install @tairu/protocol
```

## Type Aliases

### ActionV0

> **ActionV0**: `InferOutput`\<*typeof* [`actionV0`](index.md#actionv0-1)\>

***

### BoxChildrenV0

> **BoxChildrenV0**: `InferOutput`\<*typeof* [`boxChildrenV0`](index.md#boxchildrenv0-1)\>

***

### BoxNodeV0

> **BoxNodeV0**: `InferOutput`\<*typeof* [`boxNodeV0`](index.md#boxnodev0-1)\>

***

### BoxPropsV0

> **BoxPropsV0**: `InferOutput`\<*typeof* [`boxPropsV0`](index.md#boxpropsv0-1)\>

***

### BoxStyleV0

> **BoxStyleV0**: `InferOutput`\<*typeof* [`boxStyleV0`](index.md#boxstylev0-1)\>

***

### BoxV0

> **BoxV0**: `InferOutput`\<*typeof* [`boxV0`](index.md#boxv0-1)\>

***

### CreateTokenOptions

> **CreateTokenOptions**: `object`

#### Type declaration

##### canonicalize?

> `optional` **canonicalize**: `boolean`

##### expiresIn?

> `optional` **expiresIn**: `number`

##### header?

> `optional` **header**: `Partial`\<`JWTHeader`\>

***

### DIDSigner

> **DIDSigner**: `object`

#### Type declaration

##### createToken()

> **createToken**: (`payload`, `options`?) => `Promise`\<`string`\>

###### Parameters

• **payload**: `JWTPayload`

• **options?**: [`CreateTokenOptions`](index.md#createtokenoptions)

###### Returns

`Promise`\<`string`\>

##### id

> `readonly` **id**: `string`

***

### ElementTypeV0

> **ElementTypeV0**: `InferOutput`\<*typeof* [`elementTypeV0`](index.md#elementtypev0-1)\>

***

### ElementV0

> **ElementV0**: `InferOutput`\<*typeof* [`elementV0`](index.md#elementv0-1)\>

***

### HandlerFormatV0

> **HandlerFormatV0**: `InferOutput`\<*typeof* [`handlerFormatV0`](index.md#handlerformatv0-1)\>

***

### HandlerQueryParamsV0

> **HandlerQueryParamsV0**: `InferOutput`\<*typeof* [`handlerQueryParamsV0`](index.md#handlerqueryparamsv0-1)\>

***

### ImagePropsV0

> **ImagePropsV0**: `InferOutput`\<*typeof* [`imagePropsV0`](index.md#imagepropsv0-1)\>

***

### ImageV0

> **ImageV0**: `InferOutput`\<*typeof* [`imageV0`](index.md#imagev0-1)\>

***

### InputOptionV0

> **InputOptionV0**: `InferOutput`\<*typeof* [`inputOptionV0`](index.md#inputoptionv0-1)\>

***

### InputV0

> **InputV0**: `InferOutput`\<*typeof* [`inputV0`](index.md#inputv0-1)\>

***

### OpenActionV0

> **OpenActionV0**: `InferOutput`\<*typeof* [`openActionV0`](index.md#openactionv0-1)\>

***

### OptionsInputV0

> **OptionsInputV0**: `InferOutput`\<*typeof* [`optionsInputV0`](index.md#optionsinputv0-1)\>

***

### OptionValueV0

> **OptionValueV0**: `InferOutput`\<*typeof* [`optionValueV0`](index.md#optionvaluev0-1)\>

***

### PostActionHandler()

> **PostActionHandler**: (`action`) => `Promise`\<[`TileV0`](index.md#tilev0)\>

#### Parameters

• **action**: [`PostActionV0`](index.md#postactionv0)

#### Returns

`Promise`\<[`TileV0`](index.md#tilev0)\>

***

### PostActionV0

> **PostActionV0**: `InferOutput`\<*typeof* [`postActionV0`](index.md#postactionv0-1)\>

***

### SignActionHandler()

> **SignActionHandler**: (`action`) => `Promise`\<`string`\>

#### Parameters

• **action**: [`PostActionV0`](index.md#postactionv0)

#### Returns

`Promise`\<`string`\>

***

### SignActionV0

> **SignActionV0**: `InferOutput`\<*typeof* [`signActionV0`](index.md#signactionv0-1)\>

***

### SignedActionV0

> **SignedActionV0**: `InferOutput`\<*typeof* [`signedActionV0`](index.md#signedactionv0-1)\>

***

### SubmitActionV0

> **SubmitActionV0**: `InferOutput`\<*typeof* [`submitActionV0`](index.md#submitactionv0-1)\>

***

### SubmittedActionV0

> **SubmittedActionV0**: `InferOutput`\<*typeof* [`submittedActionV0`](index.md#submittedactionv0-1)\>

***

### SubmitValueV0

> **SubmitValueV0**: `InferOutput`\<*typeof* [`submitValueV0`](index.md#submitvaluev0-1)\>

***

### TextChildrenV0

> **TextChildrenV0**: `InferOutput`\<*typeof* [`textChildrenV0`](index.md#textchildrenv0-1)\>

***

### TextInputV0

> **TextInputV0**: `InferOutput`\<*typeof* [`textInputV0`](index.md#textinputv0-1)\>

***

### TextNodeV0

> **TextNodeV0**: `InferOutput`\<*typeof* [`textNodeV0`](index.md#textnodev0-1)\>

***

### TextPropsV0

> **TextPropsV0**: `InferOutput`\<*typeof* [`textPropsV0`](index.md#textpropsv0-1)\>

***

### TextStyleV0

> **TextStyleV0**: `InferOutput`\<*typeof* [`textStyleV0`](index.md#textstylev0-1)\>

***

### TextV0

> **TextV0**: `InferOutput`\<*typeof* [`textV0`](index.md#textv0-1)\>

***

### Tile

> **Tile**: `InferOutput`\<*typeof* [`tile`](index.md#tile-1)\>

***

### TileInteractiveV0

> **TileInteractiveV0**: `InferOutput`\<*typeof* [`tileInteractiveV0`](index.md#tileinteractivev0-1)\>

***

### TileMetaV0

> **TileMetaV0**: `InferOutput`\<*typeof* [`tileMetaV0`](index.md#tilemetav0-1)\>

***

### TilePropsV0

> **TilePropsV0**: `InferOutput`\<*typeof* [`tilePropsV0`](index.md#tilepropsv0-1)\>

***

### TileV0

> **TileV0**: `InferOutput`\<*typeof* [`tileV0`](index.md#tilev0-1)\>

***

### ValueV0

> **ValueV0**: `InferOutput`\<*typeof* [`valueV0`](index.md#valuev0-1)\>

## Variables

### actionV0

> `const` **actionV0**: `VariantSchema`\<`"type"`, [`ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>], `undefined`\>

***

### boxChildrenV0

> `const` **boxChildrenV0**: `UnionSchema`\<[`LooseObjectSchema`\<`object`, `undefined`\>, `ArraySchema`\<`LooseObjectSchema`\<`object`, `undefined`\>, `undefined`\>], `undefined`\>

***

### boxNodeV0

> `const` **boxNodeV0**: `LooseObjectSchema`\<`object`, `undefined`\> = `elementV0`

#### Type declaration

##### props

> `readonly` **props**: `RecordSchema`\<`StringSchema`\<`undefined`\>, `AnySchema`, `undefined`\> = `anyDictionary`

##### type

> `readonly` **type**: `PicklistSchema`\<[`"Box"`, `"Image"`, `"Text"`], `undefined`\> = `elementTypeV0`

***

### boxPropsV0

> `const` **boxPropsV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### children

> `readonly` **children**: `OptionalSchema`\<`UnionSchema`\<[`LooseObjectSchema`\<`object`, `undefined`\>, `ArraySchema`\<`LooseObjectSchema`\<`object`, `undefined`\>, `undefined`\>], `undefined`\>, `never`\>

##### key

> `readonly` **key**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

##### style

> `readonly` **style**: `OptionalSchema`\<`Omit`\<`ObjectSchema`\<`object`, `undefined`\>, `"_types"` \| `"_run"` \| `"entries"`\> & `object`, `never`\>

***

### boxStyleV0

> `const` **boxStyleV0**: `Omit`\<`ObjectSchema`\<`object`, `undefined`\>, `"_types"` \| `"_run"` \| `"entries"`\> & `object`

***

### boxV0

> `const` **boxV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### props

> `readonly` **props**: `ObjectSchema`\<`object`, `undefined`\> = `boxPropsV0`

###### Type declaration

###### children

> `readonly` **children**: `OptionalSchema`\<`UnionSchema`\<[`LooseObjectSchema`\<`object`, `undefined`\>, `ArraySchema`\<`LooseObjectSchema`\<`object`, `undefined`\>, `undefined`\>], `undefined`\>, `never`\>

###### key

> `readonly` **key**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

###### style

> `readonly` **style**: `OptionalSchema`\<`Omit`\<`ObjectSchema`\<`object`, `undefined`\>, `"_types"` \| `"_run"` \| `"entries"`\> & `object`, `never`\>

##### type

> `readonly` **type**: `LiteralSchema`\<`"Box"`, `undefined`\>

***

### didSignType

> `const` **didSignType**: `LiteralSchema`\<`"did/sign"`, `undefined`\>

***

### didSubmitType

> `const` **didSubmitType**: `LiteralSchema`\<`"did/submit"`, `undefined`\>

***

### elementTypeV0

> `const` **elementTypeV0**: `PicklistSchema`\<[`"Box"`, `"Image"`, `"Text"`], `undefined`\>

***

### elementV0

> `const` **elementV0**: `LooseObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### props

> `readonly` **props**: `RecordSchema`\<`StringSchema`\<`undefined`\>, `AnySchema`, `undefined`\> = `anyDictionary`

##### type

> `readonly` **type**: `PicklistSchema`\<[`"Box"`, `"Image"`, `"Text"`], `undefined`\> = `elementTypeV0`

***

### handlerFormatV0

> `const` **handlerFormatV0**: `UnionSchema`\<[`LiteralSchema`\<`"html"`, `undefined`\>, `LiteralSchema`\<`"html-embed"`, `undefined`\>, `LiteralSchema`\<`"json"`, `undefined`\>, `LiteralSchema`\<`"svg"`, `undefined`\>], `undefined`\>

***

### handlerQueryParamsV0

> `const` **handlerQueryParamsV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### tile-format

> `readonly` **tile-format**: `OptionalSchema`\<`UnionSchema`\<[`LiteralSchema`\<`"html"`, `undefined`\>, `LiteralSchema`\<`"html-embed"`, `undefined`\>, `LiteralSchema`\<`"json"`, `undefined`\>, `LiteralSchema`\<`"svg"`, `undefined`\>], `undefined`\>, `never`\>

***

### imagePropsV0

> `const` **imagePropsV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### alt

> `readonly` **alt**: `StringSchema`\<`undefined`\>

##### height

> `readonly` **height**: `SchemaWithPipe`\<[`NumberSchema`\<`undefined`\>, `MinValueAction`\<`number`, `0`, `undefined`\>]\> = `nonNegativeNumber`

##### key

> `readonly` **key**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

##### src

> `readonly` **src**: `SchemaWithPipe`\<[`StringSchema`\<`undefined`\>, `UrlAction`\<`string`, `undefined`\>]\>

##### width

> `readonly` **width**: `SchemaWithPipe`\<[`NumberSchema`\<`undefined`\>, `MinValueAction`\<`number`, `0`, `undefined`\>]\> = `nonNegativeNumber`

***

### imageV0

> `const` **imageV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### props

> `readonly` **props**: `ObjectSchema`\<`object`, `undefined`\> = `imagePropsV0`

###### Type declaration

###### alt

> `readonly` **alt**: `StringSchema`\<`undefined`\>

###### height

> `readonly` **height**: `SchemaWithPipe`\<[`NumberSchema`\<`undefined`\>, `MinValueAction`\<`number`, `0`, `undefined`\>]\> = `nonNegativeNumber`

###### key

> `readonly` **key**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

###### src

> `readonly` **src**: `SchemaWithPipe`\<[`StringSchema`\<`undefined`\>, `UrlAction`\<`string`, `undefined`\>]\>

###### width

> `readonly` **width**: `SchemaWithPipe`\<[`NumberSchema`\<`undefined`\>, `MinValueAction`\<`number`, `0`, `undefined`\>]\> = `nonNegativeNumber`

##### type

> `readonly` **type**: `LiteralSchema`\<`"Image"`, `undefined`\>

***

### inputOptionV0

> `const` **inputOptionV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### label

> `readonly` **label**: `StringSchema`\<`undefined`\>

##### value

> `readonly` **value**: `UnionSchema`\<[`StringSchema`\<`undefined`\>, `NumberSchema`\<`undefined`\>, `BooleanSchema`\<`undefined`\>], `undefined`\> = `optionValueV0`

***

### inputV0

> `const` **inputV0**: `VariantSchema`\<`"type"`, [`ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>], `undefined`\>

***

### openActionV0

> `const` **openActionV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### label

> `readonly` **label**: `StringSchema`\<`undefined`\>

##### type

> `readonly` **type**: `LiteralSchema`\<`"uri/open"`, `undefined`\> = `uriOpenActionType`

##### uri

> `readonly` **uri**: `StringSchema`\<`undefined`\>

***

### optionsInputV0

> `const` **optionsInputV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### multiple

> `readonly` **multiple**: `OptionalSchema`\<`BooleanSchema`\<`undefined`\>, `never`\>

##### options

> `readonly` **options**: `ArraySchema`\<`ObjectSchema`\<`object`, `undefined`\>, `undefined`\>

##### type

> `readonly` **type**: `LiteralSchema`\<`"options"`, `undefined`\>

***

### optionValueV0

> `const` **optionValueV0**: `UnionSchema`\<[`StringSchema`\<`undefined`\>, `NumberSchema`\<`undefined`\>, `BooleanSchema`\<`undefined`\>], `undefined`\>

***

### postActionV0

> `const` **postActionV0**: `VariantSchema`\<`"type"`, [`ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>], `undefined`\>

***

### signActionV0

> `const` **signActionV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### label

> `readonly` **label**: `StringSchema`\<`undefined`\>

##### payload

> `readonly` **payload**: `OptionalSchema`\<`RecordSchema`\<`StringSchema`\<`undefined`\>, `AnySchema`, `undefined`\>, `never`\>

##### state

> `readonly` **state**: `OptionalSchema`\<`RecordSchema`\<`StringSchema`\<`undefined`\>, `AnySchema`, `undefined`\>, `never`\>

##### type

> `readonly` **type**: `LiteralSchema`\<`"did/sign"`, `undefined`\> = `didSignType`

***

### signedActionV0

> `const` **signedActionV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### jwt

> `readonly` **jwt**: `StringSchema`\<`undefined`\>

##### state

> `readonly` **state**: `OptionalSchema`\<`RecordSchema`\<`StringSchema`\<`undefined`\>, `AnySchema`, `undefined`\>, `never`\>

##### type

> `readonly` **type**: `LiteralSchema`\<`"did/sign"`, `undefined`\> = `didSignType`

***

### submitActionV0

> `const` **submitActionV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### label

> `readonly` **label**: `StringSchema`\<`undefined`\>

##### state

> `readonly` **state**: `OptionalSchema`\<`RecordSchema`\<`StringSchema`\<`undefined`\>, `AnySchema`, `undefined`\>, `never`\>

##### type

> `readonly` **type**: `LiteralSchema`\<`"did/submit"`, `undefined`\> = `didSubmitType`

***

### submittedActionV0

> `const` **submittedActionV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### state

> `readonly` **state**: `OptionalSchema`\<`RecordSchema`\<`StringSchema`\<`undefined`\>, `AnySchema`, `undefined`\>, `never`\>

##### type

> `readonly` **type**: `LiteralSchema`\<`"did/submit"`, `undefined`\> = `didSubmitType`

##### value

> `readonly` **value**: `UnionSchema`\<[`UnionSchema`\<[`StringSchema`\<`undefined`\>, `NumberSchema`\<`undefined`\>, `BooleanSchema`\<`undefined`\>], `undefined`\>, `ArraySchema`\<`UnionSchema`\<[`StringSchema`\<`undefined`\>, `NumberSchema`\<`undefined`\>, `BooleanSchema`\<`undefined`\>], `undefined`\>, `undefined`\>], `undefined`\> = `submitValueV0`

***

### submitValueV0

> `const` **submitValueV0**: `UnionSchema`\<[`UnionSchema`\<[`StringSchema`\<`undefined`\>, `NumberSchema`\<`undefined`\>, `BooleanSchema`\<`undefined`\>], `undefined`\>, `ArraySchema`\<`UnionSchema`\<[`StringSchema`\<`undefined`\>, `NumberSchema`\<`undefined`\>, `BooleanSchema`\<`undefined`\>], `undefined`\>, `undefined`\>], `undefined`\>

***

### textChildrenV0

> `const` **textChildrenV0**: `UnionSchema`\<[`UnionSchema`\<[`LooseObjectSchema`\<`object`, `undefined`\>, `UnionSchema`\<[`BooleanSchema`\<`undefined`\>, `NumberSchema`\<`undefined`\>, `StringSchema`\<`undefined`\>], `undefined`\>], `undefined`\>, `ArraySchema`\<`UnionSchema`\<[`LooseObjectSchema`\<`object`, `undefined`\>, `UnionSchema`\<[`BooleanSchema`\<`undefined`\>, `NumberSchema`\<`undefined`\>, `StringSchema`\<`undefined`\>], `undefined`\>], `undefined`\>, `undefined`\>], `undefined`\>

***

### textInputV0

> `const` **textInputV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### defaultValue

> `readonly` **defaultValue**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

##### label

> `readonly` **label**: `StringSchema`\<`undefined`\>

##### placeholder

> `readonly` **placeholder**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

##### secure

> `readonly` **secure**: `OptionalSchema`\<`BooleanSchema`\<`undefined`\>, `never`\>

##### type

> `readonly` **type**: `LiteralSchema`\<`"text"`, `undefined`\>

***

### textNodeV0

> `const` **textNodeV0**: `UnionSchema`\<[`LooseObjectSchema`\<`object`, `undefined`\>, `UnionSchema`\<[`BooleanSchema`\<`undefined`\>, `NumberSchema`\<`undefined`\>, `StringSchema`\<`undefined`\>], `undefined`\>], `undefined`\>

***

### textPropsV0

> `const` **textPropsV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### children

> `readonly` **children**: `UnionSchema`\<[`UnionSchema`\<[`LooseObjectSchema`\<`object`, `undefined`\>, `UnionSchema`\<[`BooleanSchema`\<`undefined`\>, `NumberSchema`\<`undefined`\>, `StringSchema`\<`undefined`\>], `undefined`\>], `undefined`\>, `ArraySchema`\<`UnionSchema`\<[`LooseObjectSchema`\<`object`, `undefined`\>, `UnionSchema`\<[`BooleanSchema`\<`undefined`\>, `NumberSchema`\<`undefined`\>, `StringSchema`\<`undefined`\>], `undefined`\>], `undefined`\>, `undefined`\>], `undefined`\> = `textChildrenV0`

##### key

> `readonly` **key**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

##### style

> `readonly` **style**: `OptionalSchema`\<`Omit`\<`ObjectSchema`\<`object`, `undefined`\>, `"_types"` \| `"_run"` \| `"entries"`\> & `object`, `never`\>

***

### textStyleV0

> `const` **textStyleV0**: `Omit`\<`ObjectSchema`\<`object`, `undefined`\>, `"_types"` \| `"_run"` \| `"entries"`\> & `object`

***

### textV0

> `const` **textV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### props

> `readonly` **props**: `ObjectSchema`\<`object`, `undefined`\> = `textPropsV0`

###### Type declaration

###### children

> `readonly` **children**: `UnionSchema`\<[`UnionSchema`\<[`LooseObjectSchema`\<`object`, `undefined`\>, `UnionSchema`\<[`BooleanSchema`\<...\>, `NumberSchema`\<...\>, `StringSchema`\<...\>], `undefined`\>], `undefined`\>, `ArraySchema`\<`UnionSchema`\<[`LooseObjectSchema`\<`object`, `undefined`\>, `UnionSchema`\<[..., ..., ...], `undefined`\>], `undefined`\>, `undefined`\>], `undefined`\> = `textChildrenV0`

###### key

> `readonly` **key**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

###### style

> `readonly` **style**: `OptionalSchema`\<`Omit`\<`ObjectSchema`\<`object`, `undefined`\>, `"_types"` \| `"_run"` \| `"entries"`\> & `object`, `never`\>

##### type

> `readonly` **type**: `LiteralSchema`\<`"Text"`, `undefined`\>

***

### tile

> `const` **tile**: `ObjectSchema`\<`object`, `undefined`\> = `tileV0`

#### Type declaration

##### props

> `readonly` **props**: `ObjectSchema`\<`object`, `undefined`\> = `tilePropsV0`

###### Type declaration

###### actions

> `readonly` **actions**: `OptionalSchema`\<`ArraySchema`\<`VariantSchema`\<`"type"`, [`ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>], `undefined`\>, `undefined`\>, `never`\>

###### children

> `readonly` **children**: `OptionalSchema`\<`UnionSchema`\<[`LooseObjectSchema`\<`object`, `undefined`\>, `ArraySchema`\<`LooseObjectSchema`\<`object`, `undefined`\>, `undefined`\>], `undefined`\>, `never`\>

###### description

> `readonly` **description**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

###### input

> `readonly` **input**: `OptionalSchema`\<`VariantSchema`\<`"type"`, [`ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>], `undefined`\>, `never`\>

###### key

> `readonly` **key**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

###### style

> `readonly` **style**: `OptionalSchema`\<`Omit`\<`ObjectSchema`\<`object`, `undefined`\>, `"_types"` \| `"_run"` \| `"entries"`\> & `object`, `never`\>

###### title

> `readonly` **title**: `StringSchema`\<`undefined`\>

##### type

> `readonly` **type**: `LiteralSchema`\<`"Tile"`, `undefined`\>

##### version

> `readonly` **version**: `LiteralSchema`\<`"0.1"`, `undefined`\>

***

### tileInteractiveV0

> `const` **tileInteractiveV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### actions

> `readonly` **actions**: `OptionalSchema`\<`ArraySchema`\<`VariantSchema`\<`"type"`, [`ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>], `undefined`\>, `undefined`\>, `never`\>

##### input

> `readonly` **input**: `OptionalSchema`\<`VariantSchema`\<`"type"`, [`ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>], `undefined`\>, `never`\>

***

### tileMetaV0

> `const` **tileMetaV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### description

> `readonly` **description**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

##### title

> `readonly` **title**: `StringSchema`\<`undefined`\>

***

### tilePropsV0

> `const` **tilePropsV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### actions

> `readonly` **actions**: `OptionalSchema`\<`ArraySchema`\<`VariantSchema`\<`"type"`, [`ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>], `undefined`\>, `undefined`\>, `never`\>

##### children

> `readonly` **children**: `OptionalSchema`\<`UnionSchema`\<[`LooseObjectSchema`\<`object`, `undefined`\>, `ArraySchema`\<`LooseObjectSchema`\<`object`, `undefined`\>, `undefined`\>], `undefined`\>, `never`\>

##### description

> `readonly` **description**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

##### input

> `readonly` **input**: `OptionalSchema`\<`VariantSchema`\<`"type"`, [`ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>], `undefined`\>, `never`\>

##### key

> `readonly` **key**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

##### style

> `readonly` **style**: `OptionalSchema`\<`Omit`\<`ObjectSchema`\<`object`, `undefined`\>, `"_types"` \| `"_run"` \| `"entries"`\> & `object`, `never`\>

##### title

> `readonly` **title**: `StringSchema`\<`undefined`\>

***

### tileV0

> `const` **tileV0**: `ObjectSchema`\<`object`, `undefined`\>

#### Type declaration

##### props

> `readonly` **props**: `ObjectSchema`\<`object`, `undefined`\> = `tilePropsV0`

###### Type declaration

###### actions

> `readonly` **actions**: `OptionalSchema`\<`ArraySchema`\<`VariantSchema`\<`"type"`, [`ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>], `undefined`\>, `undefined`\>, `never`\>

###### children

> `readonly` **children**: `OptionalSchema`\<`UnionSchema`\<[`LooseObjectSchema`\<`object`, `undefined`\>, `ArraySchema`\<`LooseObjectSchema`\<`object`, `undefined`\>, `undefined`\>], `undefined`\>, `never`\>

###### description

> `readonly` **description**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

###### input

> `readonly` **input**: `OptionalSchema`\<`VariantSchema`\<`"type"`, [`ObjectSchema`\<`object`, `undefined`\>, `ObjectSchema`\<`object`, `undefined`\>], `undefined`\>, `never`\>

###### key

> `readonly` **key**: `OptionalSchema`\<`StringSchema`\<`undefined`\>, `never`\>

###### style

> `readonly` **style**: `OptionalSchema`\<`Omit`\<`ObjectSchema`\<`object`, `undefined`\>, `"_types"` \| `"_run"` \| `"entries"`\> & `object`, `never`\>

###### title

> `readonly` **title**: `StringSchema`\<`undefined`\>

##### type

> `readonly` **type**: `LiteralSchema`\<`"Tile"`, `undefined`\>

##### version

> `readonly` **version**: `LiteralSchema`\<`"0.1"`, `undefined`\>

***

### uriOpenActionType

> `const` **uriOpenActionType**: `LiteralSchema`\<`"uri/open"`, `undefined`\>

***

### valueV0

> `const` **valueV0**: `UnionSchema`\<[`BooleanSchema`\<`undefined`\>, `NumberSchema`\<`undefined`\>, `StringSchema`\<`undefined`\>], `undefined`\>
