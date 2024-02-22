{
  "name": "@ckeditor/ckeditor5-build-classic",
  "version": "41.1.0",
  "description": "The classic editor build of CKEditor 5 - the best browser-based rich text editor.",
  "keywords": [
    "ckeditor5-build",
    "ckeditor",
    "ckeditor5",
    "ckeditor 5",
    "wysiwyg",
    "rich text",
    "editor",
    "html",
    "contentEditable",
    "editing",
    "operational transformation",
    "ot",
    "collaboration",
    "collaborative",
    "real-time",
    "framework"
  ],
  "main": "./build/ckeditor.js",
  "types": "./build/ckeditor.d.ts",
  "files": [
    "build",
    "ckeditor5-metadata.json",
    "CHANGELOG.md"
  ],
  "dependencies": {
    "@ckeditor/ckeditor5-adapter-ckfinder": "41.1.0",
    "@ckeditor/ckeditor5-autoformat": "41.1.0",
    "@ckeditor/ckeditor5-basic-styles": "41.1.0",
    "@ckeditor/ckeditor5-block-quote": "41.1.0",
    "@ckeditor/ckeditor5-ckbox": "41.1.0",
    "@ckeditor/ckeditor5-ckfinder": "41.1.0",
    "@ckeditor/ckeditor5-cloud-services": "41.1.0",
    "@ckeditor/ckeditor5-easy-image": "41.1.0",
    "@ckeditor/ckeditor5-editor-classic": "41.1.0",
    "@ckeditor/ckeditor5-essentials": "41.1.0",
    "@ckeditor/ckeditor5-heading": "41.1.0",
    "@ckeditor/ckeditor5-image": "41.1.0",
    "@ckeditor/ckeditor5-indent": "41.1.0",
    "@ckeditor/ckeditor5-link": "41.1.0",
    "@ckeditor/ckeditor5-list": "41.1.0",
    "@ckeditor/ckeditor5-find-and-replace": "^41.1.0",
    "@ckeditor/ckeditor5-html-embed": "^41.1.0",
    "@ckeditor/ckeditor5-html-support": "^41.1.0",
    "@ckeditor/ckeditor5-inspector": "^4.1.0",
    "@ckeditor/ckeditor5-media-embed": "41.1.0",
    "@ckeditor/ckeditor5-paragraph": "41.1.0",
    "@ckeditor/ckeditor5-paste-from-office": "41.1.0",
    "@ckeditor/ckeditor5-table": "41.1.0",
    "@ckeditor/ckeditor5-typing": "41.1.0"
  },
  "devDependencies": {
    "@ckeditor/ckeditor5-core": "41.1.0",
    "@ckeditor/ckeditor5-dev-translations": "^39.0.0",
    "@ckeditor/ckeditor5-dev-utils": "^39.0.0",
    "@ckeditor/ckeditor5-theme-lark": "41.1.0",
    "terser-webpack-plugin": "^4.2.3",
    "typescript": "5.0.4",
    "webpack": "^5.58.1",
    "webpack-cli": "^4.9.0"
  },
  "author": "CKSource (http://cksource.com/)",
  "license": "GPL-2.0-or-later",
  "homepage": "https://ckeditor.com/ckeditor-5",
  "bugs": "https://github.com/ckeditor/ckeditor5/issues",
  "repository": {
    "type": "git",
    "url": "https://github.com/ckeditor/ckeditor5.git",
    "directory": "packages/ckeditor5-build-classic"
  },
  "scripts": {
    "build": "webpack --mode production",
    "postbuild": "tsc -p ./tsconfig.types.json"
  }
}
