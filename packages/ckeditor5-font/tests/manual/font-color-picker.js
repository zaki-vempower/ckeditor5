/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals console, window, document */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import ArticlePluginSet from '@ckeditor/ckeditor5-core/tests/_utils/articlepluginset';
import FontColor from '../../src/fontcolor';
import FontBackgroundColor from '../../src/fontbackgroundcolor';
import { TableProperties, TableCellProperties } from '@ckeditor/ckeditor5-table';

ClassicEditor
	.create( document.querySelector( '#editor-with-default-picker' ), {
		image: { toolbar: [ 'toggleImageCaption', 'imageTextAlternative' ] },
		plugins: [
			ArticlePluginSet,
			FontColor,
			FontBackgroundColor,
			TableProperties,
			TableCellProperties
		],
		toolbar: [
			'heading',
			'|',
			'fontColor',
			'fontBackgroundColor',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'blockQuote',
			'insertTable',
			'undo',
			'redo'
		],
		table: {
			contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties' ]
		},
		fontColor: {
			columns: 3
		}
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );

ClassicEditor
	.create( document.querySelector( '#editor-with-custom-picker' ), {
		image: { toolbar: [ 'toggleImageCaption', 'imageTextAlternative' ] },
		plugins: [
			ArticlePluginSet,
			FontColor,
			FontBackgroundColor
		],
		toolbar: [
			'heading',
			'|',
			'fontColor',
			'fontBackgroundColor',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'blockQuote',
			'undo',
			'redo'
		],
		fontColor: {
			columns: 3,
			colorPicker: {
				format: 'rgb'
			}
		},
		fontBackgroundColor: {
			colorPicker: {
				format: 'hex'
			}
		}
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );

ClassicEditor
	.create( document.querySelector( '#editor-without-picker' ), {
		image: { toolbar: [ 'toggleImageCaption', 'imageTextAlternative' ] },
		plugins: [
			ArticlePluginSet,
			FontColor,
			FontBackgroundColor
		],
		toolbar: [
			'heading',
			'|',
			'fontColor',
			'fontBackgroundColor',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'blockQuote',
			'undo',
			'redo'
		],
		fontColor: {
			columns: 3,
			colorPicker: false
		},
		fontBackgroundColor: {
			colorPicker: false
		}
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );

function updateText( styleName ) {
	return evt => {
		const el = document.querySelector( '#color-box > p > span' );
		if ( el ) {
			el.style[ styleName ] = evt.target.value;
		}
	};
}

document.getElementById( 'color' ).addEventListener( 'change', updateText( 'color' ) );
document.getElementById( 'bgcolor' ).addEventListener( 'change', updateText( 'backgroundColor' ) );
