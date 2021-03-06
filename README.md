# license-plate

![size logo](https://img.shields.io/github/languages/code-size/brimbelle/world-license-plate?style=flat-square)
![last logo](https://img.shields.io/github/last-commit/brimbelle/world-license-plate?style=flat-square)
![license logo](https://img.shields.io/github/license/brimbelle/world-license-plate?style=flat-square)
![version logo](https://img.shields.io/github/package-json/v/brimbelle/world-license-plate?style=flat-square)

Simple package to validate or format world license plate

## Installation

```bash
yarn add @brimbelle/license-plate
# or npm install @brimbelle/license-plate
```

## Docs

It's just the beginning of this lib, new locales are coming in next weeks.

If you need a locale not present, post an [issue](https://github.com/brimbelle/license-plate/issues) to ask me or create a pull request with this locale added.

At moment you can use FR, BE, and CH locales to validate and format your licenses plates.

Find example [HERE](https://github.com/brimbelle/license-plate/blob/develop/example/example.js)

```bash
import LicensePlate from '@brimbelle/license-plate';
```

LocaleCode
```bash
type LocaleCode: 'FR' | 'BE' | 'CH';
```

Set locale
```bash
LicensePlate.setLocale(locale: LocaleCode); // Default is FR locale

LicensePlate.setLocale('FR');
```

Create license plate
```bash
new LicensePlate(licensePlate: string, isCustom?: boolean);

const licensePlate = new LicensePlate('AB123CD');
```

Is valid license plate
```bash
licensePlate.isValid(): boolean;
```

Get formated license plate
```bash
licensePlate.format(): string;
```

## License
[MIT License](https://choosealicense.com/licenses/mit/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
