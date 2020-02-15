/**
 * Internal dependencies
 */
import metadata from './block.json';
import { default as edit } from './edit';
import { default as icon } from './icon';
import { default as save } from './save';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'sortabrilliant/card-catalog', {
	title: __( 'Card Catalog', 'card-catalog' ),
	description: __( '', 'card-catalog' ),
	icon,
	category: metadata.category,
	keywords: [
		__( 'sortabrilliant', 'card-catalog' ),
		__( 'file', 'card-catalog' ),
	],

	attributes: metadata.attributes,

	supports: {
		html: false,
	},

	edit,
	save,
} );