export default {
	Query: {
		attribute_values: async (parent, args, { models }) => await models.AttributeValue.findAll(),
		attribute_value: async (parent, { attribute_value_id }, { models }) => {
			return await models.AttributeValue.findByPk(attribute_value_id);
		},
		getAttributeValuesByAttributeId: async (parent, { attribute_id }, { models }) => {
			const attribute = await models.Attribute.findByPk(attribute_id);
			return await attribute.getAttributeValue();
		}
	}
};