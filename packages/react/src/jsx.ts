import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	ElementType,
	Key,
	Props,
	ReactElementType,
	Ref,
	Type
} from 'shared/ReactTypes';

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'react18'
	};

	return element;
};

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	let ref: Ref = null;
	const props: Props = {};

	for (const prop in config) {
		const value = config[prop];

		if (prop === 'key') {
			if (value !== undefined) {
				key = '' + value;
			}

			continue;
		}

		if (prop === 'ref') {
			if (value !== undefined) {
				ref = value;
			}

			continue;
		}

		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = value;
		}
	}

	const maybeChildrenLength = maybeChildren.length;

	if (maybeChildrenLength) {
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}

	return ReactElement(type, key, ref, props);
};

export const jsxDEV = (type: ElementType, config: any) => {
	let key: Key = null;
	let ref: Ref = null;
	const props: Props = {};

	for (const prop in config) {
		const value = config[prop];

		if (prop === 'key') {
			if (value !== undefined) {
				key = '' + value;
			}

			continue;
		}

		if (prop === 'ref') {
			if (value !== undefined) {
				ref = value;
			}

			continue;
		}

		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = value;
		}
	}

	return ReactElement(type, key, ref, props);
};
