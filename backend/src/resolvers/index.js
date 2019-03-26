import { GraphQLDateTime } from 'graphql-iso-date';
import { mergeResolvers } from 'merge-graphql-schemas';

import customerResolver from './customer';
import shippingRegionResolver from './shipping_region';
import attributeResolver from './attribute';
import attributeValueResolver from './attribute_value';
import departmentResolver from './department';
import categoryResolver from './category';
import productResolver from './product';
import shippingResolver from './shipping';

const customScalarResolver = {
	Date: GraphQLDateTime
};

const types = [
	customScalarResolver,
	customerResolver,
	shippingRegionResolver,
	attributeResolver,
	attributeValueResolver,
	departmentResolver,
	categoryResolver,
	productResolver,
	shippingResolver
];

export default mergeResolvers(types);
