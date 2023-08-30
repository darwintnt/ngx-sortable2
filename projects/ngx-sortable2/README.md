# NgxSortable2: Angular Sortablejs directive

<!-- [![GitHub license](https://img.shields.io/github/license/Liquid-JS/nxt-components.svg)](https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/nxt-sortablejs.svg)](https://www.npmjs.com/package/nxt-sortablejs)
[![scope](https://img.shields.io/npm/v/nxt-sortablejs.svg)](https://www.npmjs.com/package/nxt-sortablejs) -->

This package provides Angular binding for [Storablejs](https://github.com/SortableJS/Sortable) which works with standard arrays as well as Angular `FormArray` objects.

Credits to:
[Liquid-JS/nxt-components](https://github.com/Liquid-JS/nxt-components) and [ngx-sortablejs](https://github.com/SortableJS/ngx-sortablejs)

Thanks!!

## Quick links

<!-- -   [Demo](https://liquid-js.github.io/nxt-components/demo/sortablejs)
-   [Getting started](https://liquid-js.github.io/nxt-components/demo/sortablejs/getting-started)
-   [API docs](https://liquid-js.github.io/nxt-components/nxt-sortablejs) -->

### Installing

```sh
npm install --save ngx-sortable2 sortablejs
```

### Import Sortablejs module

```ts
import { NgxSortable2Module } from 'ngx-sortable2'

@NgModule({
    ...
    imports: [
        ...
        NgxSortable2Module
    ]
})
```

If you want to cofigure global Sortablejs options, include NgxSortable2Module.forRoot in your application.

```ts
import { NgxSortable2Module } from 'ngx-sortable2'

@NgModule({
    ...
    imports: [
        ...
        NgxSortable2Module.forRoot({
            animation: 150
        })
    ]
})
```

### Use it in a template

```html
<ul [sortable]="items">
    <li *ngFor="let item of items">{{ item }}</li>
</ul>
```
