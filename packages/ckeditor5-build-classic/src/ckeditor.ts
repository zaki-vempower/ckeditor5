/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { CKFinderUploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Plugin } from '@ckeditor/ckeditor5-core';

class TranscriptHighlighter extends Plugin {
	init() {
		const editor = this.editor;

		// Allow bold attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: 'highlight' } );
		editor.model.schema.setAttributeProperties( 'highlight', {
			isFormatting: true,
			copyOnEnter: true
		} );

        // Build converter from model to view for data and editing pipelines.
		editor.conversion.attributeToElement( {
			model: 'highlight',
			view: 'mark'
        });

	}
}

export default class ClassicEditor extends ClassicEditorBase {
	public static override builtinPlugins = [
		Essentials,
		CKFinderUploadAdapter,
		Autoformat,
		Bold,
		Italic,
		BlockQuote,
		CKBox,
		CKFinder,
		CloudServices,
		EasyImage,
		TranscriptHighlighter,
		FindAndReplace,
		Heading,
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Indent,
		Link,
		GeneralHtmlSupport,
		List,
		MediaEmbed,
		Paragraph,
		PasteFromOffice,
		PictureEditing,
		Table,
		TableToolbar,
		TextTransformation
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'fullpage',
				'findAndReplace',
				'undo',
				'redo',
				'bold', 'italic', 'underline', 'strikethrough', 'code', 'subscript', 'superscript'
			]
		},	
		htmlSupport: {
			allow: [  {
				name: /.*/,
				attributes: true,
				classes: true,
				styles: true
				},
			]
		},
		image: {
			toolbar: [
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'|',
				'toggleImageCaption',
				'imageTextAlternative'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en'
	};
}
