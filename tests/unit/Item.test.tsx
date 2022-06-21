import React from 'react';
import renderer from 'react-test-renderer';

import fetchMock from 'jest-fetch-mock';
import Item from '../../src/components/item/Item';

it('Item snapshot', () => {
	const component = renderer.create(
		<Item item={{
			title: 'Item',
			price: 9000,
			images: [],
			favorited: false,
			reviews: [],
			rating: 2.5,
			_id: 'abcdefghijk',
			discount: 5,
			sold: 10,
		}}/>,
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
